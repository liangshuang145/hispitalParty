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
  return new Promise((resolve,reject) => {
    param = {
      account: param.username,
      password: param.password
    };

    http.post({
      method: 'POST',
      url: 'index/login',
      data: param
    }).then((res) => {
      resolve(res)
    },err =>{
      reject(err)
    })
  })
};

const outLogin = () =>{
  return new Promise((resolve, reject) => {
    http.post({
      method: 'post',
      url: 'index/out',
      data:''
    }).then((res) => {
      resolve(res)
    },err =>{
      reject(err)
    })
  })
};


export default {
  userLogin,
  outLogin
}
