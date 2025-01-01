/* empty css                                */
import { a as createComponent, r as renderTemplate, d as renderComponent, m as maybeRenderHead, b as addAttribute } from '../chunks/astro/server_CSx5QtHz.mjs';
import 'kleur/colors';
import { $ as $$Icon } from '../chunks/ClientRouter_D75ElYGr.mjs';
/* empty css                                 */
import { $ as $$Card, a as $$MarcasCard } from '../chunks/MarcasCard_D4C-L2DX.mjs';
import { i as items_es } from '../chunks/categories_es_ubxGnyBe.mjs';
import 'clsx';
import { m as marcas_es } from '../chunks/marcas_es_C45d-Mp3.mjs';
import { $ as $$LayoutEs } from '../chunks/Layout_es_SsxG8k8l.mjs';
export { renderers } from '../renderers.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$FrasesEs = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate(_a || (_a = __template(["", `<section class="relative h-screen text-white flex items-center justify-center flex-col overflow-hidden bg-[url('/fotos/oceano.jpg')] md:bg-fixed md:bg-cover md:bg-center" id="seccion-frases_es" data-astro-cid-wgk6sxh5> <div class="z-10 text-center relative flex-grow flex items-center justify-center p-4 rounded-lg" data-astro-cid-wgk6sxh5> <h1 id="frases_es" class="sm:text-7xl md:text-6xl text-5xl font-bold opacity-1 text-gray-100 transition duration-500 transform" data-astro-cid-wgk6sxh5>
Todo lo que necesitas en la vida es agua y amor
</h1> </div> <a id="boton-abajo_es" class="bg-[#55a5ca] text-white rounded-full hover:scale-110 p-5 mb-10 flex justify-center items-center shadow-lg transition-all duration-300" data-astro-cid-wgk6sxh5> `, ' </a> </section>  <script>\n  const frases_es = [\n    "Sistemas de tratamiento de agua residenciales y comerciales",\n    "Somos la soluci\xF3n a tus problemas de agua",\n    "Todo lo que necesitas en la vida es agua y amor",\n  ];\n\n  let indiceFraseActual_es = 0;\n  const elementoFrase_es = document.getElementById("frases_es");\n\n  function cambiarFrase_es(indice) {\n    elementoFrase_es.classList.remove(\n      "opacity-0",\n      "animate-slide-in-right",\n      "animate-slide-out-left"\n    );\n\n    elementoFrase_es.classList.add("animate-slide-out-left");\n\n    setTimeout(() => {\n      elementoFrase_es.textContent = frases_es[indice];\n      elementoFrase_es.classList.remove("animate-slide-out-left");\n      elementoFrase_es.classList.add("animate-slide-in-right");\n    }, 500);\n  }\n\n  function siguienteFrase_es() {\n    indiceFraseActual_es = (indiceFraseActual_es + 1) % frases_es.length;\n    cambiarFrase_es(indiceFraseActual_es);\n  }\n\n  setInterval(siguienteFrase_es, 5000);\n  document.addEventListener("DOMContentLoaded", () =>\n    cambiarFrase_es(indiceFraseActual_es)\n  );\n\n  document.getElementById("boton-abajo_es").addEventListener("click", (e) => {\n    e.preventDefault(); // Evitar el comportamiento predeterminado del enlace\n    const seccionProductos = document.querySelector("#productos_es");\n    if (seccionProductos) {\n      seccionProductos.scrollIntoView({ behavior: "smooth" });\n    }\n  });\n<\/script>'])), maybeRenderHead(), renderComponent($$result, "Icon", $$Icon, { "name": "mdi:arrow-down", "size": 30, "class": "text-white", "data-astro-cid-wgk6sxh5": true }));
}, "/home/dan/all-for-water/src/components/Frases_es.astro", void 0);

const $$ProductosHomeEs = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section id="productos_es" class="bg-white flex justify-center items-center flex-col"> <h1 class="text-light-blue font-semibold text-3xl sm:text-5xl px-5 pt-[96px] text-center">
Nuestros Productos
</h1> <p class="max-w-[800px] text-custom-grey font-bold p-5 text-center">
La solución a todos sus problemas de tratamiento de agua. Con más de 20 años
    en el negocio, somos distribuidores oficiales de suministros para
    tratamiento de agua de CLACK, Toray, Hydranautics, CSM, VIQUA, CAT Pumps,
    Procon, Goulds, FLECK - Pentair, Resintech, y muchas más empresas.
</p> <div class="grid gap-10 w-3/4 mt-10 items-center justify-center mb-20 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"> ${items_es.map((item) => renderTemplate`<a${addAttribute(`/es/${item.nombre}`, "href")} class="w-full h-full"> ${renderComponent($$result, "Card", $$Card, { "imgSrc": item.fotoUrl, "text": item.nombre })} </a>`)} </div> </section>`;
}, "/home/dan/all-for-water/src/components/ProductosHome_es.astro", void 0);

const $$ContactUsEs = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="relative gap-3 sm:gap-4 p-3 text-white flex flex-col h-60 justify-center items-center"> <img src="/fotos/oceano.jpg" class="absolute inset-0 w-full h-full object-cover z-[-1]" loading="eager"> <h3 class="text-base sm:text-lg font-semibold text-center">
Haga su pedido por fax (954) 322-6699, email:
    sales@waterpurificationsupplies.com, o por teléfono:
</h3> <h2 class="text-xl sm:text-2xl font-bold">(954) 322-6666</h2> <h3 class="text-base sm:text-lg font-semibold">
Todos los pedidos se procesan en el día
</h3> <a href="/es/contacto"> <button class="bg-white rounded-full text-black px-6 py-3 hover:scale-105 transition-all sm:text-lg">CONTÁCTENOS</button> </a> </section>`;
}, "/home/dan/all-for-water/src/components/ContactUs_es.astro", void 0);

const $$MarcasEs = createComponent(($$result, $$props, $$slots) => {
  const uniqueMarca = [...new Set(marcas_es.map((marca) => marca))];
  return renderTemplate`${maybeRenderHead()}<section class="bg-white flex justify-center items-center flex-col"> <h2 class="text-light-blue font-semibold sm:text-5xl text-2xl px-5 pt-20 text-center">
Marcas Representadas
</h2> <p class="text-custom-grey font-light max-w-[800px] p-5 text-center">
Las mejores marcas a tu alcance: Matrikx® Carbon Block, Viqua®
    Sterilight® Sistemas UV, Membranas Toray®, Membranas de Ósmosis Inversa
    CSM®, Membranas Hydranautics®, Bombas Goulds®, Bombas Procon®, Bombas
    CAT®, Resina Purolite®, Resina Resintech®, Válvulas Clack®. ¡Todo lo que
    necesitas y mucho más!
</p> <div class="grid gap-5 w-3/4 mt-10 mb-20 justify-center items-center sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"> ${uniqueMarca.map((marca) => renderTemplate`${renderComponent($$result, "MarcasCard", $$MarcasCard, { "imgSrc": marca.fotoUrl, "link": "/es/marca" + (marca.nombre.toLowerCase() === "viqua" ? "/ULTRAVIOLET%20STERILIZERS" : marca.nombre.toLowerCase() === "matrikx" ? "/CARTRIDGES" : marca.nombre.toLowerCase() === "purolite" ? "/MEDIA%20&%20RESINS" : marca.nombre.toLowerCase() === "resintech" ? "/MEDIA%20&%20RESINS" : `/${marca.id}`) })}`)} </div> </section>`;
}, "/home/dan/all-for-water/src/components/Marcas_es.astro", void 0);

const $$MiembroEs = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="text-white flex flex-col sm:flex-row"> <div class="flex flex-col bg-[rgb(21,128,61)] gap-10 p-10 w-full justify-center items-center"> <p class="flex justify-center items-center sm:font-light font-medium text-lg sm:text-2xl text-center sm:px-40">
Distribuidor mayorista para todas sus necesidades de agua, estamos
      asociados con algunas de las marcas más grandes como viqua, clack, toray,
      csm, hydranautics, goulds, procon, cat y más. Ofrecemos una amplia gama de
      productos y soluciones para el tratamiento de agua, incluyendo filtros,
      sistemas de ósmosis inversa, bombas y accesorios. Nuestro equipo de
      expertos está comprometido a proporcionar el mejor servicio y soporte
      técnico para asegurar que sus necesidades de agua sean satisfechas de
      manera eficiente y efectiva.
</p> </div> <!-- <img
    src="/fotos/family_water.jpg"
    alt="WQA"
    class="sm:w-1/2 w-full h-auto object-cover"
    loading="eager"
  /> --> </section>`;
}, "/home/dan/all-for-water/src/components/Miembro_es.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "LanguageSwitch", null, { "client:only": "react", "url": "/", "idioma": "ES", "client:component-hydration": "only", "client:component-path": "@components/ui/LenguageSwitch", "client:component-export": "default" })} ${renderComponent($$result, "LayoutEs", $$LayoutEs, { "title": "All for Water." }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Frases_es", $$FrasesEs, {})} ${renderComponent($$result2, "ProductosHome_es", $$ProductosHomeEs, {})} ${renderComponent($$result2, "ContactUs_es", $$ContactUsEs, {})} ${renderComponent($$result2, "Marcas_es", $$MarcasEs, {})} ${renderComponent($$result2, "Miembro_es", $$MiembroEs, {})} ` })}`;
}, "/home/dan/all-for-water/src/pages/es/index.astro", void 0);

const $$file = "/home/dan/all-for-water/src/pages/es/index.astro";
const $$url = "/es";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
