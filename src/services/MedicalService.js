/**
 * medical 医德档案接口请求对象
 *
 * @author jillyandkai@qq.com
 * @date 2019-05-21
 */
import http from "@/lib/http";
import mock from "@/mocks/data";
import {
  resolve
} from "path";

const addDocument = (param = {}) => {
  return new Promise((resolve, reject) => {
    param = {
      name: param.name,
      total: param.total,
      remark: param.remark,
      year: param.year,
      fileIds: param.fileIds,
      subjectId: param.subjectId,
      departId: param.departId,
      groupId: param.groupId,
      userId: param.userId
    };
    http
      .post({
        method: "POST",
        url: "medical/add",
        data: param
      })
      .then(res => {
        console.log(8888);
        resolve(res);
      });
  });
};

const lookDocument = (param = {}) => {
  return new Promise((resolve, reject) => {
    param = {
      id: param.id
    };
    http.post({
        method: "post",
        url: "medical/view",
        data: param
      })
      .then(res => {
        resolve(res);
        console.log("查看成功");
      });
  });
};

export default {
  addDocument,
  lookDocument
};
