import{j as t}from"./jsx-runtime.BqEXxvvU.js";import{r as i,R as l}from"./index.DHQ29l5n.js";import{I as d}from"./index.Dtfyuy1a.js";const u=({items:r})=>{const[n,o]=i.useState(!1);return l.useEffect(()=>{const e=s=>{n&&!s.target.closest(".aside-dropdown-container")&&o(!1)};return document.addEventListener("mousedown",e),()=>document.removeEventListener("mousedown",e)},[n]),t.jsxs("div",{className:"relative aside-dropdown-container nav-links",children:[t.jsxs("button",{className:"transition-all flex items-center gap-x-1",onClick:()=>o(!n),children:["PRODUCTS",t.jsx(d,{className:`transition-all transform ${n?"rotate-180":""}`})]}),t.jsx("div",{className:`absolute overflow-y-auto 
                    -left-12 top-full mt-2
                    w-52 max-h-[300px] bg-white text-slate-500 rounded-md shadow-lg 
                    flex flex-col gap-2 text-center items-center justify-start 
                    transition-all p-4 z-50
                    ${n?"opacity-100 translate-y-0":"opacity-0 -translate-y-2 pointer-events-none"}`,children:r?.map(e=>t.jsx("a",{href:`/${e.nombre}`,className:"w-full px-4 py-2 hover:scale-105 transition-all hover:bg-gray-50 rounded-md",onClick:()=>{if(o(!1),typeof window<"u"){const s=document.getElementById("sidebar");s&&s.classList.add("translate-x-full")}},children:t.jsx("p",{children:e.nombre})},e.id))})]})},c=`
.nav-links {
    font-size: 1.2rem;
    font-weight: 500;
    width: fit-content;
}
.nav-links::after {
    content: "";
    display: block;
    width: 0;
    height: 2.5px;
    background-color: white;
    transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1) 0s;
    opacity: 1;
    z-index: 101;
}
.nav-links:hover::after {
    width: 100%;
}
`,a=document.createElement("style");a.textContent=c;document.head.appendChild(a);export{u as default};
