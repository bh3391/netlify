import { p as publicAssetsURL } from '../../handlers/renderer.mjs';
import { _ as __nuxt_component_1 } from './nuxt-img-eeed5507.mjs';
import { useSSRContext, mergeProps } from 'vue';
import { ssrRenderComponent, ssrRenderAttrs, ssrRenderAttr } from 'vue/server-renderer';
import { _ as _export_sfc } from '../server.mjs';
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
import './composables-efde4aa1.mjs';
import 'unctx';
import 'unhead';
import '@unhead/shared';
import '@unhead/dom';
import '@unhead/ssr';
import 'vue-router';
import '@unhead/addons';

const _imports_0 = "" + publicAssetsURL("g2.webp");
const _sfc_main$1 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  const _component_nuxt_img = __nuxt_component_1;
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "text-gray-600 body-font" }, _attrs))}><div class="container px-5 py-24 mx-auto flex flex-wrap"><div class="flex w-full mb-20 flex-wrap"><h1 class="sm:text-3xl text-2xl font-medium title-font text-gray-800 lg:w-1/3 lg:mb-0 mb-4">Enjoy your adventure with us</h1><p class="lg:pl-6 lg:w-2/3 mx-auto leading-relaxed text-white"></p></div><div class="flex flex-wrap md:-m-2 -m-1"><div class="flex flex-wrap w-1/2"><div class="md:p-2 p-1 w-1/2">`);
  _push(ssrRenderComponent(_component_nuxt_img, {
    loading: "lazy",
    deferalt: "gallery",
    width: "720",
    height: "400",
    class: "w-full object-cover h-full object-center block",
    src: "/g1.webp"
  }, null, _parent));
  _push(`</div><div class="md:p-2 p-1 w-1/2"><img alt="gallery" width="720" height="400" class="w-full object-cover h-full object-center block"${ssrRenderAttr("src", _imports_0)}></div><div class="md:p-2 p-1 w-full">`);
  _push(ssrRenderComponent(_component_nuxt_img, {
    loading: "lazy",
    deferalt: "gallery",
    width: "720",
    height: "400",
    class: "w-full h-full object-cover object-center block",
    src: "/g3.webp"
  }, null, _parent));
  _push(`</div></div><div class="flex flex-wrap w-1/2"><div class="md:p-2 p-1 w-full">`);
  _push(ssrRenderComponent(_component_nuxt_img, {
    loading: "lazy",
    defer: "",
    alt: "gallery",
    width: "720",
    height: "400",
    class: "w-full h-full object-cover object-center block",
    src: "/g4.webp"
  }, null, _parent));
  _push(`</div><div class="md:p-2 p-1 w-1/2">`);
  _push(ssrRenderComponent(_component_nuxt_img, {
    loading: "lazy",
    deferalt: "gallery",
    width: "720",
    height: "400",
    class: "w-full object-cover h-full object-center block",
    src: "/g5.webp"
  }, null, _parent));
  _push(`</div><div class="md:p-2 p-1 w-1/2">`);
  _push(ssrRenderComponent(_component_nuxt_img, {
    loading: "lazy",
    defer: "",
    alt: "gallery",
    width: "720",
    height: "400",
    class: "w-full object-cover h-full object-center block",
    src: "/g6.webp"
  }, null, _parent));
  _push(`</div></div></div></div></section>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/foto.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_Foto = __nuxt_component_0;
  _push(ssrRenderComponent(_component_Foto, _attrs, null, _parent));
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/gallery.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const gallery = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { gallery as default };
//# sourceMappingURL=gallery-c17c691e.mjs.map
