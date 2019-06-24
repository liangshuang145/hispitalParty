/**
 * @author jiangyu8013@163.com
 * @2019/6/22 16:11
 */

import http from '../lib/http'
/**
 * 添加工作
 * @param param
 * @returns {*}
 */
const addWork = (param = {}) => {
  return Promise((resolve) => {
    param = {
      year:param.year,
      name:param.name,
      workType:Number(param.workType),// 0 医共体建设 1 等级医院评审 2 最多跑一次 3 优质服务专项行动 4 核心业务指标
      startTime:param.startTime,
      endTime:param.endTime,
      remark:param.remark,
      subjectId: param.subjectId,
      departId: param.departId,
      groupId: param.groupId
    }
  })
};

/**
 * 获取中心工作列表
 * @param param
 * @returns {Promise}
 */
const getWorkList = (param = {}) =>{
  return new Promise((resolve) =>{
    http.get({
      url:'work/list',
      method:'get',
      data:param
    }).then((res) => {
      resolve(res)
    })
  })
};

export default {
  addWork,
  getWorkList,
}
