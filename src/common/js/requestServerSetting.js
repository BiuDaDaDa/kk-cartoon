
import axios from 'axios'

export default function (Vue) {
  Vue.prototype.$request = function (options) {
    let headers = options.headers || {}
    let data = options.data || {}
    let params = options.params || {}
    let method = options.type
    axios(options.url, {
      method,
      headers,
      data,
      params
    }).then(options.success.bind(this)).catch(options.failed.bind(this))
  }
}
