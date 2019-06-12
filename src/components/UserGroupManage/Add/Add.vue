<template>
  <div name="Add" class="form-panel">
    <el-form ref="form" :model="form" :rules="rule" label-width="100px">
      <el-form-item label="名称" prop="name">
        <el-input v-model="form.name" size="medium" :maxlength="50"/>
      </el-form-item>
      <el-form-item label="父级" prop="parentName">
        <el-input v-model="form.parentName" size="medium" :maxlength="50" disabled/>
      </el-form-item>
      <el-form-item label="描述" prop="description">
        <el-input type="textarea" v-model="form.description" :rows="5" :maxlength="255"/>
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
import UserGroupService from '@/services/UserGroupService'

export default {
  name: 'Add',
  props: [
    'pNode'
  ],
  data() {
    return {
      form: {
        name: '',
        parentId: '',
        parentName: '',
        description: ''
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
      this.form.name = pNode.name
      this.form.parentId = pNode.parentId
      this.form.parentName = pNode.parentName
      this.form.description = pNode.description
    }
  },
  methods: {
    ...mapActions([
      'getUserGroupList'
    ]),
    submitForm() {
      this.$refs['form'].validate((valid) => {
        if (!valid) {
          this.$message.error('请检查字段')
          return
        }

        UserGroupService.addUserGroup(this.form).then((res) => {
          this.$message.success('已添加')

          // 重载 tree
          this.getUserGroupList()
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
