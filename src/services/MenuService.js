/**
 * Menu 菜单接口请求对象
 *
 */
import http from '@/lib/http'
import mock from '@/mocks/data'

/**
 * 获取菜单列表
 *
 * @param {*} param
 */
const getMenuList = (param = {}) => {
  return new Promise((resolve) => {
    http.get({
      url:'menu/list',
      method:'get',
      data:param
    }).then((res) => {
  resolve(res.data)
    })
  })
};


/**
 * 添加菜单
 * @param param
 * @returns {Promise}
 */
const addMenu = (param = {}) => {
  return new Promise((resolve) => {
    http.post({
      url:'menu/add',
      method: 'post',
      data: param
    }).then((res)=>{
      resolve(res)
    })
  })
};

/**
 * 修改菜单
 * @param param
 * @returns {Promise}
 */
const updateMenu = (param = {}) => {
  return new Promise((resolve) => {
    param={
      id:param.id,
      name: param.name,
      remark: param.remark,
      isPublic: param.isPublic,
      fatherId: param.fatherId,
      level: param.level,
      roleIds: param.roleIds,
      subjectId: param.subjectId,
      departIds: param.departIds,
      groupuIds: param.groupuIds,
      userGroupIds: param.userGroupIds,
    };
    console.log("param",param);
    http.post({
      url:'menu/modify',
      method: 'post',
      data: param
    }).then((res)=>{
      console.log("成功",res)
      resolve(res)
    },(res)=>{
      console.log("请求失败",res)
    })
  })
};

/**
 * 删除菜单
 * @param param
 * @returns {Promise}
 */
const delMenu = (param = {}) => {
  return new Promise((resolve) => {
    http.post({
      url:'menu/del',
      method: 'post',
      data: param
    }).then((res)=>{
      resolve(res)
    })
  })
};
/**
 * 查看菜单详情
 *
 * @param {*} param
 */
const getMenu = (param = {}) => {
  // 测试
  return new Promise((resolve) => {
    http.post({
      url:'menu/view',
      method:'post',
      data:param
    }).then((res) => {
      console.log('查看菜单',res)
      resolve(res);
    },(res)=>{
      console.log("查看菜单失败",res)
    })
  })

};
export default {
  getMenuList,
   getMenu,
  addMenu,
  delMenu,
  updateMenu
}
