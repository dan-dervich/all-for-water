import { a as createComponent, r as renderTemplate, d as renderComponent, m as maybeRenderHead, c as createAstro, e as renderScript, g as renderHead, h as renderSlot } from './astro/server_CSx5QtHz.mjs';
import 'kleur/colors';
import { $ as $$Icon, a as $$ClientRouter } from './ClientRouter_DLcPeYho.mjs';
import { i as items_es } from './categories_es_ubxGnyBe.mjs';
import { jsxs, jsx } from 'react/jsx-runtime';
import { useState, useRef, useEffect } from 'react';
import { p as productos_es } from './products_es_CQJZ-GMj.mjs';
/* empty css                           */

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
      const filteredProductos = productos_es.filter(
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
    for (const category of items_es) {
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
        placeholder: "Buscar...",
        value: searchTerm,
        onChange: handleSearch,
        className: "px-3 py-2 max-w-32 sm:max-w-60 rounded-full text-black focus:outline-none transition-all",
        onFocus: () => setIsResultsVisible(true),
        "aria-label": "Buscar productos"
      }
    ),
    isResultsVisible && searchResults.length > 0 && /* @__PURE__ */ jsx(
      "div",
      {
        className: "absolute bg-white text-black mt-2 rounded-md shadow-lg w-full max-h-64 overflow-y-auto z-50",
        role: "listbox",
        "aria-label": "Buscar resultados",
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
      const filteredProductos = productos_es.filter(
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
    for (const category of items_es) {
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
        placeholder: "Buscar...",
        value: searchTerm,
        onChange: handleSearch,
        className: "px-3 py-2 max-w-32 sm:max-w-60 rounded-full text-black focus:outline-none transition-all",
        onFocus: () => setIsResultsVisible(true),
        "aria-label": "Buscar productos"
      }
    ),
    isResultsVisible && searchResults.length > 0 && /* @__PURE__ */ jsx(
      "div",
      {
        className: "absolute bg-white text-black mt-2 rounded-md shadow-lg w-full max-h-64 overflow-y-auto z-50",
        role: "listbox",
        "aria-label": "Buscar resultados",
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
const $$HeaderEs = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate(_a$1 || (_a$1 = __template$1(["", '<header id="header_es" class="fixed top-0 w-full z-50 justify-center flex mt-5" data-astro-cid-rvkblzjp> <div class="px-5 bg-light-blue/60 from-light-blue to-transparent text-white rounded-full w-11/12" data-astro-cid-rvkblzjp> <div class="flex justify-between items-center relative text-white" data-astro-cid-rvkblzjp> <div class="flex justify-center items-center" data-astro-cid-rvkblzjp> <div class="text-xl" data-astro-cid-rvkblzjp> <a id="logo_es" href="/es/" data-astro-cid-rvkblzjp> <img src="/fotos/logo.png" alt="Logo" class="sm:h-24 sm:w-auto h-12 w-auto rounded-full" data-astro-cid-rvkblzjp> </a> </div> <h1 class="hidden sm:flex text-2xl font-edu font-medium" data-astro-cid-rvkblzjp>\nAll For Water\n</h1> </div> <div class="flex flex-row gap-5 items-center px-5" data-astro-cid-rvkblzjp> <nav class="hidden md:flex gap-x-5" data-astro-cid-rvkblzjp> <a id="home_es" href="/es/" class="transition-all nav-links hover:cursor-pointer" data-astro-cid-rvkblzjp>INICIO</a> <a id="contact_es" href="/es/contacto" class="transition-all nav-links" data-astro-cid-rvkblzjp>CONTACTO</a> ', ' </nav> <div class="relative hidden sm:flex" data-astro-cid-rvkblzjp> ', ` </div> <button id="menu-button_es" class="hover:cursor-pointer md:hidden flex right-3" onclick="sidebar_es.classList.toggle('translate-x-full')" data-astro-cid-rvkblzjp> `, ` </button> </div> </div> <aside id="sidebar_es" class="fixed z-50 top-0 right-0 w-64 h-full bg-light-blue text-white p-4 transform transition-transform translate-x-full duration-300" data-astro-cid-rvkblzjp> <button id="close-button_es" class="flex pb-10 pt-5" onclick="sidebar_es.classList.toggle('translate-x-full')" data-astro-cid-rvkblzjp> `, ' </button> <nav class="flex flex-col gap-y-10 justify-center items-center" data-astro-cid-rvkblzjp> <div class="relative" data-astro-cid-rvkblzjp> ', ` </div> <a onclick="sidebar_es.classList.toggle('translate-x-full')" id="home-sidebar_es" class="transition-all nav-links hover:cursor-pointer" href="/es/" data-astro-cid-rvkblzjp>INICIO</a> <a onclick="sidebar_es.classList.toggle('translate-x-full')" id="contact-sidebar_es" href="/es/contacto" class="transition-all nav-links" data-astro-cid-rvkblzjp>CONTACTO</a> `, ' </nav> </aside> </div> </header> <!-- \n<script>\n  const home = document.getElementById("home");\n  home?.addEventListener("click", () => {\n    window.scrollTo({\n      top: 0,\n      behavior: "smooth",\n    });\n  });\n\n  const homeSidebar = document.getElementById("home-sidebar");\n  homeSidebar?.addEventListener("click", () => {\n    window.scrollTo({\n      top: 0,\n      behavior: "smooth",\n    });\n  });\n\n  const sidebar = document.getElementById("sidebar");\n  const menuButton = document.getElementById("menu-button");\n  document.addEventListener("click", (event) => {\n    if (\n      sidebar &&\n      !sidebar.contains(event.target as Node) &&\n      event.target !== menuButton\n    ) {\n      sidebar.classList.add("translate-x-full");\n    }\n  });\n<\/script> --> '])), maybeRenderHead(), renderComponent($$result, "ProductsDropdownEs", null, { "client:only": true, "items": items_es, "client:component-hydration": "only", "data-astro-cid-rvkblzjp": true, "client:component-path": "/home/dan/all-for-water/src/components/ui/ProductsDropdown_es", "client:component-export": "default" }), renderComponent($$result, "SearchComponentEs", SearchComponent$1, { "client:load": true, "client:component-hydration": "load", "client:component-path": "@components/ui/SearchComponent_es", "client:component-export": "default", "data-astro-cid-rvkblzjp": true }), renderComponent($$result, "Icon", $$Icon, { "class": "hover:scale-110 hover:cursor-pointer", "name": "material-symbols-light:menu", "size": 40, "data-astro-cid-rvkblzjp": true }), renderComponent($$result, "Icon", $$Icon, { "class": "hover:scale-110 hover:cursor-pointer", "name": "material-symbols-light:close", "size": 30, "data-astro-cid-rvkblzjp": true }), renderComponent($$result, "SearchComponentAsideEs", SearchComponent, { "client:load": true, "client:component-hydration": "load", "client:component-path": "/home/dan/all-for-water/src/components/ui/SearchComponentAside_es", "client:component-export": "default", "data-astro-cid-rvkblzjp": true }), renderComponent($$result, "AsideProductsDropdownEs", null, { "client:only": true, "items": items_es, "client:component-hydration": "only", "data-astro-cid-rvkblzjp": true, "client:component-path": "/home/dan/all-for-water/src/components/ui/AsideProductsDropdown_es", "client:component-export": "default" }));
}, "/home/dan/all-for-water/src/components/Header_es.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$FooterEs = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate(_a || (_a = __template(["", '<footer class="bg-slate-200 text-custom-grey font-extralight"> <div class="flex md:flex-row flex-col"> <div class="p-3 flex flex-col gap-5 md:w-1/2"> <div class="flex flex-col justify-center items-center text-center"> <h1 class="p-3 text-light-blue font-semibold">\n\xBFC\xD3MO PODEMOS AYUDARTE?\n</h1> <p class="px-3">\nCont\xE1ctanos hoy para obtener m\xE1s informaci\xF3n sobre productos de\n          tratamiento de agua. Nuestro equipo de expertos est\xE1 aqu\xED para\n          responder tus preguntas.\n</p> </div> <div class="flex flex-col justify-center items-center text-center"> <h1 class="p-3 text-light-blue font-semibold">\nD\xCDAS / HORAS LABORALES\n</h1> <p class="px-3">\nLunes-Jueves: 9:30am a 1:00pm, 2:00pm a 5:00pm. <br>\nViernes: 9:30am a 1:00pm <br>\nS\xE1bado: CERRADO <br>\nDomingo: CERRADO <br> </p> </div> </div> <div class="p-3 flex flex-col gap-5 md:w-1/2 justify-center items-center"> <div class="flex flex-col justify-center items-center text-center"> <h1 class="text-3xl md:text-5xl p-3 text-light-blue font-semibold flex items-center"> ', ' <span class="ml-2">(954) 322-6666</span> </h1> <p class="px-3">\n3146 John P. Curcie Dr., Bay 8 Pembroke Park, FL 33009\n</p> <p class="px-3 flex items-center gap-1"> ', ' <span> sales@allforwater.com </span> </p> </div> </div> </div> <div class="w-full bg-zinc-400 h-[1px]"></div> <section class="p-3 flex justify-center items-center flex-col"> <button id="scroll-top_es" class="flex justify-center items-center rounded-full h-12 w-12 bg-white hover:scale-105 transition-all"> ', ' </button> <h3 class="font-extralight text-sm mt-5">\n\u24B8 2024 All for Water. Todos los derechos reservados.\n</h3> </section> </footer> <script>\n  document.getElementById("scroll-top_es").addEventListener("click", (e) => {\n    e.preventDefault(); // Evitar el comportamiento predeterminado del enlace\n    window.scrollTo({ top: 0, behavior: "smooth" });\n  });\n<\/script>'])), maybeRenderHead(), renderComponent($$result, "Icon", $$Icon, { "name": "ic:baseline-phone" }), renderComponent($$result, "Icon", $$Icon, { "name": "ic:baseline-email" }), renderComponent($$result, "Icon", $$Icon, { "class": "", "name": "ri:arrow-up-s-line", "size": 25 }));
}, "/home/dan/all-for-water/src/components/Footer_es.astro", void 0);

const $$Astro = createAstro("https://allforwater.com");
const $$LayoutEs = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$LayoutEs;
  const { title } = Astro2.props;
  return renderTemplate`<html lang="es" data-astro-cid-wdhtarka> <head><meta charset="UTF-8"><meta name="description" content="Astro description"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/png" href="/favicon.png">${renderScript($$result, "/home/dan/all-for-water/src/layouts/Layout_es.astro?astro&type=script&index=0&lang.ts")}<title>${title}</title>${renderComponent($$result, "ViewTransitions", $$ClientRouter, { "data-astro-cid-wdhtarka": true })}${renderHead()}</head> <body data-astro-cid-wdhtarka> ${renderComponent($$result, "HeaderEs", $$HeaderEs, { "data-astro-cid-wdhtarka": true })} <main data-astro-cid-wdhtarka> ${renderSlot($$result, $$slots["default"])} </main> ${renderComponent($$result, "FooterEs", $$FooterEs, { "data-astro-cid-wdhtarka": true })}  </body></html>`;
}, "/home/dan/all-for-water/src/layouts/Layout_es.astro", void 0);

export { $$LayoutEs as $ };
