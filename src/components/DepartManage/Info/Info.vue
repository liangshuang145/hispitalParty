<template>
  <div name="Info" class="form-panel">
    <el-form ref="form" :model="form" label-suffix="：" label-width="120px">
      <el-form-item label="名称" prop="name">
        <el-input v-model="form.name" size="medium" :maxlength="50" disabled/>
      </el-form-item>
      <el-form-item label="所属机构" prop="subjectName">
        <el-input v-model="form.subjectName" size="medium" :maxlength="50" disabled/>
      </el-form-item>
      <el-form-item label="上级组织(部门)" prop="fatherName">
        <el-input v-model="form.fatherName" size="medium" :maxlength="50" disabled/>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
  import DepartService from '../../../services/DepartService'
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
        subjectId: '',
        subjectName: '',
        fatherId: '',
        fatherName: '',
      },
      thisNode: this.pNode
    }
  },
  methods:{
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
  }
}
</script>

<style scoped>
.form-panel {
  min-height: 520px;
  overflow-y: auto;
}
</style>
