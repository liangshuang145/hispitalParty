<template>
  <el-dialog
    :value="value"
    name="ImportDialog"
    :visible="isShow"
    :before-close="handleClose"
    :title="title"
    width="800px"
    center
  >
    <el-form ref="form" :model="form" label-width="80px">
      <el-form-item label="名称" prop="name" required>
        <el-input v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item label="分数" prop="total">
        <el-input v-model="form.total"></el-input>
      </el-form-item>
      <el-form-item label="年份" prop="year" required>
        <el-col :span="11">
          <el-date-picker
            type="year"
            value-format="yyyy"
            v-model="form.year"
            validate-event
            placeholder="选择日期"
            style="width: 100%;"
          ></el-date-picker>
        </el-col>
      </el-form-item>
      <el-form-item label="机构" prop="subjectId" required>
        <el-select v-model="form.subjectId" placeholder="请选择" @change="selectSubject">
          <el-option v-for="item in subjectList" :key="item.id" :label="item.name" :value="item.id"></el-option>
        </el-select>
      </el-form-item>

      <el-form-item label="部门" prop="departId">
        <el-select filterable placeholder="请选择" v-model="form.departId" @change="selectDepart">
          <el-option v-for="item in departList" :key="item.id" :label="item.name" :value="item.id"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="组织" prop="groupId">
        <el-select filterable placeholder="请选择" v-model="form.groupId" @change="selectGroup">
          <!-- v-if="!isShow" -->
          <el-option v-for="item in groupList" :key="item.id" :label="item.name" :value="item.id"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="用户" prop="userId">
        <el-col :span="12">
          <el-select
            v-model="form.userId"
            filterable
            reserve-keyword
            placeholder="请输入用户名称"
            :filter-method="selectUserList"
            @change="selectUser"
          >
            <el-option v-for="item in userLists" :key="item.id" :label="item.name" :value="item.id"></el-option>
          </el-select>
          <!-- <el-autocomplete
            class="inline-input"
            v-model="form.userId"
            :fetch-suggestions="selectUserList"
            placeholder="请输入内容"
            @change="selectUser"
          ></el-autocomplete>-->
        </el-col>
      </el-form-item>
      <el-form-item label="附件" prop="fileId">
        <!-- <el-upload
          class="upload-demo"
          action="http://168.192.1.3:8080/ayundao/medical/addFile"
          :on-change="handleChange"
          :on-success="success"
          :file-list="fileList"
        >
          <el-button size="small" type="primary">点击上传</el-button>
          <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
        </el-upload>-->
        <el-upload
          class="upload-demo"
          ref="upload"
          action="http://192.168.1.3:8080/ayundao/medical/addFile"
          :file-list="fileList"
          :on-success="success"
          :auto-upload="false"
        >
          <el-button slot="trigger" size="small" type="primary">选取文件</el-button>
          <el-button
            style="margin-left: 10px;"
            size="small"
            type="success"
            @click="submitUpload"
          >上传到服务器</el-button>
          <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
        </el-upload>
      </el-form-item>

      <el-form-item label="描述 " prop="remark">
        <el-input type="textarea" v-model="form.remark"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">立即创建</el-button>
        <el-button @click="onCancel">取消</el-button>
      </el-form-item>
    </el-form>
  </el-dialog>
</template>
<script>
import MedicalService from "../../../services/MedicalService";
import UserService from "../../../services/UserService";
import Validator from "@/lib/validator";
import { mapState, mapActions } from "vuex";
import { truncate } from "fs";

export default {
  name: "addDocument",
  props: {
    value: {
      type: Boolean,
      default: false
    },
    type: {
      // 类型: 0-查看(默认),1-新增,2-修改
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      isShow: true,
      title: "",
      fileList: [],
      words: [],
      userLists: [],
      radio: 1,
      form: {
        name: "",
        userName: "",
        total: 0,
        year: "",
        subjectId: "",
        departId: "",
        groupId: "",
        userId: "",
        remark: "",
        fileIds: []
      },
      rule: {
        name: [
          {
            validator: Validator.checkName,
            trigger: "blur"
          }
        ],
        subjectId: [
          {
            validator: Validator.checkSubjectId,
            trigger: "blur"
          }
        ],
        year: [
          {
            validator: Validator.checkYear,
            trigger: "blur"
          }
        ]
      }
    };
  },
  watch: {
    addDocument(data) {
      if (this.type != 1) {
        this.form.id = data.id;
        this.form.name = data.name;
        this.form.year = data.year;
        this.form.subjectId = data.subjectId;
        this.form.departId = data.departId;
        this.form.groupId = data.groupId;
        this.form.userId = data.userId;
        this.form.remark = data.remark;
      } else {
        this.type = 0;
      }
    },
    value(val) {
      this.isShow = val;
    },
    isShow(value) {
      this.$emit("input", value);
    },
    type(val) {
      let title = "";
      if (!val) {
        val = 0;
      }
      switch (val) {
        case 0:
          title = "查看医德档案";
          break;
        case 1:
          title = "新增医德档案";
          break;
        case 2:
          title = "修改医德档案";
          break;
        default:
          title = "查看医德档案";
          break;
      }
      this.title = title;
    }
  },

  computed: {
    ...mapState([
      "addDocument",
      "groupList", //组织列表
      "subjectList", //机构列表
      "departList", //部门列表
    ])
  },
  mounted() {
    this.getSubjectList();
    // this.words = userList;
  },
  methods: {
    ...mapActions([
      "getAddDocument",
      "getUserList",
      "getSubjectList",
      "getDepartList",
      "getGroupListBySubjectId",
      "getDepartListBySubjectId",
      "getUserListByName",
//      'getUserListByGroupId'
    ]),
    //附件ID集合
    // onSuccess(res, file, fileList) {
    //   return
    // },
    submitUpload() {
      this.$refs.upload.submit();
    },
    handleSelect(item) {
      console.log(item);
    },
    //附件成功和失败的判断

    success(res, file, fileList) {
      if (res.code === 200) {
        console.log(1212);
        console.log(res);
        console.log(file);
        console.log(fileList);
        var arr = [];
        for (var i = 0; i < fileList.length; i++) {
          arr.push(fileList[i].response.data.id);
        }
        this.form.fileIds = arr;
      }
    },
    error(err, file, fileList) {
      console.log(文件上传失败);
    },
    // 通过用户名称进行搜索
    selectUserList(val) {
      UserService.getUserListByGroupId({
        key: "name",
        value: val,
        page: 0,
        page: 0,
        size: 30
      }).then(res => {
        if (res.code === 200) {
          this.userLists = res.data.content;
        } else {
          this.$message.error(res.message);
        }
      });
      console.log(val);
    },
    //对用户组过滤判断
    getUserList(queryString, cb) {
      var words = this.words;
      var result = queryString
        ? userList.filter(this.createFilter(queryString))
        : userList;
      // 调用 callback 返回建议列表的数据
      cb(result);
    },
    handleChange(file, fileList) {
      console.log(file, fileList);
    },
    // 关闭按钮
    handleClose() {
      this.isShow = false;
    },
    //取消按钮
    onCancel() {
      this.isShow = false;
    },
    //选择机构
    selectSubject(subjectId) {
      this.getGroupListBySubjectId({ subjectId: subjectId });
      this.getDepartListBySubjectId({ subjectId: subjectId });
      this.form.subjectId = subjectId;
    },
    //选择部门
    selectDepart(departId) {
      this.form.departId = departId;
    },

    //选择组织
    selectGroup(groupId) {
      this.getUserListByGroupId({groupId: groupId})
      this.form.groupId = groupId;
    },
    //选择用户
    selectUser(userId) {
      this.form.userId = userId;
    },

    onSubmit() {
      switch (this.type) {
        case 0: //查看

        case 1: // 新增
          MedicalService.addDocument(this.form).then(res => {
            if (res.code === 200) {
              this.$refs["form"].resetFields();
              this.getAddDocument();
              this.isShow = false;
              this.$message.success(res.message);
              console.log(信息添加成功);
            } else {
              this.$message.error(res.message);
            }
          });
          break;
        case 2: // 修改
          break;
        default:
          break;
      }
      console.log("submit!");
    }
  }
};
</script>

<style>
.el-dropdown-link {
  cursor: pointer;
  color: #409eff;
}
.el-icon-arrow-down {
  font-size: 12px;
}
</style>

