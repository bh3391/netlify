import { _ as __nuxt_component_0, a as __nuxt_component_1 } from './terms-adf15341.mjs';
import { _ as __nuxt_component_2 } from './advantage-bf7dadd4.mjs';
import { u as useSchemaOrg, d as defineProduct } from '../server.mjs';
import { defineComponent, useSSRContext } from 'vue';
import { u as useHead } from './composables-efde4aa1.mjs';
import { ssrRenderComponent } from 'vue/server-renderer';
import './nuxt-img-eeed5507.mjs';
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

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "packages",
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
      const _component_Price = __nuxt_component_0;
      const _component_Terms = __nuxt_component_1;
      const _component_Advantage = __nuxt_component_2;
      _push(`<!--[--><br><div class="divider text-2xl font-bold p-2 text-white">Our Package</div> <br>`);
      _push(ssrRenderComponent(_component_Price, null, null, _parent));
      _push(ssrRenderComponent(_component_Terms, null, null, _parent));
      _push(ssrRenderComponent(_component_Advantage, null, null, _parent));
      _push(`<!--]-->`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/packages.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=packages-9ddaf141.mjs.map
