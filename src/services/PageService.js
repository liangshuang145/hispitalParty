/**
 * @author bjy
 * @2019/6/18 15:32
 */
// http导入
import http from '../lib/http'

/**
 * 获取页面列表
 * @param param
 * @returns {Promise}
 */
const getPageList = (param = {}) => {
  return new Promise((resolve) => {
    http.get({
      url:'page/list',
      method: 'get',
      data: param
    }).then((res)=> {
      resolve(res.data);
    })
  })
};

/**
 * 添加页面
 * @param param
 * @returns {Promise}
 */
const addPage = (param = {}) =>{
  return new Promise((resolve) => {
    http.post({
      url:'page/add',
      method: 'post',
      data:param
    }).then((res) => {
      console.log('添加页面',res)
    })
  })
};

/**
 * 修改页面
 * @param param
 * @returns {Promise}
 */
const updatePage = (param = {}) =>{
  return new Promise((resolve) => {
    http.post({
      url:'page/modify',
      method: 'post',
      data:param
    }).then((res) => {
      console.log('modify页面',res)
    })
  })
};

/**
 * 删除页面
 * @param param
 * @returns {Promise}
 */
const delPage = (param = {}) =>{
  return new Promise((resolve) => {
    http.post({
      url:'page/del',
      method: 'post',
      data:param
    }).then((res) => {
      console.log('删除页面',res)
    })
  })
};

/**
 * 查看页面
 * @param param
 * @returns {Promise}
 */
const getPage = (param = {}) =>{
  return new Promise((resolve) => {
    http.post({
      url:'page/view',
      method: 'post',
      data:param
    }).then((res) => {
      resolve(res);
    })
  })
};

export default {
  getPageList,
  addPage,
  updatePage,
  delPage,
  getPage
}
