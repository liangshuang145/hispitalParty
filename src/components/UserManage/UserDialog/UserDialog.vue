<template>
  <el-dialog
    :value="value" name="UserDialog" :visible="isShow" :before-close="handleClose"
    :title="title" width="640px" center>
    <el-form ref="form" :model="form" :rules="rule" label-width="120px">
      <el-form-item label="账号" prop="account">
        <el-input v-model="form.account" size="medium" :maxlength="30" auto-complete="new-account" placeholder="请输入账号"></el-input>
      </el-form-item>
      <el-form-item v-if="type == 1" label="密码" prop="password">
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
        <el-radio v-model="form.userType" :label="1">超级管理员</el-radio>
        <el-radio v-model="form.userType" :label="0">普通用户</el-radio>
      </el-form-item>
      <el-form-item label="机构" prop="subjectId">
        <el-select v-model="form.subjectName" size="medium" placeholder="请选择机构" @change="selectSubject">
          <el-option v-for="item in subjectList" :key="item.id" :label="item.name" :value="item.id"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="所在组织类型" prop="subjectId">
        <el-radio v-model="changeDepartSubject" label="depart">组织(部门)</el-radio>
        <el-radio v-model="changeDepartSubject" label="groups">行政(小组)</el-radio>
      </el-form-item>
      <el-form-item label="组织(部门)" prop="departId" v-if="changeDepartSubject == 'depart'">
        <el-select v-model="form.departName" size="medium" placeholder="请选择组织(部门)" @change="selectDepart">
          <el-option v-for="item in departList" :key="item.id" :label="item.name" :value="item.id"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="行政(小组)" prop="groupsId"  v-if="changeDepartSubject == 'groups'" >
        <el-select v-model="form.groupsName" size="medium" placeholder="请选择行政(小组)" @change="selectGroup">
          <el-option v-for="item in groupList" :key="item.id" :label="item.name" :value="item.id"/>
        </el-select>
      </el-form-item>
      <el-form-item label="用户角色" prop="groupsId"  >
        <el-select v-model="form.roleIds" multiple size="medium" placeholder="请选择用户角色" @change="selectRole">
          <el-option v-for="item in roleList" :key="item.id" :label="item.name" :value="item.id"/>
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
      'form.roleIds'(val){
          console.log('roleIds',val)
      },
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
        if(this.type != 1){
          this.form.id = data.id;
          this.form.account = data.account;
          this.form.name = data.name;
          this.form.sex = Number(data.sex);
          if(data.userType === 'admin'){
            this.form.userType = 1
          }else if(data.userType === 'normal'){
            this.form.userType = 0
          }
          this.form.remark = data.remark;
          if (data.userRoles){
            let userRoles = data.userRoles,myRoleIds = [];
            for (let i = 0; i < userRoles.length; i++){
                let id = userRoles[i].id;
              myRoleIds[myRoleIds.length] = id
          }
            this.form.roleIds = myRoleIds;
          }
          this.form.subjectId = data.userRelations[0].subject.id;
          this.form.subjectName = data.userRelations[0].subject.name;
          if (data.userRelations[0].depart){
            this.form.departId = data.userRelations[0].depart.id;
            this.form.departName = data.userRelations[0].depart.name;
            this.changeDepartSubject = 'depart'
          }
          if(data.userRelations[0].group){
            this.form.groupId = data.userRelations[0].group.id;
            this.form.groupName = data.userRelations[0].group.name;
            this.changeDepartSubject = 'groups'
          }
        }
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
        userType: 0,//用户类型
        departName:'',
        subjectName:'',
        groupsName:'',
        subjectId: '',
        departId: '',
        groupsId: '',
        remark: '',// 描述
        roleIds:[],
        type:this.type
      },
      rule: {
        name: [{
          validator: Validator.checkName,
          trigger: 'blur'
        }],
        account: [{
            validator: Validator.checkAccount,
          trigger: 'blur'
        }],
        password: [{
            validator: Validator.checkPassword,
          trigger: 'blur'
        }]
      }
    }
  },
  computed: {
    ...mapState([
      'subjectList',
      'departList',
      'groupList',
      'roleList'
    ]),
  },
  async mounted() {
    await this.getSubjectList();
    await this.getRoleList();
    await this.getDepartListBySubjectId({subjectId:this.form.subjectId});
    await this.getGroupListBySubjectId({subjectId:this.form.subjectId});
  },
  methods: {
    ...mapActions([
      'getSubjectList',
      'getGroupListBySubjectId',
      'getUserList',
      'getDepartListBySubjectId',
      'getRoleList'
    ]),
    selectSubject(val) {
      this.getDepartListBySubjectId({subjectId:val});
      this.getGroupListBySubjectId({subjectId:val});
      this.form.subjectId = val
    },
    selectDepart(val) {
      this.form.departId = val
    },
    selectGroup(val) {
      this.form.groupId = val
    },
    selectRole(){

    },
    // 确定按钮
    sureClick() {
      switch (this.type) {
        case 1: // 新增
          this.changeDepartSubject === 'depart'? this.form.groupsId = '': this.form.departId  = '';
          if(!this.form.userType){
            this.form.userType = 0
          }
          UserService.addUser(this.form).then((res) => {
              if(res.code === 200){
                this.$message.success('已添加成功');
                this.getUserList();
                this.isShow = false
              }else{
                  this.$message.error(res.message)
              }
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
