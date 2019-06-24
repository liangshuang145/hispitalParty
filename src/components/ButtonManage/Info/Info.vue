<template>
  <div name="Edit" class="form-panel">
    <el-form ref="form" :model="form" label-width="100px">
      <el-form-item label="按钮名称" prop="name">
        <el-input v-model="form.name" size="medium" :maxlength="50" disabled/>
      </el-form-item>
      <el-form-item label="字段名称" prop="fieldName">
        <el-select v-model="form.fieldName" size="medium" filterable placeholder="请选择字段" disabled>
          <el-option v-for="item in fieldList" :key="item.id" :label="item.name" :value="item.id"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="用户组" prop="name">
        <el-select v-model="form.userGroupIds" size="medium" filterable multiple placeholder="请选择用户组" disabled>
          <el-option v-for="item in userGroupList" :key="item.id" :label="item.name" :value="item.id"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="角色权限" prop="name">
        <el-select v-model="form.roleIds" size="medium" filterable multiple placeholder="请选择角色" disabled>
          <el-option v-for="item in roleList" :key="item.id" :label="item.name" :value="item.id"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="按钮等级" prop="level">
        <el-select v-model="form.level" size="medium" placeholder="请选择按钮等级" disabled>
          <el-option v-for="(item,index) in 10" :key="item" :label="index+' 级'" :value="index"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="按钮排序" prop="sort">
        <el-input v-model="form.sort" size="medium" :maxlength="50" type="number" disabled/>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
  import { mapState, mapActions } from 'vuex'
  import ButtonService from '../../../services/ButtonService'
export default {
  name: 'Info',
  props: [
    'pNode'
  ],
  data() {
    return {
      form: {
      },
      thisNode: this.pNode
    }
  },
  computed: {
    ...mapState([
      'fieldList',
      'userGroupList',
      'roleList'
    ])
  },
  mounted() {
    this.getUserGroupList();
    this.getFieldList();
    this.getRoleList()
  },
  methods:{
    ...mapActions([
      'getButtonList',
      'getUserGroupList',
      'getFieldList',
      'getRoleList'
    ]),
    getButtonView(id){
      ButtonService.getButton({id:id}).then((res) => {
        if(res.code === 200){
          let data = res.data;
          this.form.id = data.button.id;
          this.form.name = data.button.name;
          this.form.level = data.button.level;
          this.form.sort = data.button.sort;
          this.form.roleIds = data.roleIds;
          this.form.userGroupIds = data.userGroupIds;
          this.form.fieldId = data.field.id;
          this.form.fieldName = data.field.name;
        }else{
          this.$message.error(res.message)
        }
      })
    }
  },
  watch: {
    pNode(newData, oldData) {
      this.form.thisNode = newData;
      this.form.id = newData.id;
      this.getButtonView(newData.id);
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
