/**
 * User 用户登录
 *
 * @author jillyandkai@qq.com
 * @date 2019-03-22
 */
import http from '@/lib/http'

/**
 * 用户登录
 * @param param
 * @returns {Promise}
 */
const userLogin = (param={})=>{
  return new Promise((resolve) => {
    param = {
      account: param.username,
      password: param.password
    };

    http.post({
      method: 'post',
      url: 'index/login',
      data: param
    }).then((res) => {
      resolve(res)
    })
  })
};

const outLogin = () =>{
  return new Promise((resolve) => {
    // http.post({
    //   method: 'post',
    //   url: 'index/login',
    //   data: param
    // }).then((res) => {
    //   resolve(res)
    // })
  })
};


export default {
  userLogin,
  outLogin
}
