import { c as createAstro, a as createComponent, r as renderTemplate, m as maybeRenderHead, b as addAttribute, u as unescapeHTML } from './astro/server_CSx5QtHz.mjs';
import 'kleur/colors';
import 'clsx';

const $$Astro = createAstro("https://allforwater.com");
const $$CardPorProducto = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$CardPorProducto;
  const { imgSrc } = Astro2.props;
  const { text } = Astro2.props;
  const { desc } = Astro2.props;
  const { pdfs_carta } = Astro2.props;
  const { pdfs_tabla } = Astro2.props;
  const { id } = Astro2.props;
  let index = 0;
  let isFirstRow = true;
  let editedDesc = desc;
  if (/<table/.test(desc)) {
    editedDesc = editedDesc.replace(
      "<thead>",
      '<thead class="bg-gray-200 border border-gray-300 border-t-1 border-l-1 border-r-1"'
    ).replace("<table", '<table class="text-center w-full"').replace(
      /<td/g,
      '<td class="border border-gray-300 border-t-1 border-l-1 border-r-1"'
    ).replace(
      /<td/g,
      '<td class="border border-gray-300 border-t-1 border-l-1 border-r-1"'
    ).replace("style", "").replace(/style="[^"]*"/g, "").replace("<ul", '<ul class="list-disc list-inside ml-5"').replace(/<li[^>]*>/g, '<li class="mb-2">').replace(/<p>/g, '<p class="mb-4">').replace(/&rdquo;/g, '"').replace(/&ldquo;/g, '"').replace(/<\/tr>/g, () => {
      if (pdfs_tabla.length > 0) {
        const content = isFirstRow ? "DATA SHEET" : pdfs_tabla[index]?.pdfUrl || "#";
        const linkText = isFirstRow ? "DATA SHEET" : "VIEW";
        const estilos = isFirstRow ? "" : "text-blue-500 hover:underline transition-all";
        if (!isFirstRow) index = (index + 1) % pdfs_tabla.length;
        isFirstRow = false;
        return `<th class="border border-gray-300 border-t-1 border-l-1 border-r-1">
            <a class=${estilos} href="${content}" target="_blank" rel="noopener noreferrer">${linkText}</a>
          </th></tr>`;
      } else {
        return "</tr>";
      }
    });
  }
  editedDesc = editedDesc.replace(/<p>/g, '<p class="max-w-80">');
  editedDesc = `<div class="flex justify-stretch items-stretch text-start flex-col w-full overflow-auto p-4 text-gray-800 font-medium leading-relaxed gap-5">${editedDesc}</div>`;
  if (pdfs_carta.length > 0) {
    editedDesc += "<br>";
    pdfs_carta.forEach((pdf) => {
      editedDesc += `<a class="text-blue-500 hover:underline transition-all flex justify-center items-center" href="${pdf.pdfUrl}" target="_blank" rel="noopener noreferrer">${pdf.texto_link}</a><br>`;
    });
  }
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(id, "id")} class="shadow-xl shadow-violeta/40 flex flex-col items-center justify-center rounded-xl sm:w-full w-screen h-full max-w-screen"> <img${addAttribute(imgSrc !== "/path-to-placeholder-image.png" ? imgSrc : "", "src")}${addAttribute(imgSrc === "/path-to-placeholder-image.png" ? "display: none;" : "", "style")} alt="Housing img" class="h-auto w-11/12 sm:max-w-96 max-w-52 m-5" loading="eager"> <h5 class="text-[#5C5D56] text-xl font-bold">${text}</h5> <p class="w-full">${unescapeHTML(editedDesc)}</p> </div>`;
}, "/home/dan/all-for-water/src/components/ui/CardPorProducto.astro", void 0);

export { $$CardPorProducto as $ };
