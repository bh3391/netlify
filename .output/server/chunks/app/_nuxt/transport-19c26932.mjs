import { _ as __nuxt_component_0 } from './transport-8f05f886.mjs';
import { _ as __nuxt_component_1 } from './contact-34769667.mjs';
import { _ as __nuxt_component_2 } from './map-aa16e86c.mjs';
import { useSSRContext } from 'vue';
import { ssrRenderComponent } from 'vue/server-renderer';
import { _ as _export_sfc } from '../server.mjs';
import './nuxt-img-eeed5507.mjs';
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

const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_transport = __nuxt_component_0;
  const _component_Contact = __nuxt_component_1;
  const _component_Map = __nuxt_component_2;
  _push(`<!--[-->`);
  _push(ssrRenderComponent(_component_transport, null, null, _parent));
  _push(ssrRenderComponent(_component_Contact, null, null, _parent));
  _push(ssrRenderComponent(_component_Map, null, null, _parent));
  _push(`<!--]-->`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/transport.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const transport = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { transport as default };
//# sourceMappingURL=transport-19c26932.mjs.map
