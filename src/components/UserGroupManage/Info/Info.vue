<template>
  <div name="Info" class="form-panel">
    <el-form ref="form" :model="form" label-width="100px" >
      <el-form-item label="名称" prop="name">
        <el-input v-model="form.name" size="medium" :maxlength="50" disabled/>
      </el-form-item>
      <el-form-item label="上级小组" prop="fatherName">
        <el-input v-model="form.fatherName" size="medium" :maxlength="50" disabled/>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" size="medium" @click="submitForm">删除</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
  import { mapActions } from 'vuex'
  import UserGroupService from '../../../services/UserGroupService'
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
        fatherId: '',
        fatherName: '',
      },
      thisNode: this.pNode
    }
  },
  methods:{
    ...mapActions([
      'getUserGroupList'
    ]),
    submitForm(){
      this.$confirm('此操作将永久删除该小组, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        UserGroupService.deleteUserGroup().then((res) => {
            if(res.code === 200){
              this.$message.success('删除成功');
              // 重载 tree
              this.getUserGroupList()
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
      this.form.fatherId = newData.parentData.id;
      this.form.fatherName = newData.parentData.name;
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
