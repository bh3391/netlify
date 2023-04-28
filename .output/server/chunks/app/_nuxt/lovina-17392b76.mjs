import { _ as __nuxt_component_1$2 } from './nuxt-img-eeed5507.mjs';
import { useSSRContext, mergeProps } from 'vue';
import { ssrRenderComponent, ssrRenderAttrs } from 'vue/server-renderer';
import { _ as _export_sfc } from '../server.mjs';
import { _ as __nuxt_component_1 } from './profile-d64d634e.mjs';
import { _ as __nuxt_component_1$1 } from './contact-34769667.mjs';
import './composables-efde4aa1.mjs';
import 'ofetch';
import 'hookable';
import 'unctx';
import 'unhead';
import '@unhead/shared';
import '@unhead/dom';
import '@unhead/ssr';
import 'vue-router';
import 'h3';
import 'ufo';
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

const _sfc_main$1 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  const _component_nuxt_img = __nuxt_component_1$2;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "container lg:w-2/3 text-gray-800 mx-auto text-justify p-5" }, _attrs))}><h1 class="my-10 font-bold font-sans text-3xl">Exploring the Natural Beauty and Charm of Lovina, Bali</h1>`);
  _push(ssrRenderComponent(_component_nuxt_img, {
    width: "100%",
    height: "auto",
    class: "my-5",
    src: "/dolphin1.webp",
    loading: "lazy"
  }, null, _parent));
  _push(`<div class="text-xl p-1"><p>If you&#39;re looking for a peaceful and laid-back holiday destination in Bali, then Lovina might just be the perfect place for you. Located on the north coast of the island, Lovina is a small coastal town that offers stunning natural scenery, a tranquil atmosphere, and a range of activities and attractions to suit all interests.</p><br><p>One of the most distinctive features of Lovina is its black volcanic sand beaches, which create a striking contrast with the turquoise waters of the Bali Sea. The beaches here are less crowded than those in the more popular tourist destinations in the south of Bali, making them ideal for those who want to relax and soak up the sun in a quiet and serene environment. Some of the most popular beaches in Lovina include Lovina Beach, Pemaron Beach, and Anturan Beach.</p><br><p>While the beaches are certainly one of the highlights of Lovina, there&#39;s much more to see and do in this charming town. One of the most popular activities here is dolphin watching, as Lovina is home to a resident population of dolphins that can often be seen swimming and playing in the waters just off the coast. Visitors can take a boat tour to see the dolphins up close, and it&#39;s a truly magical experience to watch these intelligent and playful creatures in their natural habitat.</p><br><p>Another popular attraction in Lovina is the Banjar Hot Springs, which are located about 10 kilometers from the town center. These natural hot springs are set in a lush tropical garden and offer a relaxing and therapeutic experience for visitors. The water here is believed to have healing properties and is said to be beneficial for a range of health conditions.</p><br><p>If you&#39;re a nature lover, then you&#39;ll be pleased to know that Lovina is home to several stunning waterfalls that are well worth a visit. Some of the most popular waterfalls in the area include Gitgit Waterfall, Aling-Aling Waterfall, and Sekumpul Waterfall. These waterfalls are surrounded by lush greenery and offer a refreshing escape from the heat of the day.</p><br><p>For those interested in culture and history, Lovina has a number of temples and historical sites that are worth exploring. One of the most important temples in the area is the Brahma Vihara Arama, which is Bali&#39;s largest Buddhist temple. This temple features a stunning collection of ornate buildings, statues, and gardens that offer a glimpse into Bali&#39;s rich cultural heritage.</p><br><p>Lovina also has a thriving local market where visitors can browse and shop for souvenirs, handicrafts, and local produce. The market is a great place to soak up the local atmosphere and get a taste of everyday life in Bali.</p><br><p>When it comes to accommodation, Lovina has a range of options to suit all budgets and preferences. From luxurious beachfront villas to budget-friendly guesthouses, there&#39;s something for everyone here. Many of the accommodations in Lovina are set in lush tropical gardens and offer stunning views of the Bali Sea.</p><br><p>In terms of dining options, Lovina has a range of restaurants and cafes that offer both local and international cuisine. Seafood is a specialty here, with many restaurants serving fresh fish and other seafood dishes that are caught daily in the waters off the coast.</p><br><p>Overall, Lovina is a wonderful destination for those seeking a more relaxed and tranquil holiday experience in Bali. Whether you want to soak up the sun on the beach, explore the natural beauty of the area, or immerse yourself in the local culture and history, Lovina has something to offer everyone. So why not consider adding this charming town to your Bali itinerary and discover all that it has to offer for yourself?</p></div></div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/lovina.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_lovina = __nuxt_component_0;
  const _component_Profile = __nuxt_component_1;
  const _component_Contact = __nuxt_component_1$1;
  _push(`<!--[-->`);
  _push(ssrRenderComponent(_component_lovina, null, null, _parent));
  _push(ssrRenderComponent(_component_Profile, null, null, _parent));
  _push(ssrRenderComponent(_component_Contact, null, null, _parent));
  _push(`<!--]-->`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/lovina.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const lovina = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { lovina as default };
//# sourceMappingURL=lovina-17392b76.mjs.map
