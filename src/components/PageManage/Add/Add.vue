<template>
  <div name="Add" class="form-panel">
    <el-form ref="form" :model="form" :rules="rule" label-width="100px">
      <el-form-item label="等级" prop="level">
        <el-input v-model="form.level" size="medium" :maxlength="50" />
      </el-form-item>
      <el-form-item label="名字" prop="name">
        <el-input v-model="form.name" size="medium" :maxlength="50" />
      </el-form-item>

      <el-form-item label="类型" prop="sort">
        <el-input v-model="form.sort" size="medium" :maxlength="50" />
      </el-form-item>
      <el-form-item label="标题" prop="title">
        <el-input v-model="form.title" size="medium" :maxlength="50" />
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
import PageService from '@/services/PageService'

export default {
  name: 'Add',
  props: [
    'pNode'
  ],
  data() {
    return {

      form: {
        createdDate:'',
        lastModifiedDate:'',
        level:'',
        name:'',
        id:'',
        sort:'',
        title:'',
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
    pNode(newData, oldData) {
      this.thisNode = newData;
      this.form.level = newData.level;
      this.form.name = newData.name;
      this.form.id = newData.id;
      this.form.sort = newData.sort;
      this.form.title = newData.title;
    }
  },
  methods: {
    ...mapActions([
      'getPageList'
    ]),
    submitForm() {
      this.$refs['form'].validate((valid) => {
        if (!valid) {
          this.$message.error('请检查字段')
          return
        }

        PageService.addPage(this.form).then((res) => {
          if (res.code === 200){
            this.$message.success("修改成功");
            //清空表单
            this.$refs.form.resetFields();
            // 重载 tree
            this.getPageList();
          }else {
            this.$message.error("修改失败")
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
