<template>
  <div class="tab">
    <router-link v-for="(item,index) of list" :key="index" tag="div" class="tab-item" :to="item.route">
      <span class="tab-link">{{item.name}}</span>
    </router-link>
  </div>
</template>
<script >

export default {
  data() {
    return {
      list: [
        { name: '推荐', route: '/recommend' },
        { name: '歌手', route: '/singer' },
        { name: '排行', route: '/rank' },
        { name: '搜索', route: '/search' }
      ]
    }
  }
}
</script>
<style lang="stylus" scoped rel="stylesheet/stylus">
  @import '~common/stylus/variable'
  .tab
    display flex
    height 2.75rem
    line-height 2.75rem
    font-size $font-size-medium
    .tab-item
      text-align center
      flex 1
      .tab-link
        padding-bottom .3125rem
        color $color-text-l
      &.router-link-active
        .tab-link
          color $color-theme
          border-bottom .125rem solid $color-theme
</style>
