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



export default {
  getPageList,
  getSpiritList,
}
