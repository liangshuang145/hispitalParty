<template>
  <div name="Edit" class="form-panel">
    <el-form ref="form" :model="form" label-suffix="：" label-width="120px">
      <el-form-item label="名称" prop="name">
        <el-input v-model="form.name" size="medium" :maxlength="50" />
      </el-form-item>
      <el-form-item label="所属机构" prop="subjectName">
        <search :fatherValue="form.subjectName" @changeSubject="changeSubject"></search>
      </el-form-item>
      <el-form-item label="上级组织(部门)" prop="fatherName">
        <el-input v-model="form.fatherName" size="medium" :maxlength="50" disabled/>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" size="medium" @click="submitForm">修改</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import Validator from '@/lib/validator'
import DepartService from '@/services/DepartService'
import Search from "../Search/Search";

export default {
  components: {Search},
  name: 'Edit',
  props: [
    'pNode'
  ],
  data() {
    return {
      form: {
        id: '',
        name: '',
        subjectId: '',
        subjectName: '',
        fatherId: '',
        fatherName: '',
        userId:''
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
    this.form.userId = userInfo.id
  },
  watch: {
    pNode(newData, oldData) {
      this.thisNode = newData;
      this.form.id = newData.id;
      this.form.name = newData.name;
      this.form.subjectId = newData.subject.id;
      this.form.subjectName = newData.subject.name;
      if(newData.father){
        this.form.fatherId = newData.father.id;
        this.form.fatherName = newData.father.name
      }
    }
  },
  methods: {
    ...mapActions([
      'getDepartList'
    ]),
    changeSubject(subjectId){
        this.form.subjectId = subjectId
    },
    // 修改提交
    submitForm() {
      this.$refs['form'].validate((valid) => {
        if (!valid) {
          this.$message.error('请检查字段')
          return
        }

        DepartService.updateDepart(this.form).then((res) => {
            if(res.code === 200){
              this.$message.success('已修改');
              // 重载 tree
              this.getDepartList()
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
