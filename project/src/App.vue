<template>
  <div id="app">
    <Header>
     
     
    </Header>
    <GoodsList
      @addToCart="addToCart"
      :filteredGoods="filteredGoods"
      emptyGoodsMessage="Товаров нет"
    />
  </div>
</template>

<script>
import GoodsList from "./components/GoodsList.vue";
import Header from "./components/Header.vue";
// import Search from "./components/Search.vue";
// import Backet from "./components/Backet.vue";    

const API =
  "https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses";

export default {
  name: "App",
  components: {
    GoodsList,
    Header,
  },
  data() {
    return {
      goods: [],
      cartGoods: [],
      searchText: "",
      isCartVisible: false,
    };
  },
  mounted() {
    this.fetchGoods();
  },
  methods: {
    fetchGoods() {
      fetch(`${API}/catalogData.json`)
        .then((result) => {
          return result.json();
        })
        .then((data) => {
          this.goods = data;
        });
    },
    addToCart(item) {
      this.cartGoods.push(item);
    },
    removeFromCart(id) {
      const index = this.cartGoods.find(({ id_product }) => id_product === id);
      if (index !== -1) {
        this.cartGoods.splice(index, 1);
      }
    },
    handleCartButtonClick() {
      this.isCartVisible = !this.isCartVisible;
    },
  },
  computed: {
    filteredGoods() {
      const regexp = new RegExp(this.searchText, "i");
      return this.goods.filter(({ product_name }) => regexp.test(product_name));
    },
  },
};
</script>

<style>
*,
*::after,
*::before {
  box-sizing: border-box;
}

body {
  margin: 0;
  font-family: "Montserrat", -apple-system, BlinkMacSystemFont, "Segoe UI",
    "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans",
    "Helvetica Neue", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: #f9fafc;
}


.goods-list {
  width: 70%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
</style>
