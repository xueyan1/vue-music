import jsonp from 'common/js/jsonp'

import { commParams, options } from './config'

const recommendUrl = 'https://c.y.qq.com/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg'

export function getRecommend() {
  const data = Object.assign({}, commParams, {
    platform: 'h5',
    uin: 0,
    needNewCode: 1
  })
  return jsonp(recommendUrl, data, options)
}
