<template>
  <div name="Edit" class="form-panel">
    <el-form ref="form" :model="form" label-width="100px">
      <el-form-item label="名称" prop="name">
        <el-input v-model="form.name" size="medium" :maxlength="50" disabled/>
      </el-form-item>
      <el-form-item label="类型">
        <el-radio v-model="form.type" :label="0">总院</el-radio>
        <el-radio v-model="form.type" :label="1">分院</el-radio>
        <el-radio v-model="form.type" :label="2">其他</el-radio>
      </el-form-item>
      <el-form-item>
        <!--<el-button type="danger" size="medium" @click="submitForm">删除</el-button>-->
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
  import SubjectService from '../../../services/SubjectService'
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
        type:2,
        subjectType: '',
      },
      thisNode: this.pNode
    }
  },
  methods:{
    submitForm(){
      this.$confirm('此操作将永久删除该机构, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        SubjectService.deleteSubject(this.form).then((res) => {
          if(res.code === 200){
            this.$message.success('删除成功');
            // 重载 tree
            this.getSubjectList()
          }else{
            this.$message.error(res.message)
          }
        });
      }).catch(() => {
        this.$message.info('已取消删除');
      });

    }
  },
  watch: {
    pNode(newData, oldData) {
      this.thisNode = newData;
      this.form.id = newData.id;
      this.form.name = newData.name;
      if (newData.subjectType === 'head'){
        this.form.type = 0
      }else if (newData.subjectType === 'part'){
        this.form.type = 1
      }else if (newData.subjectType === 'etc'){
        this.form.type = 2
      }
      this.form.subjectType = newData.subjectType;
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
