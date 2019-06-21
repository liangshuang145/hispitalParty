/**
 * Role 角色接口请求对象
 *
 * @author jillyandkai@qq.com
 * @date 2019-05-20
 */
import http from '@/lib/http'
import mock from '@/mocks/data'

/**
 * 获取角色
 *
 * @param {*} param
 * @return axios
 */
const getRole = (param = {}) => {
  // 测试
  return new Promise((resolve) => {
    http.get({
      url: 'role/list',
      method: 'get',
      data:param
    }).then((res) => {
      console.log('获取角色',res)
      resolve(res.data);
    },(res)=>{
      console.log('获取角色失败',res)
    });
  })

  // 正式
  // return http.request({
  //   url: '/role/view',
  //   data: param,
  //   method: 'post'
  // })
}

/**
 * 添加角色
 *
 * @param {*} param
 * @return axios
 */
const addRole = (param = {}) => {
  // 测试
  return new Promise((resolve) => {
    param = {
      id:  param.id,
      name: param.name,
      level: param.grade,
    };
    console.log("param",param.level);
    http.post({
      url: 'role/add',
      method: 'post',
      data: param
    }).then((res) => {
      console.log('添加角色',res)
      resolve(res);
    },(res)=>{
      console.log('添加角色失败',res)
    });
  })

  // 正式
  // return http.request({
  //   url: '/role/add',
  //   data: param,
  //   method: 'post'
  // })
}

/**
 * 修改角色
 *
 * @param {*} param
 * @return axios
 */
const updateRole = (param = {}) => {
  // 测试
  return new Promise((resolve) => {
    param = {
      id:  param.id,
      name: param.name,
      level: param.grade,
    };
    console.log("param",param.level);
    http.post({
      url: 'role/modify',
      method: 'post',
      data: param
    }).then((res) => {
      console.log('获取角色',res)
      resolve(res);
    },(res)=>{
      console.log('获取角色失败',res)
    });
  })

  // 正式
  // return http.request({
  //   url: '/role/update',
  //   data: param,
  //   method: 'post'
  // })
}

/**
 * 删除角色
 *
 * @param {*} param
 * @return axios
 */
const deleteRole = (param = {}) => {
  // 测试
  return new Promise((resolve) => {
    resolve(true)
  })

  // 正式
  // return http.request({
  //   url: '/role/delete',
  //   data: param,
  //   method: 'post'
  // })
}

export default {
  getRole,
  addRole,
  updateRole,
  deleteRole
}
