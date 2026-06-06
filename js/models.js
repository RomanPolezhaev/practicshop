
// класс товара
class Product {
    // id, title, price, description, image, category
    constructor(id, title, price, description, image, category) {
        this.id = id;
        this.title = title;
        this.price = price;
        this.description = description;
        this.image = image;
        this.category = category;
}
 static fromApi(data) {
        return new Product(
            data.id,
            data.title,
            data.price,
            data.description,
            data.image,
            data.category
        );
    }
    render() {
        const card = document.createElement("div");
        card.className = "card";

        card.innerHTML = `
            <img src="${this.image}" alt="${this.title}">
            <h3>${this.title}</h3>
            <p>${this.price} $</p>
            <a href="product.html?id=${this.id}">Подробнее</a>
        `;

        return card;
    }
     renderDetails() {
        const card = document.createElement("div");

        card.innerHTML = `
            <img src="${this.image}" alt="${this.title}">
            <h2>${this.title}</h2>
            <p>${this.description}</p>
            <h3>${this.price}$</h3>

            <button id="addToCart">Добавить в корзину</button>
            <button id="toCatalog">В каталог</button>
            <button id="toCart">В корзину</button>
        `;

        return card;
    }
}
export default Product;
// TODO: класс для одного элемента корзины
class CartItem {
    // productId, quantity
}

// TODO: класс корзины
class Cart {
  constructor(items = []) {
    this.items = items; // массив CartItem
  }

  addItem(productId) {
    // TODO: добавить товар (если есть — увеличить количество)
  }

  removeItem(productId) {
    // TODO: удалить товар
  }

  getTotal() {
    // TODO: вернуть итоговую сумму
  }
}


