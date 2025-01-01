/* empty css                                */
import { a as createComponent, r as renderTemplate, m as maybeRenderHead, d as renderComponent } from '../chunks/astro/server_CSx5QtHz.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_BKJpCN5H.mjs';
import 'clsx';
export { renderers } from '../renderers.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$ContactForm = createComponent(async ($$result, $$props, $$slots) => {
  return renderTemplate(_a || (_a = __template(["", '<section class="bg-contact-color-bg text-zinc-700 flex justify-center items-center flex-col w-full pt-[128px]"> <h2 class="flex justify-center p-10 text-3xl items-center text-center text-light-blue">\nGet in touch with us\n</h2> <form id="contactForm" class="justify-center items-center w-full sm:w-3/4"> <div class="flex w-full flex-col gap-y-5 px-10"> <div class="flex flex-col gap-y-5 sm:gap-y-0 sm:flex-row justify-between gap-x-10"> <div class="flex flex-col w-full"> <label for="name">Name:</label> <input type="text" id="name" name="name" placeholder="Your name..." class="bg-transparent p-2 border-b-[2px] border-slate-400 focus:outline-none focus:border-black transition-colors w-full"> </div> <div class="flex flex-col w-full"> <label for="email">Email:</label> <input type="text" id="email" name="email" placeholder="Your email..." class="bg-transparent p-2 border-b-[2px] border-slate-400 focus:outline-none focus:border-black transition-colors w-full"> </div> <div class="flex flex-col w-full"> <label for="phone">Phone number:</label> <input type="tel" id="phone" name="phone" placeholder="Your phone number..." class="bg-transparent p-2 border-b-[2px] border-slate-400 focus:outline-none focus:border-black transition-colors w-full"> </div> </div> <div class="flex flex-col justify-center items-center"> <label class="self-start" for="message">Message:</label> <textarea id="message" name="message" placeholder="Your message..." class="bg-transparent p-2 border-b-[2px] border-slate-400 focus:outline-none focus:border-black transition-colors w-full"></textarea> <button type="submit" class="bg-light-blue text-white flex justify-center items-center p-2 rounded-md hover:opacity-90 transition-opacity my-5 w-40">\nSend\n</button> </div> </div> </form> </section> <script type="module">\n  // import Toastify from "toastify-js";\n  document\n    .getElementById("contactForm")\n    .addEventListener("submit", async function (event) {\n      event.preventDefault();\n\n      const name = document.getElementById("name").value;\n      const message = document.getElementById("message").value;\n      const email = document.getElementById("email").value;\n      const phone = document.getElementById("phone").value;\n\n      const data = {\n        name: name,\n        msg: message,\n        email: email,\n        tel: phone,\n      };\n\n      // Show loading alert\n      alert("Sending message...");\n\n      try {\n        const response = await fetch(\n          "https://contact-app-murex.vercel.app/afw/send-mail",\n          {\n            method: "POST",\n            headers: {\n              "Content-Type": "application/json",\n            },\n            body: JSON.stringify(data),\n          }\n        );\n\n        // Close loading toast\n        // loadingToast.hideToast();\n\n        if (response.ok) {\n          // Show success alert\n          alert("Message sent successfully.");\n\n          // Clear form fields\n          document.getElementById("contactForm").reset();\n        } else {\n          // Show error alert\n          alert("There was an error sending the message.");\n        }\n      } catch (error) {\n        console.error("Error:", error);\n\n        // show error alert\n        alert("There was a problem with the request.");\n      }\n    });\n<\/script>'])), maybeRenderHead());
}, "/home/dan/all-for-water/src/components/ContactForm.astro", void 0);

const $$Contact = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "LanguageSwitch", null, { "client:only": "react", "url": "/es/contacto", "idioma": "EN", "client:component-hydration": "only", "client:component-path": "@components/ui/LenguageSwitch", "client:component-export": "default" })} ${renderComponent($$result, "Layout", $$Layout, { "title": "Contact" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "ContactForm", $$ContactForm, {})} ` })}`;
}, "/home/dan/all-for-water/src/pages/contact.astro", void 0);

const $$file = "/home/dan/all-for-water/src/pages/contact.astro";
const $$url = "/contact";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Contact,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
