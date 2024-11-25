import React, { useState, useEffect, useRef } from 'react';
import { productos } from '@lib/products';
import { items } from '@lib/categories';

interface Product {
    id: string;
    collectionId: string;
    collectionName: string;
    created: string;
    updated: string;
    nombre: string;
    descripcion: string;
    foto: string;
    segmentos: string;
    fotoUrl: string;
}

interface Category {
    nombre: string;
    id: string;
}

const SearchComponent: React.FC = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [searchResults, setSearchResults] = useState<Product[]>([]);
    const [isResultsVisible, setIsResultsVisible] = useState(false);
    const searchRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
                setIsResultsVisible(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
        const term = event.target.value;
        setSearchTerm(term);

        if (term.length > 0) {
            const filteredProductos = productos.filter(product =>
                product.nombre.toLowerCase().includes(term.toLowerCase())
            );
            setSearchResults(filteredProductos);
            setIsResultsVisible(true);
        } else {
            setSearchResults([]);
            setIsResultsVisible(false);
        }
    };

    const findCategoryByProductId = (productId: string): Category | null => {
        for (const category of items) {
            if (category.productos && category.productos.includes(productId)) {
                return category;
            }
        }
        return null;
    };

    const getCategoryName = (productId: string): string => {
        const category = findCategoryByProductId(productId);
        return category ? category.nombre.toUpperCase() : 'UNCATEGORIZED';
    };

    const handleProductClick = (product: Product) => {
        const category = findCategoryByProductId(product.id);
        if (category) {
            window.location.href = category.nombre.toUpperCase();
        }
    };

    return (
        <div ref={searchRef} className="relative">
            <input
                type="text"
                placeholder="Search..."
                value={searchTerm}
                onChange={handleSearch}
                className="px-3 py-2 max-w-32 sm:max-w-60 rounded-full text-black focus:outline-none transition-all"
                onFocus={() => setIsResultsVisible(true)}
                aria-label="Search products"
            />
            {isResultsVisible && searchResults.length > 0 && (
                <div
                    className="absolute bg-white text-black mt-2 rounded-md shadow-lg w-full max-h-64 overflow-y-auto z-50"
                    role="listbox"
                    aria-label="Search results"
                >
                    {searchResults.map((product) => (
                        <div
                            key={product.id}
                            className="p-2 hover:bg-gray-100 cursor-pointer flex items-center"
                            onClick={() => handleProductClick(product)}
                            role="option"
                            tabIndex={0}
                            onKeyPress={(e) => {
                                if (e.key === 'Enter' || e.key === ' ') {
                                    handleProductClick(product);
                                }
                            }}
                        >
                            <img src={product.fotoUrl} alt="" className="h-10 w-10 object-cover mr-2" />
                            <div>
                                <div>{product.nombre}</div>
                                <div className="text-xs text-gray-500">{getCategoryName(product.id)}</div>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default SearchComponent;

