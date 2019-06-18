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
        // console.log('循环: '+i+", ",responseValue[i])
      }
      jsonObj['buttonTree'] = buttonArr;
      jsonObj['responseValue'] = responseValue;
      console.log('获取button列表',buttonArr)
      resolve(jsonObj)
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
    http.post({
      url:'button/add',
      method:'post',
      data:param
    }).then((res) => {
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
    http.post({
      url:'button/modify',
      method:'post',
      data:param
    }).then((res) => {
      console.log('修改按钮',res.data)
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
      console.log('查看按钮',res)
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
