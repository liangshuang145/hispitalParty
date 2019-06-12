/**
 * UserGroup 用户组接口请求对象
 *
 * @author jillyandkai@qq.com
 * @date 2019-05-21
 */
// import http from '@/lib/http'
import mock from '@/mocks/data'

/**
 * 获取用户组
 *
 * @param {*} param
 * @return axios
 */
const getUserGroup = (param = {}) => {
  // 测试
  return new Promise((resolve) => {
    let data = mock.userGroupList
    resolve(data)
  })

  // 正式
  // return http.request({
  //   url: '/usergroup/view',
  //   data: param,
  //   method: 'post'
  // })
}

/**
 * 添加用户组
 *
 * @param {*} param
 * @return axios
 */
const addUserGroup = (param = {}) => {
  // 测试
  return new Promise((resolve) => {
    resolve(true)
  })

  // 正式
  // return http.request({
  //   url: '/usergroup/add',
  //   data: param,
  //   method: 'post'
  // })
}

/**
 * 修改用户组
 *
 * @param {*} param
 * @return axios
 */
const updateUserGroup = (param = {}) => {
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
 * 删除用户组
 *
 * @param {*} param
 * @return axios
 */
const deleteUserGroup = (param = {}) => {
  // 测试
  return new Promise((resolve) => {
    resolve(true)
  })

  // 正式
  // return http.request({
  //   url: '/usergroup/delete',
  //   data: param,
  //   method: 'post'
  // })
}

export default {
  getUserGroup,
  addUserGroup,
  updateUserGroup,
  deleteUserGroup
}
