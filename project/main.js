const goods = [
    {tittle: 'Компьютер', price: 10000},
    {tittle: 'Мышь', price: 500},
    {tittle: 'Клавиатура', price: 1000},
    {tittle: 'Монитор', price: 700},
]
const getGoodsItem = (tittle, price) => {
    return `<div class="goods-item"><h2>${tittle}</h2><p>${price}$</p></div>`
}
const renderGoodsList = (list) => {
    const goodsList = list.map(listItem => getGoodsItem(listItem.tittle, listItem.price))
    document.querySelector('.goods-list').innerHTML = goodsList
}
renderGoodsList (goods)