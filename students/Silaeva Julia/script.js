function makeGETRequest(url, callback) {
	var xhr;

	if (window.XMLHttpRequest) {
		xhr = new XMLHttpRequest();
	} else if (window.ActiveXObject) {
		xhr = new ActiveXObject("Microsoft.XMLHTTP");
	}

	xhr.onreadystatechange = function () {
		if (xhr.readyState === 4) {
			callback(xhr.responseText);
		}
	}

	xhr.open('GET', url, true);
	xhr.send();
}

const promise = new Promise((resolve, reject) => {
	.then((callback) => {
	console.log('processResult promise resolve', callback);
})
	.catch((error) => {
		console.log('Promise rejected', error);
	});

});

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

	summary() {
		let summ = 0;
		this.goods.forEach(({ title, price }) => {
			summ += price;
		})
		return summ;
	}
}

class Basket {
	constructor() {
		this.selectedGoods = [] //выбрать
	}

	addToBasket //добавить 

	deleteFromBasket //удалить 

	order //заказать

}

const list = new GoodsList;
list.fetchGoods();
list.render();
