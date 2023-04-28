import { defineEventHandler, getQuery, createError } from 'h3';
import { u as useHostname, d as defaults } from '../utils.mjs';
import { g as getRouteRules } from '../nitro/node-server.mjs';
import 'node:fs';
import 'pathe';
import 'node-fetch-native/polyfill';
import 'node:http';
import 'node:https';
import 'destr';
import 'ofetch';
import 'unenv/runtime/fetch/index';
import 'hookable';
import 'scule';
import 'ohash';
import 'ufo';
import 'unstorage';
import 'defu';
import 'radix3';
import 'node:url';
import 'ipx';

function extractOgImageOptions(html) {
  const options = html.match(/<script id="nuxt-og-image-options" type="application\/json">(.+?)<\/script>/)?.[1];
  return options ? JSON.parse(options) : false;
}
const inferOgImageOptions = (html) => {
  const options = {};
  const description = html.match(/<meta property="og:description" content="(.*?)">/)?.[1];
  if (description)
    options.description = description;
  else
    options.description = html.match(/<meta name="description" content="(.*?)">/)?.[1];
  return options;
};
const options = defineEventHandler(async (e) => {
  const query = getQuery(e);
  const path = query.path || "/";
  const fetchOptions = {
    baseURL: useHostname(e)
  };
  const html = await globalThis.$fetch(path, {
    ...fetchOptions
  });
  const extractedPayload = extractOgImageOptions(html);
  if (!extractedPayload) {
    throw createError({
      statusCode: 500,
      statusMessage: `The path ${path} is missing the og-image payload.`
    });
  }
  e.node.req.url = path;
  e.context._nitro.routeRules = void 0;
  const routeRules = getRouteRules(e)?.ogImage;
  e.node.req.url = e.path;
  if (routeRules === false)
    return false;
  return {
    path,
    ...defaults,
    // use inferred data
    ...inferOgImageOptions(html),
    // use route rules
    ...routeRules || {},
    // use provided data
    ...extractedPayload,
    // use query data
    ...query
  };
});

export { options as default, extractOgImageOptions, inferOgImageOptions };
//# sourceMappingURL=options.mjs.map
