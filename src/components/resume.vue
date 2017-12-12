<template>
  <div class="resume-wrapper">
    <div class="resume">
      <div class="resume-left">
        <div class="header">
          <img src="../assets/logo1.jpg">
          <h2>张耀泽的简历</h2>
        </div>
        <div class="info">
          <img src="../assets/medal_fill_lighta.png">
          <span>Basic info. 基本信息</span><br>
          <strong>个人信息: 张耀泽 / 男 / 24岁 / 大专</strong><br>
          <strong>web前端开发</strong><br>
          <strong>常用ID:aceymomo</strong><br>
          <strong>Github:</strong>
          <a href="https://github.com/aceymomo" target="_blank">https://github.com/aceymomo</a><br>
          <strong>在线简历:</strong>
          <a href="https://aceymomo.github.io/vue-resume/" target="_blank">https://aceymomo.github.io/vue-resume/</a><br>
        </div>
        <div class="info">
          <img src="../assets/medal_fill_lighta.png">
          <span>Contact. 联系方式</span><br>
          <strong>Email:</strong>
          <a href="mailto:hauntzer@163.qq.com">hauntzer@163.qq.com</a><br>
          <strong>QQ:965554978</strong><br>
          <strong>PhoneNumber:17606572424</strong><br>
        </div>
        <div class="info">
          <img src="../assets/medal_fill_lighta.png">
          <span>Application. 应聘岗位</span><br>
          <strong>web前端开发</strong>
        </div>
        <div class="info">
          <img src="../assets/medal_fill_lighta.png">
          <span>Tech. 主要技能点</span><br>
          <ul>
            <li v-for="item in teches">
              <span>{{item.tech}}</span>
              <div class="box">
                <div class="info-main" :style="{width:item.widths + '%'}"></div>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div class="resume-right">
        <div class="skill-wrapper">
          <div class="skill-header">
            <img src="../assets/medal_fill_lightb.png">
            <h2>Skill. 技能清单</h2>
          </div>
          <div class="skill-main">
            <ul>
              <li class="skill-box" v-for="text in skill">
                <i class="circle"></i>
                <span>{{text.main}}</span>
              </li>
            </ul>
          </div>
        </div>
        <div class="demo-wrapper">
          <div class="demo-header">
            <img src="../assets/medal_fill_lightb.png">
            <h2>Demo. 案例作品</h2>
          </div>
          <div class="demo-main">
            <ul>
              <li class="demo-box" v-for="item in demo">
                <i class="circle"></i>
                <div class="demo-inner">
                  <h2>{{item.head}}</h2>
                  <a :href="item.src" target="_blank">SourceCode</a>
                </div>
                <p>{{item.text}}</p>
              </li>
            </ul>
          </div>
        </div>
        <div class="work-wrapper">
          <div class="work-header">
            <img src="../assets/medal_fill_lightb.png">
            <h2>Work. 工作经历</h2>
          </div>
          <div class="work-main">
            <ul>
              <li class="work-box" v-for="item in work">
                <i class="circle"></i>
                <h2>{{item.title}}</h2>
                <p>{{item.text}}</p>
              </li>
            </ul>
          </div>
        </div>
        <div class="btn">
          <router-link to="/">返回首页</router-link>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default{
  data(){
    return{
      teches:[
        {
          tech:'Html/Css',
          widths:80
        },
        {
          tech:'JavaScript',
          widths:60
        },
        {
          tech:'Vue.Js',
          widths:50
        },
        {
          tech:'NodeJs/Koa',
          widths:25
        },
      ],
      skill:[
        {
          main:'能够用 HTML + CSS 编写语义化的代码，完成较复杂的布局，熟悉Stylus、Sass 等css预处理工具'
        },
        {
          main:'熟悉JavaScript，学习并使用了ES6、ES7最新语法，了解JQuery、NodeJs、Koa'
        },
        {
          main:'熟悉VueJs，通过几个demo的练习加深了对Vue特性的理解'
        },
        {
          main:'熟悉Git、Webpack等开发工具'
        }
      ],
      demo:[
        {
          head:'Element',
          src:'https://github.com/aceymomo/element',
          text:'用来练手Vue的项目，基于Vue2 + Vue-router + Axios + stylus 搭建的仿饿了么移动端app项目，参考了饿了么的界面设计，实现了点单、结算、用户评论、商家信息等功能。'
        },
        {
          head:'PosVue',
          src:'https://github.com/aceymomo/PosVue',
          text:'基于Vue2 + Vue-router + Axios 搭建的收银点餐系统，实现了点餐、挂单、结算等功能。'
        },
        {
          head:'Element',
          src:'https://github.com/aceymomo/element',
          text:'用来练手Vue的项目，基于Vue2 + Vue-router + Axios + stylus 搭建的仿饿了么移动端app项目，参考了饿了么的界面设计，实现了点单、结算、用户评论、商家信息等功能。'
        },
      ],
      work:[
        {
          title:'宁波易商互联有限公司(2016.5~2016.12)',
          text:'主要做前端方面的实现需求，解决bug等工作，并担任部分设计任务。根据客户需求设计制作企业网站页面并切图，实现网页的布局和特效展示。'
        },
        {
          title:'宁波月富电子商务有限公司(2017.2~2017.12)',
          text:'主要负责企业电子商务平台前端部分的开发与维护，根据设计图还原页面，并参与部分和后端数据的交互。'
        }
      ]
    }
  }
}
</script>
<style scoped lang="stylus">
.resume-wrapper
  padding:10px 400px
  .resume
    border:1px solid rgba(77,85,93,0.1)
    box-shadow :2px 2px 2px rgba(7,17,27,0.1)
    display :flex
    .resume-left
      flex:0 0 320px
      width:320px
      background :#001a4d
      padding:15px
      .header
        text-align :center
        font-size:0
        margin-top :40px
        img
          width:200px
          height:200px
          border-radius :50%
        h2
          font-size:28px
          color:#fff
          margin-top :20px
      .info
        margin-top:40px
        font-size:0
        text-align :left
        img 
          width:18px
          height:18px
          vertical-align :top
        span
          display :inline-block
          font-size:18px
          color:#9f3
          margin-bottom :10px
        strong,a
          font-size:14px
          color:#fff
          margin-left:20px
          line-height :24px
        a
          margin :0
          text-decoration :underline
        ul
          margin-left:20px
          li
            display :flex
            span
              display :inline-block
              width:80px
              font-size:14px
              color:#fff
            .box
              margin-left :20px
              height:17px
              width:150px
              background :#00796b
              border-radius :20px
              .info-main
                height:17px
                background :#fff
                border-radius :20px 0 0 20px
    .resume-right
      flex:1
      background :#fff
      padding:38px 16px
      text-align :left
      .skill-wrapper
        .skill-header
          font-size:0
          border-bottom:1px solid #00796b
          display :flex
          padding:6px 0
          img
            width:24px
            height:24px
          h2
            font-size:24px
            color:#00796b
        .skill-main
          margin:20px 0
          .skill-box
            margin:0 0 16px 28px
            font-size:0
            display :flex
            align-items :center
            .circle
              display :inline-block
              width:4px
              height:4px
              border:1px solid rgb(7,17,27)
              border-radius :50%
            span
              margin-left :10px
              font-size:15px
              color:#616161
              line-height :20px
      .demo-wrapper
        .demo-header
          font-size:0
          border-bottom:1px solid #00796b
          display :flex
          padding:6px 0
          img
            width:24px
            height:24px
          h2
            font-size:24px
            color:#00796b
        .demo-main
          margin:20px 0 0 28px
          padding-bottom:10px
          border-left:1px solid #00796b
          .demo-box
            margin-left:16px
            font-size:0
            position :relative
            i
              position :absolute
              top:0
              left:-23px
              display :inline-block
              width:14px
              height:14px
              background :#00796b
              border-radius :50%
            .demo-inner
              display :flex
              align-items :center
              margin:10px 0 0 10px
              h2
                font-size:20px
                color:#000
                font-weight :500
              a
                border:1px solid #00796b
                padding:2px 8px
                border-radius :6px
                font-size:12px
                margin-left:10px
            p
              font-size:15px
              text-indent :2em
              margin-left :10px
              margin-top:16px
              line-height :20px
      .work-wrapper
        margin-top :20px
        .work-header
          font-size:0
          border-bottom:1px solid #00796b
          display :flex
          padding:6px 0
          img
            width:24px
            height:24px
          h2
            font-size:24px
            color:#00796b
        .work-main
          margin:20px 0 0 28px
          padding-bottom:10px
          border-left:1px solid #00796b
          .work-box
            margin:10px 0 0 16px
            font-size:0
            position :relative
            i
              position :absolute
              top:0
              left:-23px
              display :inline-block
              width:14px
              height:14px
              background :#00796b
              border-radius :50%
            h2
              font-size:20px
              color:#000
              font-weight :500
            p
              font-size:15px
              text-indent :2em
              margin-left :10px
              margin-top:16px
              line-height :20px
      .btn
        margin-top:20px
        display :flex
        justify-content :center
        a
          width:120px
          text-align :center
          display :block
          padding:10px 0
          font-size:20px
          color:#fff
          background :#001a4d
          border-radius:6px
          box-shadow :2px 2px 2px rgb(7,17,27)
</style>

