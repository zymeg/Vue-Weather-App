<template>
  <div id="app" :style='style'>
     <router-view @changeBckg='changeBckImg'/>
  </div>
</template>

<script>
import mainPage from '../src/components/mainPage.vue'

export default {
  name: 'App',
  components: {
    mainPage
  },
  data: function(){
    return {
      style: {
        background: "url('./assets/bckg.jpg') no-repeat center bottom fixed"
      }
    }
  },
  methods: {
    changeBckImg(e){
      this.style.background = e
    }
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
  user-select: none;
  padding: 0;
}

#app{
  width: 100%;
  min-height: 100vh;
  margin: 0;
  position: absolute
}
</style>
