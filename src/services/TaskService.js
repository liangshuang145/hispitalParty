/**
 * Created by 13620 on 2019/7/3.
 */
/**
 * Task 任务类
 *
 */
import http from '@/lib/http'
import mock from '@/mocks/data'

/**
 * 获取任务列表
 *
 * @param {*} param
 */
const getTaskList = (param = {}) => {
  return new Promise((resolve) => {
    http.get({
      url:'task/list',
      method:'get',
      data:param
    }).then((res) => {
      console.log('列表的参数:', res)
      resolve(res.data)
    })
  })
};

/**
 * 添加任务
 *
 * @param {*} param
 */
const addTask = (param = {}) => {
  return new Promise((resolve) => {
    param={
      title: param.title,
      workType: param.workType,
      issuertime: param.issuertime,
      tasktext: param.tasktext,
      // userid: "402881916ba10b8a016ba113adbc0006",
      userid: param.id,
      subjectIds: param.subjectId,
      departIds: !param.departId? '' :param.departId,
      groupIds: !param.groupId? '' : param.groupId,
      userids: param.userids
    };
    console.log("添加任务发送的param",param);
    http.post({
      url:'task/add',
      method:'post',
      data:param
    }).then((res) => {
      console.log("添加任务成功",res)
      resolve(res)
    },(res)=>{
      console.log("添加任务失败",res)
    })
  })
};


/**
 * 根据id查看任务详情
 * @param param
 * @returns {Promise}
 */
const getTaskById = (param = {}) => {
  return new Promise((resolve) => {
    param={
      id:param.id,
    };
    http.post({
      url:'task/view',
      method:'post',
      data:param
    }).then((res) => {
      resolve(res)
    })
  })
};

/**
 * 根据id删除任务
 * @param param
 * @returns {Promise}
 */
const delTaskByid = (param = {}) => {
  return new Promise((resolve) => {
    param={
      id:param.id,
    };
    http.post({
      url:'task/del',
      method:'post',
      data:param
    }).then((res) => {
      console.log("删除任务成功",res);
      resolve(res)
    })
  })
};



export default {
  getTaskList,
  addTask,
  getTaskById,
  delTaskByid,

}
