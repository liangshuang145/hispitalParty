/**
 * Subject 机构接口请求对象
 *
 * @author jillyandkai@qq.com
 * @date 2019-05-21
 */
import http from '@/lib/http'
import mock from '@/mocks/data'

/**
 * 获取机构
 *
 * @param {*} param
 * @return axios
 */
const getSubject = (param = {}) => {
  return new Promise((resolve,reject) => {
    http.get({
      method: 'get',
      url: 'subject/list',
      data: param
    }).then((res) => {
      // res = JSON.parse(res);
      // res.data = JSON.parse(res.data)
      // console.log('获取机构',res);
      resolve(res.data)
    },err =>{
      reject(err)
    })
  })

  // 正式
  // return http.request({
  //   url: '/subject/view',
  //   data: param,
  //   method: 'post'
  // })
};

/**
 * 添加机构
 *
 * @param {*} param
 * @return axios
 */
const addSubject = (param = {}) => {
  return new Promise((resolve) => {
    http.post({
      url:'subject/add',
      data: param
    }).then((res) => {
      resolve(res)
    })
  })
};

/**
 * 修改机构
 *
 * @param {*} param
 * @return axios
 */
const updateSubject = (param = {}) => {
  // 测试
  return new Promise((resolve) => {
    param = {
      id:param.id,
      name:param.name,
      userId:param.userId,
      subjectId:param.subjectId,
    }
    http.post({
        url: 'subject/modify',
      data: param,
      method: 'post'
  }).then((res)=>{
      resolve(res)
    })
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
  return new Promise((resolve) => {
    param = {
      id:param.id
    };
    http.post({
        url: 'subject/delete',
        data: param,
        method: 'post'
      }).then((res) => {
      resolve(res)
    });
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
  deleteSubject,
}
