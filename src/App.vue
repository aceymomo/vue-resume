<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
  data(){
    return{
    }
  },
}
</script>

<style lang="stylus">
@import '../static/css/reset.css'
html
  height :100%
  body
    height:100%
    background :#f5f5f5
    #app 
      font-family: "Microsoft Yahei"
      -webkit-font-smoothing: antialiased
      -moz-osx-font-smoothing: grayscale
      text-align: center
      color: #2c3e50
      height:100%
</style>
