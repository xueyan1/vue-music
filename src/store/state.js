import { playMode } from 'common/js/config'
import { loadSearch } from 'common/js/cache'
const state = {
  singer: {}, // 歌手信息
  playing: false, // 是否播放
  fullScreen: false, // 是否全屏显示
  playlist: [], // 播放列表
  sequenceList: [], // 顺序播放歌曲列表
  mode: playMode.sequence, // 播放模式
  currentIndex: -1, // 当前歌的位置
  disc: {},
  topList: {},
  searchHistory: loadSearch(),
  playHistory: [],
  favoriteList: []
}
export default state
