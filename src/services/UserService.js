/**
 * User 用户接口请求对象
 *
 * @author jiangyu8013@163.com
 * @date 2019-03-22
 */
// import axios from 'axios'
import http from '@/lib/http'
import mock from '@/mocks/data'


/**
 * 获取用户列表-分页 废弃
 *
 * @param {*} param
 */
const getUserList = (param = {}) => {
  return new Promise((resolve) => {
    param = {
      page:param.page
    };
    http.get({
      url:'user/list',
      method:'get',
      data:param
    }).then((res) => {
      resolve(res)
    })
  })
};

/**
 * 通过名称查询用户信息
 * @param param
 * @returns {Promise}
 */
const getUserListByName = (param = {}) => {
  return new Promise((resolve) => {
    param = {
      key:param.key,
      value:param.value,
      page:param.page,
      size:param.size
    };
    http.post({
      url:'user/search',
      method:'post',
      data:param
    }).then((res) => {
      resolve(res)
    })
  })
};

/**
 * 通过组织id查询用户列表
 * @param param
 * @returns {Promise}
 */
const getUserListByGroupId = (param = {}) => {
  return new Promise((resolve) => {
    param = {
      groupId:param.groupId,
      page:param.page,
      size:param.size
    };
    http.post({
      url:'user/groupUser',
      method:'post',
      data:param
    }).then((res) => {
      resolve(res)
    })
  })
};

/**
 * 通过部门id查询用户列表
 * @param param
 * @returns {Promise}
 */
const getUserListByDepartId = (param = {}) => {
  return new Promise((resolve) => {
    param = {
      departId:param.departId,
      page:param.page,
      size:param.size
    };
    http.post({
      url:'user/departUser',
      method:'post',
      data:param
    }).then((res) => {
      resolve(res)
    })
  })
};

/**
 * 获取单个用户信息
 * @param param
 * @returns {Promise}
 */
const getUserInfo = (param = {}) => {
  return new Promise((resolve) => {
    param = {
      id:param.id,
    };
    http.post({
      url:'user/view',
      method:'post',
      data:param
    }).then((res) => {
      resolve(res)
    })
  })
};

/**
 * 新增用户
 *
 * @param {*} param
 */
const addUser = (param = {}) => {
  return new Promise((resolve) => {
    param = {
      account:param.account,
      name:param.name,
      sex:Number(param.sex),
      userType:param.userType,
      subjectId:param.subjectId,
      departId:param.departId,
      groupsId:param.groupsId,
      remark:param.remark,
      password:param.password,
      roleIds:param.roleIds
    };
    http.get({
      url:'user/add',
      method:'get',
      data:param
    }).then((res) => {
      resolve(res)
    })
  })

  // 正式
  // return http.request({
  //   url: '/user/add',
  //   data: param,
  //   method: 'post'
  // })
};

/**
 * 修改用户
 *
 * @param {*} param
 */
const updateUser = (param = {}) => {
  // 测试
  return new Promise((resolve) => {
    resolve(true)
  })

  // 正式
  // return http.request({
  //   url: '/user/update',
  //   data: param,
  //   method: 'post'
  // })
};

/**
 * 删除用户
 *
 * @param {*} param
 */
const deleteUser = (param = {}) => {
  // 测试
  return new Promise((resolve) => {
    param = {
      id:param.id
    };
    http.get({
      url:'user/del',
      data:param,
      method:'get'
    }).then((res) => {
      resolve(res)
    });
  })

  // 正式
  // return http.request({
  //   url: '/user/delete',
  //   data: param,
  //   method: 'post'
  // })
};

export default {
  getUserList,
  getUserInfo,
  addUser,
  updateUser,
  deleteUser,
  getUserListByName,
  getUserListByGroupId,
  getUserListByDepartId
}
