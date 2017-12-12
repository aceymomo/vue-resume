<template>
  <div>
    <ul>
      <li class="code-wrapper" v-for="item in codes" :class="item.codeclass">
        <h1 v-show="item.title">{{item.title}}</h1>
        <ul>
          <li v-for="box in item.list">
            <div class="con-wrap">
              <div class="href-wrap">
                <h3>{{box.head}}</h3>
                <a v-show="box.src" :href="box.src">{{box.link}}</a>
              </div>
              <ul>
                <li class="code-list" v-for="items in box.text">
                  <span>{{items.class}}</span>
                  <pre class="pre-box" v-show="items.pres">
                    <code class="code-box" v-html="items.pres"></code>
                  </pre>
                </li>
              </ul>
              <div class="content-show" v-show="box.content">
                <span>关键词：</span>
                <i>{{box.content}}</i>
              </div>
            </div>
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>
<script>
export default{
  props:{
    codes:{
      type:Array,
      default:[]
    }
  },
  data(){
    return{
      
    }
  }
}
</script>
<style scoped lang="stylus">
.code-wrapper
  margin-bottom:40px
  font-size:0
  h1
    font-size:20px
    font-weight :700
    line-height :30px
    color:#000
  .con-wrap
    background :#fff
    border:1px solid #e4e4e4
    width:100%
    padding:16px
    margin-top :8px
    .href-wrap
      display :flex
      align-items :center
      h3
        font-size:14px
        color:#000
        font-weight :600
        line-height :20px
      a
        font-size:14px
        color:#3399eb
    .code-list
      span
        font-size:14px
        line-height :24px
      .pre-box
        background :rgb(245,245,245)
        padding:10px
        border:1px dashed rgb(204,204,204)
        margin:8px 0 6px 0
        .code-box
          font-size:14px
          line-height :20px
    .content-show
      display :flex
      margin-top :10px
      span
        font-size:14px
        line-height :24px
      i
        display :flex
        align-items :center
        padding:0 4px
        background :#d96275
        color:#fff
        font-style:normal
        font-size:12px
        vertical-align :top
</style>
