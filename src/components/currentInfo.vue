<template>
<div id="current-info">
    <span id="temperature">
        <ul>
            <li :class='{ active: active.celsius }' @click='changeTab' id='celsius'>Celsius</li>
            <li :class='{ active: active.fahrenheit }' @click='changeTab' id='fahrenheit'>Fahrenheit</li>
        </ul>
        {{ display }}°
    </span>
    <span id="real-feel">Real feel: <span>{{ displayRealFeel }}</span></span>
    <span id="humidity-pressure">Humidity: <span>{{ weatherData.humidity }}%</span> | Pressure: <span>{{ weatherData.pressure }}hPa</span></span>
</div>
</template>

<script>
import kalvinToCelsius from '../../scripts/kalvinToCelsius.js'
import kalvinToFahrenheit from '../../scripts/kalvinToFahrenheit.js'

export default {
    name: 'currentInfo',
    data: function(){
        return {
            active: {
                celsius: true,
                fahrenheit: false
            },
            weatherData: {
                temp: 300,
                realFeel: 302,
                humidity: 46,
                pressure: 1016
            },
            temperature: {
                celsius: 0,
                fahrenheit: 0
            },
            realFeelTemperature: {
                celsius: 0,
                fahrenheit: 0
            },
            display: 0,
            displayRealFeel: 0

        }
    },
    methods: {
        changeTab(e){
            this.active.celsius = false
            this.active.fahrenheit = false

            if(e.target.id == 'celsius'){
                this.active.celsius = true
                this.display = this.temperature.celsius 
                this.displayRealFeel = this.realFeelTemperature.celsius 
            } else if(e.target.id == 'fahrenheit'){
                this.active.fahrenheit = true
                this.display = this.temperature.fahrenheit 
                this.displayRealFeel = this.realFeelTemperature.fahrenheit 
            }
        }
    },
    created: function(){
        this.temperature.celsius =  kalvinToCelsius(this.weatherData.temp)
        this.temperature.fahrenheit = kalvinToFahrenheit(this.weatherData.temp)
        this.realFeelTemperature.celsius =  kalvinToCelsius(this.weatherData.realFeel)
        this.realFeelTemperature.fahrenheit = kalvinToFahrenheit(this.weatherData.realFeel)

        this.display = this.temperature.celsius
        this.displayRealFeel = this.realFeelTemperature.celsius
    }
}
</script>

<style scoped lang='scss'>
#current-info{
    padding: 0 1rem;
    text-align: center;

    #temperature{
        font-size: 4rem;
        font-weight: 500;
        display: block;
        margin: 3rem 0 0;

        ul{
            font-size: .8rem;
            font-weight: 400;
            display: flex;
            width: 10rem;
            list-style: none;
            margin: 1rem auto;
            justify-content: space-around;

            li{
                padding: .4rem;
                cursor: pointer;
                border-bottom: none;
                transition: border-bottom 200ms;
                width: 100%;
                text-align: center;

                &:hover{
                    border-bottom: 2px solid lighten(#33d, 30%)
                }
    }

    .active{
        border-bottom: 2px solid #33d!important
    }
        }
    }

    #real-feel{
        font-weight: 200;
        font-style: italic;
        display: block;
        margin: 1rem 0;

        span {
            font-weight: bold;
            font-style: normal
        }
    }

    #humidity-pressure{
        font-weight: 200;
        font-style: italic;
        margin: 1rem 0

        span {
            font-weight: bold;
            font-style: normal
        }
    }
}
</style>