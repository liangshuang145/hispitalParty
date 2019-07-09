/**
 * Echart 力量图谱模块
 *
 * @author jillyandkai@qq.com
 * @date 2019-6-29
 */
import http from "@/lib/http";

/**
 * 力量图谱
 * @param param
 * @returns {Promise}
 */
//党组织力量图谱
const Pchart = (param = {}) => {
  return new Promise((resolve, reject) => {
    http.get({
      url: "userInfo/listPower",
      method: "get",
      data: param
    }).then(res => {
      resolve(res);
    });
  });
};

//高知群体力量图谱
const Echart = (param = {}) => {
  return new Promise((resolve, reject) => {
    http.get({
      url: 'userInfoGzqt/listPower',
      method: 'get',
      data: param
    }).then(res => {
      resolve(res)
    })
  })
}

//工会力量图谱
const Gchart = (param = {}) => {
  return new Promise((resolve, reject) => {
    http.get({
      url: 'userInfoGh/listPower',
      method: 'get',
      data: param
    }).then(res => {
      console.log(res)
      resolve(res)
    })
  })
}

//老干部力量图谱
const Lchart = (param = {}) => {
  return new Promise((resolve, reject) => {
    http.get({
      url: 'userInfoLtxlgb/listPower',
      method: 'get',
      data: param
    }).then(res => {
      resolve(res)
    })
  })
}

//妇代会力量图谱
const Fchart = (param = {}) => {
  return new Promise((resolve, reject) => {
    http.get({
      url: 'userInfoFdh/listPower',
      method: 'get',
      data: param
    }).then(res => {
      resolve(res)
    })
  })
}

//民主党派力量图谱
const Mchart = (param = {}) => {
  return new Promise((resolve, reject) => {
    http.get({
      url: 'userInfoMzdp/listPower',
      method: 'get',
      data: param
    }).then(res => {
      resolve(res)
    })
  })
}

//团委力量图谱
const Tchart = (param = {}) => {
  return new Promise((resolve, reject) => {
    http.get({
      url: 'userInfoTw/listPower',
      method: 'get',
      data: param
    }).then(res => {
      resolve(res)
    })
  })
}
export default {
  Pchart,
  Echart,
  Gchart,
  Lchart,
  Fchart,
  Mchart,
  Tchart
};
