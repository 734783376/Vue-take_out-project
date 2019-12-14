<template>
  <div>
    <h1>App</h1>
    <button class="btn btn1">1111</button>
    <button class="btn btn2">2222</button>
    <ul>
      <li @click="choose(index)" :class="{active:navIndex === index}" v-for="(item,index) in 20" :key="index">{{item}}</li>
    </ul>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    data(){
      return{
        navIndex:null
      }
    },
    methods: {
      choose(index){
        this.navIndex = index
      }
    },
  }
</script>

<style lang="stylus">
@import './common/stylus/mixins.styl'
/*定义变量————$符号 */
$color = green


/*定义混合 */
btnStyle(w,h,bg)
  width w
  height h
  border none 
  background-color bg


/*定义函数 */                                                                                                        

add(a,b)
  a + b

/*父级引用 & */


h1
  color $color

.btn1 
  btnStyle(100px,100px,red)
  box-sizing content-box
  padding add(20px,30)

.btn2
  btnStyle(200px,200px,green)

ul
  li
    line-height 40px
    bottom-border-1px($color)
    // li.active
    //   color red
    &.active
      color red

</style>
