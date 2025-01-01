import { c as createAstro, a as createComponent, r as renderTemplate, m as maybeRenderHead, b as addAttribute } from './astro/server_CSx5QtHz.mjs';
import 'kleur/colors';
import 'clsx';

const $$Astro$1 = createAstro("https://allforwater.com");
const $$Card = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Card;
  const { imgSrc, product } = Astro2.props;
  const { text } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<button class="shadow-xl shadow-violeta/40 flex justify-center items-center flex-col h-full w-full rounded-xl hover:scale-105 transition-all"> <img${addAttribute(imgSrc, "src")} alt="Housing img" class="h-80 w-auto sm:h-60 md:h-50 p-5" loading="eager"> <h5 class="p-5 text-custom-grey font-bold"> ${text} </h5> </button>`;
}, "/home/dan/all-for-water/src/components/ui/Card.astro", void 0);

const $$Astro = createAstro("https://allforwater.com");
const $$MarcasCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$MarcasCard;
  const { imgSrc } = Astro2.props;
  const { link } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(link, "href")} class="hover:scale-110 transition-all"> <img${addAttribute(imgSrc, "src")} alt="Logo" class="w-auto h-auto" loading="eager"> </a>`;
}, "/home/dan/all-for-water/src/components/ui/MarcasCard.astro", void 0);

export { $$Card as $, $$MarcasCard as a };
