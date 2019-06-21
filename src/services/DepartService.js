/**
 * Depart 部门接口请求对象
 *
 * @author jillyandkai@qq.com
 * @date 2019-05-21
 */
import http from '@/lib/http'
import mock from '@/mocks/data'

/**
 * 获取部门信息
 *
 * @param {*} param
 */
const getDepart = (param = {}) => {
  return new Promise((resolve) => {
    http.get({
        method: 'get',
        url: 'depart/manager_list',
        data: param
    }).then(res => {
      resolve(res.data)
    });
  })
};

/**
 * 通过机构id查询下属部门
 * @param params
 * @returns {Promise}
 */
const getDepartListBySubjectId = (params = {}) => {
  return new Promise((resolve) => {
    http.post({
      method: 'post',
      url: 'depart/list',
      data: params
    }).then((res) => {
      resolve(res.data)
    })
  })
};

/**
 * 通过id查询自子集
 * @param param
 * @returns {Promise}
 */
const selectDepartChildById = (param = {}) =>{
  return new Promise((resolve) => {
    http.post({
      url:'depart/childs',
      method:'post',
      data:param
    }).then((res) => {
      resolve(res)
    })
  })
};

/**
 * 添加部门
 *
 * @param {*} param
 */
const addDepart = (param = {}) => {
  return new Promise((resolve) => {
    param = {
      name:param.name,
      fatherId:param.fatherId,
      subjectId:param.subjectId,
      userId:param.userId
    };
    http.post({
        url: 'depart/add',
        data: param,
        method: 'post'
      }).then((res) => {
      resolve(res)
    });
  })
};

/**
 * 修改部门
 *
 * @param {*} param
 */
const updateDepart = (param = {}) => {
  // 测试
  return new Promise((resolve) => {
    param = {
      id:param.id,
      name:param.name,
      fatherId:param.fatherId,
      userId:param.userId,
      subjectId:param.subjectId
    };
    http.post({
      url:'depart/modify',
      method:'post',
      data:param
    }).then((res) => {
      resolve(res)
    },(err) => {
      console.error(err)
    })
  })
};


export default {
  getDepart,
  addDepart,
  updateDepart,
  getDepartListBySubjectId,
  selectDepartChildById
}
