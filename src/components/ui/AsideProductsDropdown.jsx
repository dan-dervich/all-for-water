import React, { useState } from "react";
import { IoMdArrowDropdown } from "react-icons/io";

const AsideProductsDropdown = ({ items }) => {
  const [isOpen, setIsOpen] = useState(false);

  React.useEffect(() => {
    const handleClickOutside = (event) => {
      if (isOpen && !event.target.closest(".aside-dropdown-container")) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen]);

  return (
    <div className="relative aside-dropdown-container nav-links">
      <button
        className="transition-all flex items-center gap-x-1"
        onClick={() => setIsOpen(!isOpen)}
      >
        PRODUCTS
        <IoMdArrowDropdown
          className={`transition-all transform ${isOpen ? "rotate-180" : ""}`}
        />
      </button>
      <div
        className={`absolute overflow-y-auto 
                    -left-12 top-full mt-2
                    w-52 max-h-[300px] bg-white text-slate-500 rounded-md shadow-lg 
                    flex flex-col gap-2 text-center items-center justify-start 
                    transition-all p-4 z-50
                    ${
                      isOpen
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 -translate-y-2 pointer-events-none"
                    }`}
      >
        {items?.map((item) => (
          <a
            key={item.id}
            href={`/${item.nombre}`}
            className="w-full px-4 py-2 hover:scale-105 transition-all hover:bg-gray-50 rounded-md"
            onClick={() => {
              setIsOpen(false);
              // Si tienes una función para cerrar el sidebar, llámala aquí
              if (typeof window !== "undefined") {
                const sidebar = document.getElementById("sidebar");
                if (sidebar) {
                  sidebar.classList.add("translate-x-full");
                }
              }
            }}
          >
            <p>{item.nombre}</p>
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

export default AsideProductsDropdown;
