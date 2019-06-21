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
 * 获取菜单信息
 * @param param
 * @returns {Promise}
 */
const getMenu = (param = {}) => {
  return new Promise((resolve) => {
    http.post({
      url:'menu/view',
      method: 'post',
      data: param
    }).then((res)=>{
      resolve(res)
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
    http.post({
      url:'menu/modify',
      method: 'post',
      data: param
    }).then((res)=>{
      resolve(res)
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

export default {
  getMenuList,
   getMenu,
  addMenu,
  delMenu,
  updateMenu
}
