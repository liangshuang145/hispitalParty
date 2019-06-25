<template>
  <div name="Add" class="form-panel">
    <el-form ref="form" :model="form" :rules="rule" label-width="100px" >
      <el-form-item label="名称" prop="name" >
        <el-input v-model="form.name" size="medium" :maxlength="50"/>
      </el-form-item>
      <el-form-item label="上级小组" prop="fatherName">
        <el-select v-model="form.fatherName" size="medium" placeholder="请选择上级用户组" @change="selectParentUserGroup">
          <el-option v-for="item in fatherOption" :key="item.id" :label="item.name" :value="item.id"/>
        </el-select>
        <!--<el-input v-model="form.fatherName" size="medium" :maxlength="50" disabled/>-->
      </el-form-item>
      <el-form-item>
        <el-button type="primary" size="medium" @click="submitForm">修改</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import Validator from '@/lib/validator'
import UserGroupService from '@/services/UserGroupService'

export default {
  name: 'Edit',
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
      rule: {
        name: [{
          validator: Validator.checkName,
          trigger: 'blur'
        }]
      },
      fatherOption:[],
      thisNode: this.pNode
    }
  },
  watch: {
    pNode(newData, oldData) {
      this.thisNode = newData;
      this.form.id = newData.id;
      this.form.name = newData.name;
      this.form.fatherId = newData.parentData.id;
      this.form.fatherName = newData.parentData.name;
      if(!newData.parentData.length){
        if(newData.parentData.parentData.child){
          this.fatherOption = newData.parentData.parentData.child
        }else{
          this.fatherOption = newData.parentData.parentData
        }
      }else {
        this.fatherOption = []
      }
    }
  },
  methods: {
    ...mapActions([
      'getUserGroupList'
    ]),
    selectParentUserGroup(id){
      this.form.fatherId = id;
    },
    submitForm() {
      this.$refs['form'].validate((valid) => {
        if (!valid) {
          this.$message.error('请检查字段')
          return
        }
        UserGroupService.updateUserGroup(this.form).then((res) => {
            if(res.code === 200){
              this.$message.success('已修改');
              // 重载 tree
              this.getUserGroupList()
            }else{
              this.$message.error(res.message);
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
  overflow-y: auto
}
</style>
