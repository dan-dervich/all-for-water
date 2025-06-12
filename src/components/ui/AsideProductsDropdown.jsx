import React, { useState } from "react";
import { IoMdArrowDropdown } from "react-icons/io";

const AsideProductsDropdown = ({ items, currentPage, name, segments, categories }) => {
  function slugify(text) {
    if (!text) return "";
    return text
      .toLowerCase()
      .replace(/[^a-z0-9\s-]/g, "") // Remove special characters except spaces and hyphens
      .replace(/\s+/g, "-") // Replace spaces with hyphens
      .replace(/--+/g, "-") // Replace multiple hyphens with single hyphen
      .replace(" ", "-")
      .trim(); // Remove leading/trailing hyphens
  }
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

  {/* //         ${isOpen
  //   ? "opacity-100 translate-y-0"
  //   : "opacity-0 -translate-y-2 pointer-events-none"
  // }`} */}
  return (
    <div className="relative place-items-center aside-dropdown-container overflow-scroll">
      <button className="transition-all w-full text-lg font-medium flex items-center justify-center text-center gap-x-1" onClick={() => { setIsOpen(!isOpen); }}>
        {name.split(" ").map((word) => {
          return word.charAt(0).toUpperCase() + word.slice(1);
        }
        ).join(" ")}
        <IoMdArrowDropdown
          className={`transition-all transform ${isOpen ? "rotate-180" : ""}`}
        />
      </button>
      <div
        className={`
          ${isOpen ? "h-full overflow-y-scroll p-4" : "p-0 h-0 overflow-hidden"}
                  -left-12 top-full mt-2
                  w-52 max-h-[300px] bg-white text-slate-500 rounded-md shadow-lg 
                  flex flex-col gap-2 text-center items-center justify-start 
                  z-50
                  opacity-100 translate-y-0`}
      >
        {
          items?.map((item) => {
            return (
              <a
                key={item.id}
                href={`/category/${slugify(item.nombre)}/`}
                className="w-full px-4 py-2 hover:scale-105 transition-all hover:bg-gray-50 rounded-md"
                onClick={() => {
                  setIsOpen(false);
                  document.getElementById("loader").style.display = "grid";
                  // Si tienes una función para cerrar el sidebar, llámala aquí
                  if (typeof window !== "undefined") {
                    const sidebar = document.getElementById("sidebar");
                    if (sidebar) {
                      sidebar.classList.add("translate-x-full");
                    }
                  }
                }}
              >
                <p
                  className="w-full px-4 py-2 hover:scale-105 transition-all hover:bg-gray-50 rounded-md"
                  dangerouslySetInnerHTML={{
                    __html:
                      slugify(item.nombre) == slugify(currentPage)
                        ? "<b>" + item.nombre.split(" ").map((word) => { return word.charAt(0).toUpperCase() + word.slice(1) }).join(" ") + "</b>"
                        : item.nombre.split(" ").map((word) => { return word.charAt(0).toUpperCase() + word.slice(1) }).join(" "),
                  }}
                ></p>
              </a>
            )
          })}
        {segments?.map((item) => {
          let categoryName = ''
          for (let i = 0; i < categories.length; i++) {
            if (categories[i].expand?.productos?.some((obj) => obj.segmentos.includes(item.id))) {
              categoryName = categories[i].nombre;
              break;
            }
          }
          return (
            <a
              key={item.id}
              className="w-full px-4 py-2 hover:scale-105 transition-all hover:bg-gray-50 rounded-md"
              href={`/category/${slugify(categoryName)}#${item.id}`}
              onClick={() => {
                setIsOpen(false);
                document.getElementById("loader").style.display = "grid";
                // Si tienes una función para cerrar el sidebar, llámala aquí
                if (typeof window !== "undefined") {
                  const sidebar = document.getElementById("sidebar");
                  if (sidebar) {
                    sidebar.classList.add("translate-x-full");
                  }
                }
              }}
            >
              <p
                dangerouslySetInnerHTML={{
                  __html:
                    slugify(categoryName) === slugify(currentPage)
                      ? '<b class="text-md">' + item.nombre.split(" ").map((word) => { return word.charAt(0).toUpperCase() + word.slice(1) }).join(" ") + "</b>"
                      : item.nombre.split(" ").map((word) => { return word.charAt(0).toUpperCase() + word.slice(1) }).join(" "),
                }}
              ></p>
            </a>
          )
        }
        )}
      </div>
    </div >
  );
};
{/* <button
  className="transition-all flex items-center gap-x-1"
  onClick={() => setIsOpen(!isOpen)}
>
  PRODUCTS
  <IoMdArrowDropdown
    className={`transition-all transform ${isOpen ? "rotate-180" : ""}`}
  />
</button> */}
{/* <button
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
                    ${isOpen
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-2 pointer-events-none"
          }`}
      >
        {sortedItems?.map((item) => (
          <a
            key={item.id}
            href={`/category/${slugify(item.nombre)}/`}
            className="w-full px-4 py-2 hover:scale-105 transition-all hover:bg-gray-50 rounded-md"
            onClick={() => {
              setIsOpen(false);
              document.getElementById("loader").style.display = "grid";
              // Si tienes una función para cerrar el sidebar, llámala aquí
              if (typeof window !== "undefined") {
                const sidebar = document.getElementById("sidebar");
                if (sidebar) {
                  sidebar.classList.add("translate-x-full");
                }
              }
            }}
          >
            <p className="text-xs"
              dangerouslySetInnerHTML={{
                __html:
                  item.nombre == currentPage
                    ? "<b>" + item.nombre + "</b>"
                    : item.nombre,
              }}
            ></p>
          </a>
        ))}
      </div> */}
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
