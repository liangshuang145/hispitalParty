/**
 * Depart 部门接口请求对象
 *
 * @author jillyandkai@qq.com
 * @date 2019-05-21
 */
// import http from '@/lib/http'
import mock from '@/mocks/data'

/**
 * 获取部门信息
 *
 * @param {*} param
 */
const getDepart = (param = {}) => {
  // 测试
  return new Promise((resolve) => {
    let data = mock.departList
    resolve(data)
  })

  // 正式
  // return http.request({
  //   url: '/depart/view',
  //   data: param,
  //   method: 'post'
  // })
}

/**
 * 添加部门
 *
 * @param {*} param
 */
const addDepart = (param = {}) => {
  // 测试
  return new Promise((resolve) => {
    resolve(true)
  })

  // 正式
  // return http.request({
  //   url: '/depart/add',
  //   data: param,
  //   method: 'post'
  // })
}

/**
 * 修改部门
 *
 * @param {*} param
 */
const updateDepart = (param = {}) => {
  // 测试
  return new Promise((resolve) => {
    resolve(true)
  })

  // 正式
  // return http.request({
  //   url: '/depart/update',
  //   data: param,
  //   method: 'post'
  // })
};

/**
 * 删除部门
 *
 * @param {*} param
 */
const deleteDepart = (param = {}) => {
  // 测试
  return new Promise((resolve) => {
    resolve(true)
  })

  // 正式
  // return http.request({
  //   url: '/depart/delete',
  //   data: param,
  //   method: 'post'
  // })
}

export default {
  getDepart,
  addDepart,
  updateDepart,
  deleteDepart
}
