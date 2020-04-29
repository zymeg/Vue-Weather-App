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
import axios from 'axios'


export default {
    name: 'currentInfo',
    data: function(){
        return {
            active: {
                celsius: true,
                fahrenheit: false
            },
            weatherData: {
                temp: 0,
                realFeel: 0,
                humidity: 0,
                pressure: 0
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
        },
        getData(){
            axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${this.$route.params.city}&appid=01386a561bef8525c7de01ac2970cb6f`)
             .then(res => {
                this.weatherData.temp = res.data.main.temp
                this.weatherData.realFeel = res.data.main.feels_like
                this.weatherData.pressure = res.data.main.pressure
                this.weatherData.humidity = res.data.main.humidity

                this.$emit('cityname', res.data.name)
                this.temperature.celsius =  kalvinToCelsius(this.weatherData.temp)
                this.temperature.fahrenheit = kalvinToFahrenheit(this.weatherData.temp)
                this.realFeelTemperature.celsius =  kalvinToCelsius(this.weatherData.realFeel)
                this.realFeelTemperature.fahrenheit = kalvinToFahrenheit(this.weatherData.realFeel)

                this.display = this.temperature.celsius
                this.displayRealFeel = this.realFeelTemperature.celsius

                let bckg = ''

                console.log(res.data.weather[0].main)

                switch(res.data.weather[0].main){
                    case "Clear":
                        bckg = "url('./assets/clear.jpg') no-repeat center center fixed"
                        break
                    case "Clouds":
                        bckg = "url('./assets/clouds.jpg') no-repeat center center fixed"
                        break
                    case "Drizzle":
                        bckg = "url('./assets/drizzle.jpg') no-repeat center center fixed"
                        break
                    case "Mist":
                        bckg = "url('./assets/mist.jpg') no-repeat center center fixed"
                        break
                    case "Rain":
                        bckg = "url('./assets/rain.jpg') no-repeat center center fixed"
                        break
                    case "Snow":
                        bckg = "url('./assets/snow.jpg') no-repeat center center fixed"
                        break
                    case "TShunderstorm":
                        bckg = "url('./assets/thunderstorm.jpg') no-repeat center center fixed"
                        break
                    default:
                        bckg = "url('./assets/bckg.jpg') no-repeat center center fixed"
                        break
                }

                this.$emit('changeBckg', bckg)

                if(res.status != 200){
                    this.$emit('throwedError', e.data.message)
                }
             })
             .catch(e => this.$emit('throwedError', e.data.message));
        }
    },
    created: function(){
        this.getData()
    
    },
    watch: {
        '$route'() {
            this.getData()
        }
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