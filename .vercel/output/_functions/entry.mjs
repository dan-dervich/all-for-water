import { renderers } from './renderers.mjs';
import { c as createExports } from './chunks/entrypoint_DfhuNgbb.mjs';
import { manifest } from './manifest_DPsAjmIc.mjs';

const serverIslandMap = new Map([
]);;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/contact.astro.mjs');
const _page2 = () => import('./pages/es/contacto.astro.mjs');
const _page3 = () => import('./pages/es/_id_es_.astro.mjs');
const _page4 = () => import('./pages/es/_marca_.astro.mjs');
const _page5 = () => import('./pages/es.astro.mjs');
const _page6 = () => import('./pages/_id_.astro.mjs');
const _page7 = () => import('./pages/_marca_.astro.mjs');
const _page8 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/contact.astro", _page1],
    ["src/pages/es/contacto.astro", _page2],
    ["src/pages/es/[id_es].astro", _page3],
    ["src/pages/es/[marca].astro", _page4],
    ["src/pages/es/index.astro", _page5],
    ["src/pages/[id].astro", _page6],
    ["src/pages/[marca].astro", _page7],
    ["src/pages/index.astro", _page8]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "61e7a7f4-94b8-4448-9e36-8975dd03e8ec",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;

export { __astrojsSsrVirtualEntry as default, pageMap };
