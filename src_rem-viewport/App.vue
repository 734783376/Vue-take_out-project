<template>
  <div>
    <h1>App组件</h1>
    <p>测试适配</p>
    <div class="box">
      box
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {

  }
</script>

<style lang="stylus">
@import './common/stylus/mixins.styl'

p
  width 375px
  height 100px
  background green

.box
  width 750px
  height 75px
  background red

</style>
