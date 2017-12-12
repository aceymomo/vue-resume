<template>
  <div class="hello">
    <div class="index1" @click="index1">
      <div class="indexBox">
        <img src="../assets/index1.png" width="100">
        <div class="title">
          <h1>作品</h1>
          <span>DEMO</span>
        </div>
      </div>
    </div>
    <div class="index1" @click="index2">
      <div class="indexBox">
        <img src="../assets/index2.png" width="100">
        <div class="title">
          <h1>简历</h1>
          <span>RESUME</span>
        </div>
      </div>
    </div>
    <div class="index1" @click="index3">
      <div class="indexBox">
        <img src="../assets/index3.png" width="100">
        <div class="title">
          <h1>笔记</h1>
          <span>NOTE</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      
    }
  },
  methods:{
    index1(){
      this.$router.push({path:'/note'})
    },
    index2(){
      this.$router.push({path:'/resume'})
    },
    index3(){
      this.$router.push({path:'/demo'})
    },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
html
  height :100%
  body
    height:100%
    .hello
      height :100%
      display :flex
      .index1
        flex:0 0 1
        width:100%
        display :flex
        align-items :center
        justify-content :center
        height:100%
        background:#3f4869
        transition :width 0.5s
        &:hover
          width:200%
        &:nth-child(2)
          background:#80dfff
        &:last-child
          background:#f5f5f5
        .indexBox
          font-size:0
          img
            width:100px
          .title
            margin-top:6px
            font-size:0
            h1
              font-size:50px
              font-weight :500
            span
              display :inline-block
              font-size:34px
              margin-top:10px
</style>
