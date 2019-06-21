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
  // 测试
  return new Promise((resolve) => {
    http.get({
      url:'menu/list',
      method:'get',
      data:param
    }).then((res) => {
      console.log('获取菜单',res)
      resolve(res.data);
    },(res)=>{
      console.log("获取菜单失败",res)
    })
  })

  // 正式
  // return http.request({
  //   url: '/user/list',
  //   data: param,
  //   method: 'post'
  // })
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
}
