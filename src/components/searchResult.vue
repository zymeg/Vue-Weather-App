<template>
<div>
    <div id="search-bar">
        <searchBar />
    </div>
    <div id="weather-card">
        <h1 id="city">{{ $route.params.city }}</h1>
        <infoTabs @tabChanged='changeTab'/>
        <currentInfo :class='{ show: activeContent.current, hide: !activeContent.current }'/>
        <todayTab  :class='{ show: activeContent.today, hide: !activeContent.today  }'/>
        <forecastTab  :class='{ show: activeContent.forecast, hide: !activeContent.forecast  }'/>
    </div>
    <div id="loading" style='display: none'>
        Loading...
    </div>
</div>
</template>

<script>
import searchBar from './searchBar'
import infoTabs from './infoTabs'
import currentInfo from './currentInfo'
import todayTab from './todayTab'
import forecastTab from './forecastTab'

export default {
    name: 'searchResult',
    components: {
        searchBar,
        infoTabs,
        currentInfo,
        todayTab,
        forecastTab
    },
    data: function(){
        return{
            activeContent: {
                current: true,
                today: false,
                forecast: false
            }
        }
    },
    methods: {
        changeTab(e){
            this.activeContent.current = false
            this.activeContent.today = false
            this.activeContent.forecast = false

            if(e == 'current-tab') this.activeContent.current = true
            if(e == 'today-tab') this.activeContent.today = true
            if(e == 'forecast-tab') this.activeContent.forecast = true
        }
    }
}
</script>

<style scoped lang='scss'>
#search-bar {
    width: 50%;
    margin: 2.5rem auto;
}

#weather-card{
    width: 90%;
    min-height: 80vh;
    margin: 2rem auto;
    border: 1px solid #3333dd;
    border-radius: .4rem;
    padding: 2rem;
    background: rgba(255, 255, 255, 0.63);

    h1{
        font-size: 4.5rem;
        letter-spacing: .2rem;
        
    } 

    .show{
        display: block;
    }

    .hide {
        display: none;
    }

    
}


</style>