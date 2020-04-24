<template>
  <div class="container">
      <form>
      <input type="search" v-model='this.city' placeholder='Type city to search...' autofocus>
      <input type="button" value="Search">
      </form>
  </div>
</template>

<script>
export default {
    name: 'mainPage',
    data: function(){
        return {
            city: ''
        }
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
    background: url('bckg.jpg') no-repeat center bottom fixed; 
    
    form {
        width: 100%;
        display: flex;
        align-items: center;
        align-content: center;
        justify-content: center;
    
        input {
            width: 50%;
            height: 4.3rem;
            border-radius: .4rem 0 0 .4rem;
            text-align: center;
            border: none;
            font-size: 2rem;
            transition: border 400ms
        }

        input:focus {
            border: solid 1px #3333dd;

        }

        input[type="button"]{
            width: 20%;
            background: #3333dd;
            color: #fff;
            border: none;
            border-radius: 0 .4rem .4rem 0;
            cursor: pointer
        }
    }
}   

</style>