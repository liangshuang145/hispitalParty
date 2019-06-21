<template>
  <div name="Edit" class="form-panel">
    <el-form ref="form" :model="form" :rules="rule" label-width="100px">
      <el-form-item label="名称" prop="name">
        <el-input v-model="form.name" size="medium" :maxlength="50"/>
      </el-form-item>
      <el-form-item label="类型">
        <el-radio v-model="form.type" :label="0">总院</el-radio>
        <el-radio v-model="form.type" :label="1">分院</el-radio>
        <el-radio v-model="form.type" :label="2">其他</el-radio>
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
import SubjectService from '@/services/SubjectService'

export default {
  name: 'Edit',
  props: [
    'pNode'
  ],
  data() {
    return {
      form: {
        id: '',
        name: '',
        type: '',
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
  watch: {
    pNode(newData, oldData) {
      this.thisNode = newData;
      this.form.id = newData.id;
      this.form.name = newData.name;
      if (newData.subjectType === 'head'){
          this.form.type = 0
      }else if (newData.subjectType === 'part'){
          this.form.type = 1
      }else if (newData.subjectType === 'etc'){
          this.form.type = 2
      }
      this.form.subjectType = newData.subjectType
    }
  },
  methods: {
    ...mapActions([
      'getSubjectList'
    ]),
    submitForm() {
      this.$refs['form'].validate((valid) => {
        if (!valid) {
          this.$message.error('请检查字段');
          return
        }

        SubjectService.updateSubject(this.form).then((res) => {
            if(res.code === 200){
              this.$message.success('修改成功');
              this.getSubjectList()
            }else{
                this.$message.error(res.message)
            }
          // 重载 tree
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
