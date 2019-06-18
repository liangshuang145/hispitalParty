/**
 * @author jiangyu@163.com
 * @2019/6/18 10:44
 */

import http from '@/lib/http'

/**
 * 获取字段列表
 * @param param
 * @returns {Promise}
 */
const getFieldList = (param = {}) => {
  return new Promise((resolve) => {
    http.get({
      url:'field/list',
      method: 'get',
      data: param
    }).then(res => {
      resolve(res.data);
    })
  })
};

/**
 * 添加字段
 * @param param
 * @returns {Promise}
 */
const addField = (param = {}) => {
  return new Promise((resolve) => {
    http.get({
      url:'field/list',
      method: 'get',
      data: param
    }).then(res => {
      console.log('获取字段列表',res)
    })
  })
};

/**
 * 修改字段
 * @param param
 * @returns {Promise}
 */
const updateField = (param = {}) => {
  return new Promise((resolve) => {
    http.post({
      url:'field/modify',
      method: 'post',
      data: param
    }).then(res => {
      console.log('修改字段',res)
    })
  })
};

/**
 * 删除字段
 * @param param
 * @returns {Promise}
 */
const delField = (param = {}) => {
  return new Promise((resolve) => {
    http.post({
      url:'field/del',
      method: 'post',
      data: param
    }).then(res => {
      console.log('删除字段',res)
    })
  })
};

/**
 * 查看字段
 * @param param
 * @returns {Promise}
 */
const getField = (param = {}) => {
  return new Promise((resolve) => {
    http.post({
      url:'field/view',
      method: 'post',
      data: param
    }).then(res => {
      console.log('查看字段',res)
    })
  })
};




export default {
  getFieldList,
  addField,
  updateField,
  delField,
  getField,
}
