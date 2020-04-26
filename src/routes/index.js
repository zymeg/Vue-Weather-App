import Vue from 'vue'
import VueRouter from 'vue-router'
import mainPage from '../components/mainPage'
import searchResult from '../components/searchResult'

Vue.use(VueRouter);


export default new VueRouter({
    routes: [
        { path: '/search/:city', component: searchResult },
        { path: '/', component: mainPage }
      ]
})