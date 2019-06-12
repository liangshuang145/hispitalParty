<template>
  <div name="Edit" class="form-panel">
    <el-form ref="form" :model="form" label-width="100px">
      <el-form-item label="名称" prop="name">
        <el-input v-model="form.name" size="medium" :maxlength="50"/>
      </el-form-item>
      <!--<el-form-item label="操作" prop="operation">-->
        <!--<el-checkbox-group v-model="form.operation">-->
          <!--<el-checkbox :label="0">查看</el-checkbox>-->
          <!--<el-checkbox :label="1">新增</el-checkbox>-->
          <!--<el-checkbox :label="2">修改</el-checkbox>-->
          <!--<el-checkbox :label="3">删除</el-checkbox>-->
        <!--</el-checkbox-group>-->
      <!--</el-form-item>-->
      <el-form-item label="描述" prop="description">
        <el-input type="textarea" v-model="form.description" :rows="5" :maxlength="255"/>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: 'Info',
  props: [
    'pNode'
  ],
  data() {
    return {
      form: {
        id: '',
        name: '',
        operation: [],
        description: ''
      },
      thisNode: this.pNode
    }
  },
  watch: {
    pNode(newData, oldData) {
      this.form.thisNode = newData
      this.form.id = newData.id
      this.form.name = newData.name
      this.form.operation = newData.operation
      this.form.description = newData.description
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
