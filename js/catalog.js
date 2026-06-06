//  каталог на главной 
// import { getProducts } from './api.js'
// document.addEventListener("DOMContentLoaded", async () => {
//     const products = await getProducts();
//     const container = document.getElementById("catalog");
//     products.forEach(product => {
//         container.appendChild(product.render());
//     });
// });
import { getProducts } from "./api.js";

let allProducts = [];

document.addEventListener("DOMContentLoaded", async () => {

    allProducts = await getProducts();

    fillCategories(allProducts);

    renderProducts(allProducts);

    document
        .getElementById("apply-filters")
        .addEventListener("click", applyFilters);
});
function renderProducts(products) {

    const container =
        document.getElementById("catalog");

    container.innerHTML = "";

    products.forEach(product => {
        container.appendChild(
            product.render()
        );
    });
}
function fillCategories(products) {

    const select =
        document.getElementById("category-filter");

    const categories =
        [...new Set(
            products.map(p => p.category)
        )];

    categories.forEach(category => {

        const option =
            document.createElement("option");

        option.value = category;
        option.textContent = category;

        select.appendChild(option);
    });
}
function applyFilters() {

    const category =
        document.getElementById("category-filter").value;

    const minPrice =
        Number(
            document.getElementById("min-price").value
        ) || 0;

    const maxPrice =
        Number(
            document.getElementById("max-price").value
        ) || Infinity;

    const filteredProducts =
        allProducts.filter(product => {

            const categoryMatch =
                category === "all" ||
                product.category === category;

            const priceMatch =
                product.price >= minPrice &&
                product.price <= maxPrice;

            return categoryMatch && priceMatch;
        });

    renderProducts(filteredProducts);
}