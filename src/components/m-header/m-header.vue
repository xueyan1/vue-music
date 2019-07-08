<template>
  <div class="m-header">
    <div class="icon"></div>
    <h1 class="text">Chicken Music</h1>
    <router-link tag="div" class="mine" to="/user">
      <i class="icon-mine"></i>
    </router-link>
  </div>
</template>

<script>
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
 @import "~common/stylus/variable"
 @import "~common/stylus/mixin"
  .m-header
   position: relative
   height:2.75rem
   text-align: center
   color:$color-theme
   font-size: 0
   .icon
      display inline-block
      vertical-align top
      margin-top:.375rem
      width 1.875rem
      height 2rem
      margin-right .5625rem
      bg-image('logo')
      background-size 1.875rem 2rem
    .text
      display inline-block
      vertical-align top
      line-height 2.75rem
      font-size $font-size-large
    .mine
      position absolute
      top 0
      right 0
      .icon-mine
        display block
        padding .75rem
        font-size 1.25rem
        color $color-theme
</style>
