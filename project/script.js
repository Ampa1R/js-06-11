const goods = [
    { title: 'Компьютер', price: 10000 },
    { title: 'Мышь', price: 500 },
    { title: 'Клавиатура', price: 400 },
    { title: 'Монитор', price: 700 },
];

let getGoodsItem = (title, price) => {
    return `<div class="goods-item"><h2>${title}</h2><p>${price}</p></div>`;
}

let renderGoodsList = (list) => {
   let goodsList = list.map(listItem => getGoodsItem(listItem.title, listItem.price));
    document.querySelector('.goods-list').innerHTML = goodsList;
}

renderGoodsList(goods);
