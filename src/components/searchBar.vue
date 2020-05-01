<template>
  <div>
    <input type="search" name='q' v-model="city" placeholder='Type city to search...' autofocus @keyup='checkKeyCode'>
    <input type="button" value="Search" @click='searchCity'>
  </div>
</template>

<script>
export default {
    name: 'searchBar',
    data: function(){
        return {
            city: ''
        }
    },
    methods: {
        searchCity(){
            this.$router.push(`/search/${this.city}`)
        },
        checkKeyCode(e){
            if(e.keyCode == 13){
                this.searchCity()
            }
        }
    }
}
</script>

<style scoped lang='scss'>
div{
    width: 100%;
    margin: 0 auto;
    display: flex;
    align-items: center;
    align-content: center;
    justify-content: center;

        input {
            width: 50%;
            height: 4.3rem;
            padding: 1rem;
            border-radius: .4rem 0 0 .4rem;
            text-align: left;
            border: none;
            font-size: 2rem;
            background: rgba(255, 255, 255, 0.5);
            transition: all 400ms;

            @media screen and (max-width: 700px) {
                width: 75%;
                font-size: 1rem;
            }
        }

        input:focus {
            border: solid 1px #3333dd;
            background: #fff;

        }

        input[type="button"]{
            width: 20%;
            background: #3333dd;
            color: #fff;
            border: none;
            border-radius: 0 .4rem .4rem 0;
            cursor: pointer;

            @media screen and (max-width: 700px) {
                padding: .3rem;
            }
        }
}   
</style>