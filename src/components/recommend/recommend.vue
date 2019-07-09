<template>
  <div class="recommend"
       ref="recommend">
    <scroll ref="scroll"
            class="recommend-content"
            :data="discList">
      <div>
        <div v-if="recommends.length"
             class="slider-wrapper">
          <div class="slider-content">
            <slider ref="slider">
              <div v-for="(item, index) in recommends"
                   :key="index">
                <a :href="item.linkUrl">
                  <img @load="loadImage"
                       :src="item.picUrl" />
                </a>
              </div>
            </slider>
          </div>
        </div>
        <div class="recommend-list">
          <h1 class="list-title">热门歌单推荐</h1>
          <ul>
            <li v-for="(item,index) in discList"
                :key="index"
                class="item">
              <div class="icon">
                <img v-lazy="item.imgurl"
                     width="60"
                     height="60">
              </div>
              <div class="text">
                <h2 class="name"
                    v-html="item.creator.name"></h2>
                <p class="desc"
                   v-html="item.dissname"></p>
              </div>
            </li>

          </ul>
        </div>

      </div>
      <div class="loading-container"
           v-show="!discList.length">
        <loading></loading>
      </div>
    </scroll>
  </div>
</template>

<script>
import Slider from 'base/slider/slider'
import Scroll from 'base/scroll/scroll'
import Loading from 'base/loading/loading'
import { ERR_OK } from 'api/config'
import { getRecommend, getDiscList } from 'api/recommend'
export default {
  data() {
    return {
      recommends: [],
      discList: []
    }
  },
  created() {
    this._getRecommend()
    this._getDiscList()
  },
  methods: {
    // 获取轮播图数据
    _getRecommend() {
      getRecommend().then((res) => {
        if (res.code === ERR_OK) {
          console.log(res.data.slider)
          this.recommends = res.data.slider
        }
      })
    },
    // 获取列表数据
    _getDiscList() {
      getDiscList().then((res) => {
        console.log(res.data.list)
        if (res.code === ERR_OK) {
          this.discList = res.data.list
        }
      })
    },
    // 轮播图图片加载好了调一下scroll 的refresh
    loadImage() {
      if (!this.checkloaded) {
        this.checkloaded = true
        setTimeout(() => {
          this.$refs.scroll.refresh()
        }, 20)
      }
    }
  },

  components: {
    Slider,
    Scroll,
    Loading
  }
}

</script>

<style lang="stylus" scoped>
@import '~common/stylus/variable';

.recommend {
  position: fixed;
  width: 100%;
  top: 5.5rem;
  bottom: 0;

  .recommend-content {
    height: 100%;
    overflow: hidden;

    .slider-wrapper {
      position: relative;
      width: 100%;
      height: 0;
      padding-top: 40%;
      overflow: hidden;

      .slider-content {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
      }
    }

    .recommend-list {
      .list-title {
        height: 4.0625rem;
        line-height: 4.0625rem;
        text-align: center;
        font-size: $font-size-medium;
        color: $color-theme;
      }

      .item {
        display: flex;
        box-sizing: border-box;
        align-items: center;
        padding: 0 20px 1.25rem 1.25rem;

        .icon {
          flex: 0 0 3.75rem;
          width: 3.75rem;
          padding-right: 1.25rem;
        }

        .text {
          display: flex;
          flex-direction: column;
          justify-content: center;
          flex: 1;
          line-height: 1.25rem;
          overflow: hidden;
          font-size: $font-size-medium;

          .name {
            margin-bottom: 0.625rem;
            color: $color-text;
          }

          .desc {
            color: $color-text-d;
          }
        }
      }
    }
    .loading-container {
      position: absolute;
      width: 100%;
      top: 60%;
      transform: translateY(-50%);
    }
  }
}
</style>
