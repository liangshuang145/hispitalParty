/**
 * Created by wxl on 2019/6/5.
 */
// import http from '@/lib/http'
import mock from '@/mocks/data'

/**
 * 获取活动列表
 */
const getActivityList = (param = {}) => {
  // 测试
  return new Promise((resolve) => {
    let data = mock.activityList;
    resolve(data)
  })

  // 正式
  // return http.request({
  //   url: '/user/list',
  //   data: param,
  //   method: 'post'
  // })
}

export default {
  getActivityList,
}
