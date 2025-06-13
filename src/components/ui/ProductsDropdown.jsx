import React, { useState } from "react";
import { IoMdArrowDropdown } from "react-icons/io";

const ProductsDropdown = ({ items, currentPage, categories, seg }) => {
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
      if (isOpen && !event.target.closest(".products-dropdown-container")) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen]);
  return (
    <div className="relative products-dropdown-container nav-links">
      <button
        className="transition-all flex items-center gap-x-1"
        onClick={() => setIsOpen(!isOpen)}
        onMouseEnter={() => setIsOpen(true)}
      >
        Products
        <IoMdArrowDropdown
          className={`transition-all transform ${isOpen ? "rotate-180" : ""}`}
        />
      </button>
      {/* // overflow-visible */}
      <div
        className={`
          absolute
          top-full
          mt-2
          left-1/2
          lg:-translate-x-3/4
          -translate-x-1/2 
          md:-translate-x-[60%]
          lg:w-[90vw]
          md:w-[80vw] 
          w-[450px] 
          bg-white 
          text-slate-500 
          rounded-md 
          shadow-lg 
          text-center 
          items-start 
          justify-center 
          gap-4
          transition-all 
          p-4
          text-base
          overflow-scroll
          max-h-[75vh]
          grid
          md:grid-cols-3

          ${isOpen
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-2 pointer-events-none"
          }`}
        onMouseLeave={() => setIsOpen(false)}
      >
        {/* // flex 
        // flex-row 
        // flex-wrap  */}
        {items?.map((main_cat, key) => {
          const cats = categories.filter((c) => main_cat.categories?.includes(c.id))
          const segment = seg.filter((s) => main_cat.segment?.includes(s.id))
          let categoriesc = cats?.slice()
          let segments = segment?.slice()
          // main_cat.segment.length + main_cat.categories.length > 3
          if (main_cat.segment.length + main_cat.categories.length > 3) {
            if (segments?.length > 1)
              categoriesc.push(...segments)
            segments = []
            categoriesc = categoriesc.slice(0, 3)
          }
          return (
            <div key={main_cat.id} className="flex justify-around h-full flex-col text-left">
              <h3 className="underline text-light-blue hover:text-light-blue/40 transition-all"><a href={`/segmentation/${slugify(main_cat.name)}/`}>{main_cat.name.split(" ").map((word) => { return word.charAt(0).toUpperCase() + word.slice(1) }).join(" ")}</a></h3>
              {categoriesc?.map((item) => {
                // add container for space around
                return (
                  <a
                    key={item.id}
                    href={`/category/${slugify(item.nombre)}/`}
                    className="lg:text-base w-fit md:text-base block text-left py-2 hover:scale-105 transition-all"
                    onClick={() => {
                      document.getElementById("loader").style.display = "grid";
                    }}
                  >
                    <p
                      dangerouslySetInnerHTML={{
                        __html:
                          slugify(item.nombre) === slugify(currentPage)
                            ? '<b class="text-md">' + item.nombre.split(" ").map((word) => { return word.charAt(0).toUpperCase() + word.slice(1) }).join(" ") + "</b>"
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
                    href={`/category/${slugify(categoryName)}#${item.id}/`}
                    className="lg:text-base w-fit md:text-base block py-2 hover:scale-110 transition-all"
                    onClick={() => {
                      document.getElementById("loader").style.display = "grid";
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
              <a className="underline text-black hover:text-black/40 w-fit transition-all" href={`/segmentation/${slugify(main_cat.name)}`} >View More  →</a>
            </div>
          )
        })}

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
