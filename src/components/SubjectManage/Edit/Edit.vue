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
      <el-form-item label="描述" prop="description">
        <el-input type="textarea" v-model="form.description" size="medium" :rows="5" :maxlength="255"/>
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
        type: 0,
        description: ''
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
      this.form.thisNode = newData
      this.form.id = newData.id
      this.form.name = newData.name
      this.form.type = newData.type
      this.form.description = newData.description
    }
  },
  methods: {
    ...mapActions([
      'getSubjectList'
    ]),
    submitForm() {
      this.$refs['form'].validate((valid) => {
        if (!valid) {
          this.$message.error('请检查字段')
          return
        }

        SubjectService.updateSubject(this.form).then((res) => {
          this.$message.success('已修改')

          // 重载 tree
          this.getSubjectList()
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
