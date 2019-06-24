/**
 * UserGroup 用户组接口请求对象
 *
 * @author jillyandkai@qq.com
 * @date 2019-05-21
 */
import http from '@/lib/http'
import mock from '@/mocks/data'

/**
 * 获取用户组列表
 *
 * @param {*} param
 * @return axios
 */
const getUserGroupList = (param = {}) => {
  // 测试
  return new Promise((resolve) => {
    http.get({
      url:'user_group/list',
      method:'get',
      data: param
    }).then((res) => {
      resolve(res.data);
    })
  })
};

/**
 * 获取id 获得用户组列表 子集
 *
 * @param {*} param
 * @return axios
 */
const getUserGroupListById = (param = {}) => {
  // 测试
  return new Promise((resolve) => {
    http.post({
      url:'user_group/child',
      method:'post',
      data: param
    }).then((res) => {
      resolve(res);
    })
  })
};

/**
 * 添加用户组
 *
 * @param {*} param
 * @return axios
 */
const addUserGroup = (param = {}) => {
  return new Promise((resolve) => {
    param = {
      name:param.name,
      fatherId:param.id
    };
    http.post({
      url: 'user_group/add',
      method: 'post',
      data: param
    }).then((res) => {
      resolve(res)
    })
  })
};

/**
 * 修改用户组
 *
 * @param {*} param
 * @return axios
 */
const updateUserGroup = (param = {}) => {
  return new Promise((resolve) => {
    param = {
      id:param.id,
      name:param.name
    };
    http.post({
      url:'user_group/modify',
      method:'post',
      data: param
    }).then((res) => {
      resolve(res)
    })
  })
};

/**
 * 删除用户组
 *
 * @param {*} param
 * @return axios
 */
const deleteUserGroup = (param = {}) => {
  // 测试
  return new Promise((resolve) => {
    resolve(true)
  })
};
/**
 * 查看单个用户组
 * @param param
 * @returns {Promise}
 */
const getUserGroup = (param = {}) => {
  return new Promise((resolve) => {
    http.post({
      url:'user_group/view',
      method:'post',
      data: param
    }).then((res) => {
      resolve(res)
    })
  })
};

export default {
  getUserGroupList,
  addUserGroup,
  updateUserGroup,
  deleteUserGroup,
  getUserGroup,
  getUserGroupListById,
}
