<template>
  <div class="footer-guide">
    <span class="guide-item" :class="{on:$route.path === '/msite'}" @click="goto('/msite')">
      <span>
        <i class="iconfont icon-waimai"></i>
      </span>
      <span>首页</span>
    </span>
    <span class="guide-item" :class="{on:$route.path === '/search'}" @click="goto('/search')" >
      <span>
        <i class="iconfont icon-search2"></i>
      </span>
      <span>搜索</span>
    </span>
    <span class="guide-item" :class="{on:$route.path === '/order'}" @click="goto('/order')">
      <span>
        <i class="iconfont icon-dingdan"></i>
      </span>
      <span>订单</span>
    </span>
    <span class="guide-item" :class="{on:$route.path === '/profile'}" @click="goto('/profile')">
      <span>
        <i class="iconfont icon-geren"></i>
      </span>
      <span>个人</span>
    </span>

  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    name:'FooterGuide',
    methods:{
      goto(path){
        //重复点击用一个路由，内部会报错
        //方案1 如果点击当前项，没有任务结果
        // if(path !== this.$route.path){
        //   //编程式路由跳转
        //   this.$router.replace(path)
        // } 
        

        //方案2：如果点击当前页，刷新页面
        if(path !== this.$route.path){
          //编程式路由跳转
          this.$router.replace(path)
        }else{
          window.location = path  //发送一般的http请求，会导致页面刷新
        }
      }
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
@import '../../common/stylus/mixins.styl'
  .footer-guide
    top-border-1px(#cccccc)
    position fixed
    display flex
    left 0
    bottom 0
    height 50px
    width 100%
    background white
    .guide-item
      display flex
      flex-direction column
      text-align center
      width 25%
      &.on
        color $green
      span
        margin-top 3px
        font-size 12px
        i
          font-size 22px 
</style>
