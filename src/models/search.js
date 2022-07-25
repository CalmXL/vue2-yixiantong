import { HTTP } from "utils/http";
import config from 'utils/config';

/**
 * model层 -> 用于创建 适用于search 部分的请求
 */
class SearchModel extends HTTP {
  searchAction (keyword, cityId) {
    return new Promise((resolve, reject) => {
      this.axiosPost({
        url: config.API.SEARCH_ACTION,
        data: {
          keyword,
          cityId
        },
        success (data) {
          resolve({
            data,
            status: 0
          })
        },  
        error (err) {
          resolve({
            err,
            status: -1
          })
        }
      })
    })
  }
}

export { SearchModel };