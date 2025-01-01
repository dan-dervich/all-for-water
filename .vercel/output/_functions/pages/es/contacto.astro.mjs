/* empty css                                   */
import { a as createComponent, r as renderTemplate, m as maybeRenderHead, d as renderComponent } from '../../chunks/astro/server_CSx5QtHz.mjs';
import 'kleur/colors';
import 'clsx';
import { $ as $$LayoutEs } from '../../chunks/Layout_es_12h06j3-.mjs';
export { renderers } from '../../renderers.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$ContactFormEs = createComponent(async ($$result, $$props, $$slots) => {
  return renderTemplate(_a || (_a = __template(["", '<section class="bg-contact-color-bg text-zinc-700 flex justify-center items-center flex-col w-full pt-[128px]"> <h2 class="flex justify-center p-10 text-3xl items-center text-center text-light-blue">\nPonte en contacto con nosotros\n</h2> <form id="contactForm_es" class="justify-center items-center w-full sm:w-3/4"> <div class="flex w-full flex-col gap-y-5 px-10"> <div class="flex flex-col gap-y-5 sm:gap-y-0 sm:flex-row justify-between gap-x-10"> <div class="flex flex-col w-full"> <label for="nombre_es">Nombre:</label> <input type="text" id="nombre_es" name="nombre_es" placeholder="Tu nombre..." class="bg-transparent p-2 border-b-[2px] border-slate-400 focus:outline-none focus:border-black transition-colors w-full"> </div> <div class="flex flex-col w-full"> <label for="email_es">Correo:</label> <input type="text" id="email_es" name="email_es" placeholder="Tu correo electr\xF3nico..." class="bg-transparent p-2 border-b-[2px] border-slate-400 focus:outline-none focus:border-black transition-colors w-full"> </div> <div class="flex flex-col w-full"> <label for="number_es">Tel\xE9fono:</label> <input type="tel" id="number_es" name="number_es" placeholder="Tu n\xFAmero de tel\xE9fono..." class="bg-transparent p-2 border-b-[2px] border-slate-400 focus:outline-none focus:border-black transition-colors w-full"> </div> </div> <div class="flex flex-col justify-center items-center"> <label class="self-start" for="mensaje_es">Mensaje:</label> <textarea id="mensaje_es" name="mensaje_es" placeholder="Tu mensaje..." class="bg-transparent p-2 border-b-[2px] border-slate-400 focus:outline-none focus:border-black transition-colors w-full"></textarea> <button type="submit" class="bg-light-blue text-white flex justify-center items-center p-2 rounded-md hover:opacity-90 transition-opacity my-5 w-40">\nEnviar\n</button> </div> </div> </form> </section> <script type="module">\n  // import Toastify from "toastify-js";\n  document\n    .getElementById("contactForm_es")\n    .addEventListener("submit", async function (event) {\n      event.preventDefault();\n\n      const nombre = document.getElementById("nombre_es").value;\n      const mensaje = document.getElementById("mensaje_es").value;\n      const email = document.getElementById("email_es").value;\n      const tel = document.getElementById("number_es").value;\n\n      const data = {\n        name: nombre,\n        msg: mensaje,\n        email: email,\n        tel: tel,\n      };\n\n      // mostrar alerta carga\n      alert("Enviando mensaje...");\n\n      try {\n        const response = await fetch(\n          "https://contact-app-murex.vercel.app/afw/send-mail",\n          {\n            method: "POST",\n            headers: {\n              "Content-Type": "application/json",\n            },\n            body: JSON.stringify(data),\n          }\n        );\n\n        if (response.ok) {\n          // mostrar alerta exito\n          alert("Mensaje enviado exitosamente.");\n\n          // Vaciar los campos del formulario\n          document.getElementById("contactForm_es").reset();\n        } else {\n          // mostrar alerta de error\n          alert("Hubo un error al enviar el mensaje.");\n        }\n      } catch (error) {\n        console.error("Error:", error);\n\n        // mostrar alerta de error\n        alert("Hubo un problema con la solicitud.");\n      }\n    });\n<\/script>'])), maybeRenderHead());
}, "/home/dan/all-for-water/src/components/ContactForm_es.astro", void 0);

const $$Contacto = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "LanguageSwitch", null, { "client:only": "react", "url": "/contact", "idioma": "ES", "client:component-hydration": "only", "client:component-path": "@components/ui/LenguageSwitch", "client:component-export": "default" })} ${renderComponent($$result, "LayoutEs", $$LayoutEs, { "title": "Contacto" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "ContactFormEs", $$ContactFormEs, {})} ` })}`;
}, "/home/dan/all-for-water/src/pages/es/contacto.astro", void 0);

const $$file = "/home/dan/all-for-water/src/pages/es/contacto.astro";
const $$url = "/es/contacto";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Contacto,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
