/* empty css                                */
import { a as createComponent, r as renderTemplate, m as maybeRenderHead, d as renderComponent, b as addAttribute } from '../chunks/astro/server_CSx5QtHz.mjs';
import 'kleur/colors';
import 'clsx';
import { $ as $$Icon } from '../chunks/ClientRouter_D75ElYGr.mjs';
/* empty css                                 */
import { $ as $$Card, a as $$MarcasCard } from '../chunks/MarcasCard_D4C-L2DX.mjs';
import { i as items } from '../chunks/categories_BS9PQIRL.mjs';
import { m as marcas } from '../chunks/marcas_BY2rULPG.mjs';
import { $ as $$Layout } from '../chunks/Layout_Bj0oLuaU.mjs';
export { renderers } from '../renderers.mjs';

const $$ContactUs = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="relative gap-3 sm:gap-4 p-3 text-white flex flex-col h-60 justify-center items-center"> <img src="/fotos/oceano.jpg" class="absolute inset-0 w-full h-full object-cover z-[-1]" loading="eager"> <h3 class="text-base sm:text-lg font-semibold">
Place your order by fax, email or phone:
</h3> <h2 class="text-xl sm:text-2xl font-bold">(954) 322-6666</h2> <h3 class="text-base sm:text-lg font-semibold">
All orders are processed same day
</h3> <a href="/contact"> <button class="bg-white rounded-full text-black px-6 py-3 hover:scale-105 transition-all sm:text-lg">CONTACT US</button> </a> </section>`;
}, "/home/dan/all-for-water/src/components/ContactUs.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Frases = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate(_a || (_a = __template(["", `<section class="relative h-screen text-white flex items-center justify-center flex-col overflow-hidden bg-[url('/fotos/oceano.jpg')] md:bg-fixed md:bg-cover md:bg-center" id="section-frases" data-astro-cid-dnnxzc3h> <div class="z-10 text-center relative flex-grow flex items-center justify-center p-4 rounded-lg" data-astro-cid-dnnxzc3h> <h1 id="frases" class="sm:text-7xl md:text-6xl text-5xl font-bold opacity-1 text-gray-100 transition duration-500 transform" data-astro-cid-dnnxzc3h>
All you need in life is water and love
</h1> </div> <a id="button-down" class="bg-[#55a5ca] text-white rounded-full hover:scale-110 p-5 mb-10 flex justify-center items-center shadow-lg transition-all duration-300" data-astro-cid-dnnxzc3h> `, ' </a> </section>  <script>\n  const frases = [\n    "Residential and commercial water treatment systems",\n    "We are the solution to your water problems",\n    "All you need in life is water and love",\n  ];\n\n  let currentFraseIndex = 0;\n  const fraseElement = document.getElementById("frases");\n\n  function cambiarFrase(index) {\n    fraseElement.classList.remove(\n      "opacity-0",\n      "animate-slide-in-right",\n      "animate-slide-out-left"\n    );\n\n    fraseElement.classList.add("animate-slide-out-left");\n\n    setTimeout(() => {\n      fraseElement.textContent = frases[index];\n      fraseElement.classList.remove("animate-slide-out-left");\n      fraseElement.classList.add("animate-slide-in-right");\n    }, 500);\n  }\n\n  function nextFrase() {\n    currentFraseIndex = (currentFraseIndex + 1) % frases.length;\n    cambiarFrase(currentFraseIndex);\n  }\n\n  setInterval(nextFrase, 5000);\n  document.addEventListener("DOMContentLoaded", () =>\n    cambiarFrase(currentFraseIndex)\n  );\n\n  document.getElementById("button-down").addEventListener("click", (e) => {\n    e.preventDefault(); // Evitar el comportamiento predeterminado del enlace\n    const productosSection = document.querySelector("#productos");\n    if (productosSection) {\n      productosSection.scrollIntoView({ behavior: "smooth" });\n    }\n  });\n<\/script>'])), maybeRenderHead(), renderComponent($$result, "Icon", $$Icon, { "name": "mdi:arrow-down", "size": 30, "class": "text-white", "data-astro-cid-dnnxzc3h": true }));
}, "/home/dan/all-for-water/src/components/Frases.astro", void 0);

const $$ProductosHome = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section id="productos" class="bg-white flex justify-center items-center flex-col"> <h1 class="text-light-blue font-semibold text-3xl sm:text-5xl px-5 pt-[96px] text-center">
Our Products
</h1> <p class="max-w-[800px] text-custom-grey font-bold p-5 text-center">
The solution to all your water treatment problems. In business for over 20
    years, we are official distributors of water treatment supplies for CLACK,
    Toray, Hydranautics, CSM, VIQUA, CAT Pumps, Procon, Goulds, FLECK - Pentair,
    Resintech, and many more companies
</p> <div class="grid gap-10 w-3/4 mt-10 items-center justify-center mb-20 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"> ${items.map((item) => renderTemplate`<a${addAttribute(`/${item.nombre}`, "href")} class="w-full h-full"> ${renderComponent($$result, "Card", $$Card, { "imgSrc": item.fotoUrl, "text": item.nombre })} </a>`)} </div> </section>`;
}, "/home/dan/all-for-water/src/components/ProductosHome.astro", void 0);

const $$Marcas = createComponent(($$result, $$props, $$slots) => {
  const uniqueMarca = [...new Set(marcas.map((marca) => marca))];
  return renderTemplate`${maybeRenderHead()}<section class="bg-white flex justify-center items-center flex-col"> <h2 class="text-light-blue font-semibold sm:text-5xl text-2xl px-5 pt-20 text-center">
Brands we Represent
</h2> <p class="text-custom-grey font-light max-w-[800px] p-5 text-center">
Top brands at your fingertips: Matrikx® Carbon Block, Viqua® Sterilight®
    UV Systems, Toray® Membranes, CSM® Reverse Osmosis Membranes,
    Hydranautics® Membranes , Goulds Pumps®, Procon Pumps®, CAT Pumps®,
    Purolite® Resin, Resintech® Resin, Clack® Valves. All you need and much
    more!
</p> <div class="grid gap-5 w-3/4 mt-10 mb-20 justify-center items-center sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"> ${uniqueMarca.map((marca) => renderTemplate`${renderComponent($$result, "MarcasCard", $$MarcasCard, { "imgSrc": marca.fotoUrl, "link": "/marca" + (marca.nombre.toLowerCase() === "viqua" ? "/ULTRAVIOLET%20STERILIZERS" : marca.nombre.toLowerCase() === "matrikx" ? "/CARTRIDGES" : marca.nombre.toLowerCase() === "purolite" ? "/MEDIA%20&%20RESINS" : marca.nombre.toLowerCase() === "resintech" ? "/MEDIA%20&%20RESINS" : "/" + marca.id) })}`)} </div> </section>`;
}, "/home/dan/all-for-water/src/components/Marcas.astro", void 0);

const $$Miembro = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="text-white flex flex-col sm:flex-row"> <div class="flex flex-col bg-[rgb(21,128,61)] gap-10 p-10 w-full justify-center items-center"> <p class="flex justify-center items-center text-lg sm:text-2xl text-center sm:px-40">
Wholesale ditributer for all your water needs, we are associated to some
      of the biggest brands like, viqua, clack, toray, csm, hydranautics,
      goulds, procon, cat and more. We offer a wide range of products and
      solutions for water treatment, including filters, reverse osmosis systems,
      pumps, and accessories. Our team of experts is committed to providing the
      best service and technical support to ensure that your water needs are met
      efficiently and effectively.
</p> </div> <!-- <img
    src="/fotos/family_water.jpg"
    alt="WQA"
    class="sm:w-1/2 w-full h-auto object-cover"
    loading="eager"
  /> --> </section>`;
}, "/home/dan/all-for-water/src/components/Miembro.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "LanguageSwitch", null, { "client:only": "react", "url": "/es/", "idioma": "EN", "client:component-hydration": "only", "client:component-path": "@components/ui/LenguageSwitch", "client:component-export": "default" })} ${renderComponent($$result, "Layout", $$Layout, { "title": "All for Water." }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Frases", $$Frases, {})} ${renderComponent($$result2, "ProductosHome", $$ProductosHome, {})} ${renderComponent($$result2, "ContactUs", $$ContactUs, {})} ${renderComponent($$result2, "Marcas", $$Marcas, {})} ${renderComponent($$result2, "Miembro", $$Miembro, {})} ` })}`;
}, "/home/dan/all-for-water/src/pages/index.astro", void 0);

const $$file = "/home/dan/all-for-water/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
