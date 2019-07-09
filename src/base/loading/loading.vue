<template >
  <div class="loading">
    <img src="./loading.gif"
         height="24"
         width="24">
    <p class="desc">{{title}}</p>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: '正在加载中。。。'
    }
  },
  data() {
    return {
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~common/stylus/variable';

.loading {
  width: 100%;
  text-align: center;

  .desc {
    line-height: 1.25rem;
    font-size: $font-size-small;
    color: $color-text-l;
  }
}
</style>
