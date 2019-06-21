<template>
  <div name="Edit" class="form-panel">
    <el-form ref="form" :model="form" :rules="rule" label-suffix="" label-width="120px">
      <el-form-item label="名称" prop="name">
        <el-input v-model="form.name" size="medium" :maxlength="50" />
      </el-form-item>
      <el-form-item label="所属机构" prop="subjectName">
        <search :subjectName="form.subjectName" @changeSubject="changeSubject"></search>
      </el-form-item>
      <el-form-item label="上级小组" prop="fatherName">
        <el-input v-model="form.fatherName" size="medium" :maxlength="50" disabled/>
      </el-form-item>
      <el-form-item label="用户名称" prop="userName">
        <el-input v-model="form.userName" size="medium" :maxlength="50" disabled/>
      </el-form-item>
      <el-form-item label="小组描述" prop="remark">
        <el-input type="textarea" v-model="form.remark" :rows="3" :maxlength="255" />
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import Validator from '@/lib/validator'
import GroupService from '@/services/GroupService'
import Search from '../Search/Search.vue'

export default {
  name: 'Edit',
  props: [
    'pNode'
  ],
  components:{
    Search
  },
  data() {
    return {
      form: {
        id: '',
        name: '',
        subjectId: '',
        subjectName: '',
        fatherId: '',
        fatherName: '',
        remark: '',
        userName:'',
        userId: ''
      },
      rule: {
        name: [{
          validator: Validator.checkName,
          trigger: 'blur'
        }]
      },
      thisNode: this.pNode
    }
  },
  created() {
    let userInfo = JSON.parse(sessionStorage.getItem('userInfo'));
    this.form.userId = userInfo.id;
  },
  watch: {
    pNode(newData, oldData) {
      this.thisNode = newData;
      this.form.id = newData.id;
      this.form.name = newData.name;
      if(newData.father){
        this.form.fatherName = newData.father.name;
        this.form.fatherId = newData.father.id
      }
      this.form.subjectId = newData.subject.id;
      this.form.subjectName = newData.subject.name;
      this.form.remark = newData.remark;
      if(newData.user){
        this.form.userName = newData.user.name
      }
    }
  },
  methods: {
    ...mapActions([
      'getGroupList'
    ]),
    // 用户下拉框选择
    changeSubject(data){
        console.log('用户下拉框选择',data);
      this.form.subjectId = data
    },
    submitForm() {
      this.$refs['form'].validate((valid) => {
        if (!valid) {
          this.$message.error('请检查字段');
          return
        }

        GroupService.updateGroup(this.form).then((res) => {
            if(res.code === 200){
              this.$message.success('修改成功');
              // 重载 tree
              this.getGroupList()
            }else {
                this.$message.error(res.message)
            }

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
