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
    let data = mock.menuList;
    console.log(data)
    resolve(data)
  })

  // 正式
  // return http.request({
  //   url: '/user/list',
  //   data: param,
  //   method: 'post'
  // })
};

export default {
  getMenuList,
}
