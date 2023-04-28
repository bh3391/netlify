import { _ as __nuxt_component_1 } from './nuxt-img-eeed5507.mjs';
import { useSSRContext, mergeProps } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
import { _ as _export_sfc } from '../server.mjs';

const _sfc_main$1 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  const _component_nuxt_img = __nuxt_component_1;
  _push(`<a${ssrRenderAttrs(mergeProps({ href: "https://wa.link/ovli9r" }, _attrs))}><div class="hover:scale-110 transition flex flex-center justify-center">`);
  _push(ssrRenderComponent(_component_nuxt_img, {
    loading: "lazy",
    width: "160",
    height: "90",
    src: "/booknow1.svg",
    alt: "book button"
  }, null, _parent));
  _push(`</div></a>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/booknow.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_Booknow = __nuxt_component_0;
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "text-gray-600 body-font" }, _attrs))}><div class="container px-5 py-24 mx-auto"><div class="text-center mb-20"><h1 class="sm:text-3xl text-2xl font-bold text-center title-font text-gray-900 mb-4">Why You Should book with us ?</h1></div><div class="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2"><div class="p-2 sm:w-1/2 w-full hover:scale-110 transition"><div class="bg-gray-100 rounded flex p-4 h-full items-center"><svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" class="text-indigo-500 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24"><path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path><path d="M22 4L12 14.01l-3-3"></path></svg><span class="title-font font-medium">Piloted By Real Fisherman</span></div></div><div class="p-2 sm:w-1/2 w-full hover:scale-110 transition"><div class="bg-gray-100 rounded flex p-4 h-full items-center"><svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" class="text-indigo-500 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24"><path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path><path d="M22 4L12 14.01l-3-3"></path></svg><span class="title-font font-medium">No Time Limit</span></div></div><div class="p-2 sm:w-1/2 w-full hover:scale-110 transition"><div class="bg-gray-100 rounded flex p-4 h-full items-center"><svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" class="text-indigo-500 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24"><path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path><path d="M22 4L12 14.01l-3-3"></path></svg><span class="title-font font-medium">We Have Large Parking Space</span></div></div><div class="p-2 sm:w-1/2 w-full hover:scale-110 transition"><div class="bg-gray-100 rounded flex p-4 h-full items-center"><svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" class="text-indigo-500 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24"><path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path><path d="M22 4L12 14.01l-3-3"></path></svg><span class="title-font font-medium">Have A Special Boat For Dolphin &amp; Snorkling Tour</span></div></div><div class="p-2 sm:w-1/2 w-full hover:scale-110 transition"><div class="bg-gray-100 rounded flex p-4 h-full items-center"><svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" class="text-indigo-500 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24"><path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path><path d="M22 4L12 14.01l-3-3"></path></svg><span class="title-font font-medium">There Are Toilets , Restrooms &amp; Coffe Shop on site.</span></div></div><div class="p-2 sm:w-1/2 w-full hover:scale-110 transition"><div class="bg-gray-100 rounded flex p-4 h-full items-center"><svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" class="text-indigo-500 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24"><path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path><path d="M22 4L12 14.01l-3-3"></path></svg><span class="title-font font-medium">Free Pick up for Hotel near Lovina Area.</span></div></div></div>`);
  _push(ssrRenderComponent(_component_Booknow, null, null, _parent));
  _push(`</div></section>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/advantage.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { __nuxt_component_2 as _, __nuxt_component_0 as a };
//# sourceMappingURL=advantage-bf7dadd4.mjs.map
