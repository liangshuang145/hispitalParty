/**
 * Subject 机构接口请求对象
 *
 * @author jillyandkai@qq.com
 * @date 2019-05-21
 */
// import http from '@/lib/http'
import mock from '@/mocks/data'

/**
 * 获取机构
 *
 * @param {*} param
 * @return axios
 */
const getSubject = (param = {}) => {
  // 测试
  return new Promise((resolve) => {
    let data = mock.subjectList
    resolve(data)
  })

  // 正式
  // return http.request({
  //   url: '/subject/view',
  //   data: param,
  //   method: 'post'
  // })
}

/**
 * 添加机构
 *
 * @param {*} param
 * @return axios
 */
const addSubject = (param = {}) => {
  // 测试
  return new Promise((resolve) => {
    resolve(true)
  })

  // 正式
  // return http.request({
  //   url: '/subject/add',
  //   data: param,
  //   method: 'post'
  // })
}

/**
 * 修改机构
 *
 * @param {*} param
 * @return axios
 */
const updateSubject = (param = {}) => {
  // 测试
  return new Promise((resolve) => {
    resolve(true)
  })

  // 正式
  // return http.request({
  //   url: '/subject/update',
  //   data: param,
  //   method: 'post'
  // })
}

/**
 * 删除机构
 *
 * @param {*} param
 * @return axios
 */
const deleteSubject = (param = {}) => {
  // 测试
  return new Promise((resolve) => {
    resolve(true)
  })

  // 正式
  // return http.request({
  //   url: '/subject/delete',
  //   data: param,
  //   method: 'post'
  // })
}

export default {
  getSubject,
  addSubject,
  updateSubject,
  deleteSubject
}