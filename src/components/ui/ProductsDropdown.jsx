import React, { useState } from "react";
import { IoMdArrowDropdown } from "react-icons/io";

// className={`absolute overflow-visible top-full mt-2 left-1/2 xl:-translate-x-3/4 -translate-x-1/2 lg:w-[80vw] md:w-screen w-[450px] bg-white text-slate-500 rounded-md shadow-lg grid lg:grid-cols-5 md:grid-cols-5 grid-cols-3 text-center items-center justify-center transition-all p-2 text-base
//   ${
//     isOpen
//       ? "opacity-100 translate-y-0"
//       : "opacity-0 -translate-y-2 pointer-events-none"
//   }`}

const ProductsDropdown = ({ items, currentPage }) => {
  const [isOpen, setIsOpen] = useState(false);

  React.useEffect(() => {
    const handleClickOutside = (event) => {
      if (isOpen && !event.target.closest(".products-dropdown-container")) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen]);

  const sortedItems = items
    ?.slice()
    .sort((a, b) => a.nombre.localeCompare(b.nombre));

  return (
    <div className="relative products-dropdown-container nav-links">
      <button
        className="transition-all flex items-center gap-x-1"
        onClick={() => setIsOpen(!isOpen)}
        onMouseEnter={() => setIsOpen(true)}
      >
        PRODUCTS
        <IoMdArrowDropdown
          className={`transition-all transform ${isOpen ? "rotate-180" : ""}`}
        />
      </button>
      <div
        className={`absolute overflow-visible top-full mt-2 left-1/2 lg:-translate-x-2/3 -translate-x-1/2 lg:w-[80vw] md:w-screen w-[450px] bg-white text-slate-500 rounded-md shadow-lg text-center items-center justify-center flex flex-row flex-wrap transition-all p-2 text-base
          ${
            isOpen
              ? "opacity-100 translate-y-0"
              : "opacity-0 -translate-y-2 pointer-events-none"
          }`}
        onMouseLeave={() => setIsOpen(false)}
      >
        {sortedItems?.map((item) => (
          <a
            key={item.id}
            href={`/category/${item.nombre}`}
            className="text-sm block w-1/5 px-2 py-2 hover:scale-110 transition-all"
            onClick={() => {
              document.getElementById("loader").style.display = "grid";
            }}
          >
            <p
              dangerouslySetInnerHTML={{
                __html:
                  item.nombre == currentPage
                    ? "<b>" + item.nombre + "</b>"
                    : item.nombre,
              }}
            ></p>
          </a>
        ))}
      </div>
    </div>
  );
};

const style = `
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
`;

const styleElement = document.createElement("style");
styleElement.textContent = style;
document.head.appendChild(styleElement);

export default ProductsDropdown;
