<template>
  <div name="Add" class="form-panel">
    <el-form ref="form" :model="form" :rules="rule" label-width="100px">
      <el-form-item label="按钮名称" prop="name">
        <el-input v-model="form.name" size="medium" :maxlength="50"/>
      </el-form-item>
      <el-form-item label="字段名称" prop="fieldName">
        <el-select v-model="form.fieldName" size="medium" filterable placeholder="请选择字段" @change="selectParentField">
          <el-option v-for="item in fieldList" :key="item.id" :label="item.name" :value="item.id"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="用户组" prop="userGroupIds">
        <el-select v-model="form.userGroupIds" size="medium" filterable multiple placeholder="请选择用户组" @change="selectParentUserGroupIds">
          <el-option v-for="item in userGroupList" :key="item.id" :label="item.name" :value="item.id"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="角色权限" prop="roleIds">
        <el-select v-model="form.roleIds" size="medium" filterable multiple placeholder="请选择角色" @change="selectParentUseRoleIds">
          <el-option v-for="item in roleList" :key="item.id" :label="item.name" :value="item.id"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="按钮等级" prop="level">
        <el-select v-model="form.level" size="medium" placeholder="请选择按钮等级">
          <el-option v-for="(item,index) in 10" :key="item" :label="index+' 级'" :value="index"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="按钮排序" prop="sort">
        <el-input v-model="form.sort" size="medium" :maxlength="50" type="number"/>
      </el-form-item>
      <el-form-item>
        <el-button type="success" size="medium" @click="submitForm">新增</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import Validator from '@/lib/validator'
import ButtonService from '../../../services/ButtonService'

export default {
  name: 'Add',
  props: [
    'pNode'
  ],
  data() {
    return {
      form: {
        name: '',
        type: 0,
        fieldName:'',
        userGroupIds:[],
        description: '',
        roleIds:[]
      },
      rule: {
        name: [{
          validator: Validator.checkName,
          trigger: 'blur'
        }]
      },
      thisNode:null
    }
  },
  computed: {
    ...mapState([
      'fieldList',
      'userGroupList',
      'roleList'
    ])
  },
  watch: {
    'form.roleIds'(val){
      console.log('roleIds',val)
    },
    pNode(pNode) {
      this.thisNode = pNode;
      this.getUserGroupList();
      this.getFieldList();
      this.getRoleList()
    }
  },
  methods: {
    ...mapActions([
      'getUserGroupList',
      'getFieldList',
      'getRoleList',
      'getButtonList'
    ]),
    // 选择用户角色
    selectParentUseRoleIds(ids){
    },
    // 选择用户组
    selectParentUserGroupIds(ids){
    },
    selectParentField(fieldId){
        this.form.fieldId = fieldId
    },
    submitForm() {
      this.$refs['form'].validate((valid) => {
        if (!valid) {
          this.$message.error('请检查字段')
          return
        }
        console.log('添加',this.form)
        ButtonService.addButton(this.form).then((res) => {
          // 重载 tree
          this.getButtonList();
            if(res.code === 200){
              this.$message.success('添加'+res.message);
              // 重置
              this.$refs['form'].resetFields();

            }else{

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
