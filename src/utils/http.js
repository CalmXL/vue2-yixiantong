/**
 * data = {
 *    id: 1,
 *    text: 'test'
 * }
 * 
 * id=1&text='test'
 * 
 */

// qs.stringify
import axios from 'axios';
import qs from 'qs';

/**
 * 封装 axios 请求
 */
class HTTP {
  axiosPost (options) {
    axios({
      url: options.url,
      method: 'post',
      header: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      data: qs.stringify(options.data)
    }).then((res) => {
      options.success(res.data);
    }).catch((err) => {
      options.error(err);
    })
  }
}

export { HTTP }