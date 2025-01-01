import { a as createComponent, r as renderTemplate, d as renderComponent, m as maybeRenderHead, c as createAstro, e as renderScript, g as renderHead, h as renderSlot } from './astro/server_CSx5QtHz.mjs';
import 'kleur/colors';
import { $ as $$Icon, a as $$ClientRouter } from './ClientRouter_D75ElYGr.mjs';
import { i as items } from './categories_BS9PQIRL.mjs';
import { jsxs, jsx } from 'react/jsx-runtime';
import { useState, useRef, useEffect } from 'react';
import PocketBase from 'pocketbase';
/* empty css                        */

const pb = new PocketBase("https://allforwater.pockethost.io");

let productos = [];

try {
  await pb.admins.authWithPassword("pedro@gmail.com", "Pedro12345");

  const records = await pb.collection("productos").getList(0, 250);
  productos = records.items.map((item) => {
    const collectionId = "productos"; // ID de la colección
    const recordId = item.id; // ID del registro actual
    const firstFilename = item.foto;

    // Construimos la URL manualmente
    const imageUrl = firstFilename
      ? `${pb.baseUrl}/api/files/${collectionId}/${recordId}/${firstFilename}`
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

const SearchComponent$1 = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [isResultsVisible, setIsResultsVisible] = useState(false);
  const searchRef = useRef(null);
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setIsResultsVisible(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  const handleSearch = (event) => {
    const term = event.target.value;
    setSearchTerm(term);
    if (term.length > 0) {
      const filteredProductos = productos.filter(
        (product) => product.nombre.toLowerCase().includes(term.toLowerCase())
      );
      setSearchResults(filteredProductos);
      setIsResultsVisible(true);
    } else {
      setSearchResults([]);
      setIsResultsVisible(false);
    }
  };
  const findCategoryByProductId = (productId) => {
    for (const category of items) {
      if (category.productos && category.productos.includes(productId)) {
        return category;
      }
    }
    return null;
  };
  const getCategoryName = (productId) => {
    const category = findCategoryByProductId(productId);
    return category ? category.nombre.toUpperCase() : "UNCATEGORIZED";
  };
  const handleProductClick = (product) => {
    const category = findCategoryByProductId(product.id);
    if (category) {
      window.location.href = category.nombre.toUpperCase();
    }
  };
  return /* @__PURE__ */ jsxs("div", { ref: searchRef, className: "relative", children: [
    /* @__PURE__ */ jsx(
      "input",
      {
        type: "text",
        placeholder: "Search...",
        value: searchTerm,
        onChange: handleSearch,
        className: "px-3 py-2 max-w-32 sm:max-w-60 rounded-full text-black focus:outline-none transition-all",
        onFocus: () => setIsResultsVisible(true),
        "aria-label": "Search products"
      }
    ),
    isResultsVisible && searchResults.length > 0 && /* @__PURE__ */ jsx(
      "div",
      {
        className: "absolute bg-white text-black mt-2 rounded-md shadow-lg w-full max-h-64 overflow-y-auto z-50",
        role: "listbox",
        "aria-label": "Search results",
        children: searchResults.map((product) => /* @__PURE__ */ jsxs(
          "div",
          {
            className: "p-2 hover:bg-gray-100 cursor-pointer flex items-center",
            onClick: () => handleProductClick(product),
            role: "option",
            tabIndex: 0,
            onKeyPress: (e) => {
              if (e.key === "Enter" || e.key === " ") {
                handleProductClick(product);
              }
            },
            children: [
              /* @__PURE__ */ jsx("img", { src: product.fotoUrl, alt: "", className: "h-10 w-10 object-cover mr-2" }),
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx("div", { children: product.nombre }),
                /* @__PURE__ */ jsx("div", { className: "text-xs text-gray-500", children: getCategoryName(product.id) })
              ] })
            ]
          },
          product.id
        ))
      }
    )
  ] });
};

const SearchComponent = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [isResultsVisible, setIsResultsVisible] = useState(false);
  const searchRef = useRef(null);
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setIsResultsVisible(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  const handleSearch = (event) => {
    const term = event.target.value;
    setSearchTerm(term);
    if (term.length > 0) {
      const filteredProductos = productos.filter(
        (product) => product.nombre.toLowerCase().includes(term.toLowerCase())
      );
      setSearchResults(filteredProductos);
      setIsResultsVisible(true);
    } else {
      setSearchResults([]);
      setIsResultsVisible(false);
    }
  };
  const findCategoryByProductId = (productId) => {
    for (const category of items) {
      if (category.productos && category.productos.includes(productId)) {
        return category;
      }
    }
    return null;
  };
  const getCategoryName = (productId) => {
    const category = findCategoryByProductId(productId);
    return category ? category.nombre.toUpperCase() : "UNCATEGORIZED";
  };
  const handleProductClick = (product) => {
    const category = findCategoryByProductId(product.id);
    if (category) {
      window.location.href = category.nombre.toUpperCase();
    }
  };
  return /* @__PURE__ */ jsxs("div", { ref: searchRef, className: "relative", children: [
    /* @__PURE__ */ jsx(
      "input",
      {
        type: "text",
        placeholder: "Search...",
        value: searchTerm,
        onChange: handleSearch,
        className: "px-3 py-2 max-w-32 sm:max-w-60 rounded-full text-black focus:outline-none transition-all",
        onFocus: () => setIsResultsVisible(true),
        "aria-label": "Search products"
      }
    ),
    isResultsVisible && searchResults.length > 0 && /* @__PURE__ */ jsx(
      "div",
      {
        className: "absolute bg-white text-black mt-2 rounded-md shadow-lg w-full max-h-64 overflow-y-auto z-50",
        role: "listbox",
        "aria-label": "Search results",
        children: searchResults.map((product) => /* @__PURE__ */ jsx(
          "div",
          {
            className: "p-2 hover:bg-gray-100 cursor-pointer flex items-center",
            onClick: () => handleProductClick(product),
            role: "option",
            tabIndex: 0,
            onKeyPress: (e) => {
              if (e.key === "Enter" || e.key === " ") {
                handleProductClick(product);
              }
            },
            children: /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("div", { children: product.nombre }),
              /* @__PURE__ */ jsx("div", { className: "text-xs text-gray-500", children: getCategoryName(product.id) })
            ] })
          },
          product.id
        ))
      }
    )
  ] });
};

var __freeze$1 = Object.freeze;
var __defProp$1 = Object.defineProperty;
var __template$1 = (cooked, raw) => __freeze$1(__defProp$1(cooked, "raw", { value: __freeze$1(cooked.slice()) }));
var _a$1;
const $$Header = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate(_a$1 || (_a$1 = __template$1(["", '<header id="header" class="fixed top-0 w-full z-50 justify-center flex mt-5" data-astro-cid-3ef6ksr2> <div class="px-5 bg-light-blue/60 from-light-blue to-transparent text-white rounded-full w-11/12" data-astro-cid-3ef6ksr2> <div class="flex justify-between items-center relative text-white" data-astro-cid-3ef6ksr2> <div class="flex justify-center items-center" data-astro-cid-3ef6ksr2> <div class="text-xl" data-astro-cid-3ef6ksr2> <a id="logo" href="/" data-astro-cid-3ef6ksr2> <img src="/fotos/logo.png" alt="Logo" class="sm:h-24 sm:w-auto h-12 w-auto rounded-full" data-astro-cid-3ef6ksr2> </a> </div> <h1 class="hidden sm:flex text-2xl font-edu font-medium" data-astro-cid-3ef6ksr2>\nAll For Water\n</h1> </div> <div class="flex flex-row gap-5 items-center px-5" data-astro-cid-3ef6ksr2> <nav class="hidden md:flex gap-x-5" data-astro-cid-3ef6ksr2> <a id="home" href="/" class="transition-all nav-links hover:cursor-pointer" data-astro-cid-3ef6ksr2>HOME</a> <a id="contact" href="/contact" class="transition-all nav-links" data-astro-cid-3ef6ksr2>CONTACT US</a> ', ' </nav> <div class="relative hidden sm:flex" data-astro-cid-3ef6ksr2> ', ` </div> <button id="menu-button" class="hover:cursor-pointer md:hidden flex right-3" onclick="sidebar.classList.toggle('translate-x-full')" data-astro-cid-3ef6ksr2> `, ` </button> </div> </div> <aside id="sidebar" class="fixed z-50 top-0 right-0 w-64 h-full bg-light-blue text-white p-4 transform transition-transform translate-x-full duration-300" data-astro-cid-3ef6ksr2> <button id="close-button" class="flex pb-10 pt-5" onclick="sidebar.classList.toggle('translate-x-full')" data-astro-cid-3ef6ksr2> `, ' </button> <nav class="flex flex-col gap-y-10 justify-center items-center" data-astro-cid-3ef6ksr2> <div class="relative" data-astro-cid-3ef6ksr2> ', ` </div> <a onclick="sidebar.classList.toggle('translate-x-full')" id="home-sidebar" class="transition-all nav-links hover:cursor-pointer" href="/" data-astro-cid-3ef6ksr2>HOME</a> <a onclick="sidebar.classList.toggle('translate-x-full')" id="contact-sidebar" href="/contact" class="transition-all nav-links" data-astro-cid-3ef6ksr2>CONTACT US</a> `, ' </nav> </aside> </div> </header> <!-- <script>\n  const home = document.getElementById("home");\n  home?.addEventListener("click", () => {\n    window.scrollTo({\n      top: 0,\n      behavior: "smooth",\n    });\n  });\n\n  const homeSidebar = document.getElementById("home-sidebar");\n  homeSidebar?.addEventListener("click", () => {\n    window.scrollTo({\n      top: 0,\n      behavior: "smooth",\n    });\n  });\n\n  const sidebar = document.getElementById("sidebar");\n  const menuButton = document.getElementById("menu-button");\n  document.addEventListener("click", (event) => {\n    if (\n      sidebar &&\n      !sidebar.contains(event.target as Node) &&\n      event.target !== menuButton\n    ) {\n      sidebar.classList.add("translate-x-full");\n    }\n  });\n<\/script> --> '])), maybeRenderHead(), renderComponent($$result, "ProductsDropdown", null, { "client:only": true, "items": items, "client:component-hydration": "only", "data-astro-cid-3ef6ksr2": true, "client:component-path": "/home/dan/all-for-water/src/components/ui/ProductsDropdown", "client:component-export": "default" }), renderComponent($$result, "SearchComponent", SearchComponent$1, { "client:load": true, "client:component-hydration": "load", "client:component-path": "@components/ui/SearchComponent", "client:component-export": "default", "data-astro-cid-3ef6ksr2": true }), renderComponent($$result, "Icon", $$Icon, { "class": "hover:scale-110 hover:cursor-pointer", "name": "material-symbols-light:menu", "size": 40, "data-astro-cid-3ef6ksr2": true }), renderComponent($$result, "Icon", $$Icon, { "class": "hover:scale-110 hover:cursor-pointer", "name": "material-symbols-light:close", "size": 30, "data-astro-cid-3ef6ksr2": true }), renderComponent($$result, "SearchComponentAside", SearchComponent, { "client:load": true, "client:component-hydration": "load", "client:component-path": "/home/dan/all-for-water/src/components/ui/SearchComponentAside", "client:component-export": "default", "data-astro-cid-3ef6ksr2": true }), renderComponent($$result, "AsideProductsDropdown", null, { "client:only": true, "items": items, "client:component-hydration": "only", "data-astro-cid-3ef6ksr2": true, "client:component-path": "/home/dan/all-for-water/src/components/ui/AsideProductsDropdown", "client:component-export": "default" }));
}, "/home/dan/all-for-water/src/components/Header.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Footer = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate(_a || (_a = __template(["", '<footer class="bg-slate-200 text-custom-grey font-extralight"> <div class="flex md:flex-row flex-col"> <div class="p-3 flex flex-col gap-5 md:w-1/2"> <div class="flex flex-col justify-center items-center text-center"> <h1 class="p-3 text-light-blue font-semibold">HOW MAY WE HELP YOU?</h1> <p class="px-3">\nContact us today for more information about water treatment products.\n          Our expert team is here to answer your questions.\n</p> </div> <div class="flex flex-col justify-center items-center text-center"> <h1 class="p-3 text-light-blue font-semibold">WORKING DAYS / HOURS</h1> <p class="px-3">\nMonday-Thursday: 9:30am to 1:00pm, 2:00pm to 5:00pm. <br>\nFriday: 9:30am to 1:00pm <br>\nSaturday: CLOSED <br>\nSunday: CLOSED <br> </p> </div> </div> <div class="p-3 flex flex-col gap-5 md:w-1/2 justify-center items-center"> <div class="flex flex-col justify-center items-center text-center"> <h1 class="text-3xl md:text-5xl p-3 text-light-blue font-semibold flex items-center"> ', ' <span class="ml-2">(954) 322-6666</span> </h1> <p class="px-3">\n3146 John P. Curcie Dr., Bay 8 Pembroke Park, FL 33009\n</p> <p class="px-3 flex items-center gap-1"> ', ' <span> sales@allforwater.com </span> </p> </div> </div> </div> <div class="w-full bg-zinc-400 h-[1px]"></div> <section class="p-3 flex justify-center items-center flex-col"> <button id="scroll-top" class="flex justify-center items-center rounded-full h-12 w-12 bg-white hover:scale-105 transition-all"> ', ' </button> <h3 class="font-extralight text-sm mt-5">\n\u24B8 2024 All for Water. All rights reserved.\n</h3> </section> </footer> <script>\n  document.getElementById("scroll-top").addEventListener("click", (e) => {\n    e.preventDefault(); // Evitar el comportamiento predeterminado del enlace\n    window.scrollTo({ top: 0, behavior: "smooth" });\n  });\n<\/script>'])), maybeRenderHead(), renderComponent($$result, "Icon", $$Icon, { "name": "ic:baseline-phone" }), renderComponent($$result, "Icon", $$Icon, { "name": "ic:baseline-email" }), renderComponent($$result, "Icon", $$Icon, { "class": "", "name": "ri:arrow-up-s-line", "size": 25 }));
}, "/home/dan/all-for-water/src/components/Footer.astro", void 0);

const $$Astro = createAstro("https://allforwater.com");
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title } = Astro2.props;
  return renderTemplate`<html lang="es" data-astro-cid-sckkx6r4> <head><meta charset="UTF-8"><meta name="description" content="Astro description"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/png" href="/favicon.png">${renderScript($$result, "/home/dan/all-for-water/src/layouts/Layout.astro?astro&type=script&index=0&lang.ts")}<title>${title}</title>${renderComponent($$result, "ViewTransitions", $$ClientRouter, { "data-astro-cid-sckkx6r4": true })}${renderHead()}</head> <body data-astro-cid-sckkx6r4> ${renderComponent($$result, "Header", $$Header, { "data-astro-cid-sckkx6r4": true })} <main data-astro-cid-sckkx6r4> ${renderSlot($$result, $$slots["default"])} </main> ${renderComponent($$result, "Footer", $$Footer, { "data-astro-cid-sckkx6r4": true })}  </body></html>`;
}, "/home/dan/all-for-water/src/layouts/Layout.astro", void 0);

export { $$Layout as $, productos as p };
