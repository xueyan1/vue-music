<template>
  <transition class="slide">
    <music-list :title="title"
                :bg-image="bgImage"
                :songs="songs"></music-list>
  </transition>
</template>

<script>
import MusicList from 'components/music-list/music-list'
import { getSingerDetail } from 'api/singer'
import { ERR_OK } from 'api/config'
import { mapGetters } from 'vuex'
import { createSong, isValidMusic, processSongsUrl } from 'common/js/song'
export default {
  data() {
    return {
      songs: []
    }
  },
  created() {
    this._getDetail()
  },
  computed: {
    // 从state中获取singer数据
    ...mapGetters([
      'singer'
    ]),
    // 标题
    title() {
      return this.singer.name
    },
    // 背景图片
    bgImage() {
      return this.singer.avatar
    }
  },
  methods: {
    _getDetail() {
      if (!this.singer.id) {
        this.$router.push('/singer')
        return
      }
      getSingerDetail(this.singer.id).then((res) => {
        if (res.code === ERR_OK) {
          processSongsUrl(this._normalizeSongs(res.data.list)).then((songs) => {
            this.songs = songs
          })
        }
      })
    },
    _normalizeSongs(list) {
      const ret = []
      list.forEach((item) => {
        const { musicData } = item
        if (isValidMusic(musicData)) {
          ret.push(createSong(musicData))
        }
      })
      return ret
    }
  },
  components: {
    MusicList
  }
}
</script>

<style lang="stylus" scoped>
@import '~common/stylus/variable';

.slide-enter-active, .slide-leave-active {
  transition: all 0.5s;
}

.slide-enter, .slide-leave-to {
  transform: translate3d(100%, 0, 0);
}
</style>
