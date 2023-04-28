import { p as publicAssetsURL } from '../../handlers/renderer.mjs';
import { defineComponent, useSSRContext, resolveComponent, mergeProps } from 'vue';
import { ssrRenderComponent, ssrRenderAttrs, ssrRenderAttr } from 'vue/server-renderer';
import { u as useSchemaOrg, d as defineProduct, _ as _export_sfc } from '../server.mjs';
import { _ as __nuxt_component_1$4 } from './nuxt-img-eeed5507.mjs';
import { _ as __nuxt_component_1$1 } from './profile-d64d634e.mjs';
import { _ as __nuxt_component_0$1, a as __nuxt_component_1$2 } from './terms-adf15341.mjs';
import { _ as __nuxt_component_2, a as __nuxt_component_0$3 } from './advantage-bf7dadd4.mjs';
import { _ as __nuxt_component_0$2 } from './transport-8f05f886.mjs';
import { _ as __nuxt_component_1$3 } from './contact-34769667.mjs';
import { _ as __nuxt_component_2$1 } from './map-aa16e86c.mjs';
import { u as useHead } from './composables-efde4aa1.mjs';
import 'vue-bundle-renderer/runtime';
import 'h3';
import 'destr';
import 'ohash';
import '../../nitro/node-server.mjs';
import 'node-fetch-native/polyfill';
import 'node:http';
import 'node:https';
import 'ofetch';
import 'unenv/runtime/fetch/index';
import 'hookable';
import 'scule';
import 'ufo';
import 'unstorage';
import 'defu';
import 'radix3';
import 'node:fs';
import 'node:url';
import 'pathe';
import 'ipx';
import 'unctx';
import 'unhead';
import '@unhead/shared';
import '@unhead/dom';
import '@unhead/ssr';
import 'vue-router';
import '@unhead/addons';

const _imports_0 = "" + publicAssetsURL("6.webp");
const _sfc_main$3 = {};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs) {
  const _component_BookNow = resolveComponent("BookNow");
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "bg-gradient-to-t from-sky-100 via-sky-200 to-sky-400" }, _attrs))}><div class="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12"><div class="mr-auto place-self-center lg:col-span-7"><h1 class="max-w-2xl mb-4 text-indigo-700 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl">Explore Lovina Sea &amp; Swim With Dolphin <br>With Us!!</h1>`);
  _push(ssrRenderComponent(_component_BookNow, null, null, _parent));
  _push(`</div><div class="hidden lg:mt-0 lg:col-span-5 lg:flex"><img${ssrRenderAttr("src", _imports_0)} alt="Dolphin Hero"></div></div></section>`);
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/heroo.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender$2]]);
const _sfc_main$2 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  const _component_nuxt_img = __nuxt_component_1$4;
  _push(`<div${ssrRenderAttrs(mergeProps({
    class: "hero min-h-screen",
    style: { "background-image": "url(../6.webp)" }
  }, _attrs))}><div class="hero-overlay bg-opacity-60"></div><div class="hero-content text-center text-white"><div class="max-w-md"><h1 class="mb-5 text-3xl font-bold">Welcome to Our Website</h1><p class="mb-5">Thank you for visiting our website.Do you want to find out about dolphins, snorkeling or fishing at Lovina Beach?<br> Right here you can order directly with Lovina Ocean Tours with affordable Price.Before you Order, Please Check Our </p><a href="https://www.tripadvisor.com/Attraction_Review-g1599559-d21042518-Reviews-Lovina_Ocean_Dolphin_Tour-Lovina_Beach_Buleleng_District_Buleleng_Regency_Bali.html" alt="Tripadvisor Link"><div class="btn bg-green-600 hover:bg-green-300">`);
  _push(ssrRenderComponent(_component_nuxt_img, {
    alt: "tripadvisor",
    loading: "lazy",
    width: "100px",
    height: "50px",
    class: "w-10 m-2",
    src: "/tripadvisor.svg"
  }, null, _parent));
  _push(`</div></a></div></div></div>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/hero.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main$1 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_Booknow = __nuxt_component_0$3;
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "bg-white dark:bg-gray-900" }, _attrs))}><div class="container flex flex-col items-center px-4 py-12 mx-auto text-center"><h2 class="max-w-2xl mx-auto text-2xl font-semibold tracking-tight text-gray-800 xl:text-3xl dark:text-white"> Bring your Adventure to the <span class="text-blue-500">next level.</span></h2><p class="max-w-4xl mt-6 text-center text-gray-500 dark:text-gray-300"> &quot;Join us on a breathtaking adventure to witness the grace and beauty of dolphins in their natural habitat! Book your dolphin watching tour now and experience the thrill of watching these amazing creatures swim and play. Don&#39;t miss this once in a lifetime opportunity! Call us today to reserve your spot.&quot; </p><div class="inline-flex w-full items-center justify-center mt-6 sm:w-auto">`);
  _push(ssrRenderComponent(_component_Booknow, null, null, _parent));
  _push(`</div></div></section>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/cta.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_6 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: "Lovina Dolphin Tour  with lovinadolphintours.com",
      meta: [
        { name: "description", content: "Looking for an unforgettable experience in Lovina? Our expert-guided dolphin tours offer a unique opportunity to witness these magnificent creatures in their natural habitat. Choose from a range of tour options to suit your budget and schedule. Book now and embark on a thrilling adventure at Lovina Beach!" },
        { property: "og:image", content: "../banner.webp" },
        { name: "robots", content: "index,follow" }
      ]
    }), useSchemaOrg([
      defineProduct({
        name: "Lovina Dolphin Tours Package",
        description: "Looking for an unforgettable experience in Lovina? Our expert-guided dolphin tours offer a unique opportunity to witness these magnificent creatures in their natural habitat. Choose from a range of tour options to suit your budget and schedule. Book now and embark on a thrilling adventure at Lovina Beach!",
        image: [
          "https://lovinadolphintours.com/banner.webp"
        ],
        offer: {
          price: "$10.00"
        }
      })
    ]);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_heroo = __nuxt_component_0;
      const _component_Hero = __nuxt_component_1;
      const _component_profile = __nuxt_component_1$1;
      const _component_Price = __nuxt_component_0$1;
      const _component_Terms = __nuxt_component_1$2;
      const _component_Advantage = __nuxt_component_2;
      const _component_Cta = __nuxt_component_6;
      const _component_Transport = __nuxt_component_0$2;
      const _component_Contact = __nuxt_component_1$3;
      const _component_Map = __nuxt_component_2$1;
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_component_heroo, null, null, _parent));
      _push(ssrRenderComponent(_component_Hero, null, null, _parent));
      _push(ssrRenderComponent(_component_profile, null, null, _parent));
      _push(`<div class="divider text-2xl font-bold">Our Package</div> <br>`);
      _push(ssrRenderComponent(_component_Price, null, null, _parent));
      _push(ssrRenderComponent(_component_Terms, null, null, _parent));
      _push(`<div class="divider text-2xl font-bold">Our Advantages</div> <br>`);
      _push(ssrRenderComponent(_component_Advantage, null, null, _parent));
      _push(ssrRenderComponent(_component_Cta, null, null, _parent));
      _push(`<div class="divider text-2xl font-bold">Transport Service</div> <br>`);
      _push(ssrRenderComponent(_component_Transport, null, null, _parent));
      _push(`<div class="divider text-2xl font-bold">Contact Us</div> <br>`);
      _push(ssrRenderComponent(_component_Contact, null, null, _parent));
      _push(ssrRenderComponent(_component_Map, null, null, _parent));
      _push(`<!--]-->`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-3bac226b.mjs.map
