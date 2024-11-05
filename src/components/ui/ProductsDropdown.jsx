import { items } from "@lib/products"

import React, { useState } from 'react';
import { Icon } from 'astro-icon/components'; // Si estás usando un paquete como Astro para íconos

const ProductsDropdown = () => {
    // Estado para controlar la visibilidad del dropdown
    const [isOpen, setIsOpen] = useState(false);

    // Función para manejar la apertura/cierre del dropdown
    const toggleDropdown = () => {
        setIsOpen((prevState) => !prevState);
    };

    return (
        <div className="relative nav-links">
            <button
                id="products-button"
                className="transition-all flex items-center gap-x-1"
                onClick={toggleDropdown}
            >
                PRODUCTS
                <Icon
                    id="products-icon"
                    name="ic:baseline-arrow-drop-down"
                    className="transition-all"
                />
            </button>

            {/* Dropdown */}
            {isOpen && (
                <div
                    id="productsDropdown"
                    className="absolute overflow-visible top-20 mt-2 left-5 right-5 bg-white text-slate-500 rounded-md shadow-lg grid grid-cols-5 gap-y-2 text-center items-center justify-center transition-all fade-enter p-3"
                >
                    {items.map((item) => (
                        <a
                            key={item.id}
                            href={`/${item.id}`}
                            className="block px-4 py-2 hover:scale-110 transition-all"
                            id={item.nombre}
                        >
                            <p>{item.nombre}</p>
                        </a>
                    ))}
                </div>
            )}
        </div>
    );
};

export default ProductsDropdown;
