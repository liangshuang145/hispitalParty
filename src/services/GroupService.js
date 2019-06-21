/**
 * Group 小组接口请求对象
 *
 * @author jillyandkai@qq.com
 * @date 2019-05-21
 */
import http from '@/lib/http'
import mock from '@/mocks/data'




/**
 * 获取小组列表
 *
 * @param {*} param
 * @return axios
 */
const getGroupList = (param = {}) => {
  // 测试
  return new Promise((resolve) => {z
    http.post({
      url:'groups/list',
      method:'post',
      data:param
    }).then((res) => {
      console.log('获取小组',res)
      resolve(res.data);
    },(err) => {
      console.log(err)
    })
    // let data = mock.groupList
    // resolve(data)
  })

}

/**
 * 通过机构id 获取小组
 *
 * @param {*} param
 * @return axios
 */
const getGroup = (param = {}) => {
  // 测试
  return new Promise((resolve) => {
    console.log('开始的param',param)
    // param={
    //   subjectId: param.subjectId
    // };
    console.log('处理过的param',param);
    http.post({
      url:'groups/list',
      method:'post',
      data:param
    }).then((res) => {
      console.log(res);
      // resolve(res.data)
      resolve(res.data);
    },(err) => {
      console.log(err)
    })
  })
};

/**
 * 通过id获取子集小组
 * @param param
 * @returns {Promise}
 */
const getGroupChildById = (param = {}) =>{
  return  new Promise((resolve) => {

    http.post({
      url:'groups/childs',
      method:'post',
      data: param
    }).then((res) => {
      resolve(res)
      console.log("通过id获取子集小组",res);
    })
  })
};

/**
 * 添加小组
 *
 * @param {*} param
 * @return axios
 */
const addGroup = (param = {}) => {
  return new Promise((resolve) => {
    param = {
      name:param.name,
      subjectId:param.subjectId,
      userId:param.userId,
      remark:param.remark
    };
    http.post({
      url:'groups/add',
      method:'post',
      data:param
    }).then((res) => {
      resolve(res)
    }).then((res) => {
      resolve(res)
    })
  })
};

/**
 * 修改小组
 *
 * @param {*} param
 * @return axios
 */
const updateGroup = (param = {}) => {
  // 测试
  return new Promise((resolve) => {
    param = {
      id:param.id,
      name:param.name,
      subjectId:param.subjectId,
      userId:param.userId,
      remark:param.remark
    };
    http.post({
      url:'groups/modify',
      method:'post',
      data:param
    }).then((res) => {
      resolve(res)
    });
  })

  // 正式
  // return http.request({
  //   url: '/usergroup/update',
  //   data: param,
  //   method: 'post'
  // })
}

/**
 * 删除小组
 *
 * @param {*} param
 * @return axios
 */
const deleteGroup = (param = {}) => {
  // 测试
  return new Promise((resolve) => {
    resolve(true)
  })

  // 正式
  // return http.request({
  //   url: '/group/delete',
  //   data: param,
  //   method: 'post'
  // })
};

export default {
  getGroup,
  addGroup,
  updateGroup,
  deleteGroup,
getGroupChildById,
getGroupList,}
