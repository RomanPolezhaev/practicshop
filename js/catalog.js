//  каталог на главной 
import { getProducts } from './api.js'
document.addEventListener("DOMContentLoaded", async () => {
    const products = await getProducts();
    const container = document.getElementById("catalog");
    products.forEach(product => {
        container.appendChild(product.render());
    });
});
card.addEventListener("click", () => {
    window.location.href = `product.html?id=${this.id}`;
});