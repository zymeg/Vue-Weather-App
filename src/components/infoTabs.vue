<template>
    <ul id="info-tabs">
        <li id="current-tab" :class='{ active: active.currentTab }' @click='changeTab'>Current weather</li>
        <li id="today-tab" :class='{ active: active.todayTab }' @click='changeTab'>Today's forecast</li>
        <li id="forecast-tab" :class='{ active: active.forecastTab }' @click='changeTab'>30-days forecast</li>
    </ul>
</template>

<script>
export default {
    name: 'infoTabs',
    data: function(){
        return{
            active: {
                currentTab: true,
                todayTab: false,
                forecastTab: false
            }
        }
    },
    methods: {
        changeTab(e){
            this.active.currentTab = false;
            this.active.todayTab = false;
            this.active.forecastTab = false;
            
            if(e.target.id == 'current-tab') this.active.currentTab = true;
            if(e.target.id == 'today-tab') this.active.todayTab = true;
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

    li{
        padding: 1rem;
        cursor: pointer;
        border-bottom: none;
        transition: border-bottom 200ms;
        width: 100%;
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