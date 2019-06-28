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
 * 用户条件模糊查询 列表 姓名 工号 科室
 * @param param
 * @returns {Promise}
 */
const selectUserInfoListByNameOrNumberOrOffice = (param = {}) => {
  return new Promise((resolve) => {
    let params = {};
    if (param.name){
      params['name'] = param.name
    }else if(param.department){
      params['department'] = param.department
    }else if(param.number){
      params['number'] = param.number
    }
    http.post({
      url:'userInfo/findByLike',
      data: params,
      method: 'post',
    }).then((res) => {
      resolve(res.data)
    })
  })
};

/**
 * 通过id获取用户详情信息
 * @param param
 * @returns {Promise}
 */
const getUserInfo = (param = {}) => {
  return new Promise((resolve) => {
    http. post({
      url:'userInfo/findId',
      data:param,
      method:'post'
    }).then((res) => {
      resolve(res)
    })
  })
};

/**
 * 添加用户人事信息
 * @param param
 * @returns {Promise}
 */
const addUserInfo = (param ={}) => {
  return new Promise((resolve) => {
    param = {
        userInfo:param.userInfo,
        userInfoPersonnel:param.userInfoPersonnel,
    };
    http.post({
      url:'userInfo/add',
      data:param,
      method: 'post',
      headers:{
        'Content-Type':'application/json;charset=UTF-8'
      }
    }).then((res) =>{
      resolve(res)
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

/**
 * 获得用户教育经历
 * @param param
 * @returns {Promise}
 */
const getUserInfoEductionList = (param = {}) => {
  return new Promise((resolve) => {
    console.log(param);
    http.post({
      url:'userInfo/findEducationWork',
      data:param
    }).then((res) => {
      resolve(res.data)
    })
  })
};

/**
 * 添加用户教育经历
 * @param param
 * @returns {Promise}
 */
const addUserInfoIsEducation = (param = {}) => {
  return new Promise((resolve) => {
    // param = {
    //   userInfoEducationWork:param
    // };
    http.post({
      url:'userInfo/add_education_work',
      data:param,
      method:'post',
      // headers:{
      //   'Content-Type':'application/json;charset=UTF-8'
      // }
    }).then((res) => {
      resolve(res)
    })
  })
};

/**
 * 删除用户教育经历
 * @param param
 * @returns {Promise}
 */
const delUserInfoEducation = (param = {}) => {
  return new Promise((resolve) => {
    http.post({
      url:'',
      data:param,
      method:'post'
    }).then((res) => {
      resolve(res)
    })
  })
};

/**
 * 获得用户工作经历
 * @param param
 * @returns {Promise}
 */
const getUserInfoWorkList = (param = {}) => {
  return new Promise((resolve) => {
    http.post({
      url:'userInfo/findWork',
      data:param
    }).then((res) => {
      resolve(res.data)
    })
  })
};

/**
 * 添加用户工作经历
 * @param param
 * @returns {Promise}
 */
const addUserInfoIsWork = (param = {}) => {
  return new Promise((resolve) => {
    // param = {
    //   UserInfoWork:param
    // };
    http.post({
      url:'userInfo/add_work',
      data:param,
      method:'post',
      // headers:{
      //   'Content-Type':'application/json;charset=UTF-8'
      // }
    }).then((res) => {
      resolve(res)
    })
  })
};

/**
 * 删除用户工作经历
 * @param param
 * @returns {Promise}
 */
const delUserInfoWork = (param = {}) => {
  return new Promise((resolve) => {
    http.post({
      url:'',
      data:param,
      method:'post'
    }).then((res) => {
      resolve(res)
    })
  })
};

/**
 * 添加用户合同记录
 * @param param
 * @returns {Promise}
 */
const addUserInfoIsContract = (param = {}) => {
  return new Promise((resolve) => {
    http.post({
      url:'userInfo/add_contract',
      data:param,
      method:'post',
    }).then((res) => {
      resolve(res)
    })
  })
};

/**
 * 删除用户合同记录
 * @param param
 * @returns {Promise}
 */
const delUserInfoIsContract = (param = {}) => {
  return new Promise((resolve) => {
    http.post({
      url:'',
      data:param,
      method:'post',
    }).then((res) => {
      resolve(res)
    })
  })
};

/**
 * 查看用户合同记录
 * @param param
 * @returns {Promise}
 */
const getUserInfoContractList = (param = {}) => {
  return new Promise((resolve) => {
    http.post({
      url:'userInfo/findContract',
      data:param
    }).then((res) => {
      resolve(res.data)
    })
  })
};

/**
 * 查看用户医务护理
 * @param param
 * @returns {Promise}
 */
const getUserInfoMedicalCare = (param ={}) => {
  return new Promise((resolve) => {
    http.post({
      url:'userInfo/findMedicalCare',
      data:param
    }).then((res) => {
      resolve(res)
    })
  })
};

/**
 * 添加用户医务护理
 * @param param
 * @returns {Promise}
 */
const addUserInfoMedicalCare = (param ={}) => {
  return new Promise((resolve) => {
    http.post({
      url:'userInfo/add_medical_care',
      data:param
    }).then((res) => {
      resolve(res)
    })
  })
};

/**
 * 查看用户职务职称
 * @param param
 * @returns {Promise}
 */
const getUserInfoTitlePost = (param ={}) => {
  return new Promise((resolve) => {
    http.post({
      url:'userInfo/findTitleaPost',
      data:param
    }).then((res) => {
      resolve(res)
    })
  })
};

/**
 * 查看用户职务职称
 * @param param
 * @returns {Promise}
 */
const addUserInfoTitlePost = (param ={}) => {
  return new Promise((resolve) => {
    http.post({
      url:'userInfo/add_title_apost',
      data:param
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

/**
 * 添加民主党派
 * @param param
 * @returns {Promise}
 */
const addUserInfoMzdp = (param ={}) => {
  return new Promise((resolve) => {
    http.post({
      url:'userInfoMzdp/add_mzdp',
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
      console.log("fsadasdasdsadasd",res);
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

/**
 * 添加高知群体
 * @param param
 * @returns {Promise}
 */
const addUserInfoGzqt = (param ={}) => {
  return new Promise((resolve) => {
    param={
      userinfoid: param.userInfo,
      education: param.education,
      title: param.title,
      userinfoid: param.userinfoid
    };
    console.log("萨达萨达萨达撒asdas",param);
    http.post({
      url:'userInfoGzqt/add_gzqt',
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

/**
 * 添加工会
 * @param param
 * @returns {Promise}
 */
const addUserInfoGh = (param ={}) => {
  return new Promise((resolve) => {
    param={
    post:param.post,
      time:param.time,
      userinfoid: param.userinfoid
    };
    http.post({
      url:'userInfoGh/add_gh',
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

/**
 * 添加团委信息
 * @param param
 * @returns {Promise}
 */
const addUserInfoTw = (param ={}) => {
  return new Promise((resolve) => {
    param={
      post: param.post,
      time: param.time,
      userinfoid: param.userinfoid
    },
    http.post({
      url:'userInfoTw/add_tw',
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

/**
 * 添加妇代会信息
 * @param param
 * @returns {Promise}
 */
const addUserInfoFdh = (param ={}) => {
  return new Promise((resolve) => {
    param={
      post:param.post,
      time: param.time,
      userinfoid: param.userinfoid,
    }
    http.post({
      url:'userInfoFdh/add_fdh',
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

/**
 * 添加离退休老干部
 * @param param
 * @returns {Promise}
 */
const addUserInfoLtxlgb = (param ={}) => {
  return new Promise((resolve) => {
    param={
      post: param.post,
      time: param.time,
      userinfoid: param.userinfoid
    }
    http.post({
      url:'userInfoLtxlgb/add_ltxlgb',
      data: param,
      method: 'post'
    }).then((res) => {
      resolve(res)
    })
  })
};

// ----------- 党员发展 ----------
/**
 * 获得党员发展列表
 * @param param
 * @returns {Promise}
 */
const getUserInfoPartyList = (param = {}) => {
  return new Promise((resolve) => {
    http.get({
      url:'userInfoParty/list',
      data:param,
      method:'get'
    }).then((res) => {
      resolve(res.data)
    })
  })
};

/**
 * 添加党员发展情况
 * @param param
 * @returns {Promise}
 */
const addUserInfoParty = (param ={}) => {
  return new Promise((resolve) => {
    http.post({
      url:'userInfoParty/add_party',
      data:param,
      method:'post'
    }).then((res) => {
      resolve(res)
    })
  })
};

/**
 * 删除党员发展情况
 * @param param
 * @returns {Promise}
 */
const delUserInfoParty = (param ={}) => {
  return new Promise((resolve) => {
    http.post({
      url:'userInfoParty/del',
      data:param,
      method:'post'
    }).then((res) => {
      resolve(res)
    })
  })
};

export default {
  // -------- 人事档案---
  getUserInfoList,// 获得人事档案列表信息
  delUserInfo,// 删除用户人事信息
  addUserInfo,// 添加用户人事信息
  addUserInfoIsEducation,// 添加用户教育经历
  getUserInfoEductionList,// 获得用户教育经历
  delUserInfoEducation,// 删除用户教育经历
  getUserInfoWorkList,// 获取用户工作经历
  delUserInfoWork,// 删除用户工作经历
  addUserInfoIsWork,// 添加用户工作经历
  addUserInfoIsContract,// 添加用户合同记录
  delUserInfoIsContract,// 删除用户合同记录
  getUserInfoContractList,// 查看用户合同记录列表
  getUserInfoMedicalCare,// 查看用户医务护理
  addUserInfoMedicalCare,// 添加用户医务护理
  getUserInfoTitlePost,// 查看用户职务职称
  addUserInfoTitlePost,// 添加用户职务职称
  selectUserInfoListByNameOrNumberOrOffice,//用户条件查询 列表 姓名 编号 科室
  getUserInfo,// 获取用户详情信息

  // ------- 民主党派 ----
  getUserInfoMzdpList,// 列表
  delUserInfoMzdp,// 删除
  addUserInfoMzdp,// 新增

  // ------- 高知群体 ----
  getUserInfoGzqtList,// 列表
  delUserInfoGzqt,// 删除
  addUserInfoGzqt,// 新增

  // -------- 工会 ------
  getUserInfoGhList,// 列表
  delUserInfoGh,// 删除
  addUserInfoGh,//新增

  // -------- 团委 ------
  getUserInfoTwList,// 列表
  delUserInfoTw,// 删除
  addUserInfoTw,// 新增团委

  // -------- 妇代会 ------
  getUserInfoFdhList,// 列表
  delUserInfoFdh,// 删除
  addUserInfoFdh,// 新增

  // -------- 离退休老干部 ------
  getUserInfoLtxlgbList,// 列表
  delUserInfoLtxlgb,// 删除
  addUserInfoLtxlgb,// 新增

  // --------- 党员发展 ------
  getUserInfoPartyList,
  addUserInfoParty,
  delUserInfoParty
  // getUserInfoIsBasics,// 通过id 获得人事基本信息+人事信息
  // getUserEducationListById, // 通过id 查询教育经历列表
}
