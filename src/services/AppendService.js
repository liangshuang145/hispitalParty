/**
 * Depart 部门接口请求对象
 *
 * @author jillyandkai@qq.com
 * @date 2019-07-04
 */
import http from '@/lib/http'

/**
 * 获取部门信息
 *
 * @param {*} param
 */
const getApped = (param = {}) => {
  //   param = {
  //     file:
  //   }
  return new Promise(resolve => {
    http.post({
      url: 'medical/addFile',
      method: 'post',
      data: data
    }).then(res => {
      resolve(res.data)
    })
  })
}
export default {
  getApped
}
