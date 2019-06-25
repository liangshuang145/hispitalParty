<template>
  <div name="Add" class="form-panel">
    <el-form ref="form" :model="form" :rules="rule" label-width="100px">
      <el-form-item label="字段名称" prop="name">
        <el-input v-model="form.name" size="medium" :maxlength="50"/>
      </el-form-item>
      <el-form-item label="所属页面" prop="pageName">
        <el-select v-model="form.pageName" size="medium" filterable  placeholder="请选择所属页面" @change="selectPage">
          <el-option v-for="item in pageList" :key="item.id" :label="item.name" :value="item.id" ></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="用户组" prop="userGroupIds">
        <el-select v-model="form.userGroupIds" size="medium" filterable multiple placeholder="请选择用户组" >
          <el-option v-for="item in userGroupList" :key="item.id" :label="item.name" :value="item.id"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="角色权限" prop="roleIds">
        <el-select v-model="form.roleIds" size="medium" filterable multiple placeholder="请选择角色" >
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
import FieldService from '../../../services/FieldService'

export default {
  name: 'Add',
  props: [
    'pNode'
  ],
  data() {
    return {
      form: {
        name: '',
        pageId:'',
        pageName: '',
        roleIds:[],
        userGroupId:[],
        level:'',
        sort:''
      },
      rule: {
        name: [{
          validator: Validator.checkName,
          trigger: 'blur'
        }]
      }
    }
  },
  computed: {
    ...mapState([
      'pageList',
      'userGroupList',
      'roleList'
    ])
  },
  mounted() {
    this.getUserGroupList();
    this.getPageList();
    this.getRoleList()
  },
  watch: {
    pNode(pNode) {
    }
  },
  methods: {
    ...mapActions([
      'getUserGroupList',
      'getPageList',
      'getRoleList',
      'getFieldList'
  ]),
    selectPage(id){
        console.log('id',id);
        this.form.pageId = id
    },
    submitForm() {
      this.$refs['form'].validate((valid) => {
        if (!valid || !this.form.pageId) {
          this.$message.error('请检查字段');
          return
        }
        FieldService.addField(this.form).then((res) => {
            if(res.code === 200){
              this.$message.success('添加'+res.message);
              // 重载 tree
              this.getFieldList()
            }else {
                this.$message.error(res.message)
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
