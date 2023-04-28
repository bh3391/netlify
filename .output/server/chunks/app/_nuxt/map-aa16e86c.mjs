import { mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderStyle } from 'vue/server-renderer';
import { _ as _export_sfc } from '../server.mjs';

const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "m-2 p-2" }, _attrs))}><div class="divider text-2xl font-bold text-black my-5">Our Location</div><iframe title="Google Map" class="rounded" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3949.383621435106!2d115.0192603138354!3d-8.164049684062457!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd19bcb57c1c79b%3A0xa5da365f3a6ef33!2sLovina%20Ocean%20Dolphin%20Tour!5e0!3m2!1sid!2sid!4v1678514675956!5m2!1sid!2sid" width="100%" height="450" style="${ssrRenderStyle({ "border": "0" })}" allowfullscreen="false" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/map.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { __nuxt_component_2 as _ };
//# sourceMappingURL=map-aa16e86c.mjs.map
