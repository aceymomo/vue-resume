<template>
  <div>
    <div class="note-wrapper">
      <div class="note-left">
        <h1>笔记</h1>
          <ul>
            <li class="note-wrap" v-for="(item,index) in note" :class="{active:activeIndex === index}" @click="toggle(index)" v-scroll-to="'.element'+index">
              <a class="note-list" href="#">{{item.title}}</a>
            </li>
            <li class="note-bottom">
              <router-link to="/">返回首页</router-link>
            </li>
          </ul>
      </div>
      <div class="note-right">
        <codes :codes="codes"></codes>
      </div>
    </div>
  </div>
</template>
<script>
import codes from '@/components/code'
export default{
  data(){
    return{
      activeIndex:'',
      note:[
        {
          title:'IE',
        },
        {
          title:'FireFox',
        },
        {
          title:'IOS',
        },
        {
          title:'Android',
        },
        {
          title:'移动端通病',
        },
        {
          title:'小程序',
        },
        {
          title:'VueJs',
        },
        {
          title:'通用问题',
        },
      ],
      codes:[
        {
          title:'IE',
          codeclass:'element0',
          list:[
            {
              head:'1/有哪些需要注意的点？',
              text:[
                {
                  class:'1.IE9及以下无法改变button[disabled]的字体颜色（可改变背景颜色等）。'
                },
                {
                  class:'2.IE9及以下不能使用animation。'
                },
                {
                  class:'3.IE8及以下不能使用translate/last-child/positon-size。'
                },
                {
                  class:'4.Jq1.8以上版本不兼容IE8及以下，如果需要兼容低版本IE，应采用低版本Jq。'
                }
              ],
              content:'低版本IE'
            }
          ],
        },
        {
          title:'FireFox',
          codeclass:'element1',
          list:[
            {
              head:'1/有哪些需要注意的点？',
              text:[
                {
                  class:'1.input[type="checkbox"]{-moz-appearance: none;}在火狐浏览器并没有效果。'
                },
              ],
            }
          ]
        },
        {
          title:'IOS',
          codeclass:'element2',
          list:[
            {
              head:'1/label内有多个input元素时，无法选中各个input元素？',
              text:[
                {
                  class:'当label内部有多个input元素时，PC端和安卓浏览器可以选中各个input，而在IOS中会默认选中第一个，后面的input元素无法选中，故需要注意不要用label去包裹多个input元素。'
                },
              ],
            },
            {
              head:'2/safari中运用transform和opacity的元素会忽略z-index的限制。',
              src:'http://www.zhangxinxu.com/wordpress/2016/08/safari-3d-transform-z-index/',
              link:'why?',
              text:[
                {
                  class:'当label内部有多个input元素时，PC端和安卓浏览器可以选中各个input，而在IOS中会默认选中第一个，后面的input元素无法选中，故需要注意不要用label去包裹多个input元素。'
                },
              ],
            },
            {
              head:'3/微信内禁用字体大小的调整。',
              text:[
                {
                  class:'iOS设置body{-webkit-text-size-adjust: 100%!important!}，安卓则需用JS重写设置字体大小的方法，如果在布局上依赖字体大小的话需要对其进行限制，如果只是普通的竖型阅读模式则可不限制用户对字号的调整。'
                },
              ],
            },
            {
              head:'4/iOS部分元素绑定click事件无效？',
              text:[
                {
                  class:'1.用touch事件替代click事件'
                },
                {
                  class:'2.给对应元素添加{cursor: pointer}'
                },
                {
                  class:'3.将元素改为<a>或者<button>等可点击的元素'
                }
              ],
            },
            {
              head:'5/iOS中，input:disabled状态的颜色很浅，怎么改都没有效果？',
              text:[
                {
                  class:'原因是iPhone Safari/webview的input:disabled有默认样式：'
                },
                {
                  pres:`<span style="color:rgb(47,156,10)">input:disabled</span> {
    <span style="color:rgb(201,44,44)">opacity</span>: 0.4;
}`
                },
                {
                  class:'但是即便是重置opacity也无效，因为还有一条隐藏的样式-webkit-text-fill-color，所以有效的解决方法为:'
                },
                {
                  pres:`<span style="color:rgb(47,156,10)">input:disabled</span> {
    <span style="color:rgb(201,44,44)">color</span>: <span style="color:rgb(25,144,184)">@disabledColor</span>;
    <span style="color:rgb(201,44,44)">opacity</span>: 1;
    <span style="color:rgb(201,44,44)">-webkit-text-fill-color</span>: <span style="color:rgb(25,144,184)">@disabledColor</span>;
}`
                }
              ]
            }
          ]
        },
        {
          title:'Android',
          codeclass:'element3',
          list:[
            {
              head:'1/有哪些需要注意的点？',
              text:[
                {
                  class:'1.低版本安卓系统不支持兄弟选择器。'
                },
              ],
            },
            {
              head:'2/flex布局中的flex-basis失效？',
              text:[
                {
                  class:'1.需要给相应的元素设置width属性。'
                },
              ],
              content:'flexbox'
            },
            {
              head:'3/svg元素对css中的tranform支持性不好，若对其设置2D变换会出现有背景色等bug？',
              text:[
                {
                  class:'1.若需要对其设置2D变换，可采用在svg元素外层进行包裹，对其包裹层设置动画的方法。'
                },
              ],
              content:'SVG'
            }
          ]
        },
        {
          title:'移动端通病',
          codeclass:'element4',
          list:[
            {
              head:'1/设置为{flex: 1;}的input，如果font-size过大，会导致整个input莫名变高，并挤压到其他元素？',
              text:[
                {
                  class:'1.给设置为flexbox的input添加一个width，具体数值没有限定，宽度不起作用，但能解决上述问题。'
                },
              ],
              content:'flexbox'
            },
            {
              head:'2/设置为{overflow: hidden; border-radius: 4px;}的元素，内部子元素若设置transform动画时，会有溢出现象，border-radius失效？',
              text:[
                {
                  class:'1.给设置了border-radius的元素设置z-index。'
                },
              ],
            },
            {
              head:'3/IOS7及低版本安卓系统中，行内元素设置为flexbox后无法改变其作为行内元素的属性？',
              text:[
                {
                  class:'1.对行内元素设置{display: block;}（注意：display: inline-block;无效）。'
                },
              ],
              content:'flexbox'
            },
            {
              head:'4/body设置{width: 100%; height: 100%; overflow: hidden;}，在PC端浏览器上页面显示正常，无法滚动，但是在移动端上body依然存在滚动行为？',
              text:[
                {
                  class:'1.让html和body元素都设置{height: 100%; overflow: hidden;}，最好在body再设置{position: relative;}'
                },
                {
                  pres:`<span style="color:rgb(47,156,10)">html,body</span> {
    <span style="color:rgb(201,44,44)">height</span>: 100%;
    <span style="color:rgb(201,44,44)">overflow</span>: hidden;
}
<span style="color:rgb(47,156,10)">body</span>{
    <span style="color:rgb(201,44,44)">position</span>: relative;
}`
                }
              ],
            },
            {
              head:'5/按钮文字已经设置了line-height却没有垂直居中？',
              text:[
                {
                  class:'1.button元素有默认的padding，最好在reset中对其设置{padding: 0;}。'
                },
              ],
            },
            {
              head:'6/避免图中的长按弹出菜单与选中文本的行为？',
              text:[
                {
                  pres:`<span style="color:rgb(47,156,10)">a, img</span> {
    <span style="color:rgb(201,44,44)">-webkit-touch-callout</span>: none; <span style="color:rgb(125,139,153)">/* 禁止长按链接与图片弹出菜单 */</span>
}
<span style="color:rgb(47,156,10)">html, body</span> {
    <span style="color:rgb(201,44,44)">-webkit-user-select</span>: none;   <span style="color:rgb(125,139,153)">/* 禁止选中文本（如无文本选中需求，此为必选项）*/</span>
    <span style="color:rgb(201,44,44)">user-select</span>: none;
}`
                },
              ],
            },
            {
              head:'7/部分select的height和line-height无法继承？',
              text:[
                {
                  class:'1.存在部分安卓机型，select的height和line-height无法继承父级元素属性，需要单独再定义。'
                },
              ],
            },
            {
              head:'8/微信内视频如何小窗播放？',
              text:[
                {
                  class:'1.微信内视频小窗播放需要添加webkit-playsinline和playsinline。'
                },
              ],
            },
          ]
        },
        {
          title:'小程序',
          codeclass:'element5',
          list:[
            {
              head:'1/如何去掉checkbox元素的默认样式？',
              text:[
                {
                  pres:`<span style="color:rgb(47,156,10)">.wx-checkbox-input</span>{
    <span style="color:rgb(201,44,44)">display</span>: none;
}`
                }
              ]
            }
          ]
        },
        {
          title:'Vuejs知识点总结',
          codeclass:'element6',
          list:[
            {
              head:'VueJs项目笔记',
              src:'https://segmentfault.com/a/1190000010191885',
              link:'查看'
            }
          ]
        },
        {
          title:'通用问题',
          codeclass:'element7',
          list:[
            {
              head:'1/pre标签默认属性{white-space: pre;}，会保护内容宽度而撑宽父元素？',
              text:[
                {
                  class:'1.若需要破坏撑宽机制，可对其设置为{white-space: pre-wrap;}。'
                }
              ]
            },
            {
              head:'2/input元素或者textarea元素中，闪动的光标颜色与设定的字体颜色相同（即color属性），如何更改光标颜色？',
              text:[
                {
                  class:'1.首先，利用color属性设定所需要的光标颜色，然后输入文字的颜色利用text-shadow进行重设。'
                },
                {
                  pres:`<span style="color:rgb(47,156,10)">input</span> {
    <span style="color:rgb(201,44,44)">color</span>: blue;              <span style="color:rgb(125,139,153)">/* 光标颜色 */</span>
    <span style="color:rgb(201,44,44)">text-shadow</span>: 0 0 0 #000;  <span style="color:rgb(125,139,153)">/* 重置输入字体颜色 */</span>
    <span style="color:rgb(201,44,44)">-webkit-text-fill-color</span>: transparent;
}`
                }
              ],
              content:'光标'
            },
            {
              head:'3/如何设置一个有placeholder的select元素？',
              text:[
                {
                  class:'1.解决方法如下：'
                },
                {
                  pres:`<span style="color:rgb(47,156,10)">select:invalid</span> {
    <span style="color:rgb(201,44,44)">color</span>: #999;
}`
                },
                {
                  pres:`<<span style="color:rgb(201,44,44)">select</span> <span style="color:rgb(47,156,10)">required</span>>
    <<span style="color:rgb(201,44,44)">option</span> <span style="color:rgb(47,156,10)">value</span>="" <span style="color:rgb(47,156,10)">disabled selected hidden</span>>Please Choose<<span style="color:rgb(201,44,44)">/option</span>>
<<span style="color:rgb(201,44,44)">/select</span>>`
                }
              ],
              content:'select'
            },
            {
              head:'4/textarea元素不能设置max-height属性？',
              text:[
                {
                  class:'1.可以采用给div添加属性 contenteditable="true"，可模拟成一个textarea，同时可以设置高度限制。'
                },
                {
                  pres:`<<span style="color:rgb(201,44,44)">div</span> <span style="color:rgb(47,156,10)">contenteditable</span>="<span style="color:rgb(47,156,10)">true</span>" <span style="color:rgb(47,156,10)">style</span>="<span style="color:rgb(201,44,44)">max-height</span>: <span style="color:rgb(25, 144, 184)">100px</span>;">
    我是一个可以编辑内容的div
<<span style="color:rgb(201,44,44)">/div</span>>`
                },
              ],
              content:'textarea'
            },
            {
              head:'5/图片下方多出来几个空白的像素？',
              text:[
                {
                  class:'img属于inline元素，inline因为受到字号和行间距的影响底部留出了一段距离。解决方法有： '
                },
                {
                  class:'(1) img元素块级化； '
                },
                {
                  class:'(2) 父元素字号或者行间距为0； '
                },
                {
                  class:'(3) img {vertical-align: middle;} 。'
                },
                {
                  pres:`<span style="color:rgb(47,156,10)">img</span> {<span style="color:rgb(201,44,44)">display</span>: block;}

<span style="color:rgb(47,156,10)">div</span> {<span style="color:rgb(201,44,44)">font-size</span>: 0;}
<span style="color:rgb(47,156,10)">div</span> {<span style="color:rgb(201,44,44)">line-height</span>: 0;}

<span style="color:rgb(47,156,10)">img</span> {<span style="color:rgb(201,44,44)">vertival-align</span>: middle;}`
                },
              ],
              content:'img几个像素空白'
            },
            {
              head:'6/设置了宽度为100%的table被内容撑开了，宽度大于100%？',
              text:[
                {
                  class:'需要设置： '
                },
                {
                  pres:`<span style="color:rgb(47,156,10)">table</span> {
    <span style="color:rgb(201,44,44)">table-layout</span>: fixed;
    <span style="color:rgb(125,139,153)">/* 设置fixed，列宽由表格宽度和列宽度设定 */</span>
    <span style="color:rgb(125,139,153)">/* 默认automatic，列宽度由单元格内容设定。*/</span>
}`
                },
              ],
              content:'img几个像素空白'
            },
            {
              head:'7/类名有ad的元素消失了？',
              text:[
                {
                  class:'Chrome AdBlock里配置了CSS规则之后，访问网站将会自动根据规则将命中的元素display: none，要避免把类名、ID或者资源命名包括ad、banner。 '
                },
              ],
            },
            {
              head:'8/select元素设置text-align无效？',
              src:'https://codepen.io/Apollozz/pen/RLyjoR',
              href:'示例',
              text:[
                {
                  pres:`<<span style="color:rgb(201,44,44)">select</span> <span style="color:rgb(47,156,10)">dir</span>="<span style="color:rgb(47,156,10)">rtl</span>">
    <<span style="color:rgb(201,44,44)">option</span>>我用了dir="rtl"有效果<<span style="color:rgb(201,44,44)">/option</span>>
<<span style="color:rgb(201,44,44)">/select</span>>`
                },
                {
                  class:'dir 属性在以下标签中无效：<base>, , <frame>, <frameset>, <hr>, <iframe>, <param> 以及 <script>'
                }
              ],
              content:'select'
            },
            {
              head:'9/animation-fill-mode: none | both | forwards | backwards',
              text:[
                {
                  class:'animation相关属性'
                }
              ],
              content:'animation'
            },
            {
              head:'10/-webkit-font-smoothing: none(适合低像素文本) | subpixel-antialiased(默认值) | antialiased(抗锯齿)',
              text:[
                {
                  class:'该属性可以使页面上的字体抗锯齿，使用后字体看起来会更清晰舒服，但针对小号字体使用none较为合适，但目前该属性已从W3C标准中移除，慎用！'
                }
              ],
              content:'抗锯齿'
            },
            {
              head:'11/text-shadow可设置多个方向上的阴影',
              text:[
                {
                  class:'下面分别设置了上下左右偏移1px的阴影，可以实现文字描边效果'
                },
                {
                  pres:`<span style="color:rgb(47,156,10)">div</span> {
    <span style="color:rgb(201,44,44)">text-shadow</span>: 1px 0 0 #000,
                 0 1px 0 #000,
                 -1px 0 0 #000,
                 0 -1px 0 #000;
}`
                }
              ],
              content:'animation'
            },
          ]
        }
      ]
    }
  },
  components:{
    codes
  },
  methods:{
    toggle(index){
      this.activeIndex = index
    }
  }
}
</script>
<style scoped lang="stylus">
.note-wrapper
  display :flex
  width:100%
  .note-left
    position :fixed
    top:0
    left:0
    flex:0 0 200px
    width:200px
    height:100%
    background :#3f4869
    h1
      margin:30px 10px
      font-size:24px
      color:#fff
    .note-wrap
      position :relative
      width:100%
      padding:16px 0
      text-align :center
      border-color:#944350 transparent transparent #944350
      &:nth-child(odd)
        background :#363d59
      &.active
        width:220px
        background :#d96275
        cursor :default
        transition :all 0.5s
        &:after
          content :" "
          position :absolute
          bottom:-10px
          right:0
          border-top:5px solid #2a2e40
          border-right:10px solid transparent
          border-bottom :5px solid transparent
          border-left:10px solid #2a2e40
          z-index :1
      .note-list
        display :block
        width:100%
        height:100%
        font-size:14px
        color:#fff
    .note-bottom
      position:absolute
      bottom:0
      left:0
      width:100%
      padding:16px 0
      text-align :center
      border-color:#944350 transparent transparent #944350
      a
        color:#fff
  .note-right
    flex:1
    margin-left:200px
    background :#f5f5f5
    text-align :left
    padding:30px 46px
</style>
