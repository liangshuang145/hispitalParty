/**
 * Depart 部门接口请求对象
 *
 * @author jillyandkai@qq.com
 * @date 2019-05-21
 */
import http from '@/lib/http'
import mock from '@/mocks/data'

/**
 * 获取部门信息
 *
 * @param {*} param
 */
const getDepart = (param = {}) => {
  // 测试
  return new Promise((resolve) => {
    http.get({
        method: 'get',
        url: 'depart/manager_list',
        data: ''
    }).then(res => {
      resolve(res.data)
    });
  })
};

/**
 * 通过机构id查询子机构
 * @param params
 * @returns {Promise}
 */
const getDepartListBySubjectId = (params = {}) => {
  return new Promise((resolve) => {
    http.post({
      method: 'post',
      url: 'depart/list',
      data: params
    }).then((res) => {
      resolve(res)
    })
  })
};

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
  deleteDepart,
  getDepartListBySubjectId
}
