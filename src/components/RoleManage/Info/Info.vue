<template>
  <div name="Edit" class="form-panel">
    <el-form ref="form" :model="form" label-width="100px">
      <el-form-item label="名称" prop="name">
        <el-input v-model="form.name" size="medium" :maxlength="50"/>
      </el-form-item>
      <el-form-item label="等级" prop="grade">
        <el-select v-model="form.grade" placeholder="请选择等级">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
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
        grade: '',
        description: ''
      },
      options: [
        {value: 0, label: '0级'},
        {value: 1, label: '1级'},
        {value: 2, label: '2级'},
        {value: 3, label: '3级'},
        {value: 4, label: '4级'},
        {value: 5, label: '5级'},
        {value: 6, label: '6级'},
        {value: 7, label: '7级'},
        {value: 8, label: '8级'},
        {value: 9, label: '9级'}
      ],
      thisNode: this.pNode
    }
  },
  watch: {
    pNode(newData, oldData) {
      this.form.thisNode = newData
      this.form.grade = newData.level
      this.form.id = newData.id
      this.form.name = newData.name
//      this.form.grade = newData.grade
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
