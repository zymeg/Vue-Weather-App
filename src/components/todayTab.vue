<template>
  <div id="today">
        <ul class='forecast-list'>
            <li class="forecast-card" v-for='x in items' :key='x'>
                <div class="date-time">{{ x.dt.getHours() - 2 }}:00
                    <span>{{ x.dt.getDate() }}.{{ x.dt.getMonth() + 1 }}.{{ x.dt.getFullYear() }}</span>
                </div>
                <div class="temperature">
                    {{ x.temp.celsius }}°C / {{ x.temp.fahrenheit }}°F
                    <span>{{ x.realFeel.celsius }}°C / {{ x.realFeel.fahrenheit }}°F</span>
                </div>
                <div class="humidity-pressure">
                    <span>Humidity: {{ x.humidity }}%</span>
                    <span>Pressure: {{ x.pressure }}hPa</span>

                </div>
            </li>
        </ul>
    </div>
</template>

<script>
import kalvinToCelsius from '../../scripts/kalvinToCelsius.js'
import kalvinToFahrenheit from '../../scripts/kalvinToFahrenheit.js'
import axios from 'axios'

export default {
    name: 'todayTab',
    data: function(){
        return {
            items: []
        }
    },
    created() {
        axios.get(`http://api.openweathermap.org/data/2.5/forecast?q=${this.$route.params.city}&appid=01386a561bef8525c7de01ac2970cb6f`)
         .then(res => {
             res.data.list.forEach(e => {
                 this.items.push({
                     dt: new Date(e.dt * 1000),
                     temp: {
                         celsius: kalvinToCelsius(e.main.temp),
                         fahrenheit: kalvinToFahrenheit(e.main.temp),
                     },
                     realFeel: {
                         celsius: kalvinToCelsius(e.main.feels_like),
                         fahrenheit: kalvinToFahrenheit(e.main.feels_like),
                     },
                     pressure: e.main.pressure,
                     humidity: e.main.humidity
                 })
             });
         })
         .catch(e => console.log(e))
    }
}
</script>

<style scoped lang='scss'>
@import '../scss/forecast-list.scss';
</style>