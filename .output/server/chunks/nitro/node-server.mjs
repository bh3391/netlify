globalThis._importMeta_=globalThis._importMeta_||{url:"file:///_entry.js",env:process.env};import 'node-fetch-native/polyfill';
import { Server as Server$1 } from 'node:http';
import { Server } from 'node:https';
import destr from 'destr';
import { defineEventHandler, handleCacheHeaders, createEvent, eventHandler, setHeaders, sendRedirect, proxyRequest, getRequestHeader, getRequestHeaders, setResponseHeader, createError, lazyEventHandler, setHeader, createApp, createRouter as createRouter$1, toNodeListener, fetchWithEvent } from 'h3';
import { createFetch as createFetch$1, Headers } from 'ofetch';
import { createCall, createFetch } from 'unenv/runtime/fetch/index';
import { createHooks } from 'hookable';
import { snakeCase } from 'scule';
import { hash } from 'ohash';
import { parseURL, withoutBase, joinURL, withQuery, withLeadingSlash, withoutTrailingSlash } from 'ufo';
import { createStorage } from 'unstorage';
import defu from 'defu';
import { toRouteMatcher, createRouter } from 'radix3';
import { promises } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'pathe';
import { createIPX, createIPXMiddleware } from 'ipx';

const _runtimeConfig = {"app":{"baseURL":"/","buildAssetsDir":"/_nuxt/","cdnURL":""},"nitro":{"envPrefix":"NUXT_","routeRules":{"/__nuxt_error":{"cache":false},"/custom-robots":{"robots":"index, follow"},"/_nuxt/**":{"headers":{"cache-control":"public, max-age=2592000, immutable"}}}},"public":{"trailingSlash":false,"titleSeparator":"|","siteName":"Lovina Dolphin Tours","siteUrl":"https://lovinadolphintours.com","siteDescription":"Lovina Ocean Tour is a popular tour operator located in Lovina Beach, Bali, known for its scenic boat tours and water activities. you can enjoy dolphin watching, snorkeling, and diving in the crystal clear waters of the Bali Sea while taking in the breathtaking views of the surrounding coastline. The tour provides a memorable experience for travelers seeking adventure and relaxation in a beautiful tropical setting.","language":"en","nuxt-unhead":{"seoOptimise":true,"resolveAliases":false}},"indexable":true,"ipx":{"dir":"","maxAge":"","domains":[],"sharp":{},"alias":{}}};
const ENV_PREFIX = "NITRO_";
const ENV_PREFIX_ALT = _runtimeConfig.nitro.envPrefix ?? process.env.NITRO_ENV_PREFIX ?? "_";
const getEnv = (key) => {
  const envKey = snakeCase(key).toUpperCase();
  return destr(
    process.env[ENV_PREFIX + envKey] ?? process.env[ENV_PREFIX_ALT + envKey]
  );
};
function isObject(input) {
  return typeof input === "object" && !Array.isArray(input);
}
function overrideConfig(obj, parentKey = "") {
  for (const key in obj) {
    const subKey = parentKey ? `${parentKey}_${key}` : key;
    const envValue = getEnv(subKey);
    if (isObject(obj[key])) {
      if (isObject(envValue)) {
        obj[key] = { ...obj[key], ...envValue };
      }
      overrideConfig(obj[key], subKey);
    } else {
      obj[key] = envValue ?? obj[key];
    }
  }
}
overrideConfig(_runtimeConfig);
const config$1 = deepFreeze(_runtimeConfig);
const useRuntimeConfig = () => config$1;
function deepFreeze(object) {
  const propNames = Object.getOwnPropertyNames(object);
  for (const name of propNames) {
    const value = object[name];
    if (value && typeof value === "object") {
      deepFreeze(value);
    }
  }
  return Object.freeze(object);
}

const _assets = {

};

function normalizeKey(key) {
  if (!key) {
    return "";
  }
  return key.split("?")[0].replace(/[/\\]/g, ":").replace(/:+/g, ":").replace(/^:|:$/g, "");
}

const assets$1 = {
  getKeys() {
    return Promise.resolve(Object.keys(_assets))
  },
  hasItem (id) {
    id = normalizeKey(id);
    return Promise.resolve(id in _assets)
  },
  getItem (id) {
    id = normalizeKey(id);
    return Promise.resolve(_assets[id] ? _assets[id].import() : null)
  },
  getMeta (id) {
    id = normalizeKey(id);
    return Promise.resolve(_assets[id] ? _assets[id].meta : {})
  }
};

const storage = createStorage({});

const useStorage = () => storage;

storage.mount('/assets', assets$1);

const defaultCacheOptions = {
  name: "_",
  base: "/cache",
  swr: true,
  maxAge: 1
};
function defineCachedFunction(fn, opts) {
  opts = { ...defaultCacheOptions, ...opts };
  const pending = {};
  const group = opts.group || "nitro";
  const name = opts.name || fn.name || "_";
  const integrity = hash([opts.integrity, fn, opts]);
  const validate = opts.validate || (() => true);
  async function get(key, resolver, shouldInvalidateCache) {
    const cacheKey = [opts.base, group, name, key + ".json"].filter(Boolean).join(":").replace(/:\/$/, ":index");
    const entry = await useStorage().getItem(cacheKey) || {};
    const ttl = (opts.maxAge ?? opts.maxAge ?? 0) * 1e3;
    if (ttl) {
      entry.expires = Date.now() + ttl;
    }
    const expired = shouldInvalidateCache || entry.integrity !== integrity || ttl && Date.now() - (entry.mtime || 0) > ttl || !validate(entry);
    const _resolve = async () => {
      const isPending = pending[key];
      if (!isPending) {
        if (entry.value !== void 0 && (opts.staleMaxAge || 0) >= 0) {
          entry.value = void 0;
          entry.integrity = void 0;
          entry.mtime = void 0;
          entry.expires = void 0;
        }
        pending[key] = Promise.resolve(resolver());
      }
      entry.value = await pending[key];
      if (!isPending) {
        entry.mtime = Date.now();
        entry.integrity = integrity;
        delete pending[key];
        if (validate(entry)) {
          useStorage().setItem(cacheKey, entry).catch((error) => console.error("[nitro] [cache]", error));
        }
      }
    };
    const _resolvePromise = expired ? _resolve() : Promise.resolve();
    if (opts.swr && entry.value) {
      _resolvePromise.catch(console.error);
      return entry;
    }
    return _resolvePromise.then(() => entry);
  }
  return async (...args) => {
    const shouldBypassCache = opts.shouldBypassCache?.(...args);
    if (shouldBypassCache) {
      return fn(...args);
    }
    const key = await (opts.getKey || getKey)(...args);
    const shouldInvalidateCache = opts.shouldInvalidateCache?.(...args);
    const entry = await get(key, () => fn(...args), shouldInvalidateCache);
    let value = entry.value;
    if (opts.transform) {
      value = await opts.transform(entry, ...args) || value;
    }
    return value;
  };
}
const cachedFunction = defineCachedFunction;
function getKey(...args) {
  return args.length > 0 ? hash(args, {}) : "";
}
function escapeKey(key) {
  return key.replace(/[^\dA-Za-z]/g, "");
}
function defineCachedEventHandler(handler, opts = defaultCacheOptions) {
  const _opts = {
    ...opts,
    getKey: async (event) => {
      const key = await opts.getKey?.(event);
      if (key) {
        return escapeKey(key);
      }
      const url = event.node.req.originalUrl || event.node.req.url;
      const friendlyName = escapeKey(decodeURI(parseURL(url).pathname)).slice(
        0,
        16
      );
      const urlHash = hash(url);
      return `${friendlyName}.${urlHash}`;
    },
    validate: (entry) => {
      if (entry.value.code >= 400) {
        return false;
      }
      if (entry.value.body === void 0) {
        return false;
      }
      return true;
    },
    group: opts.group || "nitro/handlers",
    integrity: [opts.integrity, handler]
  };
  const _cachedHandler = cachedFunction(
    async (incomingEvent) => {
      const reqProxy = cloneWithProxy(incomingEvent.node.req, { headers: {} });
      const resHeaders = {};
      let _resSendBody;
      const resProxy = cloneWithProxy(incomingEvent.node.res, {
        statusCode: 200,
        getHeader(name) {
          return resHeaders[name];
        },
        setHeader(name, value) {
          resHeaders[name] = value;
          return this;
        },
        getHeaderNames() {
          return Object.keys(resHeaders);
        },
        hasHeader(name) {
          return name in resHeaders;
        },
        removeHeader(name) {
          delete resHeaders[name];
        },
        getHeaders() {
          return resHeaders;
        },
        end(chunk, arg2, arg3) {
          if (typeof chunk === "string") {
            _resSendBody = chunk;
          }
          if (typeof arg2 === "function") {
            arg2();
          }
          if (typeof arg3 === "function") {
            arg3();
          }
          return this;
        },
        write(chunk, arg2, arg3) {
          if (typeof chunk === "string") {
            _resSendBody = chunk;
          }
          if (typeof arg2 === "function") {
            arg2();
          }
          if (typeof arg3 === "function") {
            arg3();
          }
          return this;
        },
        writeHead(statusCode, headers2) {
          this.statusCode = statusCode;
          if (headers2) {
            for (const header in headers2) {
              this.setHeader(header, headers2[header]);
            }
          }
          return this;
        }
      });
      const event = createEvent(reqProxy, resProxy);
      event.context = incomingEvent.context;
      const body = await handler(event) || _resSendBody;
      const headers = event.node.res.getHeaders();
      headers.etag = headers.Etag || headers.etag || `W/"${hash(body)}"`;
      headers["last-modified"] = headers["Last-Modified"] || headers["last-modified"] || (/* @__PURE__ */ new Date()).toUTCString();
      const cacheControl = [];
      if (opts.swr) {
        if (opts.maxAge) {
          cacheControl.push(`s-maxage=${opts.maxAge}`);
        }
        if (opts.staleMaxAge) {
          cacheControl.push(`stale-while-revalidate=${opts.staleMaxAge}`);
        } else {
          cacheControl.push("stale-while-revalidate");
        }
      } else if (opts.maxAge) {
        cacheControl.push(`max-age=${opts.maxAge}`);
      }
      if (cacheControl.length > 0) {
        headers["cache-control"] = cacheControl.join(", ");
      }
      const cacheEntry = {
        code: event.node.res.statusCode,
        headers,
        body
      };
      return cacheEntry;
    },
    _opts
  );
  return defineEventHandler(async (event) => {
    if (opts.headersOnly) {
      if (handleCacheHeaders(event, { maxAge: opts.maxAge })) {
        return;
      }
      return handler(event);
    }
    const response = await _cachedHandler(event);
    if (event.node.res.headersSent || event.node.res.writableEnded) {
      return response.body;
    }
    if (handleCacheHeaders(event, {
      modifiedTime: new Date(response.headers["last-modified"]),
      etag: response.headers.etag,
      maxAge: opts.maxAge
    })) {
      return;
    }
    event.node.res.statusCode = response.code;
    for (const name in response.headers) {
      event.node.res.setHeader(name, response.headers[name]);
    }
    return response.body;
  });
}
function cloneWithProxy(obj, overrides) {
  return new Proxy(obj, {
    get(target, property, receiver) {
      if (property in overrides) {
        return overrides[property];
      }
      return Reflect.get(target, property, receiver);
    },
    set(target, property, value, receiver) {
      if (property in overrides) {
        overrides[property] = value;
        return true;
      }
      return Reflect.set(target, property, value, receiver);
    }
  });
}
const cachedEventHandler = defineCachedEventHandler;

const config = useRuntimeConfig();
const _routeRulesMatcher = toRouteMatcher(
  createRouter({ routes: config.nitro.routeRules })
);
function createRouteRulesHandler() {
  return eventHandler((event) => {
    const routeRules = getRouteRules(event);
    if (routeRules.headers) {
      setHeaders(event, routeRules.headers);
    }
    if (routeRules.redirect) {
      return sendRedirect(
        event,
        routeRules.redirect.to,
        routeRules.redirect.statusCode
      );
    }
    if (routeRules.proxy) {
      let target = routeRules.proxy.to;
      if (target.endsWith("/**")) {
        let targetPath = event.path;
        const strpBase = routeRules.proxy._proxyStripBase;
        if (strpBase) {
          targetPath = withoutBase(targetPath, strpBase);
        }
        target = joinURL(target.slice(0, -3), targetPath);
      }
      return proxyRequest(event, target, {
        fetch: $fetch.raw,
        ...routeRules.proxy
      });
    }
  });
}
function getRouteRules(event) {
  event.context._nitro = event.context._nitro || {};
  if (!event.context._nitro.routeRules) {
    const path = new URL(event.node.req.url, "http://localhost").pathname;
    event.context._nitro.routeRules = getRouteRulesForPath(
      withoutBase(path, useRuntimeConfig().app.baseURL)
    );
  }
  return event.context._nitro.routeRules;
}
function getRouteRulesForPath(path) {
  return defu({}, ..._routeRulesMatcher.matchAll(path).reverse());
}

const plugins = [
  
];

function hasReqHeader(event, name, includes) {
  const value = getRequestHeader(event, name);
  return value && typeof value === "string" && value.toLowerCase().includes(includes);
}
function isJsonRequest(event) {
  return hasReqHeader(event, "accept", "application/json") || hasReqHeader(event, "user-agent", "curl/") || hasReqHeader(event, "user-agent", "httpie/") || hasReqHeader(event, "sec-fetch-mode", "cors") || event.path.startsWith("/api/") || event.path.endsWith(".json");
}
function normalizeError(error) {
  const cwd = typeof process.cwd === "function" ? process.cwd() : "/";
  const stack = (error.stack || "").split("\n").splice(1).filter((line) => line.includes("at ")).map((line) => {
    const text = line.replace(cwd + "/", "./").replace("webpack:/", "").replace("file://", "").trim();
    return {
      text,
      internal: line.includes("node_modules") && !line.includes(".cache") || line.includes("internal") || line.includes("new Promise")
    };
  });
  const statusCode = error.statusCode || 500;
  const statusMessage = error.statusMessage ?? (statusCode === 404 ? "Not Found" : "");
  const message = error.message || error.toString();
  return {
    stack,
    statusCode,
    statusMessage,
    message
  };
}

const errorHandler = (async function errorhandler(error, event) {
  const { stack, statusCode, statusMessage, message } = normalizeError(error);
  const errorObject = {
    url: event.node.req.url,
    statusCode,
    statusMessage,
    message,
    stack: "",
    data: error.data
  };
  event.node.res.statusCode = errorObject.statusCode !== 200 && errorObject.statusCode || 500;
  if (errorObject.statusMessage) {
    event.node.res.statusMessage = errorObject.statusMessage;
  }
  if (error.unhandled || error.fatal) {
    const tags = [
      "[nuxt]",
      "[request error]",
      error.unhandled && "[unhandled]",
      error.fatal && "[fatal]",
      Number(errorObject.statusCode) !== 200 && `[${errorObject.statusCode}]`
    ].filter(Boolean).join(" ");
    console.error(tags, errorObject.message + "\n" + stack.map((l) => "  " + l.text).join("  \n"));
  }
  if (isJsonRequest(event)) {
    event.node.res.setHeader("Content-Type", "application/json");
    event.node.res.end(JSON.stringify(errorObject));
    return;
  }
  const isErrorPage = event.node.req.url?.startsWith("/__nuxt_error");
  const res = !isErrorPage ? await useNitroApp().localFetch(withQuery(joinURL(useRuntimeConfig().app.baseURL, "/__nuxt_error"), errorObject), {
    headers: getRequestHeaders(event),
    redirect: "manual"
  }).catch(() => null) : null;
  if (!res) {
    const { template } = await import('../error-500.mjs');
    event.node.res.setHeader("Content-Type", "text/html;charset=UTF-8");
    event.node.res.end(template(errorObject));
    return;
  }
  for (const [header, value] of res.headers.entries()) {
    setResponseHeader(event, header, value);
  }
  if (res.status && res.status !== 200) {
    event.node.res.statusCode = res.status;
  }
  if (res.statusText) {
    event.node.res.statusMessage = res.statusText;
  }
  event.node.res.end(await res.text());
});

const assets = {
  "/1.webp": {
    "type": "image/webp",
    "etag": "\"b2fe-eX+rBjBw5ztPm7OY3qqy2l623Vc\"",
    "mtime": "2023-04-28T16:50:16.485Z",
    "size": 45822,
    "path": "../public/1.webp"
  },
  "/2.svg": {
    "type": "image/svg+xml",
    "etag": "\"158a4-5fSmfUMzR08wQrBDRHKtLIluEJc\"",
    "mtime": "2023-04-28T16:50:16.484Z",
    "size": 88228,
    "path": "../public/2.svg"
  },
  "/2.webp": {
    "type": "image/webp",
    "etag": "\"74ec-grEDOa4i//+goozalFn86SuYoK8\"",
    "mtime": "2023-04-28T16:50:16.483Z",
    "size": 29932,
    "path": "../public/2.webp"
  },
  "/3.webp": {
    "type": "image/webp",
    "etag": "\"8042-NufNaOOXZN9S3t37V5ZkLtrlQIc\"",
    "mtime": "2023-04-28T16:50:16.482Z",
    "size": 32834,
    "path": "../public/3.webp"
  },
  "/3.webp.webp": {
    "type": "image/webp",
    "etag": "\"e132-F4l32xbIOFEY5MoyDq6Oxf9dEKg\"",
    "mtime": "2023-04-28T16:50:16.481Z",
    "size": 57650,
    "path": "../public/3.webp.webp"
  },
  "/4.webp": {
    "type": "image/webp",
    "etag": "\"10184-C3XwPEp5DzcDgbTnx0h+8hE9O/4\"",
    "mtime": "2023-04-28T16:50:16.480Z",
    "size": 65924,
    "path": "../public/4.webp"
  },
  "/5.webp": {
    "type": "image/webp",
    "etag": "\"384e-Ikc/ZgD2tAFrMiwHDatMiypykU4\"",
    "mtime": "2023-04-28T16:50:16.479Z",
    "size": 14414,
    "path": "../public/5.webp"
  },
  "/6.webp": {
    "type": "image/webp",
    "etag": "\"4f948-QAcydFclKpDbH1HR0zhGwPtPDfY\"",
    "mtime": "2023-04-28T16:50:16.477Z",
    "size": 325960,
    "path": "../public/6.webp"
  },
  "/banner.webp": {
    "type": "image/webp",
    "etag": "\"2b494-URvJ0PI6iPPOu7emkpkcszMGOjU\"",
    "mtime": "2023-04-28T16:50:16.437Z",
    "size": 177300,
    "path": "../public/banner.webp"
  },
  "/bca.svg": {
    "type": "image/svg+xml",
    "etag": "\"2787e-bs7Cbk7MtaiZDKVQf4LpN1FlEm0\"",
    "mtime": "2023-04-28T16:50:16.422Z",
    "size": 161918,
    "path": "../public/bca.svg"
  },
  "/booknow1.svg": {
    "type": "image/svg+xml",
    "etag": "\"6403-ZG1WIFB3M8PC6VNxO7xWaysX0N8\"",
    "mtime": "2023-04-28T16:50:16.421Z",
    "size": 25603,
    "path": "../public/booknow1.svg"
  },
  "/dolphin1.webp": {
    "type": "image/webp",
    "etag": "\"1bdd0-6vBR8AmNEmoSSMtKk54eSoWCsVM\"",
    "mtime": "2023-04-28T16:50:16.421Z",
    "size": 114128,
    "path": "../public/dolphin1.webp"
  },
  "/dolphin2.webp": {
    "type": "image/webp",
    "etag": "\"7908-1UyXFSaIwfxLYgkmRR3fdbVdPkE\"",
    "mtime": "2023-04-28T16:50:16.420Z",
    "size": 30984,
    "path": "../public/dolphin2.webp"
  },
  "/dolphin3.webp": {
    "type": "image/webp",
    "etag": "\"51d4-MxZ+VrmtJu/QGVA7EDJ53LKaQxo\"",
    "mtime": "2023-04-28T16:50:16.420Z",
    "size": 20948,
    "path": "../public/dolphin3.webp"
  },
  "/favicon.ico": {
    "type": "image/vnd.microsoft.icon",
    "etag": "\"10be-IhhVsx0NNktjZRhKyM9E+x2TfDY\"",
    "mtime": "2023-04-28T16:50:16.420Z",
    "size": 4286,
    "path": "../public/favicon.ico"
  },
  "/fish1.webp": {
    "type": "image/webp",
    "etag": "\"9a6c-AdGEIvHG/Eb6c6LXhJvIz4SxmPc\"",
    "mtime": "2023-04-28T16:50:16.419Z",
    "size": 39532,
    "path": "../public/fish1.webp"
  },
  "/fish2.webp": {
    "type": "image/webp",
    "etag": "\"9484-kbIqy4S8pcTEARPRMiqsbNr2eZQ\"",
    "mtime": "2023-04-28T16:50:16.419Z",
    "size": 38020,
    "path": "../public/fish2.webp"
  },
  "/fish3.webp": {
    "type": "image/webp",
    "etag": "\"67a4-8LubSwk9JJUC9HHjsSHFcQyFZwI\"",
    "mtime": "2023-04-28T16:50:16.418Z",
    "size": 26532,
    "path": "../public/fish3.webp"
  },
  "/g1.webp": {
    "type": "image/webp",
    "etag": "\"517c-jdizr4N7biXfBh6sUlyTW0sW5Ec\"",
    "mtime": "2023-04-28T16:50:16.418Z",
    "size": 20860,
    "path": "../public/g1.webp"
  },
  "/g2.webp": {
    "type": "image/webp",
    "etag": "\"10974-jUdoDiDk1530nq+SZzjeDYyt34k\"",
    "mtime": "2023-04-28T16:50:16.418Z",
    "size": 67956,
    "path": "../public/g2.webp"
  },
  "/g3.webp": {
    "type": "image/webp",
    "etag": "\"f62c-J3mv/d/Bn1M5s0q3v/3fc4JaGeE\"",
    "mtime": "2023-04-28T16:50:16.417Z",
    "size": 63020,
    "path": "../public/g3.webp"
  },
  "/g4.webp": {
    "type": "image/webp",
    "etag": "\"982c-RWSPwsJ47kyEW5ba89UHEV2MQgw\"",
    "mtime": "2023-04-28T16:50:16.417Z",
    "size": 38956,
    "path": "../public/g4.webp"
  },
  "/g5.webp": {
    "type": "image/webp",
    "etag": "\"c2b8-nKLqcFpQg1UdcvhtoBgDw/2+RcI\"",
    "mtime": "2023-04-28T16:50:16.416Z",
    "size": 49848,
    "path": "../public/g5.webp"
  },
  "/g6.webp": {
    "type": "image/webp",
    "etag": "\"c1c4-fKG+mxcX3lVQTyxVj0ubbrAGHpw\"",
    "mtime": "2023-04-28T16:50:16.416Z",
    "size": 49604,
    "path": "../public/g6.webp"
  },
  "/g7.webp": {
    "type": "image/webp",
    "etag": "\"18aba-9f/Dtk4DUshozCjTZnbbgzQFZ9w\"",
    "mtime": "2023-04-28T16:50:16.415Z",
    "size": 101050,
    "path": "../public/g7.webp"
  },
  "/g8.webp": {
    "type": "image/webp",
    "etag": "\"17394-iRTsoCjgyP0zw0U12+/bywPXaHs\"",
    "mtime": "2023-04-28T16:50:16.414Z",
    "size": 95124,
    "path": "../public/g8.webp"
  },
  "/g9.webp": {
    "type": "image/webp",
    "etag": "\"11fa0-dh4FAe2YMSSwt7f7cmOcdzXHpYA\"",
    "mtime": "2023-04-28T16:50:16.413Z",
    "size": 73632,
    "path": "../public/g9.webp"
  },
  "/index.html": {
    "type": "text/html; charset=utf-8",
    "etag": "\"a25b-LnuYKBqbj//Bfpibs7PiIfIZ0I4\"",
    "mtime": "2023-04-28T16:50:24.575Z",
    "size": 41563,
    "path": "../public/index.html"
  },
  "/inter-latin-ext-400-normal.woff": {
    "type": "font/woff",
    "etag": "\"abcc-ScgUlgU6NMSchk9cXQMUZeQG8fc\"",
    "mtime": "2023-04-28T16:50:16.491Z",
    "size": 43980,
    "path": "../public/inter-latin-ext-400-normal.woff"
  },
  "/inter-latin-ext-700-normal.woff": {
    "type": "font/woff",
    "etag": "\"bb34-btkmYi1MS9GkMFR4+gGPWRFxwKU\"",
    "mtime": "2023-04-28T16:50:16.491Z",
    "size": 47924,
    "path": "../public/inter-latin-ext-700-normal.woff"
  },
  "/kadek.webp": {
    "type": "image/webp",
    "etag": "\"393c-lzRjZvw5hM+mv5NXdvHwTcyQsqA\"",
    "mtime": "2023-04-28T16:50:16.413Z",
    "size": 14652,
    "path": "../public/kadek.webp"
  },
  "/robots.txt": {
    "type": "text/plain; charset=utf-8",
    "etag": "\"42-zOtw+zIBIb4DFZljXh/q7t0SHH8\"",
    "mtime": "2023-04-28T16:50:24.589Z",
    "size": 66,
    "path": "../public/robots.txt"
  },
  "/sitemap.xml": {
    "type": "application/xml",
    "etag": "\"2eb-Uho6mPArY7mXwSKbopeB8OTQa1A\"",
    "mtime": "2023-04-28T16:50:27.814Z",
    "size": 747,
    "path": "../public/sitemap.xml"
  },
  "/snorkling1.webp": {
    "type": "image/webp",
    "etag": "\"86ba-fMFqH4fKcIFcSROzZeGPNIiCfxM\"",
    "mtime": "2023-04-28T16:50:16.411Z",
    "size": 34490,
    "path": "../public/snorkling1.webp"
  },
  "/snorkling2.webp": {
    "type": "image/webp",
    "etag": "\"c800-PMbYrA8sU/2mr1o6pUZWgW2KLjw\"",
    "mtime": "2023-04-28T16:50:16.409Z",
    "size": 51200,
    "path": "../public/snorkling2.webp"
  },
  "/snorkling3.webp": {
    "type": "image/webp",
    "etag": "\"b32e-/iCJKmF3Ym0PdTIC/DsBMmbNTrQ\"",
    "mtime": "2023-04-28T16:50:16.407Z",
    "size": 45870,
    "path": "../public/snorkling3.webp"
  },
  "/snorkling4.webp": {
    "type": "image/webp",
    "etag": "\"9178-qTzKnTqsm5xzS6gjw5txXIwetbE\"",
    "mtime": "2023-04-28T16:50:16.405Z",
    "size": 37240,
    "path": "../public/snorkling4.webp"
  },
  "/svg2png.wasm": {
    "type": "application/wasm",
    "etag": "\"1bf667-JsF09mJVeSqlxzPPOrdAtUEgwrc\"",
    "mtime": "2023-04-28T16:50:16.490Z",
    "size": 1832551,
    "path": "../public/svg2png.wasm"
  },
  "/swim1.webp": {
    "type": "image/webp",
    "etag": "\"4b76-xEcrazndkVsO09Kmhxxv2yxdGdo\"",
    "mtime": "2023-04-28T16:50:16.404Z",
    "size": 19318,
    "path": "../public/swim1.webp"
  },
  "/swim2.webp": {
    "type": "image/webp",
    "etag": "\"6e3c-ww8PdVkWGubOpg7vvOKCyCi6gIA\"",
    "mtime": "2023-04-28T16:50:16.403Z",
    "size": 28220,
    "path": "../public/swim2.webp"
  },
  "/swim3.webp": {
    "type": "image/webp",
    "etag": "\"7590-5vru23wyKazDHH84RU/2uY9El6A\"",
    "mtime": "2023-04-28T16:50:16.402Z",
    "size": 30096,
    "path": "../public/swim3.webp"
  },
  "/taps.svg": {
    "type": "image/svg+xml",
    "etag": "\"1cb1d-eKLabW3J8kf3u+kDF/jrH68Y9tA\"",
    "mtime": "2023-04-28T16:50:16.401Z",
    "size": 117533,
    "path": "../public/taps.svg"
  },
  "/transport.webp": {
    "type": "image/webp",
    "etag": "\"c4ac-nodG1M/wBOWHtjUCrE1KxsjdmDE\"",
    "mtime": "2023-04-28T16:50:16.400Z",
    "size": 50348,
    "path": "../public/transport.webp"
  },
  "/tripadvisor.svg": {
    "type": "image/svg+xml",
    "etag": "\"eb5-RAbfQH2Lkt6mj3gD9mTw9928Cks\"",
    "mtime": "2023-04-28T16:50:16.399Z",
    "size": 3765,
    "path": "../public/tripadvisor.svg"
  },
  "/yoga.wasm": {
    "type": "application/wasm",
    "etag": "\"15a52-70hm7K4ZL9h3JwZ88sDAz5+4sCA\"",
    "mtime": "2023-04-28T16:50:16.489Z",
    "size": 88658,
    "path": "../public/yoga.wasm"
  },
  "/about/index.html": {
    "type": "text/html; charset=utf-8",
    "etag": "\"45ad-wCrfGdImZx2qoRjiRp73nE/0zCo\"",
    "mtime": "2023-04-28T16:50:24.675Z",
    "size": 17837,
    "path": "../public/about/index.html"
  },
  "/contact/index.html": {
    "type": "text/html; charset=utf-8",
    "etag": "\"384e-ucgoW5FZqpiEZ/L6PaIVw92ANKE\"",
    "mtime": "2023-04-28T16:50:24.864Z",
    "size": 14414,
    "path": "../public/contact/index.html"
  },
  "/_nuxt/Poppins-400-1.478b3ab7.woff2": {
    "type": "font/woff2",
    "etag": "\"9a8c-QeVlUMyPGaf2XBYEFlju2/iIzJg\"",
    "mtime": "2023-04-28T16:50:16.397Z",
    "size": 39564,
    "path": "../public/_nuxt/Poppins-400-1.478b3ab7.woff2"
  },
  "/_nuxt/Poppins-400-2.cb8bdeab.woff2": {
    "type": "font/woff2",
    "etag": "\"15a8-Za8qA3pe+KjTg9UYN36h+faDdjE\"",
    "mtime": "2023-04-28T16:50:16.395Z",
    "size": 5544,
    "path": "../public/_nuxt/Poppins-400-2.cb8bdeab.woff2"
  },
  "/_nuxt/Poppins-400-3.7d93459d.woff2": {
    "type": "font/woff2",
    "etag": "\"1ecc-rG1xtNX90rPavJoG/2wAHkJR2gs\"",
    "mtime": "2023-04-28T16:50:16.394Z",
    "size": 7884,
    "path": "../public/_nuxt/Poppins-400-3.7d93459d.woff2"
  },
  "/_nuxt/Roboto-400-10.f6734f81.woff2": {
    "type": "font/woff2",
    "etag": "\"3d80-fKnFln87uL/+qyS2ObScHn0D+lI\"",
    "mtime": "2023-04-28T16:50:16.393Z",
    "size": 15744,
    "path": "../public/_nuxt/Roboto-400-10.f6734f81.woff2"
  },
  "/_nuxt/Roboto-400-4.b7ef2cd1.woff2": {
    "type": "font/woff2",
    "etag": "\"3bf0-3SKkH6IexKSo0p/Tadm+6RnLmKw\"",
    "mtime": "2023-04-28T16:50:16.375Z",
    "size": 15344,
    "path": "../public/_nuxt/Roboto-400-4.b7ef2cd1.woff2"
  },
  "/_nuxt/Roboto-400-5.495d38d4.woff2": {
    "type": "font/woff2",
    "etag": "\"259c-ESovxfT/m4XuOnBvqbjEf3mwWTM\"",
    "mtime": "2023-04-28T16:50:16.372Z",
    "size": 9628,
    "path": "../public/_nuxt/Roboto-400-5.495d38d4.woff2"
  },
  "/_nuxt/Roboto-400-7.daf51ab5.woff2": {
    "type": "font/woff2",
    "etag": "\"1bc8-fPvEFcRbInSlmXJV++wPtTu+Mn0\"",
    "mtime": "2023-04-28T16:50:16.371Z",
    "size": 7112,
    "path": "../public/_nuxt/Roboto-400-7.daf51ab5.woff2"
  },
  "/_nuxt/Roboto-400-8.77b24796.woff2": {
    "type": "font/woff2",
    "etag": "\"15b8-EJzUxUNb1mFDkbuHIsR8KHyWsuw\"",
    "mtime": "2023-04-28T16:50:16.369Z",
    "size": 5560,
    "path": "../public/_nuxt/Roboto-400-8.77b24796.woff2"
  },
  "/_nuxt/Roboto-400-9.3c23eb02.woff2": {
    "type": "font/woff2",
    "etag": "\"2e60-t0NUh3DEbZBa4boGMQvAAcWH/o4\"",
    "mtime": "2023-04-28T16:50:16.367Z",
    "size": 11872,
    "path": "../public/_nuxt/Roboto-400-9.3c23eb02.woff2"
  },
  "/_nuxt/about.43d11002.js": {
    "type": "application/javascript",
    "etag": "\"1b6-h9jgJXUJf68sAbfa/8N3W9YUQb4\"",
    "mtime": "2023-04-28T16:50:16.365Z",
    "size": 438,
    "path": "../public/_nuxt/about.43d11002.js"
  },
  "/_nuxt/advantage.46e04979.js": {
    "type": "application/javascript",
    "etag": "\"e93-Ftu3KKx+ohR5Sb4zGls6oCdVpAs\"",
    "mtime": "2023-04-28T16:50:16.364Z",
    "size": 3731,
    "path": "../public/_nuxt/advantage.46e04979.js"
  },
  "/_nuxt/composables.22d044d1.js": {
    "type": "application/javascript",
    "etag": "\"61-dK9E7vh9EfzkckxApZDIbAvuAwo\"",
    "mtime": "2023-04-28T16:50:16.353Z",
    "size": 97,
    "path": "../public/_nuxt/composables.22d044d1.js"
  },
  "/_nuxt/contact.d6f1b439.js": {
    "type": "application/javascript",
    "etag": "\"113-RPxuBqFIJWR/eqkiLeKs5rxlaoc\"",
    "mtime": "2023-04-28T16:50:16.352Z",
    "size": 275,
    "path": "../public/_nuxt/contact.d6f1b439.js"
  },
  "/_nuxt/contact.e612ea6b.js": {
    "type": "application/javascript",
    "etag": "\"d85-rvaqnhBQxBj6BNFataAsMsPOKeQ\"",
    "mtime": "2023-04-28T16:50:16.351Z",
    "size": 3461,
    "path": "../public/_nuxt/contact.e612ea6b.js"
  },
  "/_nuxt/default.2a63ff5c.js": {
    "type": "application/javascript",
    "etag": "\"27f2-Ewka0dQzgICufWz0rkXGtgSqP2k\"",
    "mtime": "2023-04-28T16:50:16.333Z",
    "size": 10226,
    "path": "../public/_nuxt/default.2a63ff5c.js"
  },
  "/_nuxt/entry.c97db068.js": {
    "type": "application/javascript",
    "etag": "\"2213c-oe3MC9z6rSlTsEkikcwuHujqaqI\"",
    "mtime": "2023-04-28T16:50:16.332Z",
    "size": 139580,
    "path": "../public/_nuxt/entry.c97db068.js"
  },
  "/_nuxt/entry.fb82d9a9.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"bd45-sQa+IhxEwU24U9cZtvGqETRILsw\"",
    "mtime": "2023-04-28T16:50:16.330Z",
    "size": 48453,
    "path": "../public/_nuxt/entry.fb82d9a9.css"
  },
  "/_nuxt/error-404.3e970923.js": {
    "type": "application/javascript",
    "etag": "\"8f9-eySUvPQZAOtA/VcArF2rNLUAw9M\"",
    "mtime": "2023-04-28T16:50:16.327Z",
    "size": 2297,
    "path": "../public/_nuxt/error-404.3e970923.js"
  },
  "/_nuxt/error-404.8bdbaeb8.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"e70-jl7r/kE1FF0H+CLPNh+07RJXuFI\"",
    "mtime": "2023-04-28T16:50:16.325Z",
    "size": 3696,
    "path": "../public/_nuxt/error-404.8bdbaeb8.css"
  },
  "/_nuxt/error-500.b32e3c57.js": {
    "type": "application/javascript",
    "etag": "\"77d-49nS8pSR6VVZVSY2gxH1TODWXtA\"",
    "mtime": "2023-04-28T16:50:16.324Z",
    "size": 1917,
    "path": "../public/_nuxt/error-500.b32e3c57.js"
  },
  "/_nuxt/error-500.b63a96f5.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"7e0-loEWA9n4Kq4UMBzJyT6hY9SSl00\"",
    "mtime": "2023-04-28T16:50:16.323Z",
    "size": 2016,
    "path": "../public/_nuxt/error-500.b63a96f5.css"
  },
  "/_nuxt/error-component.b9ef6575.js": {
    "type": "application/javascript",
    "etag": "\"4b0-eheNf/e5skWQ98j97eN7HkEr9A4\"",
    "mtime": "2023-04-28T16:50:16.323Z",
    "size": 1200,
    "path": "../public/_nuxt/error-component.b9ef6575.js"
  },
  "/_nuxt/gallery.eafbbc27.js": {
    "type": "application/javascript",
    "etag": "\"79b-/YIxGLzg0FtyN8gzD7NgS0vk54o\"",
    "mtime": "2023-04-28T16:50:16.322Z",
    "size": 1947,
    "path": "../public/_nuxt/gallery.eafbbc27.js"
  },
  "/_nuxt/index.d10f75c4.js": {
    "type": "application/javascript",
    "etag": "\"1251-YNSdKzC2mwr09rClretxa3nebrw\"",
    "mtime": "2023-04-28T16:50:16.321Z",
    "size": 4689,
    "path": "../public/_nuxt/index.d10f75c4.js"
  },
  "/_nuxt/index.f7fcea95.js": {
    "type": "application/javascript",
    "etag": "\"52c-PnsT78nIFc6Fgv54Eoh9FUPcbm0\"",
    "mtime": "2023-04-28T16:50:16.321Z",
    "size": 1324,
    "path": "../public/_nuxt/index.f7fcea95.js"
  },
  "/_nuxt/lovina.a35db743.js": {
    "type": "application/javascript",
    "etag": "\"1199-V+N4IjncjZU2E2XMuW3mrfF5QoM\"",
    "mtime": "2023-04-28T16:50:16.319Z",
    "size": 4505,
    "path": "../public/_nuxt/lovina.a35db743.js"
  },
  "/_nuxt/map.38a419e7.js": {
    "type": "application/javascript",
    "etag": "\"2e7-X81tyQoihm6Cz1kNGg24bbM9hAo\"",
    "mtime": "2023-04-28T16:50:16.303Z",
    "size": 743,
    "path": "../public/_nuxt/map.38a419e7.js"
  },
  "/_nuxt/nuxt-img.1151ed7f.js": {
    "type": "application/javascript",
    "etag": "\"abb-nj+BtaMSBgXzhAffJXtvWdKLYkA\"",
    "mtime": "2023-04-28T16:50:16.302Z",
    "size": 2747,
    "path": "../public/_nuxt/nuxt-img.1151ed7f.js"
  },
  "/_nuxt/nuxt-link.dc11f034.js": {
    "type": "application/javascript",
    "etag": "\"f42-Zq60eSAxptW0oYRsM8pEfsEtMmE\"",
    "mtime": "2023-04-28T16:50:16.300Z",
    "size": 3906,
    "path": "../public/_nuxt/nuxt-link.dc11f034.js"
  },
  "/_nuxt/packages.414d12d8.js": {
    "type": "application/javascript",
    "etag": "\"5de-zjOZXu3YqQE3lrzJMGzuKMFq4i0\"",
    "mtime": "2023-04-28T16:50:16.300Z",
    "size": 1502,
    "path": "../public/_nuxt/packages.414d12d8.js"
  },
  "/_nuxt/profile.076a5f3e.js": {
    "type": "application/javascript",
    "etag": "\"f9d-lPcHHX+OUmt3ZOPzQuCA+JEokQo\"",
    "mtime": "2023-04-28T16:50:16.299Z",
    "size": 3997,
    "path": "../public/_nuxt/profile.076a5f3e.js"
  },
  "/_nuxt/terms.f7dd3b3a.js": {
    "type": "application/javascript",
    "etag": "\"3ebd-NDKOWPGHfiDjyYBSv7zWhNaXx2k\"",
    "mtime": "2023-04-28T16:50:16.298Z",
    "size": 16061,
    "path": "../public/_nuxt/terms.f7dd3b3a.js"
  },
  "/_nuxt/transport.628caf79.js": {
    "type": "application/javascript",
    "etag": "\"48b-O7xClIPeK6W7aMiMl/Ld76FgP58\"",
    "mtime": "2023-04-28T16:50:16.298Z",
    "size": 1163,
    "path": "../public/_nuxt/transport.628caf79.js"
  },
  "/_nuxt/transport.84b4adea.js": {
    "type": "application/javascript",
    "etag": "\"184-iXgoeYGpNfdbMJy0+2Qu+62TO/0\"",
    "mtime": "2023-04-28T16:50:16.297Z",
    "size": 388,
    "path": "../public/_nuxt/transport.84b4adea.js"
  },
  "/css/nuxt-google-fonts.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"c56-N54YFHOvyRhroL5ihkbCrORurOQ\"",
    "mtime": "2023-04-28T16:50:16.296Z",
    "size": 3158,
    "path": "../public/css/nuxt-google-fonts.css"
  },
  "/fonts/Poppins-400-1.woff2": {
    "type": "font/woff2",
    "etag": "\"9a8c-QeVlUMyPGaf2XBYEFlju2/iIzJg\"",
    "mtime": "2023-04-28T16:50:16.294Z",
    "size": 39564,
    "path": "../public/fonts/Poppins-400-1.woff2"
  },
  "/fonts/Poppins-400-2.woff2": {
    "type": "font/woff2",
    "etag": "\"15a8-Za8qA3pe+KjTg9UYN36h+faDdjE\"",
    "mtime": "2023-04-28T16:50:16.293Z",
    "size": 5544,
    "path": "../public/fonts/Poppins-400-2.woff2"
  },
  "/fonts/Poppins-400-3.woff2": {
    "type": "font/woff2",
    "etag": "\"1ecc-rG1xtNX90rPavJoG/2wAHkJR2gs\"",
    "mtime": "2023-04-28T16:50:16.292Z",
    "size": 7884,
    "path": "../public/fonts/Poppins-400-3.woff2"
  },
  "/fonts/Roboto-400-10.woff2": {
    "type": "font/woff2",
    "etag": "\"3d80-fKnFln87uL/+qyS2ObScHn0D+lI\"",
    "mtime": "2023-04-28T16:50:16.292Z",
    "size": 15744,
    "path": "../public/fonts/Roboto-400-10.woff2"
  },
  "/fonts/Roboto-400-4.woff2": {
    "type": "font/woff2",
    "etag": "\"3bf0-3SKkH6IexKSo0p/Tadm+6RnLmKw\"",
    "mtime": "2023-04-28T16:50:16.291Z",
    "size": 15344,
    "path": "../public/fonts/Roboto-400-4.woff2"
  },
  "/fonts/Roboto-400-5.woff2": {
    "type": "font/woff2",
    "etag": "\"259c-ESovxfT/m4XuOnBvqbjEf3mwWTM\"",
    "mtime": "2023-04-28T16:50:16.290Z",
    "size": 9628,
    "path": "../public/fonts/Roboto-400-5.woff2"
  },
  "/fonts/Roboto-400-6.woff2": {
    "type": "font/woff2",
    "etag": "\"5cc-TfOeql0acP87XSiKdL96Ro51g+8\"",
    "mtime": "2023-04-28T16:50:16.289Z",
    "size": 1484,
    "path": "../public/fonts/Roboto-400-6.woff2"
  },
  "/fonts/Roboto-400-7.woff2": {
    "type": "font/woff2",
    "etag": "\"1bc8-fPvEFcRbInSlmXJV++wPtTu+Mn0\"",
    "mtime": "2023-04-28T16:50:16.289Z",
    "size": 7112,
    "path": "../public/fonts/Roboto-400-7.woff2"
  },
  "/fonts/Roboto-400-8.woff2": {
    "type": "font/woff2",
    "etag": "\"15b8-EJzUxUNb1mFDkbuHIsR8KHyWsuw\"",
    "mtime": "2023-04-28T16:50:16.288Z",
    "size": 5560,
    "path": "../public/fonts/Roboto-400-8.woff2"
  },
  "/fonts/Roboto-400-9.woff2": {
    "type": "font/woff2",
    "etag": "\"2e60-t0NUh3DEbZBa4boGMQvAAcWH/o4\"",
    "mtime": "2023-04-28T16:50:16.287Z",
    "size": 11872,
    "path": "../public/fonts/Roboto-400-9.woff2"
  },
  "/gallery/index.html": {
    "type": "text/html; charset=utf-8",
    "etag": "\"2f36-56a19loeFylPYuWwdy8+ec8uLcs\"",
    "mtime": "2023-04-28T16:50:24.909Z",
    "size": 12086,
    "path": "../public/gallery/index.html"
  },
  "/lovina/index.html": {
    "type": "text/html; charset=utf-8",
    "etag": "\"5383-sR1WxUjgAkUG88K85w+cxrkAUPw\"",
    "mtime": "2023-04-28T16:50:24.968Z",
    "size": 21379,
    "path": "../public/lovina/index.html"
  },
  "/packages/index.html": {
    "type": "text/html; charset=utf-8",
    "etag": "\"76b0-8HzfWTKsxim8Fav4TQya105gKeY\"",
    "mtime": "2023-04-28T16:50:24.757Z",
    "size": 30384,
    "path": "../public/packages/index.html"
  },
  "/transport/index.html": {
    "type": "text/html; charset=utf-8",
    "etag": "\"3c3e-Ff1JXxG3KUA9hWYZUAKq1VCT+p4\"",
    "mtime": "2023-04-28T16:50:24.803Z",
    "size": 15422,
    "path": "../public/transport/index.html"
  },
  "/_ipx/_/dolphin1.webp": {
    "type": "image/webp",
    "etag": "\"1a5a4-7bk7xHsxZuKIEdp1IvWN8YjrSyA\"",
    "mtime": "2023-04-28T16:50:27.788Z",
    "size": 107940,
    "path": "../public/_ipx/_/dolphin1.webp"
  },
  "/_ipx/f_webp&s_1200x500/banner.webp": {
    "type": "image/webp",
    "etag": "\"aef4-bAe69QH10VBlAQ0/iDw6iXoX8uI\"",
    "mtime": "2023-04-28T16:50:25.992Z",
    "size": 44788,
    "path": "../public/_ipx/f_webp&s_1200x500/banner.webp"
  },
  "/_ipx/f_webp&s_200x200/kadek.webp": {
    "type": "image/webp",
    "etag": "\"1ace-qDBAFGU9IxAwrgHJx12Y//ydV7Q\"",
    "mtime": "2023-04-28T16:50:25.816Z",
    "size": 6862,
    "path": "../public/_ipx/f_webp&s_200x200/kadek.webp"
  },
  "/_ipx/s_100x50/tripadvisor.svg": {
    "type": "image/svg+xml",
    "etag": "\"eb5-RAbfQH2Lkt6mj3gD9mTw9928Cks\"",
    "mtime": "2023-04-28T16:50:24.980Z",
    "size": 3765,
    "path": "../public/_ipx/s_100x50/tripadvisor.svg"
  },
  "/_ipx/s_1250x567/1.webp": {
    "type": "image/webp",
    "etag": "\"a272-H8GKRauIcFG7CYGNPLIQrSupp/8\"",
    "mtime": "2023-04-28T16:50:25.340Z",
    "size": 41586,
    "path": "../public/_ipx/s_1250x567/1.webp"
  },
  "/_ipx/s_1250x567/2.webp": {
    "type": "image/webp",
    "etag": "\"6648-EnNBvTy9/VpmME36C018Xgts4MY\"",
    "mtime": "2023-04-28T16:50:25.448Z",
    "size": 26184,
    "path": "../public/_ipx/s_1250x567/2.webp"
  },
  "/_ipx/s_1250x567/3.webp": {
    "type": "image/webp",
    "etag": "\"ac8c-yN9bGE3+KLuhwwlfyQq8up08a1s\"",
    "mtime": "2023-04-28T16:50:25.589Z",
    "size": 44172,
    "path": "../public/_ipx/s_1250x567/3.webp"
  },
  "/_ipx/s_1250x567/4.webp": {
    "type": "image/webp",
    "etag": "\"c880-kqVi6a8MrXM7c/E2ywqKdilHkWU\"",
    "mtime": "2023-04-28T16:50:25.771Z",
    "size": 51328,
    "path": "../public/_ipx/s_1250x567/4.webp"
  },
  "/_ipx/s_160x90/booknow1.svg": {
    "type": "image/svg+xml",
    "etag": "\"6403-ZG1WIFB3M8PC6VNxO7xWaysX0N8\"",
    "mtime": "2023-04-28T16:50:26.197Z",
    "size": 25603,
    "path": "../public/_ipx/s_160x90/booknow1.svg"
  },
  "/_ipx/s_200x100/2.svg": {
    "type": "image/svg+xml",
    "etag": "\"158a4-5fSmfUMzR08wQrBDRHKtLIluEJc\"",
    "mtime": "2023-04-28T16:50:27.053Z",
    "size": 88228,
    "path": "../public/_ipx/s_200x100/2.svg"
  },
  "/_ipx/s_200x100/bca.svg": {
    "type": "image/svg+xml",
    "etag": "\"2787e-bs7Cbk7MtaiZDKVQf4LpN1FlEm0\"",
    "mtime": "2023-04-28T16:50:27.047Z",
    "size": 161918,
    "path": "../public/_ipx/s_200x100/bca.svg"
  },
  "/_ipx/s_200x50/taps.svg": {
    "type": "image/svg+xml",
    "etag": "\"1cb1d-eKLabW3J8kf3u+kDF/jrH68Y9tA\"",
    "mtime": "2023-04-28T16:50:27.060Z",
    "size": 117533,
    "path": "../public/_ipx/s_200x50/taps.svg"
  },
  "/_ipx/s_374x256/dolphin1.webp": {
    "type": "image/webp",
    "etag": "\"56d8-pTnOtDJoTrjZab/rKzbTvniqqIQ\"",
    "mtime": "2023-04-28T16:50:26.277Z",
    "size": 22232,
    "path": "../public/_ipx/s_374x256/dolphin1.webp"
  },
  "/_ipx/s_374x256/dolphin2.webp": {
    "type": "image/webp",
    "etag": "\"38c2-ZhNM15YfwXmYRoJEItgetkV51FQ\"",
    "mtime": "2023-04-28T16:50:26.350Z",
    "size": 14530,
    "path": "../public/_ipx/s_374x256/dolphin2.webp"
  },
  "/_ipx/s_374x256/dolphin3.webp": {
    "type": "image/webp",
    "etag": "\"2008-nrKYHYyDjbKJhJ/TdzRQrEDRwH4\"",
    "mtime": "2023-04-28T16:50:26.436Z",
    "size": 8200,
    "path": "../public/_ipx/s_374x256/dolphin3.webp"
  },
  "/_ipx/s_374x256/fish1.webp": {
    "type": "image/webp",
    "etag": "\"4d74-ub+aHdrX3X04+C48FyRmKEhNDEA\"",
    "mtime": "2023-04-28T16:50:26.755Z",
    "size": 19828,
    "path": "../public/_ipx/s_374x256/fish1.webp"
  },
  "/_ipx/s_374x256/fish2.webp": {
    "type": "image/webp",
    "etag": "\"4990-lS6GNEwPZpiFLiKQa07vya4TI6I\"",
    "mtime": "2023-04-28T16:50:26.829Z",
    "size": 18832,
    "path": "../public/_ipx/s_374x256/fish2.webp"
  },
  "/_ipx/s_374x256/fish3.webp": {
    "type": "image/webp",
    "etag": "\"2e8c-UR+O6d1qBR6FynVKjnvdeNSgutk\"",
    "mtime": "2023-04-28T16:50:26.916Z",
    "size": 11916,
    "path": "../public/_ipx/s_374x256/fish3.webp"
  },
  "/_ipx/s_374x256/snorkling1.webp": {
    "type": "image/webp",
    "etag": "\"4038-s9hTAq1rWwQFnbcq/hT8llSjwCs\"",
    "mtime": "2023-04-28T16:50:26.516Z",
    "size": 16440,
    "path": "../public/_ipx/s_374x256/snorkling1.webp"
  },
  "/_ipx/s_374x256/snorkling2.webp": {
    "type": "image/webp",
    "etag": "\"7386-LPUIilhVG3ncKb6k9Hhp15EKfPA\"",
    "mtime": "2023-04-28T16:50:26.578Z",
    "size": 29574,
    "path": "../public/_ipx/s_374x256/snorkling2.webp"
  },
  "/_ipx/s_374x256/snorkling3.webp": {
    "type": "image/webp",
    "etag": "\"675e-FFxNOyaUVgouJZ46qG+rZ3T5tAc\"",
    "mtime": "2023-04-28T16:50:26.678Z",
    "size": 26462,
    "path": "../public/_ipx/s_374x256/snorkling3.webp"
  },
  "/_ipx/s_374x256/swim1.webp": {
    "type": "image/webp",
    "etag": "\"1bec-CkFPyT8OAX8IRGQPtIPxR3vxw5Y\"",
    "mtime": "2023-04-28T16:50:26.061Z",
    "size": 7148,
    "path": "../public/_ipx/s_374x256/swim1.webp"
  },
  "/_ipx/s_374x256/swim2.webp": {
    "type": "image/webp",
    "etag": "\"2e4e-59BnA67i7+7uSj6ZlX91QgLt7So\"",
    "mtime": "2023-04-28T16:50:26.189Z",
    "size": 11854,
    "path": "../public/_ipx/s_374x256/swim2.webp"
  },
  "/_ipx/s_374x256/swim3.webp": {
    "type": "image/webp",
    "etag": "\"365c-AwoY3oIUpeIdTOFHIDY6/PRbraQ\"",
    "mtime": "2023-04-28T16:50:26.125Z",
    "size": 13916,
    "path": "../public/_ipx/s_374x256/swim3.webp"
  },
  "/_ipx/s_720x400/g1.webp": {
    "type": "image/webp",
    "etag": "\"224a-UFOOjGyD0rIc8uGKMp2akimtbA4\"",
    "mtime": "2023-04-28T16:50:27.148Z",
    "size": 8778,
    "path": "../public/_ipx/s_720x400/g1.webp"
  },
  "/_ipx/s_720x400/g3.webp": {
    "type": "image/webp",
    "etag": "\"850c-z22vGH3DloMonyUazy+uSdhIT8w\"",
    "mtime": "2023-04-28T16:50:27.257Z",
    "size": 34060,
    "path": "../public/_ipx/s_720x400/g3.webp"
  },
  "/_ipx/s_720x400/g4.webp": {
    "type": "image/webp",
    "etag": "\"4834-LWmBRWbU6s7fYkhcjwyYbCch9lY\"",
    "mtime": "2023-04-28T16:50:27.358Z",
    "size": 18484,
    "path": "../public/_ipx/s_720x400/g4.webp"
  },
  "/_ipx/s_720x400/g5.webp": {
    "type": "image/webp",
    "etag": "\"6b74-gaIR1RZLhoBitQvZd8qaJwKOA5o\"",
    "mtime": "2023-04-28T16:50:27.478Z",
    "size": 27508,
    "path": "../public/_ipx/s_720x400/g5.webp"
  },
  "/_ipx/s_720x400/g6.webp": {
    "type": "image/webp",
    "etag": "\"5852-FSEJ2LGPYkSTlQUXPmpgdP/pr2M\"",
    "mtime": "2023-04-28T16:50:27.587Z",
    "size": 22610,
    "path": "../public/_ipx/s_720x400/g6.webp"
  },
  "/_ipx/s_720x600/transport.webp": {
    "type": "image/webp",
    "etag": "\"4a54-Y92AvmkSkEDp8YMp2+8/6dDxE6k\"",
    "mtime": "2023-04-28T16:50:27.036Z",
    "size": 19028,
    "path": "../public/_ipx/s_720x600/transport.webp"
  }
};

function readAsset (id) {
  const serverDir = dirname(fileURLToPath(globalThis._importMeta_.url));
  return promises.readFile(resolve(serverDir, assets[id].path))
}

const publicAssetBases = {"/_nuxt":{"maxAge":2592000}};

function isPublicAssetURL(id = '') {
  if (assets[id]) {
    return true
  }
  for (const base in publicAssetBases) {
    if (id.startsWith(base)) { return true }
  }
  return false
}

function getAsset (id) {
  return assets[id]
}

const METHODS = /* @__PURE__ */ new Set(["HEAD", "GET"]);
const EncodingMap = { gzip: ".gz", br: ".br" };
const _f4b49z = eventHandler((event) => {
  if (event.node.req.method && !METHODS.has(event.node.req.method)) {
    return;
  }
  let id = decodeURIComponent(
    withLeadingSlash(
      withoutTrailingSlash(parseURL(event.node.req.url).pathname)
    )
  );
  let asset;
  const encodingHeader = String(
    event.node.req.headers["accept-encoding"] || ""
  );
  const encodings = [
    ...encodingHeader.split(",").map((e) => EncodingMap[e.trim()]).filter(Boolean).sort(),
    ""
  ];
  if (encodings.length > 1) {
    event.node.res.setHeader("Vary", "Accept-Encoding");
  }
  for (const encoding of encodings) {
    for (const _id of [id + encoding, joinURL(id, "index.html" + encoding)]) {
      const _asset = getAsset(_id);
      if (_asset) {
        asset = _asset;
        id = _id;
        break;
      }
    }
  }
  if (!asset) {
    if (isPublicAssetURL(id)) {
      event.node.res.removeHeader("cache-control");
      throw createError({
        statusMessage: "Cannot find static asset " + id,
        statusCode: 404
      });
    }
    return;
  }
  const ifNotMatch = event.node.req.headers["if-none-match"] === asset.etag;
  if (ifNotMatch) {
    event.node.res.statusCode = 304;
    event.node.res.end();
    return;
  }
  const ifModifiedSinceH = event.node.req.headers["if-modified-since"];
  if (ifModifiedSinceH && asset.mtime && new Date(ifModifiedSinceH) >= new Date(asset.mtime)) {
    event.node.res.statusCode = 304;
    event.node.res.end();
    return;
  }
  if (asset.type && !event.node.res.getHeader("Content-Type")) {
    event.node.res.setHeader("Content-Type", asset.type);
  }
  if (asset.etag && !event.node.res.getHeader("ETag")) {
    event.node.res.setHeader("ETag", asset.etag);
  }
  if (asset.mtime && !event.node.res.getHeader("Last-Modified")) {
    event.node.res.setHeader("Last-Modified", asset.mtime);
  }
  if (asset.encoding && !event.node.res.getHeader("Content-Encoding")) {
    event.node.res.setHeader("Content-Encoding", asset.encoding);
  }
  if (asset.size > 0 && !event.node.res.getHeader("Content-Length")) {
    event.node.res.setHeader("Content-Length", asset.size);
  }
  return readAsset(id);
});

const _GShLSK = lazyEventHandler(() => {
  const ipxOptions = {
    ...useRuntimeConfig().ipx || {},
    dir: fileURLToPath(new URL("../public", globalThis._importMeta_.url))
  };
  const ipx = createIPX(ipxOptions);
  const middleware = createIPXMiddleware(ipx);
  return eventHandler(async (event) => {
    event.req.url = withLeadingSlash(event.context.params._);
    await middleware(event.req, event.res);
  });
});

const disallow = [];
const sitemap = ["https://lovinadolphintours.com/sitemap.xml"];
const indexable = true;
const robotsDisabledValue = "noindex, nofollow";

const asArray = (v) => Array.isArray(v) ? v : [v];
const _egnpge = defineEventHandler(async (event) => {
  setHeader(event, "Content-Type", "text/plain");
  const debug = "";
  const sitemapLink = (sitemap && indexable ? asArray(sitemap || []) : []).map((path) => `Sitemap: ${path}`).join("\n");
  const disallowedPaths = (asArray(disallow || []) ).map((path) => `Disallow: ${path}`).join("\n");
  return `${debug}User-agent: *
${disallowedPaths}
${sitemapLink}`;
});

const _GXdT46 = defineEventHandler((event) => {
  if (event.path === "/robots.txt")
    return;
  const routeRules = getRouteRules(event);
  if (typeof routeRules.robots === "string")
    setHeader(event, "X-Robots-Tag", routeRules.robots);
  else if (routeRules.index === false || indexable === false)
    setHeader(event, "X-Robots-Tag", robotsDisabledValue);
});

const _lazy_2SNcFY = () => import('../handlers/renderer.mjs').then(function (n) { return n.r; });
const _lazy_V9kBe0 = () => import('../handlers/og.png.mjs');
const _lazy_4BGZvC = () => import('../handlers/html.mjs');
const _lazy_UCc361 = () => import('../handlers/options.mjs');
const _lazy_p2Ye5B = () => import('../handlers/svg.mjs');
const _lazy_RQ8zK3 = () => import('../handlers/vnode.mjs');
const _lazy_3aUUeW = () => import('../handlers/font.mjs');

const handlers = [
  { route: '', handler: _f4b49z, lazy: false, middleware: true, method: undefined },
  { route: '/__nuxt_error', handler: _lazy_2SNcFY, lazy: true, middleware: false, method: undefined },
  { route: '/_ipx/**', handler: _GShLSK, lazy: false, middleware: false, method: undefined },
  { route: '/robots.txt', handler: _egnpge, lazy: false, middleware: false, method: undefined },
  { route: '', handler: _GXdT46, lazy: false, middleware: false, method: undefined },
  { route: '', handler: _lazy_V9kBe0, lazy: true, middleware: false, method: undefined },
  { route: '/api/og-image-html', handler: _lazy_4BGZvC, lazy: true, middleware: false, method: undefined },
  { route: '/api/og-image-options', handler: _lazy_UCc361, lazy: true, middleware: false, method: undefined },
  { route: '/api/og-image-svg', handler: _lazy_p2Ye5B, lazy: true, middleware: false, method: undefined },
  { route: '/api/og-image-vnode', handler: _lazy_RQ8zK3, lazy: true, middleware: false, method: undefined },
  { route: '/api/og-image-font', handler: _lazy_3aUUeW, lazy: true, middleware: false, method: undefined },
  { route: '/**', handler: _lazy_2SNcFY, lazy: true, middleware: false, method: undefined }
];

function createNitroApp() {
  const config = useRuntimeConfig();
  const hooks = createHooks();
  const h3App = createApp({
    debug: destr(false),
    onError: errorHandler
  });
  const router = createRouter$1();
  h3App.use(createRouteRulesHandler());
  const localCall = createCall(toNodeListener(h3App));
  const localFetch = createFetch(localCall, globalThis.fetch);
  const $fetch = createFetch$1({
    fetch: localFetch,
    Headers,
    defaults: { baseURL: config.app.baseURL }
  });
  globalThis.$fetch = $fetch;
  h3App.use(
    eventHandler((event) => {
      const envContext = event.node.req.__unenv__;
      if (envContext) {
        Object.assign(event.context, envContext);
      }
      event.fetch = (req, init) => fetchWithEvent(event, req, init, { fetch: localFetch });
      event.$fetch = (req, init) => fetchWithEvent(event, req, init, { fetch: $fetch });
    })
  );
  for (const h of handlers) {
    let handler = h.lazy ? lazyEventHandler(h.handler) : h.handler;
    if (h.middleware || !h.route) {
      const middlewareBase = (config.app.baseURL + (h.route || "/")).replace(
        /\/+/g,
        "/"
      );
      h3App.use(middlewareBase, handler);
    } else {
      const routeRules = getRouteRulesForPath(
        h.route.replace(/:\w+|\*\*/g, "_")
      );
      if (routeRules.cache) {
        handler = cachedEventHandler(handler, {
          group: "nitro/routes",
          ...routeRules.cache
        });
      }
      router.use(h.route, handler, h.method);
    }
  }
  h3App.use(config.app.baseURL, router);
  const app = {
    hooks,
    h3App,
    router,
    localCall,
    localFetch
  };
  for (const plugin of plugins) {
    plugin(app);
  }
  return app;
}
const nitroApp = createNitroApp();
const useNitroApp = () => nitroApp;

const cert = process.env.NITRO_SSL_CERT;
const key = process.env.NITRO_SSL_KEY;
const server = cert && key ? new Server({ key, cert }, toNodeListener(nitroApp.h3App)) : new Server$1(toNodeListener(nitroApp.h3App));
const port = destr(process.env.NITRO_PORT || process.env.PORT) || 3e3;
const host = process.env.NITRO_HOST || process.env.HOST;
const s = server.listen(port, host, (err) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  const protocol = cert && key ? "https" : "http";
  const i = s.address();
  const baseURL = (useRuntimeConfig().app.baseURL || "").replace(/\/$/, "");
  const url = `${protocol}://${i.family === "IPv6" ? `[${i.address}]` : i.address}:${i.port}${baseURL}`;
  console.log(`Listening ${url}`);
});
{
  process.on(
    "unhandledRejection",
    (err) => console.error("[nitro] [dev] [unhandledRejection] " + err)
  );
  process.on(
    "uncaughtException",
    (err) => console.error("[nitro] [dev] [uncaughtException] " + err)
  );
}
const nodeServer = {};

export { useRuntimeConfig as a, useStorage as b, defineCachedEventHandler as d, getRouteRules as g, nodeServer as n, useNitroApp as u };
//# sourceMappingURL=node-server.mjs.map
