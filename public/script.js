console.log("Hello from script.js");
import { productos } from "@lib/products";
import { items } from "@lib/categories";

console.log(productos);
console.log(items);

const searchInput = document.getElementById("searchInput");
const searchResults = document.getElementById("searchResults");
const searchInput1 = document.getElementById("searchInput1");
const searchResults1 = document.getElementById("searchResults1");

// Función de búsqueda
function searchProducts(query) {
  return productos.filter(
    (item) =>
      item.nombre.toLowerCase().includes(query.toLowerCase()) ||
      item.descripcion.toLowerCase().includes(query.toLowerCase())
  );
}

// Buscar categoría por ID de producto
function findCategoryByProductId(productId) {
  for (const category of items) {
    if (category.productos.includes(productId)) {
      return category;
    }
  }
  return null;
}

// Manejar resultados de búsqueda
function handleSearch(input, resultsContainer) {
  input.addEventListener("input", (event) => {
    const query = event.target.value.trim();
    const results = searchProducts(query);

    // Limpiar resultados previos
    resultsContainer.innerHTML = "";

    if (results.length > 0 && query) {
      results.forEach((item) => {
        const resultItem = document.createElement("a");
        resultItem.classList.add("block", "px-4", "py-2", "hover:bg-gray-200");
        resultItem.textContent = item.nombre;
        const category = findCategoryByProductId(item.id);
        resultItem.href = `/${category.nombre}`;
        resultsContainer.appendChild(resultItem);
      });
      resultsContainer.classList.remove("hidden");
    } else {
      resultsContainer.classList.add("hidden");
    }
  });

  // Ocultar resultados cuando el usuario hace clic fuera
  document.addEventListener("click", (event) => {
    if (!resultsContainer.contains(event.target) && event.target !== input) {
      resultsContainer.classList.add("hidden");
    }
  });
}

handleSearch(searchInput, searchResults);
handleSearch(searchInput1, searchResults1);
