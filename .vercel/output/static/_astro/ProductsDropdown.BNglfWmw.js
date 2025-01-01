import{j as t}from"./jsx-runtime.BqEXxvvU.js";import{r as i,R as c}from"./index.DHQ29l5n.js";import{I as d}from"./index.Dtfyuy1a.js";const x=({items:a})=>{const[n,s]=i.useState(!1);c.useEffect(()=>{const e=o=>{n&&!o.target.closest(".products-dropdown-container")&&s(!1)};return document.addEventListener("mousedown",e),()=>document.removeEventListener("mousedown",e)},[n]);const l=a?.slice().sort((e,o)=>e.nombre.localeCompare(o.nombre));return t.jsxs("div",{className:"relative products-dropdown-container nav-links",children:[t.jsxs("button",{className:"transition-all flex items-center gap-x-1",onClick:()=>s(!n),onMouseEnter:()=>s(!0),children:["PRODUCTS",t.jsx(d,{className:`transition-all transform ${n?"rotate-180":""}`})]}),t.jsx("div",{className:`absolute overflow-visible top-full mt-2 left-1/2 -translate-x-3/4 lg:w-[900px] w-[450px] bg-white text-slate-500 rounded-md shadow-lg grid lg:grid-cols-5 grid-cols-3 text-center items-center justify-center transition-all p-2 text-base
                    ${n?"opacity-100 translate-y-0":"opacity-0 -translate-y-2 pointer-events-none"}`,onMouseLeave:()=>s(!1),children:l?.map(e=>t.jsx("a",{href:`/${e.nombre}`,className:"block px-4 py-2 hover:scale-110 transition-all",children:t.jsx("p",{children:e.nombre})},e.id))})]})},m=`
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
`,r=document.createElement("style");r.textContent=m;document.head.appendChild(r);export{x as default};
