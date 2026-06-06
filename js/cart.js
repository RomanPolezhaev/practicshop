// TODO: загрузить корзину из localStorage

// TODO: для каждого товара подгрузить данные из API (getProductById)

// TODO: отрисовать список товаров с количеством и кнопкой "Удалить"

// TODO: посчитать итоговую сумму

// TODO: при удалении товара обновлять localStorage и перерисовывать корзину
import { getProductById } from "./api.js";

document.addEventListener("DOMContentLoaded", () => {
    renderCart();
});

async function renderCart() {

    const cartContainer =
        document.getElementById("cart-items");

    const totalContainer =
        document.getElementById("cart-total");

    cartContainer.innerHTML = "";

    const cart =
        JSON.parse(localStorage.getItem("cart")) || [];

    let total = 0;

    for (const item of cart) {

        const product =
            await getProductById(item.id);

        total += product.price * item.quantity;

        const card = document.createElement("div");
        card.className = "cart-item";

        card.innerHTML = `
            <img src="${product.image}" alt="${product.title}" width="100">

            <h3>${product.title}</h3>

            <p>Цена: ${product.price} $</p>

            <p>Количество: ${item.quantity}</p>

            <button class="remove-btn">
                Удалить
            </button>
        `;

        card
            .querySelector(".remove-btn")
            .addEventListener("click", () => {
                removeItem(product.id);
            });

        cartContainer.appendChild(card);
    }

    totalContainer.textContent =
        `${total.toFixed(2)} $`;
}

function removeItem(productId) {

    let cart =
        JSON.parse(localStorage.getItem("cart")) || [];

    cart = cart.filter(item =>
        item.id !== productId
    );

    localStorage.setItem(
        "cart",
        JSON.stringify(cart)
    );

    renderCart();
}