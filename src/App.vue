<template>
  <div id="app">
    <mainPage />
  </div>
</template>

<script>
import kalvinToCelsius from '../scripts/kalvinToCelsius.js'
import kalvinToFahrenheit from '../scripts/kalvinToFahrenheit.js'
import mainPage from '../src/components/mainPage.vue'

export default {
  name: 'App',
  components: {
    mainPage
  },
  data: function(){
    return {
      celsiusTemperature: 0,
      fahrenheitTemperature: 0,
      temperature: 300
    }
  },
  created(){
     this.celsiusTemperature =  kalvinToCelsius(this.temperature)
     this.fahrenheitTemperature = kalvinToFahrenheit(this.temperature)
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
}
</style>
