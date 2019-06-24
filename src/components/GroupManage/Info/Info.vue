<template>
  <div name="Edit" class="form-panel">
    <el-form ref="form" :model="form" label-suffix=" " label-width="120px">
      <el-form-item label="名称" prop="name">
        <el-input v-model="form.name" size="medium" :maxlength="50" disabled/>
      </el-form-item>
      <el-form-item label="上级小组" prop="fatherName" >
        <el-input v-model="form.fatherName" size="medium" :maxlength="50" disabled/>
      </el-form-item>
      <el-form-item label="所属机构" prop="subjectName">
        <el-input v-model="form.subjectName" size="medium" :maxlength="50" disabled/>
      </el-form-item>
      <el-form-item label="用户名称" prop="userName">
        <el-input v-model="form.userName" size="medium" :maxlength="50" disabled/>
      </el-form-item>
      <el-form-item label="小组描述" prop="remark">
        <el-input type="textarea" v-model="form.remark" :rows="3" :maxlength="255" disabled/>
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
        subjectId: '',
        subjectName: '',
        fatherId: '',
        fatherName: '',
        remark: '',
        userName:''
      },
      thisNode: this.pNode
    }
  },
  watch: {
    pNode(newData, oldData) {
        console.log(newData);
      this.thisNode = newData;
      this.form.id = newData.id;
      this.form.name = newData.name;
      this.form.fatherName = newData.parentData.name;
      this.form.fatherId = newData.parentData.id;
      this.form.subjectId = newData.subject.id;
      this.form.subjectName = newData.subject.name;
      this.form.remark = newData.remark;
      if(newData.user){
        this.form.userName = newData.user.name
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
