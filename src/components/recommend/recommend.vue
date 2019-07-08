<template>
  <div class="recommend"
       ref="recommend">
    <scroll ref="scroll"
            class="recommend-content">
      <div>
        <div v-if="recommends.length"
             class="slider-wrapper">
          <div class="slider-content">
            <slider ref="slider">
              <div v-for="(item, index) in recommends"
                   :key="index">
                <a :href="item.linkUrl">
                  <img :src="item.picUrl" />
                </a>
              </div>
            </slider>
          </div>
        </div>
      </div>
    </scroll>
  </div>
</template>

<script>
import Slider from 'base/slider/slider'
import Scroll from 'base/scroll/scroll'

import { ERR_OK } from 'api/config'
import { getRecommend } from 'api/recommend'
export default {
  data() {
    return {
      recommends: []
    }
  },
  created() {
    this._getRecommend()
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
    }
  },
  components: {
    Slider,
    Scroll
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
      top: 50%;
      transform: translateY(-50%);
    }
  }
}
</style>
