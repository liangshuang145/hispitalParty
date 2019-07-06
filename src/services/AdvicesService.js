/**
 * Created by 13620 on 2019/7/3.
 */

/**
 * Advices 消息类类
 *
 */
import http from '@/lib/http'
import mock from '@/mocks/data'

/**
 * 获取消息列表
 *
 * @param {*} param
 */
const getAdvicesList = (param = {}) => {
  return new Promise((resolve) => {
    http.get({
      url:'advices/list',
      method:'get',
      data:param
    }).then((res) => {
      console.log("或许消息列表成功的res",res);
      resolve(res.data)
    },(res)=>{
      console.log("或许消息列表失败的res",res)
    })
  })
};

/**
 * 添加消息
 *
 * @param {*} param
 */
const addAdvices = (param = {}) => {
  return new Promise((resolve) => {
    param={
      name: param.title,
      type: param.workType,
      issuertime: param.issuertime,
      tasktext: param.tasktext,
      // userid: "402881916ba10b8a016ba113adbc0006",
      userid: param.id,
      subjectId: param.subjectId,
      departId: param.departId,
      groupId: param.groupId,
    };
    console.log("添加消息发送的param",param);
    http.post({
      url:'advices/add',
      method:'post',
      data:param
    }).then((res) => {
      console.log("添加消息成功",res)
      resolve(res)
    },(res)=>{
     
    })
  })
};


/**
 * 根据id查看消息详情
 * @param param
 * @returns {Promise}
 */
const getAdvicesById = (param = {}) => {
  return new Promise((resolve) => {
    param={
      id:param.id,
    };
    http.post({
      url:'advices/view',
      method:'post',
      data:param
    }).then((res) => {
      resolve(res)
    })
  })
};

/**
 * 根据id删除消息
 * @param param
 * @returns {Promise}
 */
const delAdvicesByid = (param = {}) => {
  return new Promise((resolve) => {
    param={
      id:param.id,
    };
    http.post({
      url:'advices/del',
      method:'post',
      data:param
    }).then((res) => {
      console.log("删除消息成功",res);
      resolve(res)
    })
  })
};



export default {
  getAdvicesList,
  addAdvices,
  getAdvicesById,
  delAdvicesByid,

}
