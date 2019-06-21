<template>
  <div name="Add" class="form-panel">
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
        <el-button type="success" size="medium" @click="submitForm">新增</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import Validator from '@/lib/validator'
import SubjectService from '@/services/SubjectService'

export default {
  name: 'Add',
  props: [
    'pNode'
  ],
  data() {
    return {
      form: {
        name: '',
        type: 2,
      },
      rule: {
        name: [{
          validator: Validator.checkName,
          trigger: 'blur'
        }]
      }
    }
  },
  watch: {
    pNode(pNode) {
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
        // 发起请求
        SubjectService.addSubject(this.form).then((res) => {
            if(res.code === 200){
              this.$message.success('添加'+res.message)
            }else {
              this.$message.error(res.message)
            }
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
