/**
 * Group 小组接口请求对象
 *
 * @author jillyandkai@qq.com
 * @date 2019-05-21
 */
import http from '@/lib/http'
import mock from '@/mocks/data'

/**
 * 获取小组
 *
 * @param {*} param
 * @return axios
 */
const getGroup = (param = {}) => {
  // 测试
  return new Promise((resolve) => {
    http.get({
      url:'groups/view',
      method:'get',
      data:param
    }).then((res) => {
      console.log('获取小组',res)
    },(err) => {
      console.log(err)
    })
    // let data = mock.groupList
    // resolve(data)
  })

  // 正式
  // return http.request({
  //   url: '/group/view',
  //   data: param,
  //   method: 'post'
  // })
}

/**
 * 添加小组
 *
 * @param {*} param
 * @return axios
 */
const addGroup = (param = {}) => {
  // 测试
  return new Promise((resolve) => {
    resolve(true)
  })

  // 正式
  // return http.request({
  //   url: '/group/add',
  //   data: param,
  //   method: 'post'
  // })
}

/**
 * 修改小组
 *
 * @param {*} param
 * @return axios
 */
const updateGroup = (param = {}) => {
  // 测试
  return new Promise((resolve) => {
    resolve(true)
  })

  // 正式
  // return http.request({
  //   url: '/usergroup/update',
  //   data: param,
  //   method: 'post'
  // })
}

/**
 * 删除小组
 *
 * @param {*} param
 * @return axios
 */
const deleteGroup = (param = {}) => {
  // 测试
  return new Promise((resolve) => {
    resolve(true)
  })

  // 正式
  // return http.request({
  //   url: '/group/delete',
  //   data: param,
  //   method: 'post'
  // })
}

export default {
  getGroup,
  addGroup,
  updateGroup,
  deleteGroup
}
