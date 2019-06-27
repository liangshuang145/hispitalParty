/**
 * @author bjy
 * @2019/6/18 15:32
 */
// http导入
import http from '../lib/http'

/**
 *  学习强国排名
 * @param param
 * @returns {Promise}
 */
const getIdeologycountryList = (param = {}) => {
  return new Promise((resolve) => {
    param={
      type: param.type,
    };
    http.post({
      url:'ideology/countryList',
      method: 'post',
      data: param
    }).then((res)=> {
      resolve(res);
      console.log("",res)
    },(res)=>{
      console.log("请求失败",res)
    })
  })
};


/**
 *  学习强国排名
 * @param param
 * @returns {Promise}
 */
const getIdeologypioneerList = (param = {}) => {
  return new Promise((resolve) => {
    param={
      type: param.type,
    };
    http.post({
      url:'ideology/pioneerList',
      method: 'post',
      data: param
    }).then((res)=> {
      resolve(res);
      console.log("rs",res)
    },(res)=>{
      console.log("请求失败",res)
    })
  })
};
export default {
  getIdeologypioneerList,
  getIdeologycountryList
}
