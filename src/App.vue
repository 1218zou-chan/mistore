<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>


export default {
  name: 'App',
  components: {
    
  },
  mounted(){
    this.getUserName();
  },
  methods:{
    getUserName(){
      if(this.$cookie.get('id')){
        this.axios.get('/user').then(data=>{
        this.$store.state.username = data.username;
        })
      }
    }
  }
}
</script>

<style lang ='scss'>
@import './assets/scss/config.scss';
@import './assets/scss/reset.scss';
@import './assets/scss/base.scss';
 
</style>
