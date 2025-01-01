/* empty css                                   */
import { c as createAstro, a as createComponent, r as renderTemplate, d as renderComponent, m as maybeRenderHead, b as addAttribute } from '../../chunks/astro/server_CSx5QtHz.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../../chunks/Layout_BKJpCN5H.mjs';
import { $ as $$CardPorProducto } from '../../chunks/CardPorProducto_CdqDp4KJ.mjs';
import { p as productos_es } from '../../chunks/products_es_CQJZ-GMj.mjs';
import { p as pdfs_tabla, a as pdfs_carta } from '../../chunks/pdfs_tabla_7lMXyJCa.mjs';
import { m as marcas_es } from '../../chunks/marcas_es_C45d-Mp3.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro("https://allforwater.com");
async function getStaticPaths() {
  return marcas_es.map((marca) => ({
    params: { marca: marca.id }
  }));
}
const $$marca = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$marca;
  const { marca } = Astro2.params;
  const marcaData = marcas_es.find((m) => m.id === marca);
  const marca_eng_id = marcaData.ingles ? marcaData.ingles : "";
  if (!marcaData) {
    throw new Error(`Marca con ID ${marca} no encontrada`);
  }
  const filteredProductos = productos_es.filter(
    (product) => product.segmentos.includes(marcaData.id)
  );
  return renderTemplate`${renderComponent($$result, "LanguageSwitch", null, { "client:only": "react", "url": `/${marca_eng_id}`, "idioma": "ES", "client:component-hydration": "only", "client:component-path": "@components/ui/LenguageSwitch", "client:component-export": "default" })} ${renderComponent($$result, "Layout", $$Layout, { "title": marcaData.nombre }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="mt-[96px] bg-white flex flex-col items-center justify-center text-center sm:p-10 p-2"> <h1 class="text-light-blue font-semibold text-5xl px-5 text-center py-10"> ${marcaData.nombre} </h1> <p class="max-w-[800px] text-custom-grey font-light px-5 text-center text-sm sm:text-base"> ${marcaData.descripcion} </p> <div class="flex flex-wrap gap-5 justify-center items-start"> ${filteredProductos.map((product) => {
    const productPdfs_tabla = pdfs_tabla.filter(
      (pdf) => product.pdfs_tabla.includes(pdf.id)
    );
    const productPdfs_carta = pdfs_carta.filter(
      (pdf) => product.pdfs_carta.includes(pdf.id)
    );
    return renderTemplate`<div${addAttribute(`${filteredProductos.length > 1 ? "w-fit" : "w-screen"}`, "class")}> ${renderComponent($$result2, "CardPorProducto", $$CardPorProducto, { "id": product.id, "imgSrc": product.fotoUrl || "vacio", "text": product.nombre, "desc": product.descripcion, "pdfs_tabla": productPdfs_tabla, "pdfs_carta": productPdfs_carta })} </div>`;
  })} </div> </section> ` })}`;
}, "/home/dan/all-for-water/src/pages/es/[marca].astro", void 0);

const $$file = "/home/dan/all-for-water/src/pages/es/[marca].astro";
const $$url = "/es/[marca]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$marca,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
