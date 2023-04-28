import { _ as __nuxt_component_1 } from './nuxt-img-eeed5507.mjs';
import { mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
import { _ as _export_sfc } from '../server.mjs';

const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_nuxt_img = __nuxt_component_1;
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "text-gray-600 body-font" }, _attrs))}><div class="container px-5 py-24 mx-auto flex flex-wrap flex-col">`);
  _push(ssrRenderComponent(_component_nuxt_img, {
    loading: "lazy",
    width: "720",
    height: "600",
    class: "block mx-auto mb-10 object-cover object-center rounded",
    alt: "transport",
    src: "/transport.webp"
  }, null, _parent));
  _push(`<div class="flex flex-col text-center w-full"><h1 class="text-xl title-font mb-4 font-bold text-4xl text-gray-900">Transport Service</h1><p class="lg:w-2/3 mx-auto leading-relaxed text-gray-800 text-xl">We Also Pr ovide Pick Up and Drop Off Service for you who stay arround Bali Area with Affordable price<br> 1.Transport Service From Kuta Fixed Price IDR 600 K <br> 2.Transport Service From Tuban Fixed Price IDR 600 K <br> 3.Transport Service From Canggu Fixed Price IDR 600 K <br> 4.Transport Service From Seminyak Fixed Price IDR 600 K <br> 5.Transport Service From Ubud Fixed Price IDR 600 K</p></div></div></section>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/transport.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { __nuxt_component_0 as _ };
//# sourceMappingURL=transport-8f05f886.mjs.map
