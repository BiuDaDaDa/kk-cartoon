
import axios from 'axios'

export default function (Vue) {
  Vue.prototype.$request = function (options) {
    let headers = options.headers || {}
    let params = options.params || {}
    axios[options.type](options.url, {
      headers,
      params
    })
    // 请求时获取不到实例，需要将this作为参数传过去
      .then(options.success.bind(this))
      .catch(options.failed.bind(this))
  }
}
