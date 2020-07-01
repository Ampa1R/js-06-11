<template>
    
    <div>
                  
      <button
        type="button"
        class="cart-button"
        v-on:click="isCartVisible = !isCartVisible"
      >
        Корзина
      </button>
      <div class="cart" v-if="isCartVisible">
        <div
          class="cart-item"
             v-for = "item in cartGoods"      
          v-bind:key="item.id_product"
        >
          <h3>{{ item.product_name }}</h3>
          <p>{{ item.price }}</p>
        </div>
             </div>
        <slot />
    </div>   
</template>
<script>
export default {
  name: "Backet",    
 data() {
     return {
        isCartVisible: false,          
     }
 },    
 
props: {       
        cartGoods: {
            type: Array,
      required: false,
        }        
        },   
methods: {
   handleCartButtonClick() {
      this.isCartVisible = !this.isCartVisible;       
    },
},        
}
</script>

<style>
    
    .cart-button {
  border: none;
  border-radius: 20px;
  padding: 7px 20px;
  background: #0b5bb8;
  font-size: 16px;
  font-weight: 600;
  font-family: inherit;
  cursor: pointer;
  color: #fff;
}

.cart-button:focus {
  outline: none;
  background: #0c50a0;
}

.cart-button:hover {
  background: #3b7eb9;
}

.cart {
  position: absolute;
  width: 300px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.2);
  background: #fff;
  padding: 10px 15px;
  top: 100px;
}

.cart-item {
  margin-bottom: 10px;
}

.goods-list {
  width: 70%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}

    
</style>


