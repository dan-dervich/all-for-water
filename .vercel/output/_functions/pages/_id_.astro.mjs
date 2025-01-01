/* empty css                                */
import { c as createAstro, a as createComponent, r as renderTemplate, d as renderComponent, m as maybeRenderHead, b as addAttribute, u as unescapeHTML } from '../chunks/astro/server_CSx5QtHz.mjs';
import 'kleur/colors';
import { p as productos, $ as $$Layout } from '../chunks/Layout_BKJpCN5H.mjs';
import { i as items } from '../chunks/categories_BS9PQIRL.mjs';
import { $ as $$CardPorProducto } from '../chunks/CardPorProducto_CdqDp4KJ.mjs';
import { p as pdfs_tabla, a as pdfs_carta } from '../chunks/pdfs_tabla_7lMXyJCa.mjs';
import PocketBase from 'pocketbase';
import { i as items_es } from '../chunks/categories_es_ubxGnyBe.mjs';
/* empty css                                */
export { renderers } from '../renderers.mjs';

const pb$1 = new PocketBase("https://allforwater.pockethost.io");

let segmentos = [];

try {
  await pb$1.admins.authWithPassword("pedro@gmail.com", "Pedro12345");

  const records = await pb$1.collection("segmentos").getList(0, 40);
  segmentos = records.items.map((item) => {
    const collectionId = "segmentos"; // ID de la colección
    const recordId = item.id; // ID del registro actual
    const firstFilename = item.foto;

    // Construimos la URL manualmente
    const imageUrl = firstFilename
      ? `${pb$1.baseUrl}/api/files/${collectionId}/${recordId}/${firstFilename}`
      : "/path-to-placeholder-image.png"; // Placeholder en caso de que no haya imagen

    return {
      ...item,
      fotoUrl: imageUrl, // Agregamos la URL de la imagen al objeto item
      nombre: item.nombre.toUpperCase(), // Convertir el nombre a mayúsculas
    };
  });
} catch (error) {
  console.error("Error al autenticarse o al obtener el registro:", error);
}

const pb = new PocketBase("https://allforwater.pockethost.io");

let descripciones_foto = [];

try {
  await pb.admins.authWithPassword("pedro@gmail.com", "Pedro12345");

  const records = await pb.collection("descripcion_foto").getList(0, 50);

  descripciones_foto = records.items.map((item) => {
    const collectionId = "descripcion_foto"; // ID de la colección
    const recordId = item.id; // ID del registro actual
    const firstFilename = item.foto;

    // Construimos la URL manualmente
    const imageUrl = firstFilename
      ? `${pb.baseUrl}/api/files/${collectionId}/${recordId}/${firstFilename}`
      : "/path-to-placeholder-image.png"; // Placeholder en caso de que no haya imagen

    return {
      ...item,
      fotoUrl: imageUrl, // Agregamos la URL de la imagen al objeto item
    };
  });
} catch (error) {
  console.error("Error al autenticarse o al obtener el registro:", error);
}

const $$Astro = createAstro("https://allforwater.com");
async function getStaticPaths() {
  return items.map((item) => ({
    params: { id: item.nombre }
  }));
}
const $$id = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$id;
  const { id } = Astro2.params;
  const item = items.find((product) => product.nombre === id);
  if (!item) {
    throw new Error(`Item with name ${id} not found`);
  }
  const filteredProductos = productos.filter(
    (product) => item.productos.includes(product.id)
  );
  const categoria_es_id = item.espanol;
  let categoria_es_nombre = items_es.find(
    (categoria) => categoria.id === categoria_es_id
  );
  categoria_es_nombre = categoria_es_nombre ? categoria_es_nombre.nombre : "";
  const filteredSegmentos = filteredProductos.flatMap(
    (product) => segmentos.filter((segmento) => product.segmentos.includes(segmento.id))
  );
  const filteredDescFoto = descripciones_foto.filter(
    (desc) => item.desc.includes(desc.id)
  );
  const uniqueSegment = [
    ...new Set(filteredSegmentos.map((segmento) => segmento))
  ];
  const descripcion = item.descripcion;
  let editedDescFoto = filteredDescFoto.length > 0 ? filteredDescFoto[0].descripcion : "";
  editedDescFoto = editedDescFoto.split("</div>");
  editedDescFoto[0] = editedDescFoto[0].replace(
    "<div>",
    "<div class='flex flex-col justify-center text-center items-center'>"
  );
  if (editedDescFoto[1] == void 0) {
    editedDescFoto[1] = ``;
  }
  editedDescFoto[1] = `<div class="flex justify-start items-start flex-col w-full p-4 text-gray-800 font-medium leading-relaxed gap-5">${editedDescFoto[1]}</div>`;
  if (/<table/.test(editedDescFoto[1])) {
    editedDescFoto[1] = editedDescFoto[1].replace(
      "<thead>",
      '<thead class="bg-[#045b79] text-white font-normal border border-gray-300 border-t-1 border-l-1 border-r-1"'
    ).replace(
      "<table",
      '<table class="text-center justify-center items-center w-[1000px] h-[400px] font-normal"'
    ).replace(
      /<td/g,
      '<td class="border border-gray-300 border-t-1 border-l-1 border-r-1"'
    ).replace(/<\/thead>/, "</thead>");
  }
  editedDescFoto[1] = `<div class="flex justify-start items-start flex-col w-full p-4 text-gray-800 font-medium leading-relaxed gap-5">${editedDescFoto[1]}</div>`;
  return renderTemplate`${renderComponent($$result, "LanguageSwitch", null, { "client:only": "react", "url": `/es/${categoria_es_nombre}`, "idioma": "EN", "client:component-hydration": "only", "data-astro-cid-p5zaeqd4": true, "client:component-path": "@components/ui/LenguageSwitch", "client:component-export": "default" })} ${renderComponent($$result, "Layout", $$Layout, { "title": item.nombre, "data-astro-cid-p5zaeqd4": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="mt-[128px] bg-white flex flex-col items-center justify-center text-center sm:p-10" data-astro-cid-p5zaeqd4> <h1 class="text-light-blue font-semibold text-5xl px-5 text-center py-10" data-astro-cid-p5zaeqd4> ${(item.nombre_url || item.nombre).charAt(0).toUpperCase() + (item.nombre_url || item.nombre).slice(1)} </h1> <div class="sm:max-w-[1000px] max-w-full text-custom-grey font-light px-5 text-center text-sm sm:text-base flex flex-col justify-center items-center" data-astro-cid-p5zaeqd4> <div class="flex justify-center items-center md:flex-row flex-col gap-5" data-astro-cid-p5zaeqd4> ${filteredDescFoto[0] && renderTemplate`<img class="w-1/2 h-auto"${addAttribute(filteredDescFoto[0].fotoUrl, "src")} data-astro-cid-p5zaeqd4>`} <div data-astro-cid-p5zaeqd4>${unescapeHTML(descripcion || editedDescFoto[0])}</div> </div> </div> <div class="flex flex-col justify-center items-center" data-astro-cid-p5zaeqd4> <div data-astro-cid-p5zaeqd4>${unescapeHTML(editedDescFoto[1])}</div> </div> <div class="flex flex-wrap justify-center gap-5 m-5" data-astro-cid-p5zaeqd4> ${uniqueSegment.length > 0 && uniqueSegment.map(
    (segment) => segment.marca ? renderTemplate`<a class="segment-button hover:scale-105 transition-all shadow-md"${addAttribute("#segmento-" + segment.nombre, "href")} data-astro-cid-p5zaeqd4> <img${addAttribute(segment.fotoUrl, "src")}${addAttribute(segment.nombre, "alt")} class="w-auto h-24 object-cover rounded-md" data-astro-cid-p5zaeqd4> </a>` : renderTemplate`<a class="bg-blue-500 text-white py-2 px-4 rounded segment-button hover:scale-105 transition-all flex items-center justify-center"${addAttribute(`#${segment.id}`, "href")} data-astro-cid-p5zaeqd4> ${segment.nombre} </a>`
  )} </div> <div class="w-full mt-10 mb-20" data-astro-cid-p5zaeqd4> ${uniqueSegment.length > 0 ? uniqueSegment.map((segment) => {
    const productosPorSegmento = filteredProductos.filter(
      (product) => product.segmentos.includes(segment.id)
    );
    if (productosPorSegmento.length > 0) {
      return renderTemplate`<section${addAttribute(segment.id, "id")} class="mb-10" data-astro-cid-p5zaeqd4> <h2${addAttribute("segmento-" + segment.nombre, "id")} class="text-light-blue font-semibold text-5xl px-5 text-center py-10" data-astro-cid-p5zaeqd4> ${segment.nombre} </h2> <div${addAttribute(`${productosPorSegmento.length === 1 ? "w-full" : "grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center"}`, "class")} data-astro-cid-p5zaeqd4> ${productosPorSegmento.map((product) => {
        const productPdfs_tabla = pdfs_tabla.filter(
          (pdf) => product.pdfs_tabla.includes(pdf.id)
        );
        const productPdfs_carta = pdfs_carta.filter(
          (pdf) => product.pdfs_carta.includes(pdf.id)
        );
        return renderTemplate`${renderComponent($$result2, "CardPorProducto", $$CardPorProducto, { "key": product.id, "id": `producto-${product.id}`, "imgSrc": product.fotoUrl || "vacio", "text": product.nombre, "desc": product.descripcion, "pdfs_tabla": productPdfs_tabla, "pdfs_carta": productPdfs_carta, "className": "w-64 h-64", "data-astro-cid-p5zaeqd4": true })}`;
      })} </div> </section>`;
    }
    return null;
  }) : renderTemplate`<div${addAttribute(`${filteredProductos.length > 1 ? filteredProductos.length === 2 ? "grid grid-cols-2 gap-5 justify-center items-start w-full" : filteredProductos.length < 3 ? "flex flex-col gap-5 justify-center items-center w-full" : "grid grid-cols-1 xl:grid-cols-3 gap-5 justify-center items-start w-full" : "flex flex-col gap-5 justify-center items-center w-full"}`, "class")} data-astro-cid-p5zaeqd4> ${filteredProductos.map((product) => {
    const productPdfs_tabla = pdfs_tabla.filter(
      (pdf) => product.pdfs_tabla.includes(pdf.id)
    );
    const productPdfs_carta = pdfs_carta.filter(
      (pdf) => product.pdfs_carta.includes(pdf.id)
    );
    return renderTemplate`${renderComponent($$result2, "CardPorProducto", $$CardPorProducto, { "key": product.id, "id": `producto-${product.id}`, "imgSrc": product.fotoUrl || "vacio", "text": product.nombre, "desc": product.descripcion, "pdfs_tabla": productPdfs_tabla, "pdfs_carta": productPdfs_carta, "data-astro-cid-p5zaeqd4": true })}`;
  })} </div>`} </div> </section>  ` })}`;
}, "/home/dan/all-for-water/src/pages/[id].astro", void 0);

const $$file = "/home/dan/all-for-water/src/pages/[id].astro";
const $$url = "/[id]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$id,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
