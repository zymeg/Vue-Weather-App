<template>
  <div class="container">
        <searchBar />

  </div>
</template>

<script>
import searchBar from './searchBar'

export default {
    name: 'mainPage',
    components: {
        searchBar
    }
}
</script>

<style lang='scss' scoped>

.container{
    width: 100%;
    height: 100vh;
    margin: 0 auto;
    display: flex;
    align-items: center;
    align-content: center;
    justify-content: center;
}   

</style>