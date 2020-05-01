<template>
<div>
    <div id="search-bar">
        <searchBar/>
    </div>
    <div id="weather-card" v-if='noError'>
        <h1 id="city">{{ cityName }}</h1>
        <infoTabs @tabChanged='changeTab'/>
        <currentInfo :class='{ show: activeContent.current, hide: !activeContent.current }' @cityname='changeCityName' @throwedError='err' @changeBckg='emitBckg' />
        <forecastTab  :class='{ show: activeContent.forecast, hide: !activeContent.forecast  }' />
    </div>
    <div class="error" v-else>
        {{ errMessage }}
    </div>
</div>
</template>

<script>
import searchBar from './searchBar'
import infoTabs from './infoTabs'
import currentInfo from './currentInfo'
import forecastTab from './forecastTab'


export default {
    name: 'searchResult',
    components: {
        searchBar,
        infoTabs,
        currentInfo,
        forecastTab
    },
    data: function(){
        return{
            activeContent: {
                current: true,
                forecast: false
            },
            cityName: '',
            noError: 1,
            errMessage: ''
        }
    },
    methods: {
        changeTab(e){
            this.activeContent.current = false
            this.activeContent.forecast = false

            if(e == 'current-tab') this.activeContent.current = true
            if(e == 'forecast-tab') this.activeContent.forecast = true
        },
        changeCityName(e){
            this.cityName = e
            noError = 1
        },
        err(e){
            this.errMessage = e
            noError = 0
        },
        emitBckg(e){
            this.$emit('changeBckg', e)
        }
    }
}
</script>

<style scoped lang='scss'>
#search-bar {
    width: 50%;
    margin: 2.5rem auto;

    @media screen and (max-width: 700px){
        width: 95%;
        margin: 1rem auto;
    }
}

#weather-card{
    width: 90%;
    min-height: 80vh;
    margin: 2rem auto;
    border: 1px solid #3333dd;
    border-radius: .4rem;
    padding: 2rem;
    background: rgba(255, 255, 255, 0.63);

    @media screen and (max-width: 700px) {
        margin: 1rem auto;
        padding: 1rem;
    }

    h1{
        font-size: 4.5rem;
        letter-spacing: .2rem;

        @media screen and (max-width: 700px) {
            font-size: 3.5rem
        }
        
    } 

    .show{
        display: block!important
    }

    .hide {
        display: none!important
    }

    
}

.error {
    margin: 0 auto;
    text-align: center;
    font-size: 3.4rem;
    color: #333;
    font-weight: bold;
    width: 50%;
    padding: 1rem;
    background: rgba(255, 255, 255, 0.63) 
}


</style>