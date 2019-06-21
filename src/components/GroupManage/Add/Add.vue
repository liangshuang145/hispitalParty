<template>
  <div name="Add" class="form-panel">
    <el-form ref="form" :model="form" :rules="rule" label-suffix="" label-width="120px">
      <el-form-item label="名称" prop="name">
        <el-input v-model="form.name" size="medium" :maxlength="50"/>
      </el-form-item>
      <el-form-item label="所属机构" prop="parentName">
        <search @changeSubject="changeSubject"></search>
      </el-form-item>
      <el-form-item label="上级小组" prop="fatherName">
        <el-input v-model="form.fatherName" size="medium" :maxlength="50" disabled></el-input>
      </el-form-item>
      <el-form-item label="用户名称" prop="userName">
        <el-input v-model="form.userName" size="medium" :maxlength="50" disabled></el-input>
      </el-form-item>
      <el-form-item label="小组描述" prop="description">
        <el-input type="textarea" v-model="form.description" :rows="3" :maxlength="255"/>
      </el-form-item>
      <el-form-item>
        <el-button type="success" size="medium" @click="submitForm">新增</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import Validator from '@/lib/validator'
import GroupService from '@/services/GroupService'
import Search from "../Search/Search";

export default {
  name: 'Add',
  props: [
    'pNode'
  ],
  components:{
    Search,
  },
  data() {
    return {
      form: {
        name: '',
        subjectId: '',
        subjectName: '',
        fatherId: '',
        fatherName: '',
        description: '',
        userName:'',
        userId:''
      },
      rule: {
        name: [{
          validator: Validator.checkName,
          trigger: 'blur'
        }]
      }
    }
  },
  created(){
      let userInfo = JSON.parse(sessionStorage.getItem('userInfo'));
        this.form.userName = userInfo.name;
      this.form.userId = userInfo.id;
  },
  watch: {
    pNode(pNode) {
      this.form.fatherName = pNode.name;
      this.form.fatherId = pNode.id;
    }
  },
  methods: {
    ...mapActions([
      'getGroupList'
    ]),

    /// 选择机构
    changeSubject(subjetId){
      this.form.subjectId = subjetId
    },
    submitForm() {
      this.$refs['form'].validate((valid) => {
        if (!valid || !this.form.subjectId) {
          this.$message.error('请检查字段');
          return
        }
        GroupService.addGroup(this.form).then((res) => {
          this.$message.success('已添加');

          // 重载 tree
          this.getGroupList()
        })
      })
    }
  }
}
</script>

<style scoped>
.form-panel {
  min-height: 520px;
  overflow-y: auto;
}
</style>

<!--
user/del 参数异常
user/departUser 500
user/groupUser 500
user/view 404 用户不存在
user/add 400 添加
depart/childs 404 找不到
groups/childs 404 找不到
-->
