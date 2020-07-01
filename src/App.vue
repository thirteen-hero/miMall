<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import storage from './storage/index'
export default {
  name: 'App',
  components:{

  },
  data(){
    return{
      res:''
    }
  },
  mounted(){
    //this.axios.get('/mock/user/login.json').then(res=>this.res=res)
  }
}
</script>

<style>
@import './assets/scss/reset.scss'
</style>
