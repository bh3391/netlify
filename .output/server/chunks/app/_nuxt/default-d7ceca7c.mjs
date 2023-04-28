import { _ as _export_sfc, e as useRuntimeConfig, f as useRouter, g as useServerHead, u as useSchemaOrg, h as defineWebSite, i as defineWebPage, a as useNuxtApp, b as __appConfig, S as SchemaOrgLocalBusiness, j as SchemaOrgReview, k as SchemaOrgWebSite, l as SchemaOrgWebPage } from '../server.mjs';
import { useSSRContext, defineComponent, computed, reactive, h, ref, mergeProps, withCtx, createTextVNode, openBlock, createBlock, createVNode } from 'vue';
import { u as useHead } from './composables-efde4aa1.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderSlot } from 'vue/server-renderer';
import { withBase, withoutTrailingSlash } from 'ufo';
import { _ as __nuxt_component_0 } from './nuxt-link-f57cd0d9.mjs';
import { _ as __nuxt_component_1 } from './nuxt-img-eeed5507.mjs';
import 'ofetch';
import 'hookable';
import 'unctx';
import 'unhead';
import '@unhead/shared';
import '@unhead/dom';
import '@unhead/ssr';
import 'vue-router';
import 'h3';
import '@unhead/addons';
import 'defu';
import '../../nitro/node-server.mjs';
import 'node-fetch-native/polyfill';
import 'node:http';
import 'node:https';
import 'destr';
import 'unenv/runtime/fetch/index';
import 'scule';
import 'ohash';
import 'unstorage';
import 'radix3';
import 'node:fs';
import 'node:url';
import 'pathe';
import 'ipx';

function useAppConfig() {
  const nuxtApp = useNuxtApp();
  if (!nuxtApp._appConfig) {
    nuxtApp._appConfig = reactive(__appConfig);
  }
  return nuxtApp._appConfig;
}
const robotsEnabledValue = "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1";
const robotsDisabledValue = "noindex, nofollow";
function defineRobotMeta() {
  {
    const nuxtApp = useNuxtApp();
    useHead({
      meta: [
        {
          name: "robots",
          content: () => {
            var _a, _b, _c, _d;
            const routeRules = (_d = (_c = (_b = (_a = nuxtApp == null ? void 0 : nuxtApp.ssrContext) == null ? void 0 : _a.event) == null ? void 0 : _b.context) == null ? void 0 : _c._nitro) == null ? void 0 : _d.routeRules;
            if (typeof routeRules.robots === "string")
              return routeRules.robots;
            return (routeRules == null ? void 0 : routeRules.index) === false ? robotsDisabledValue : robotsEnabledValue;
          }
        }
      ]
    }, { mode: "server" });
  }
}
const siteUrl = "https://lovinadolphintours.com";
function resolveTrailingSlash(path) {
  return withoutTrailingSlash(path);
}
function resolveAbsoluteInternalLink(path) {
  return withBase(resolveTrailingSlash(path), siteUrl);
}
function createInternalLinkResolver() {
  return (path) => {
    return withBase(withoutTrailingSlash(path), siteUrl);
  };
}
const titleCase = (s) => {
  s = s.replaceAll("-", " ");
  return s.replace(/\w\S*/g, (w) => w.charAt(0).toUpperCase() + w.substr(1).toLowerCase());
};
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "SeoKit",
  __ssrInlineRender: true,
  props: {
    siteUrl: null,
    siteName: null,
    siteDescription: null,
    siteImage: null,
    titleSeparator: null,
    language: null
  },
  setup(__props) {
    const props = __props;
    const runtimeConfig = useRuntimeConfig().public;
    const appConfig = useAppConfig();
    const SeoKitPublicRuntimeConfigKeys = [
      "siteName",
      "siteDescription",
      "siteImage",
      "siteUrl",
      "titleSeparator",
      "trailingSlash",
      "language"
    ];
    const siteMeta = computed(() => {
      const runtimeConfigExtract = {};
      for (const k of SeoKitPublicRuntimeConfigKeys) {
        if (runtimeConfig[k])
          runtimeConfigExtract[k] = runtimeConfig[k];
      }
      const propExtract = {};
      for (const k of SeoKitPublicRuntimeConfigKeys) {
        if (props[k])
          propExtract[k] = props[k];
      }
      return {
        ...runtimeConfigExtract,
        // app config has the highest priority
        // @ts-expect-error untyped
        ...appConfig.site,
        ...propExtract
      };
    });
    const router = useRouter();
    const route = router.currentRoute;
    const resolveUrl = createInternalLinkResolver();
    function computeMeta() {
      var _a, _b, _c, _d, _e;
      const meta = [
        {
          property: "og:url",
          content: resolveUrl(((_a = route.value) == null ? void 0 : _a.path) || "/")
        },
        {
          property: "og:locale",
          content: siteMeta.value.language
        }
      ];
      if (siteMeta.value.siteName) {
        meta.push({
          property: "og:site_name",
          content: siteMeta.value.siteName
        });
      }
      let ogImage = ((_c = (_b = route.value) == null ? void 0 : _b.meta) == null ? void 0 : _c.image) || siteMeta.value.siteImage;
      if (typeof ogImage === "string") {
        if (ogImage.startsWith("/"))
          ogImage = resolveAbsoluteInternalLink(ogImage);
        meta.push({
          property: "og:image",
          content: ogImage
        });
      }
      const description = ((_e = (_d = route.value) == null ? void 0 : _d.meta) == null ? void 0 : _e.description) || siteMeta.value.siteDescription;
      if (description) {
        meta.push({
          name: "description",
          content: description
        });
      }
      return meta;
    }
    useHead({
      templateParams: {
        // @ts-expect-error untyped
        siteName: () => siteMeta.value.siteName,
        // @ts-expect-error untyped
        siteDescription: () => siteMeta.value.siteDescription,
        // @ts-expect-error untyped
        siteImage: () => siteMeta.value.siteImage,
        // @ts-expect-error untyped
        siteUrl: () => siteMeta.value.siteUrl,
        // @ts-expect-error untyped
        titleSeparator: () => siteMeta.value.titleSeparator,
        // @ts-expect-error untyped
        trailingSlash: () => siteMeta.value.trailingSlash,
        // @ts-expect-error untyped
        language: () => siteMeta.value.language
      },
      htmlAttrs: {
        lang: () => siteMeta.value.language
      },
      title: () => {
        var _a, _b, _c, _d, _e;
        if (typeof ((_b = (_a = route.value) == null ? void 0 : _a.meta) == null ? void 0 : _b.title) === "string")
          return (_d = (_c = route.value) == null ? void 0 : _c.meta) == null ? void 0 : _d.title;
        const path = ((_e = route.value) == null ? void 0 : _e.path) || "/";
        const lastSegment = path.split("/").pop();
        return lastSegment ? titleCase(lastSegment) : null;
      },
      link: [
        {
          rel: "canonical",
          href: () => {
            var _a;
            return resolveUrl(((_a = route.value) == null ? void 0 : _a.path) || "/");
          }
        }
      ],
      meta: computeMeta
    });
    useServerHead({
      meta: [
        {
          property: "og:type",
          content: "website"
        }
      ],
      link: [
        {
          rel: "profile",
          href: "https://gmpg.org/xfn/11"
        }
      ]
    });
    defineRobotMeta();
    useSchemaOrg([
      defineWebSite({
        name: () => {
          var _a;
          return ((_a = siteMeta.value) == null ? void 0 : _a.siteName) || "";
        },
        inLanguage: () => {
          var _a;
          return ((_a = siteMeta.value) == null ? void 0 : _a.language) || "";
        },
        description: () => {
          var _a;
          return ((_a = siteMeta.value) == null ? void 0 : _a.siteDescription) || "";
        }
      }),
      defineWebPage()
    ]);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}></div>`);
    };
  }
});
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/nuxt-seo-kit/components/SeoKit.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const removeUndefinedProps = (props) => Object.fromEntries(Object.entries(props).filter(([, value]) => value !== void 0));
const setupForUseMeta = (metaFactory, renderChild) => (props, ctx) => {
  useHead(() => metaFactory({ ...removeUndefinedProps(props), ...ctx.attrs }, ctx));
  return () => {
    var _a, _b;
    return renderChild ? (_b = (_a = ctx.slots).default) == null ? void 0 : _b.call(_a) : null;
  };
};
const globalProps = {
  accesskey: String,
  autocapitalize: String,
  autofocus: {
    type: Boolean,
    default: void 0
  },
  class: [String, Object, Array],
  contenteditable: {
    type: Boolean,
    default: void 0
  },
  contextmenu: String,
  dir: String,
  draggable: {
    type: Boolean,
    default: void 0
  },
  enterkeyhint: String,
  exportparts: String,
  hidden: {
    type: Boolean,
    default: void 0
  },
  id: String,
  inputmode: String,
  is: String,
  itemid: String,
  itemprop: String,
  itemref: String,
  itemscope: String,
  itemtype: String,
  lang: String,
  nonce: String,
  part: String,
  slot: String,
  spellcheck: {
    type: Boolean,
    default: void 0
  },
  style: String,
  tabindex: String,
  title: String,
  translate: String
};
const Body = /* @__PURE__ */ defineComponent({
  // eslint-disable-next-line vue/no-reserved-component-names
  name: "Body",
  inheritAttrs: false,
  props: {
    ...globalProps,
    renderPriority: [String, Number]
  },
  setup: setupForUseMeta((bodyAttrs) => ({ bodyAttrs }), true)
});
const _sfc_main$3 = {};
function _sfc_ssrRender$3(_ctx, _push, _parent, _attrs) {
  const _component_SchemaOrgLocalBusiness = SchemaOrgLocalBusiness;
  const _component_SchemaOrgReview = SchemaOrgReview;
  const _component_SchemaOrgWebSite = SchemaOrgWebSite;
  const _component_SchemaOrgWebPage = SchemaOrgWebPage;
  _push(`<!--[-->`);
  _push(ssrRenderComponent(_component_SchemaOrgLocalBusiness, {
    name: "Lovina Dolphin Tours ",
    image: "/1.webp",
    description: "Looking for an unforgettable experience in Lovina? Our expert-guided dolphin tours offer a unique opportunity to witness these magnificent creatures in their natural habitat. Choose from a range of tour options to suit your budget and schedule. Book now and embark on a thrilling adventure at Lovina Beach!.",
    telephone: "+6283832053665",
    address: {
      streetAddress: "Spice beach club, jln, Kaliasem, Kec. Banjar, Kabupaten Buleleng, Bali",
      addressLocality: "Kadek Suara",
      addressRegion: "IDN",
      postalCode: "81152",
      addressCountry: "Indonesia"
    }
  }, null, _parent));
  _push(ssrRenderComponent(_component_SchemaOrgReview, {
    author: "Bhakti Pratama",
    itemReviewed: "Swimming With Dolphin Tour Package",
    reviewRating: {
      ratingValue: "5",
      bestRating: "5"
    },
    defineAggregateOffer: {
      offerCount: "4",
      lowPrice: "80000",
      highPrice: "250000",
      priceCurrency: "IDR"
    },
    defineAggregateRating: {
      ratingValue: "5.0",
      reviewCount: "20"
    }
  }, null, _parent));
  _push(ssrRenderComponent(_component_SchemaOrgWebSite, { name: "Lovina Dolphin Tours" }, null, _parent));
  _push(ssrRenderComponent(_component_SchemaOrgWebPage, { type: ["CollectionPage", "SearchResultsPage"] }, null, _parent));
  _push(`<!--]-->`);
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/schema.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender$3]]);
const __nuxt_component_3 = /* @__PURE__ */ defineComponent({
  name: "NuxtLoadingIndicator",
  props: {
    throttle: {
      type: Number,
      default: 200
    },
    duration: {
      type: Number,
      default: 2e3
    },
    height: {
      type: Number,
      default: 3
    },
    color: {
      type: [String, Boolean],
      default: "repeating-linear-gradient(to right,#00dc82 0%,#34cdfe 50%,#0047e1 100%)"
    }
  },
  setup(props, { slots }) {
    const indicator = useLoadingIndicator({
      duration: props.duration,
      throttle: props.throttle
    });
    const nuxtApp = useNuxtApp();
    nuxtApp.hook("page:start", indicator.start);
    nuxtApp.hook("page:finish", indicator.finish);
    return () => h("div", {
      class: "nuxt-loading-indicator",
      style: {
        position: "fixed",
        top: 0,
        right: 0,
        left: 0,
        pointerEvents: "none",
        width: "auto",
        height: `${props.height}px`,
        opacity: indicator.isLoading.value ? 1 : 0,
        background: props.color || void 0,
        backgroundSize: `${100 / indicator.progress.value * 100}% auto`,
        transform: `scaleX(${indicator.progress.value}%)`,
        transformOrigin: "left",
        transition: "transform 0.1s, height 0.4s, opacity 0.4s",
        zIndex: 999999
      }
    }, slots);
  }
});
function useLoadingIndicator(opts) {
  const progress = ref(0);
  const isLoading = ref(false);
  computed(() => 1e4 / opts.duration);
  let _timer = null;
  let _throttle = null;
  function start() {
    clear();
    progress.value = 0;
    if (opts.throttle && false) {
      _throttle = setTimeout(() => {
        isLoading.value = true;
      }, opts.throttle);
    } else {
      isLoading.value = true;
    }
  }
  function finish() {
    progress.value = 100;
    _hide();
  }
  function clear() {
    clearInterval(_timer);
    clearTimeout(_throttle);
    _timer = null;
    _throttle = null;
  }
  function _hide() {
    clear();
  }
  return {
    progress,
    isLoading,
    start,
    finish,
    clear
  };
}
const _sfc_main$2 = {};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs) {
  const _component_NuxtLink = __nuxt_component_0;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "navbar bg-sky-600 text-gray-900" }, _attrs))}><div class="navbar-start"><div class="dropdown"><label tabindex="0" class="btn btn-ghost lg:hidden"><svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16"></path></svg></label><ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"><li>`);
  _push(ssrRenderComponent(_component_NuxtLink, { to: "/about" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`About`);
      } else {
        return [
          createTextVNode("About")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li tabindex="0">`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: "/packages",
    class: "justify-between"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` Package <svg class="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"${_scopeId}><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z"${_scopeId}></path></svg>`);
      } else {
        return [
          createTextVNode(" Package "),
          (openBlock(), createBlock("svg", {
            class: "fill-current",
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            viewBox: "0 0 24 24"
          }, [
            createVNode("path", { d: "M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" })
          ]))
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<ul class="p-2"><li>`);
  _push(ssrRenderComponent(_component_NuxtLink, { to: "/packages" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Tour Packages`);
      } else {
        return [
          createTextVNode("Tour Packages")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li>`);
  _push(ssrRenderComponent(_component_NuxtLink, { to: "/transport" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Transport`);
      } else {
        return [
          createTextVNode("Transport")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li></ul></li><li>`);
  _push(ssrRenderComponent(_component_NuxtLink, { to: "/contact" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Contact`);
      } else {
        return [
          createTextVNode("Contact")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li>`);
  _push(ssrRenderComponent(_component_NuxtLink, { to: "/gallery" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Gallery`);
      } else {
        return [
          createTextVNode("Gallery")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li></ul></div>`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: "/",
    class: "btn btn-ghost normal-case text-gray-100 text-xl"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Lovina Dolphin Tours`);
      } else {
        return [
          createTextVNode("Lovina Dolphin Tours")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div><div class="navbar-end text-gray-100 hidden lg:flex"><ul class="menu menu-horizontal px-1"><li>`);
  _push(ssrRenderComponent(_component_NuxtLink, { to: "/about" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`About`);
      } else {
        return [
          createTextVNode("About")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li>`);
  _push(ssrRenderComponent(_component_NuxtLink, { to: "/packages" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Tour Packages`);
      } else {
        return [
          createTextVNode("Tour Packages")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li>`);
  _push(ssrRenderComponent(_component_NuxtLink, { to: "/transport" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Transport`);
      } else {
        return [
          createTextVNode("Transport")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li>`);
  _push(ssrRenderComponent(_component_NuxtLink, { to: "/contact" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Contact`);
      } else {
        return [
          createTextVNode("Contact")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li>`);
  _push(ssrRenderComponent(_component_NuxtLink, { to: "/gallery" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Gallery`);
      } else {
        return [
          createTextVNode("Gallery")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li></ul></div></div>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/header.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_4 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$2]]);
const _sfc_main$1 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  const _component_NuxtLink = __nuxt_component_0;
  const _component_nuxt_img = __nuxt_component_1;
  _push(`<!--[--><footer class="footer p-10 font-bold text-gray-900 bg-gradient-to-bl from-lime-100 via-purple-50 to-emerald-50"><div><span class="footer-title">Lovina Dolphin Tours</span>`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: "/about",
    class: "link link-hover"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`About`);
      } else {
        return [
          createTextVNode("About")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: "/contact",
    class: "link link-hover"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Contact`);
      } else {
        return [
          createTextVNode("Contact")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: "/packages",
    class: "link link-hover"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Packages`);
      } else {
        return [
          createTextVNode("Packages")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: "/transport",
    class: "link link-hover"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Transport`);
      } else {
        return [
          createTextVNode("Transport")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: "/gallery",
    class: "link link-hover"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Gallery`);
      } else {
        return [
          createTextVNode("Gallery")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div><div><span class="footer-title font-bold text-gray-900">Ways you can pay</span><div>`);
  _push(ssrRenderComponent(_component_nuxt_img, {
    loading: "lazy",
    width: "200px",
    height: "100px",
    src: "/bca.svg",
    alt: "bank-account"
  }, null, _parent));
  _push(`<h1>BCA Transfer</h1><p>Account Name : Kadek Suara<br> Account Number : 8271158220</p></div></div><div><span class="footer-title text-gray-900">Social</span><div class="flex flex-row scale-110 bg-slate-400 rounded-lg gap-1"><a href="https://www.instagram.com/lovina_ticket_dolphin_tours/?ighsid=ymMyMTA2M2Y%3D">`);
  _push(ssrRenderComponent(_component_nuxt_img, {
    src: "/2.svg",
    width: "200px",
    height: "100px",
    alt: "instagram",
    loading: "lazy"
  }, null, _parent));
  _push(`</a><a href="https://www.tripadvisor.com/Attraction_Review-g1599559-d21042518-Reviews-Lovina_Ocean_Dolphin_Tour-Lovina_Beach_Buleleng_District_Buleleng_Regency_Bali.html" alt="Tripadvisor Link">`);
  _push(ssrRenderComponent(_component_nuxt_img, {
    src: "/taps.svg",
    fromat: "webp",
    width: "200px",
    height: "50px",
    alt: "tripadvisor",
    loading: "lazy"
  }, null, _parent));
  _push(`</a></div></div></footer><div class="footer footer-center p-4 bg-sky-600 text-white"><div><p>Copyright \xA9 2023 - All right reserved by Lovina Dolphin Tours</p></div></div><!--]-->`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/footer.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_5 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_SeoKit = _sfc_main$4;
  const _component_Body = Body;
  const _component_Schema = __nuxt_component_2;
  const _component_NuxtLoadingIndicator = __nuxt_component_3;
  const _component_Header = __nuxt_component_4;
  const _component_Footer = __nuxt_component_5;
  _push(`<!--[-->`);
  _push(ssrRenderComponent(_component_SeoKit, null, null, _parent));
  _push(ssrRenderComponent(_component_Body, { class: "font-sans" }, null, _parent));
  _push(ssrRenderComponent(_component_Schema, null, null, _parent));
  _push(ssrRenderComponent(_component_NuxtLoadingIndicator, null, null, _parent));
  _push(ssrRenderComponent(_component_Header, null, null, _parent));
  _push(`<div class="container mx-auto bg-gradient-to-br from-green-300 via-sky-200 to-sky-100 opacity-80 backdrop-blur">`);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</div>`);
  _push(ssrRenderComponent(_component_Footer, null, null, _parent));
  _push(`<!--]-->`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/default.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _default = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { _default as default };
//# sourceMappingURL=default-d7ceca7c.mjs.map
