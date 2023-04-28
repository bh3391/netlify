import { _ as __nuxt_component_1$1 } from './nuxt-img-eeed5507.mjs';
import { useSSRContext, mergeProps } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
import { _ as _export_sfc } from '../server.mjs';

const _sfc_main$1 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  const _component_nuxt_img = __nuxt_component_1$1;
  _push(`<!--[--><div class="carousel w-full"><div id="item1" class="carousel-item w-full">`);
  _push(ssrRenderComponent(_component_nuxt_img, {
    loading: "lazy",
    alt: "Dolphin Watching Tour",
    width: "1250px",
    height: "567px",
    class: "object-cover object-center h-full w-full",
    src: "/1.webp"
  }, null, _parent));
  _push(`</div><div id="item2" class="carousel-item w-full">`);
  _push(ssrRenderComponent(_component_nuxt_img, {
    loading: "lazy",
    alt: "Swiming With Dolphin",
    width: "1250px",
    height: "567px",
    class: "object-cover object-center h-full w-full",
    src: "/2.webp"
  }, null, _parent));
  _push(`</div><div id="item3" class="carousel-item w-full">`);
  _push(ssrRenderComponent(_component_nuxt_img, {
    loading: "lazy",
    alt: "Snorkling at Lovina",
    width: "1250px",
    height: "567px",
    class: "object-cover object-center h-full w-full",
    src: "/3.webp"
  }, null, _parent));
  _push(`</div><div id="item4" class="carousel-item w-full">`);
  _push(ssrRenderComponent(_component_nuxt_img, {
    loading: "lazy",
    alt: "Fishing At Lovina",
    width: "1250px",
    height: "567px",
    class: "object-cover object-center h-full w-full",
    src: "/4.webp"
  }, null, _parent));
  _push(`</div></div><div class="flex justify-center w-full py-2 gap-2"><a href="#item1" class="btn btn-xs">1</a><a href="#item2" class="btn btn-xs">2</a><a href="#item3" class="btn btn-xs">3</a><a href="#item4" class="btn btn-xs">4</a></div><!--]-->`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/profilecarousel.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_Profilecarousel = __nuxt_component_0;
  const _component_nuxt_img = __nuxt_component_1$1;
  const _component_NuxtImg = __nuxt_component_1$1;
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "text-gray-900 body-font" }, _attrs))}><div class="container px-5 py-24 mx-auto flex flex-col"><div class="lg:w-4/6 mx-auto"><div class="rounded-lg h-auto overflow-hidden">`);
  _push(ssrRenderComponent(_component_Profilecarousel, null, null, _parent));
  _push(`</div><div class="flex flex-col sm:flex-row mt-10"><div class="sm:w-1/3 text-center sm:pr-8 sm:py-8"><div class="w-full inline-flex items-center justify-center text-gray-400">`);
  _push(ssrRenderComponent(_component_nuxt_img, {
    class: "rounded-full",
    loading: "lazy",
    width: "200",
    height: "200",
    format: "webp",
    src: "/kadek.webp",
    alt: "Foto Pak Kadek"
  }, null, _parent));
  _push(`</div><div class="flex flex-col items-center text-justify justify-center"><h2 class="font-medium title-font mt-4">Kadek Suara</h2><div class="w-12 h-1 bg-primary rounded mt-2 mb-4"></div><p class="text-lg">Introducing Captain Kadek!!<br> Lovina Ocean Tour is a Professional Dolphin Tour Package Service Provider @ Lovina Beach, Singaraja-Bali, Captain Kadek has experience providing Dolphin Tour services since 1988. <br>We are committed to provide the best service to our customers. Apart from being a Dolphin tour service provider, we also provide Snorkeling and Diving services at Lovina Beach</p></div></div><div class="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-justify"><p class="leading-relaxed text-xl mb-4">The Lovina area is famous as a place to watch dolphin shows. You can immediately witness the behavior of very friendly dolphins in the middle of the sea. Of course this will be an interesting vacation experience for you. To be able to see the dolphin attraction, you have to leave at 6 am before sunrise. Why? Because the dolphins in this area only appear between 6:30 am to 10 am. At that hour, dozens of dolphins will naturally show their activities. Some are just swimming on the surface of the water, some are jumping around. Of course this will amaze the beauty of these marine animals. Usually the tourists have gathered on the beach at around 5.30 WITA to go to the middle of the sea. The boat will take you about one to two kilometers out to sea to where dolphins usually appear.</p><a href="/lovina" class="text-gray-800 bg-default text-xl first-letter:inline-flex items-center underline">Learn More About Lovina&gt;&gt;&gt; <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7"></path></svg></a></div></div>`);
  _push(ssrRenderComponent(_component_NuxtImg, {
    src: "/banner.webp",
    loading: "lazy",
    width: "1200",
    height: "500",
    format: "webp",
    alt: "main banner",
    class: "my-5"
  }, null, _parent));
  _push(`</div></div></section>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/profile.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { __nuxt_component_1 as _ };
//# sourceMappingURL=profile-d64d634e.mjs.map
