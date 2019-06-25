/**
 * @author jiangyu8013@163.com
 * @2019/6/17 17:16
 * 按钮管理
 */
// http导入
import http from '@/lib/http'

/**
 * 获取button列表
 * @param param
 * @returns {Promise}
 */
const getButtonList = (param = {}) => {
  return new Promise((resolve) =>{
    http.get({
      url:'button/list',
      method:'get',
      data:param
    }).then((res) => {
      let responseValue = res.data,jsonObj = {},buttonArr = [];
      for (let i in responseValue){
        buttonArr.push(responseValue[i].button)
      }
      jsonObj['buttonTree'] = buttonArr;
      jsonObj['responseValue'] = responseValue;
      console.log('获取button列表',buttonArr);
      resolve(buttonArr)
    })
  })
};

/**
 * 添加按钮
 * @param param
 * @returns {Promise}
 */
const addButton = (param = {}) =>{
  return new Promise((resolve) => {
    param = {
      name:param.name,
      fieldId:param.fieldId,
      userGroupIds:param.userGroupIds,
      roleIds:param.roleIds,
      sort:param.sort,
      level:param.level
    };
    console.log('param',param)
    http.post({
      url:'button/add',
      method:'post',
      data:param
    }).then((res) => {
      resolve(res);
      console.log('添加按钮',res.data)
    })
  })
};

/**
 * 修改按钮
 * @param param
 * @returns {Promise}
 */
const updateButton = (param = {}) =>{
  return new Promise((resolve) => {
    param = {
      id:param.id,
      name:param.name,
      fieldId:param.fieldId,
      userGroupIds:param.userGroupIds,
      roleIds:param.roleIds,
      sort:param.sort,
      level:param.level
    };
    http.post({
      url:'button/modify',
      method:'post',
      data:param
    }).then((res) => {
      resolve(res);
    })
  })
};

/**
 * 删除按钮
 * @param param
 * @returns {Promise}
 */
const delButton = (param = {}) =>{
  return new Promise((resolve) => {
    http.post({
      url:'button/del',
      method:'post',
      data:param
    }).then((res) => {
      console.log('删除按钮',res.data)
    })
  })
};

/**
 * 查看按钮
 * @param param
 * @returns {Promise}
 */
const getButton = (param = {}) =>{
  return new Promise((resolve) => {
    http.post({
      url: 'button/view',
      method: 'post',
      data:param
    }).then((res) => {
      console.log(res);
      let responseData = res.data,roleIds = [],userGroupIds = [],arr;
      for (let i in responseData.buttonRoles){
        userGroupIds.push(responseData.buttonRoles[i].userGroup.id);
        if (roleIds.includes(responseData.buttonRoles[i].role.id)) {// 当前数组存在
          continue;
        }else{
          roleIds.push(responseData.buttonRoles[i].role.id);
        }
      }
      res.data['roleIds'] = roleIds;
      res.data['userGroupIds'] = userGroupIds;
      resolve(res);
    })
  })
};

export default {
  getButtonList,
  addButton,
  updateButton,
  delButton,
  getButton
}
