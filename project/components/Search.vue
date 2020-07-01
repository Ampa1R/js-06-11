<template>
  <div>
         <button type="button" class="search-button">Искать</button>
         <input class="goods-search" :value="text" @input="handleInput" type="text"/>


    
  </div>
</template>

<script>
export default {
  name: "Search",

    
props: {
    text: { 
    type: String,
    required: true,
        }
},
  
methods: {
   handleInput(event) {
       this.$emit("textChange", event.target.value);
   } 
}    
    
    
    
};    
</script>

<style>
</style>
