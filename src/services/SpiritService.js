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
      console.log("res",res)
    })
  })
};

/**
 *  获取党内精神列表
 * @param param
 * @returns {Promise}
 */
const getSpiritList = (param = {}) => {
  return new Promise((resolve) => {
    param={
      page: 10,
      size: 14
    };
    http.get({
      url:'spirit/getlist',
      method: 'get',
      data: param
    }).then((res)=> {
      resolve(res.data);
      console.log("res",res)
    })
  })
};

/**
 *  获取用户列表
 * @param param
 * @returns {Promise}
 */
const getSpiritUsers = (param = {}) => {
  return new Promise((resolve) => {
    http.get({
      url:'spirit/users',
      method: 'get',
      data: param
    }).then((res)=> {
      resolve(res.data);
      console.log("res",res)
    })
  })
};

/**
 *  用户所属机构
 * @param param
 * @returns {Promise}
 */
const getSpirituserSubject = (param = {}) => {
  return new Promise((resolve) => {
    param={
      id: param.id,
    };
    http.post({
      url:'spirit/userSubject',
      method: 'post',
      data: param
    }).then((res)=> {
      resolve(res);
      console.log("res",res)
    })
  })
};


/**
 *  加添党内精神
 * @param param
 * @returns {Promise}
 */
const getSpiritadd = (param = {}) => {
  return new Promise((resolve) => {
    param={
      name: param.name,
      time: param.time,
      content: param.content,
      fileIds: param.fileIds,
      imageIds: param.imageIds,
      userId: param.userId,
    };
    console.log("发起请求的param",param)
    http.post({
      url:'spirit/add',
      method: 'post',
      data: param,
    }).then((res)=> {
      resolve(res);
      console.log("res",res)
    },(res)=>{
      console.log("添加党内精神失败",res)
    })
  })
};

/**
 *  查看精神列表
 * @param param
 * @returns {Promise}
 */
const getSpiritAll = (param = {}) => {
  return new Promise((resolve) => {
    console.log("发起请求的param",param)
    http.post({
      url:'spirit/list',
      method: 'post',
      data: param,
    }).then((res)=> {
      resolve(res);
      console.log("res",res)
    },(res)=>{
      console.log("添加党内精神失败",res)
    })
  })
};


export default {
  getSpirituserSubject,
  getSpiritUsers,
  getPageList,
  getSpiritList,
  getSpiritadd,
  getSpiritAll,

}
