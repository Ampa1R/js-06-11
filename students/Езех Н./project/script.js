'use strict';

class GoodsItem {
    constructor( title, price) {
         this.title = title;
         this.price = price;
    }

    render() {
        return `<div class = "goods-item">
                  <h2>${this.title}</h2><p>${this.price}</p>
                </div>`;
    }
}

class GoodsList {
    constructor () {
        this.goods = [];
    }
    fetchGoods() {
        this.goods = [
        { title: 'Компьютер', price: 10000 },
        { title: 'Мышь', price: 500 },
        { title: 'Клавиатура', price: 1000 },
        { title: 'Монитор', price: 7000 },
        ]
    }

    render () {
        let goodsLayout = '';
        this.goods.forEach(({ title, price }) => {
             const item = new GoodsItem(title,price);
             goodsLayout += item.render();
        });
        document.querySelector('.goods-list').innerHTML = goodsLayout;
    }
    /* общая стоимость всех товаров   */
    countAll () {
        let amount = 0;
        this.goods.forEach(({price}) => {
            amount += price;
            }
         )
        // сумма выводится прямо около корзины. В будующем там планируется выводиться количество товаров в корзине
        document.querySelector('#count').innerHTML = amount;
    }

}
// если я правильно поняла задание
class Cart {
constructor(id){}
  render(){}
  isEmpty(){} //  проверка на пустоту
  clearCart(){}  // очистка
  addItem(id){}  // добавить продукт
  deleteItem(id){}  // удалить продукт
  countItems(){}  // количество товаров в корзине
  countAll(){}   // стоимость всех товаров в корзине

  }


class CartItem {
    constructor(id) {}
render(){}
    }

 const list = new  GoodsList;
 list.fetchGoods();
 list.render();
 list.countAll()
