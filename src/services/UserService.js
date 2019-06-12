/**
 * User 用户接口请求对象
 *
 * @author jillyandkai@qq.com
 * @date 2019-03-22
 */
// import axios from 'axios'
import http from '@/lib/http'
import mock from '@/mocks/data'

/**
 * 获取用户信息
 *
 * @param data
 * @param callback 正式开发接入axios
 * @returns {boolean}
 */
// const getUserInfo = (data, callback) => {
//   let { username, password } = data
//   let userInfo = mock.userInfo
//   if (username === userInfo.username && password === userInfo.password) {
//     callback(userInfo)
//     return true
//   } else {
//     callback('')
//     return false
//   }
// }
const getUserInfo = (param = {}) => {
  param = {
    account: param.username,
    password: param.password
  }

  // return axios({
  //   method: 'post',
  //   url: 'http://192.168.1.17/login',
  //   data: param
  // })

  // return axios.post('http://192.168.1.17/login', param)
  // return http.post('/login', param)

  return http.post('/login', param)
}

/**
 * 获取用户列表
 *
 * @param {*} param
 */
const getUserList = (param = {}) => {
  // 测试
  return new Promise((resolve) => {
    let data = mock.userList
    resolve(data)
  })

  // 正式
  // return http.request({
  //   url: '/user/list',
  //   data: param,
  //   method: 'post'
  // })
}

/**
 * 新增用户
 *
 * @param {*} param
 */
const addUser = (param = {}) => {
  // 测试
  return new Promise((resolve) => {
    resolve(true)
  })

  // 正式
  // return http.request({
  //   url: '/user/add',
  //   data: param,
  //   method: 'post'
  // })
}

/**
 * 修改用户
 *
 * @param {*} param
 */
const updateUser = (param = {}) => {
  // 测试
  return new Promise((resolve) => {
    resolve(true)
  })

  // 正式
  // return http.request({
  //   url: '/user/update',
  //   data: param,
  //   method: 'post'
  // })
}

/**
 * 删除用户
 *
 * @param {*} param
 */
const deleteUser = (param = {}) => {
  // 测试
  return new Promise((resolve) => {
    resolve(true)
  })

  // 正式
  // return http.request({
  //   url: '/user/delete',
  //   data: param,
  //   method: 'post'
  // })
}

export default {
  getUserInfo,
  getUserList,
  addUser,
  updateUser,
  deleteUser
}
