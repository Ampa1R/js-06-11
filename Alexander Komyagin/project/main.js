class GoodsItem {
    constructor( title, price) {
         this.title = title
         this.price = price
    }
    render() {
        return `<div class = "goods-item">
                  <h2>${this.title}</h2>
                  <p>${this.price}</p>
                </div>`
    }
}

class GoodsList {
    constructor () {
        this.goods = []
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
        let goodsLayout = ''
        this.goods.forEach(({ title, price }) => {
             const item = new GoodsItem(title,price)
             goodsLayout += item.render()
        });
        document.querySelector('.goods-list').innerHTML = goodsLayout
    }
    count () {
        let sum = 0;
        this.goods.forEach(({price}) => {
            sum += price
            }
         )
        console.log(sum)
    }
}

class Cart {
constructor(){}
  //создание корзины
  render(){}
  //добавление товаров
  addProduct(){} 
  //удаление товаров
  removeProduct(){}
  //подсчет количества товаров
  countProducts(){}
  //подсчет общей суммы товаров  
  countProductsPrices(){}   
  }
  
  const list = new  GoodsList
  list.fetchGoods()
  list.render()
  list.count()