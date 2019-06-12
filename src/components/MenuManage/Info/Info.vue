#@Author: bjy @Date: 2019/6/3 15:52 #
<template>
  <div name="Info" class="form-panel">
    <el-form ref="form" :model="form" label-suffix="：" label-width="100px">
      <el-form-item label="名称" prop="name">
        <el-input v-model="form.name" size="medium" :maxlength="50" disabled/>
      </el-form-item>
      <el-form-item label="父级" prop="parentName">
        <el-input v-model="form.parentName" size="medium" :maxlength="50" disabled/>
      </el-form-item>
      <el-form-item label="描述" prop="description">
        <el-input type="textarea" v-model="form.description" :rows="5" :maxlength="255" disabled/>
      </el-form-item>
    </el-form>
    <Search/>
  </div>
</template>

<script>
  import Search from '../Search/Search.vue'
  export default {
    name: 'Info',
    components:{
      Search
    },
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
          parentId: '',
          parentName: '',
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
        this.form.subjectId = newData.subjectId
        this.form.subjectName = newData.subjectName
        this.form.parentId = newData.parentId
        this.form.parentName = newData.parentName
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

