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
  return new Promise((resolve) => {
    param = {
      year:String(param.year),
      name:param.name,
      workType:Number(param.workType),// 0 医共体建设 1 等级医院评审 2 最多跑一次 3 优质服务专项行动 4 核心业务指标
      startTime:String(param.startTime),
      endTime:String(param.endTime),
      remark:param.remark,
      subjectId: param.subjectId,
      departId: param.departId,
      groupId: param.groupId
    };
    http.post({
      url:'work/add',
      method:'post',
      data:param
    }).then((res) => {
      resolve(res)
    })
  })
};

/**
 * 删除工作
 * @param param
 * @returns {Promise}
 */
const delWork = (param = {}) => {
  return new Promise((resolve) => {
    http.post({
      url:'work/del',
      method: 'post',
      data: param
    }).then((res) => {
      resolve(res)
    })
  })
};


/**
 * 查看工作
 * @param param
 * @returns {Promise}
 */
const getWork = (param = {}) => {
  return new Promise((resolve) => {
    http.post({
      url: 'work/view',
      method:'post',
      data:param
    }).then((res) => {
      resolve(res)
    })
  })
} ;

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
      resolve(res.data)
    })
  })
};

/**
 * 获取工作指标列表 通过工作id
 * @param param
 * @returns {Promise}
 */
const getWorkIndicatorList = (param = {}) => {
  return new Promise((resolve) => {
    http.get({
      url:'work/indicatorList',
      data:param,
      method:'get'
    }).then((res) => {
      resolve(res.data)
    })
  })
};

/**
 *  添加工作指标
 * @param param
 * @returns {Promise}
 */
const addWorkIndication = (param = {}) => {
  return new Promise((resolve) =>{
    param = {
      name:param.name,
      situation:param.situation,
      fatherId:param.fatherId,
      workId:param.workId
    };
     http.post({
       url:'work/addIndicator',
       method:'post',
       data:param,
     }).then((res) => {
       resolve(res)
     })
  })
};

/**
 * 删除工作指标
 * @param param
 * @returns {Promise}
 */
const delWorkIndicator = (param = {}) => {
  return new Promise((resolve) => {
    http.post({
      url:'work/delIndicator',
      method: 'post',
      data: param
    }).then((res) => {
      resolve(res)
    })
  })
};

/**
 *  添加工作指标详情
 * @param param
 * @returns {Promise}
 */
const addWorkIndicationParticulars = (param = {}) => {
  return new Promise((resolve) =>{
    param = {
      year:param.year,
      month:param.month,
      completion:param.completion,
      intro:param.intro,
      indicatorId:param.indicatorId,
      departId:param.departId,
      groupId:param.groupId,
      userId:param.userId,
      fileIds:param.fileIds,
      imageIds:param.imageIds,
    };
    console.log('添加工作指标详情',param);
    http.post({
      url:'work/addIndicatorInfo',
      method:'post',
      data:param,
    }).then((res) => {
      resolve(res)
    })
  })
};

export default {
  addWork,
  delWork,
  getWorkList,
  getWork,
  getWorkIndicatorList,
  addWorkIndication,
  delWorkIndicator,
  addWorkIndicationParticulars
}
