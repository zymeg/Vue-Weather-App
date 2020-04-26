<template>
  <div id="app">
     <router-view />
  </div>
</template>

<script>
import mainPage from '../src/components/mainPage.vue'

export default {
  name: 'App',
  components: {
    mainPage
  }
}
</script>

<style lang='scss'>
@import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');

*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body, html {
  width: 100%;
  min-height: 100%;
  font-family: 'Roboto', sans-serif;
  background: url('./assets/bckg.jpg') no-repeat center bottom fixed; 
  user-select: none;
}
</style>
