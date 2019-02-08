<template>
  <div id="app" class="app">
      <router-view></router-view>
      
  </div>
</template>

<script>

export default {
  name: 'app',
  data () {
    return {
     
    }
  },
  
}
</script>

<style>
  .app{
    position: relative;
    background: #f5f5f5;
    height: 100%;
  }
  
</style>
