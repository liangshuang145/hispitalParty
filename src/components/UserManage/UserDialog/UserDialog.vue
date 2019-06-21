<template>
  <el-dialog
    :value="value" name="UserDialog" :visible="isShow" :before-close="handleClose"
    :title="title" width="640px" center>
    <el-form ref="form" :model="form" :rules="rule" label-width="120px">
      <el-form-item label="账号" prop="account">
        <el-input v-model="form.account" size="medium" :maxlength="30" auto-complete="new-account" placeholder="请输入账号"></el-input>
      </el-form-item>
      <el-form-item v-if="type == 0 || type == 1" label="密码" prop="password">
        <el-input type="password" v-model="form.password" size="medium" :maxlength="30" auto-complete="new-password" show-password placeholder="请输入密码"></el-input>
      </el-form-item>
      <el-form-item label="姓名" prop="name">
        <el-input v-model="form.name" size="medium" :maxlength="30" placeholder="请输入昵称"></el-input>
      </el-form-item>
      <el-form-item label="性别" prop="sex">
        <el-radio v-model="form.sex" :label="0">男</el-radio>
        <el-radio v-model="form.sex" :label="1">女</el-radio>
      </el-form-item>
      <el-form-item label="类型" prop="userType">
        <el-radio v-model="form.userType" label="admin">超级管理员</el-radio>
        <el-radio v-model="form.userType" label="user">普通用户</el-radio>
      </el-form-item>
      <el-form-item label="机构" prop="subjectId">
        <el-select v-model="form.subjectId" size="medium" placeholder="请选择机构" @change="selectSubject">
          <el-option v-for="item in subjectList" :key="item.id" :label="item.name" :value="item.id"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="所在组织类型" prop="subjectId">
        <el-radio v-model="changeDepartSubject" label="depart">组织(部门)</el-radio>
        <el-radio v-model="changeDepartSubject" label="groups">行政(小组)</el-radio>
      </el-form-item>
      <el-form-item label="组织(部门)" prop="departId" v-if="changeDepartSubject == 'depart'">
        <el-select v-model="form.departId" size="medium" placeholder="请选择组织(部门)" @change="selectDepart">
          <el-option v-for="item in departList" :key="item.id" :label="item.name" :value="item.id"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="行政(小组)" prop="groupsId"  >
        <el-select v-model="form.groupsId" size="medium" placeholder="请选择行政(小组)" @change="selectGroup">
          <el-option v-for="item in groupList" :key="item.id" :label="item.name" :value="item.id"/>
        </el-select>
      </el-form-item>
      <el-form-item label="描述" prop="remark">
        <el-input type="textarea" v-model="form.remark" :rows="5" :maxlength="255" placeholder="请输入描述" show-word-limit></el-input>
      </el-form-item>
    </el-form>
    <span slot="footer" class="dialog-footer">
      <el-button v-if="type == 0" size="medium" width="long" @click="cancelClick">关 闭</el-button>
      <template v-else>
        <el-button size="medium" width="long" @click="cancelClick">取 消</el-button>
        <el-button size="medium" width="long" type="primary" @click="sureClick">确 定</el-button>
      </template>
    </span>
  </el-dialog>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import Validator from '@/lib/validator'
import UserService from '@/services/UserService'

export default {
  name: 'UserDialog',
  props: {
    userData: { // 用户数据
      type: Object,
      default() {
        return {}
      }
    },
    type: { // 类型: 0-查看(默认),1-新增,2-修改
      type: Number,
      default: 0
    },
    value: {
      type: Boolean,
      default: false
    }
  },
  watch: {
    type(val) {
      let title = '';
      if(!val){
          val = 0
      }
      switch (val) {
        case 1:
          title = '新增用户';
//          this.$refs.form.resetFields();
          break;
        case 2:
          title = '修改用户';
          break;
        default:
          title = '查看用户';
          break
      }
      this.title = title
    },
    value(val) {
      this.isShow = val
    },
    isShow(val) {
      this.$emit('input', val)
    },
    userData(data) {
      this.form.id = data.id;
      this.form.account = data.account;
      this.form.nickname = data.nickname;
      this.form.gender = data.gender;
      this.form.userType = data.userType;
//      this.form.subject = data.subject;
//      this.form.depart = data.depart;
//      this.form.group = data.group;
    }
  },
  data() {
    return {
      isShow: false,
      title:'',
      changeDepartSubject:'depart',
      form: {
        id: '',
        account: '',// 账号
        password: '',// 密码
        name: '',//姓名
        sex: 0,
        userType: 'user',//用户类型
        subjectId: '',
        departId: '',
        groupsId: '',
        remark: '',// 描述
        type:this.type
      },
      rule: {
        name: [{
          validator: Validator.checkName,
          trigger: 'blur'
        }]
      }
    }
  },
  computed: {
    ...mapState([
      'subjectList',
      'departList',
      'groupList'
    ]),
  },
  async mounted() {
    await this.getSubjectList();
  },
  methods: {
    ...mapActions([
      'getSubjectList',
      'getGroupList',
      'getUserList',
      'getDepartListBySubjectId'
    ]),
    selectSubject(val) {
      this.getDepartListBySubjectId({subjectId:val});
      this.getGroupList({subjectId:val});
      this.form.subject = val
    },
    selectDepart(val) {
      this.form.depart = val
    },
    selectGroup(val) {
      this.form.group = val
    },
    // 确定按钮
    sureClick() {
      switch (this.type) {
        case 1: // 新增
//          this.changeDepartSubject === 'depart'? this.form.groupsId = '': this.form.departId  = '';

          UserService.addUser(this.form).then((res) => {
            this.$message.success('已添加');

            this.getUserList();
            this.isShow = false
          });
          break;
        case 2: // 修改
          // 注意不要修改密码
          UserService.updateUser(this.form).then((res) => {
            this.$message.success('已修改');

            this.getUserList();
            this.isShow = false
          });
          break;
        default:
          break
      }
    },
    // 取消按钮
    cancelClick() {
      this.isShow = false
    },
    // 关闭按钮
    handleClose() {
      this.isShow = false
    }
  }
}
</script>
