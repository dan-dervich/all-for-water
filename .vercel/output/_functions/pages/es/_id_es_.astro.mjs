/* empty css                                   */
import { c as createAstro, a as createComponent, r as renderTemplate, d as renderComponent, m as maybeRenderHead, b as addAttribute, u as unescapeHTML } from '../../chunks/astro/server_CSx5QtHz.mjs';
import 'kleur/colors';
import { $ as $$LayoutEs } from '../../chunks/Layout_es_12h06j3-.mjs';
import { i as items_es } from '../../chunks/categories_es_ubxGnyBe.mjs';
import { $ as $$CardPorProducto } from '../../chunks/CardPorProducto_CdqDp4KJ.mjs';
import { p as productos_es } from '../../chunks/products_es_CQJZ-GMj.mjs';
import PocketBase from 'pocketbase';
import { i as items } from '../../chunks/categories_BS9PQIRL.mjs';
/* empty css                                      */
export { renderers } from '../../renderers.mjs';

const pb$3 = new PocketBase("https://allforwater.pockethost.io");

let pdfs_carta_es = [];

try {
  await pb$3.admins.authWithPassword("pedro@gmail.com", "Pedro12345");

  pdfs_carta_es = await pb$3.collection("pdfs_carta_es").getList(0, 100);
  pdfs_carta_es = pdfs_carta_es.items;

  // Añadir una URL completa para cada archivo
  pdfs_carta_es = pdfs_carta_es.map((item) => ({
    ...item,
    pdfUrl: `${pb$3.baseUrl}/api/files/${item.collectionId}/${item.id}/${item.pdf}`,
  }));
} catch (error) {
  console.error("Error al autenticarse o al obtener el registro:", error);
}

const pdfs_carta_es$1 = pdfs_carta_es;

const pb$2 = new PocketBase("https://allforwater.pockethost.io");

let pdfs_tabla_es = [];

try {
  await pb$2.admins.authWithPassword("pedro@gmail.com", "Pedro12345");

  pdfs_tabla_es = await pb$2.collection("pdfs_tabla_es").getList(0, 100);
  pdfs_tabla_es = pdfs_tabla_es.items;

  // Añadir una URL completa para cada archivo
  pdfs_tabla_es = pdfs_tabla_es.map((item) => ({
    ...item,
    pdfUrl: `${pb$2.baseUrl}/api/files/${item.collectionId}/${item.id}/${item.pdf}`,
  }));
} catch (error) {
  console.error("Error al autenticarse o al obtener el registro:", error);
}

const pdfs_tabla_es$1 = pdfs_tabla_es;

const pb$1 = new PocketBase("https://allforwater.pockethost.io");

let segmentos_es = [];

try {
  await pb$1.admins.authWithPassword("pedro@gmail.com", "Pedro12345");

  const records = await pb$1.collection("segmentos_es").getList(0, 40);
  segmentos_es = records.items.map((item) => {
    const collectionId = "segmentos_es"; // ID de la colección
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

let descripciones_foto_es = [];

try {
  await pb.admins.authWithPassword("pedro@gmail.com", "Pedro12345");

  const records = await pb.collection("descripcion_foto_es").getList(0, 50);

  descripciones_foto_es = records.items.map((item) => {
    const collectionId = "descripcion_foto_es"; // ID de la colección
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
  return items_es.map((item) => ({
    params: { id_es: item.nombre }
  }));
}
const $$idEs = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$idEs;
  const { id_es } = Astro2.params;
  const item = items_es.find((product) => product.nombre === id_es);
  const categoria_eng_id = item.ingles;
  let categoria_eng_nombre = items.find(
    (categoria) => categoria.id === categoria_eng_id
  );
  categoria_eng_nombre = categoria_eng_nombre ? categoria_eng_nombre.nombre : "";
  if (!item) {
    throw new Error(`Item with name ${id_es} not found`);
  }
  const filteredProductos = productos_es.filter(
    (product) => item.productos.includes(product.id)
  );
  const filteredSegmentos = filteredProductos.flatMap(
    (product) => segmentos_es.filter((segmento) => product.segmentos.includes(segmento.id))
  );
  const filteredDescFoto = descripciones_foto_es.filter(
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
  return renderTemplate`${renderComponent($$result, "LanguageSwitch", null, { "client:only": "react", "url": `/${categoria_eng_nombre}`, "idioma": "ES", "client:component-hydration": "only", "data-astro-cid-42zdewvm": true, "client:component-path": "@components/ui/LenguageSwitch", "client:component-export": "default" })} ${renderComponent($$result, "LayoutEs", $$LayoutEs, { "title": item.nombre, "data-astro-cid-42zdewvm": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="mt-[128px] bg-white flex flex-col items-center justify-center text-center sm:p-10" data-astro-cid-42zdewvm> <h1 class="text-light-blue font-semibold text-5xl px-5 text-center py-10" data-astro-cid-42zdewvm> ${(item.nombre_url || item.nombre).charAt(0).toUpperCase() + (item.nombre_url || item.nombre).slice(1)} </h1> <div class="sm:max-w-[1000px] max-w-full overflow-auto text-custom-grey font-light px-5 text-center text-sm sm:text-base flex flex-col justify-center items-center" data-astro-cid-42zdewvm> <div class="flex justify-center items-center md:flex-row flex-col gap-5" data-astro-cid-42zdewvm> ${filteredDescFoto[0] && renderTemplate`<img class="w-1/2 h-auto"${addAttribute(filteredDescFoto[0].fotoUrl, "src")} data-astro-cid-42zdewvm>`} <div data-astro-cid-42zdewvm>${unescapeHTML(descripcion || editedDescFoto[0])}</div> </div> </div> <div class="flex flex-col justify-center items-center" data-astro-cid-42zdewvm> <div data-astro-cid-42zdewvm>${unescapeHTML(editedDescFoto[1])}</div> </div> <div class="flex flex-wrap justify-center gap-5 m-5" data-astro-cid-42zdewvm> ${uniqueSegment.length > 0 && uniqueSegment.map(
    (segment) => segment.marca ? renderTemplate`<a${addAttribute(segment.id, "id")} class="segment-button hover:scale-105 transition-all shadow-md"${addAttribute("#segmento-" + segment.nombre, "href")} data-astro-cid-42zdewvm> <img${addAttribute(segment.fotoUrl, "src")}${addAttribute(segment.nombre, "alt")} class="w-auto h-24 object-cover rounded-md" data-astro-cid-42zdewvm> </a>` : renderTemplate`<a${addAttribute(segment.id, "id")} class="bg-blue-500 text-white py-2 px-4 rounded segment-button hover:scale-105 transition-all"${addAttribute(`#${segment.id}`, "href")} data-astro-cid-42zdewvm> ${segment.nombre} </a>`
  )} </div> <div class="w-full mt-10 mb-20" data-astro-cid-42zdewvm> ${uniqueSegment.length > 0 ? uniqueSegment.map((segment) => {
    const productosPorSegmento = filteredProductos.filter(
      (product) => product.segmentos.includes(segment.id)
    );
    if (productosPorSegmento.length > 0) {
      return renderTemplate`<section${addAttribute(segment.id, "id")} class="mb-10" data-astro-cid-42zdewvm> <h2${addAttribute("segmento-" + segment.nombre, "id")} class="text-light-blue font-semibold text-5xl px-5 text-center py-10" data-astro-cid-42zdewvm> ${segment.nombre} </h2> <div${addAttribute(`grid gap-5 ${productosPorSegmento.length === 1 ? "grid-cols-1 w-screen" : "grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center"}`, "class")} data-astro-cid-42zdewvm> ${productosPorSegmento.map((product) => {
        const productPdfs_tabla = pdfs_tabla_es$1.filter(
          (pdf) => product.pdfs_tabla.includes(pdf.id)
        );
        const productPdfs_carta = pdfs_carta_es$1.filter(
          (pdf) => product.pdfs_carta.includes(pdf.id)
        );
        return renderTemplate`${renderComponent($$result2, "CardPorProducto", $$CardPorProducto, { "key": product.id, "id": `producto-${product.id}`, "imgSrc": product.fotoUrl || "vacio", "text": product.nombre, "desc": product.descripcion, "pdfs_tabla": productPdfs_tabla, "pdfs_carta": productPdfs_carta, "className": "w-64 h-64", "data-astro-cid-42zdewvm": true })}`;
      })} </div> </section>`;
    }
    return null;
  }) : renderTemplate`<div${addAttribute(`${filteredProductos.length > 1 ? filteredProductos.length === 2 ? "grid grid-cols-2 gap-5 justify-center items-start w-full" : filteredProductos.length < 3 ? "flex flex-col gap-5 justify-center items-center w-full" : "grid grid-cols-1 xl:grid-cols-3 gap-5 justify-center items-start w-full" : "flex flex-col gap-5 justify-center items-center w-full"}`, "class")} data-astro-cid-42zdewvm> ${filteredProductos.map((product) => {
    const productPdfs_tabla = pdfs_tabla_es$1.filter(
      (pdf) => product.pdfs_tabla.includes(pdf.id)
    );
    const productPdfs_carta = pdfs_carta_es$1.filter(
      (pdf) => product.pdfs_carta.includes(pdf.id)
    );
    return renderTemplate`${renderComponent($$result2, "CardPorProducto", $$CardPorProducto, { "key": product.id, "id": `producto-${product.id}`, "imgSrc": product.fotoUrl || "vacio", "text": product.nombre, "desc": product.descripcion, "pdfs_tabla": productPdfs_tabla, "pdfs_carta": productPdfs_carta, "data-astro-cid-42zdewvm": true })}`;
  })} </div>`} </div> </section>  ` })}`;
}, "/home/dan/all-for-water/src/pages/es/[id_es].astro", void 0);

const $$file = "/home/dan/all-for-water/src/pages/es/[id_es].astro";
const $$url = "/es/[id_es]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$idEs,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
