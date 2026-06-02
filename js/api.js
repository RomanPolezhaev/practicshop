import Product from './models.js';

const API_URL = "https://fakestoreapi.com";

async function getProducts() {
    const res = await fetch(`${API_URL}/products`);
    const data = await res.json();

    return data.map(product => Product.fromApi(product));
}

async function getProductById(id) {
    const res = await fetch(`${API_URL}/products/${id}`);
    const data = await res.json();

    return Product.fromApi(data);
}

export { getProducts, getProductById };