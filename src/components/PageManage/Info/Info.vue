<template>
  <div name="Edit" class="form-panel">
    <el-form ref="form" :model="form" label-width="100px">
      <el-form-item label="页面标题" prop="title">
        <el-input v-model="form.title" size="medium" :maxlength="50" disabled/>
      </el-form-item>
      <el-form-item label="页面名称" prop="name">
        <el-input v-model="form.name" size="medium" :maxlength="50" disabled/>
      </el-form-item>
      <el-form-item label="页面等级" prop="level">
        <el-input v-model="form.level" size="medium" :maxlength="50" disabled/>
      </el-form-item>
      <el-form-item label="所属菜单" prop="menuName">
        <el-input v-model="form.menuName" size="medium" :maxlength="50" disabled/>
      </el-form-item>
      <el-form-item label="上级页面" prop="fatherName">
        <el-input v-model="form.fatherName" size="medium" :maxlength="50" disabled/>
      </el-form-item>
      <el-form-item label="页面排序" prop="sort">
        <el-input v-model="form.sort" size="medium" :maxlength="50" disabled/>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
  import PageService from '../../../services/PageService'
export default {
  name: 'Info',
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
        fields:'',
      },
      thisNode: this.pNode
    }
  },
  methods:{

  },
  watch: {
    pNode(newData, oldData) {
     this.thisNode = newData;
      this.form.level = newData.level;
      this.form.name = newData.name;
      this.form.id = newData.id;
      this.form.sort = newData.sort;
      this.form.title = newData.title;
      this.form.fields = newData.fields;
      this.form.menuName = newData.menu.name;
      this.form.menuId = newData.menu.id;
      this.form.fatherName= newData.parentData.name;
      this.form.fatherId = newData.parentData.id
    }
  }
}
</script>

<style scoped>
.form-panel {
  min-height: 520px;
  overflow-y: auto;
}
  .i-card{
    width:50%;
    margin:0 0 0 50px;
  }
  .card-title{
    color: #595959;
  }
</style>
