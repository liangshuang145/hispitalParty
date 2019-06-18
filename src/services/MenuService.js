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
      let data = res.data;
      for(let i in data){
        data[i]['event'] = data[i].name
      }
      res.data = data
      resolve(res)
    })
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
