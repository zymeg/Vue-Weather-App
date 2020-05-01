<template>
    <ul id="info-tabs">
        <li id="current-tab" :class='{ active: active.currentTab }' @click='changeTab'>Current weather</li>
        <li id="forecast-tab" :class='{ active: active.forecastTab }' @click='changeTab'>Forecast</li>
    </ul>
</template>

<script>
export default {
    name: 'infoTabs',
    data: function(){
        return{
            active: {
                currentTab: true,
                forecastTab: false
            }
        }
    },
    methods: {
        changeTab(e){
            this.active.currentTab = false;
            this.active.forecastTab = false;
            
            if(e.target.id == 'current-tab') this.active.currentTab = true;
            if(e.target.id == 'forecast-tab') this.active.forecastTab = true;

            this.$emit('tabChanged', e.target.id)

        }
    }

}
</script>

<style scoped lang='scss'>
#info-tabs {
    display: flex;
    list-style: none;
    justify-content: space-around;
    width: 100%;
    font-size: 1.3rem;
    margin: 2rem auto;

    @media screen and (max-width: 700px) {
        font-size: 1rem;
    }

    li{
        padding: 1rem;
        cursor: pointer;
        border-bottom: none;
        transition: border-bottom 200ms;
        width: 100%;
        display: flex;
        justify-content: center;
        align-content: center;
        align-items: center;
        justify-items: center;
        text-align: center;

        &:hover{
            border-bottom: 3px solid lighten(#33d, 30%)
        }
    }

    .active{
        border-bottom: 3px solid #33d!important
    }
}
</style>