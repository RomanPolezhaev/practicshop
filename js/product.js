import { getProductById } from "./api.js";
document.addEventListener("DOMContentLoaded", async () => {
  // Получить id из URL
  const params = new URLSearchParams(window.location.search);
  const id = params.get("id");

  // Загрузить товар
  const product = await getProductById(id);
  console.log(product);
  // Отрисовать товар через метод класса
  const container = document.getElementById("product");
  container.appendChild(product.renderDetails());

  // Добавить в корзину
 document
    .getElementById("addToCart")
    .addEventListener("click", () => {

        let cart =
            JSON.parse(localStorage.getItem("cart")) || [];

        const existing =
            cart.find(item => item.id === product.id);

        if (existing) {
            existing.quantity++;
        } else {
            cart.push({
                id: product.id,
                quantity: 1
            });
        }

        localStorage.setItem(
            "cart",
            JSON.stringify(cart)
        );

        alert("Товар добавлен в корзину!");
    });
  // Переход в каталог
  document.getElementById("toCatalog").addEventListener("click", () => {
    window.location.href = "index.html";
  });
  // Переход в корзину
  document.getElementById("toCart").addEventListener("click", () => {
    window.location.href = "cart.html";
  });
});
