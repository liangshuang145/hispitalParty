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
 * 通过页面id 获取子集
 * @param param
 * @returns {Promise}
 */
const getPageListById = (param = {}) => {
  return new Promise((resolve) => {
    param = {
      id: param.id
    };
    http.post({
      url:'page/child',
      method: 'post',
      data: param
    }).then((res)=> {
      resolve(res);
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
    param={
      name: param.name,
      title: param.title,
      level: Number(param.level),
      sort: Number(param.sort),
      menuId: param.menuId,
      fatherId: param.fatherId,
    };
    http.post({
      url:'page/add',
      method: 'post',
      data:param
    }).then((res) => {
      resolve(res);
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
    param={
      level: param.level,
      name: param.name,
      id: param.id,
      sort: param.sort,
      title: param.title,
      menuId:param.menuId,
      fatherId:param.fatherId
    };
    console.log("param",param);
    http.post({
      url:'page/modify',
      method: 'post',
      data:param
    }).then((res) => {
      resolve(res);
      console.log('modify页面',res)
    },(res)=>{
      console.log("连接失败")
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
  getPage,
  getPageListById
}
