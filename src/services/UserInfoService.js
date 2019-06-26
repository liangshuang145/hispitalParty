/**
 * @author jiangyu8013@163.com
 * @2019/6/25 11:07
 */
import http from '../lib/http'

/**
 * 获得人事档案列表信息
 * @param param
 * @returns {Promise}
 */
const getUserInfoList = (param = {}) => {
  return new Promise((resolve) => {
    http.get({
      url:'userInfo/list',
      data:param,
      method:'get'
    }).then((res) => {
      resolve(res.data)
    })
  })
};

/**
 * 删除人事档案信息
 * @param param
 * @returns {Promise}
 */
const delUserInfo = (param = {}) => {
  return new Promise((resolve) => {
    http.post({
      url:'userInfo/del',
      data: param,
      method: 'post'
    }).then((res) => {
      resolve(res)
    })
  })
};

// ----------------------------------民主党派----------------------
/**
 * 获得民主党派列表信息
 * @param param
 * @returns {Promise}
 */
const getUserInfoMzdpList = (param = {}) => {
  return new Promise((resolve) => {
    http.get({
      url:'userInfoMzdp/list',
      data:param,
      method:'get'
    }).then((res) => {
      resolve(res.data)
    })
  })
};

/**
 * 删除民主党派信息
 * @param param
 * @returns {Promise}
 */
const delUserInfoMzdp = (param = {}) => {
  return new Promise((resolve) => {
    http.post({
      url:'userInfoMzdp/del',
      data: param,
      method: 'post'
    }).then((res) => {
      resolve(res)
    })
  })
};

// --------------------------------高知群体 ---------------------
/**
 * 获得高知群体列表信息
 * @param param
 * @returns {Promise}
 */
const getUserInfoGzqtList = (param = {}) => {
  return new Promise((resolve) => {
    http.get({
      url:'userInfoGzqt/list',
      data:param,
      method:'get'
    }).then((res) => {
      resolve(res.data)
    })
  })
};

/**
 * 删除高知群体信息
 * @param param
 * @returns {Promise}
 */
const delUserInfoGzqt = (param = {}) => {
  return new Promise((resolve) => {
    http.post({
      url:'userInfoGzqt/del',
      data: param,
      method: 'post'
    }).then((res) => {
      resolve(res)
    })
  })
};

// -------------------------------- 工会 ---------------------
/**
 * 获得工会列表信息
 * @param param
 * @returns {Promise}
 */
const getUserInfoGhList = (param = {}) => {
  return new Promise((resolve) => {
    http.get({
      url:'userInfoGh/list',
      data:param,
      method:'get'
    }).then((res) => {
      resolve(res.data)
    })
  })
};

/**
 * 删除工会信息
 * @param param
 * @returns {Promise}
 */
const delUserInfoGh = (param = {}) => {
  return new Promise((resolve) => {
    http.post({
      url:'userInfoGh/del',
      data: param,
      method: 'post'
    }).then((res) => {
      resolve(res)
    })
  })
};

// -------------------------------- 团委 ---------------------
/**
 * 获得团委列表信息
 * @param param
 * @returns {Promise}
 */
const getUserInfoTwList = (param = {}) => {
  return new Promise((resolve) => {
    http.get({
      url:'userInfoTw/list',
      data:param,
      method:'get'
    }).then((res) => {
      resolve(res.data)
    })
  })
};

/**
 * 删除团委信息
 * @param param
 * @returns {Promise}
 */
const delUserInfoTw = (param = {}) => {
  return new Promise((resolve) => {
    http.post({
      url:'userInfoTw/del',
      data: param,
      method: 'post'
    }).then((res) => {
      resolve(res)
    })
  })
};

// -------------------------------- 妇代会 ---------------------
/**
 * 获得妇代会列表信息
 * @param param
 * @returns {Promise}
 */
const getUserInfoFdhList = (param = {}) => {
  return new Promise((resolve) => {
    http.get({
      url:'userInfoFdh/list',
      data:param,
      method:'get'
    }).then((res) => {
      resolve(res.data)
    })
  })
};

/**
 * 删除妇代会信息
 * @param param
 * @returns {Promise}
 */
const delUserInfoFdh = (param = {}) => {
  return new Promise((resolve) => {
    http.post({
      url:'userInfoFdh/del',
      data: param,
      method: 'post'
    }).then((res) => {
      resolve(res)
    })
  })
};

// -------------------------------- 离退休老干部 ---------------------
/**
 * 获得离退休老干部列表信息
 * @param param
 * @returns {Promise}
 */
const getUserInfoLtxlgbList = (param = {}) => {
  return new Promise((resolve) => {
    http.get({
      url:'userInfoLtxlgb/list',
      data:param,
      method:'get'
    }).then((res) => {
      resolve(res.data)
    })
  })
};

/**
 * 删除离退休老干部信息
 * @param param
 * @returns {Promise}
 */
const delUserInfoLtxlgb = (param = {}) => {
  return new Promise((resolve) => {
    http.post({
      url:'userInfoLtxlgb/del',
      data: param,
      method: 'post'
    }).then((res) => {
      resolve(res)
    })
  })
};

export default {
  // -------- 人事档案---
  getUserInfoList,// 获得人事档案列表信息
  delUserInfo,// 删除用户人事信息

  // ------- 民主党派 ----
  getUserInfoMzdpList,// 列表
  delUserInfoMzdp,// 删除

  // ------- 高知群体 ----
  getUserInfoGzqtList,// 列表
  delUserInfoGzqt,// 删除

  // -------- 工会 ------
  getUserInfoGhList,// 列表
  delUserInfoGh,// 删除

  // -------- 团委 ------
  getUserInfoTwList,// 列表
  delUserInfoTw,// 删除

  // -------- 妇代会 ------
  getUserInfoFdhList,// 列表
  delUserInfoFdh,// 删除

  // -------- 离退休老干部 ------
  getUserInfoLtxlgbList,// 列表
  delUserInfoLtxlgb,// 删除
  // getUserInfoIsBasics,// 通过id 获得人事基本信息+人事信息
  // getUserEducationListById, // 通过id 查询教育经历列表
}
