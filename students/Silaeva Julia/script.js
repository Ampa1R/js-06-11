class GoodsItem {
    constructor(title, price) {
        this.title = title;
        this.price = price;
    }
    
    render() {
        return `<div class="goods-item"><h2>${this.title}</h2><p>${this.price}</p><button type="button" class="cart-button goods-button">В корзину</button></div>`;
    }
}
    
class GoodsList {
    constructor() {
        this.goods = [];
    }
    
    fetchGoods() {
        this.goods = [
            { title: 'Компьютер', price: 10000 },
            { title: 'Мышь', price: 500 },
            { title: 'Клавиатура', price: 1000 },
            { title: 'Монитор', price: 7000 },
        ];
    }
    
    render() {
        let goodsLayout = '';
        this.goods.forEach(({ title, price }) => {
            const item = new GoodsItem(title, price);
            goodsLayout += item.render();
        });
        document.querySelector('.goods-list').innerHTML = goodsLayout;
    }
    
    sum() {
        let totalPrice = 0;
        totalPrice +=goods.price
    } //общая сумма товаров
}

class Basket {
    constructor() {
        this.selectedGoods = [] //выбранные товары
    }
    
    addToBasket //добавить в корзину
    
    deleteFromBasket //удалить товар из корзины
    
    order //заказать
    
}

const list = new GoodsList;
list.fetchGoods();
list.render();