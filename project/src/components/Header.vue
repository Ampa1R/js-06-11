<template>
  <header>
   <Search>  
    
    </Search>
    <Backet></Backet>
    
  </header>
</template>

<script>
    
import Search from "./Search.vue"; 
import Backet from "./Backet.vue";    
    
export default {
  name: "Header",
  components: {
      Search,
      Backet,
  }
};
</script>

<style>
header {
  display: flex;
  flex-direction: row-reverse;
  background: #fff;
  padding: 20px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.2);
  position: relative;
}
</style>
