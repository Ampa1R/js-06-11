<template>
       <div class="poisk">
        <button type="button" class="search-button">Искать</button>
         <input type="text" class="goods-search" v-model="searchText" />
        
       </div>
</template>


<script>
export default {
  name: "Search",
    
    
    data() {
    return {
    
      searchText: "",
    
    };
  },
  
   
    

    
    
};

    


</script>

<style>



</style>








