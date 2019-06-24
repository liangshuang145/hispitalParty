<template>
  <div name="Edit" class="form-panel">
    <el-form ref="form" :model="form" :rules="rule" label-width="100px">
      <el-form-item label="页面标题" prop="title">
        <el-input v-model="form.title" size="medium" :maxlength="50" />
      </el-form-item>
      <el-form-item label="页面名称" prop="name">
        <el-input v-model="form.name" size="medium" :maxlength="50" />
      </el-form-item>
      <el-form-item label="页面等级" prop="level">
        <el-select v-model="form.level" size="medium" placeholder="请选择页面等级">
          <el-option v-for="(item,index) in 10" :key="item" :label="index+' 级'" :value="index"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="所属菜单" prop="menuName">
        <el-input v-model="form.menuName" size="medium" :maxlength="50" disabled/>
      </el-form-item>
      <el-form-item label="上级页面" prop="fatherName">
        <el-select v-model="form.fatherName" size="medium" placeholder="请选择上级页面" @change="selectParentPage">
          <el-option v-for="item in fatherOption" :key="item.id" :label="item.name" :value="item.id"/>
        </el-select>
      </el-form-item>
        <el-form-item label="页面排序" prop="sort">
          <el-input v-model="form.sort" size="medium" :maxlength="50" />
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
import SubjectService from '@/services/SubjectService'
import PageService from '@/services/PageService'

export default {
  name: 'Edit',
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
      this.form.level = newData.level;
      this.form.name = newData.name;
      this.form.id = newData.id;
      this.form.sort = newData.sort;
      this.form.title = newData.title;
      this.form.menuId = newData.menu.id;
      this.form.menuName = newData.menu.name;
      this.form.fatherId = newData.parentData.id;
      this.form.fatherName = newData.parentData.name;

      if(!newData.parentData.length){
        let fatherArr = [],arr = [];
        if(newData.parentData.parentData.child){
          fatherArr = newData.parentData.parentData.child
        }else{
          fatherArr = newData.parentData.parentData
        }
        for (let i in fatherArr){
          if(this.form.menuId === fatherArr[i].menu.id){
            arr.push(fatherArr[i])
          }
        }
        this.fatherOption = arr
      }else {
        this.fatherOption = []
      }
    }
  },
  methods: {
    ...mapActions([
      'getPageList'
    ]),
    // 选择上级页面
    selectParentPage(pageId){
        this.form.fatherId = pageId
    },
    submitForm() {
      this.$refs['form'].validate((valid) => {
        if (!valid) {
          this.$message.error('请检查字段')
          return
        }

        PageService.updatePage(this.form).then((res) => {
          if (res.code === 200){
            this.$message.success("修改成功");
            //清空表单
            this.$refs.form.resetFields();
            // 重载 tree
            this.getPageList();
          }else {
            this.$message.error("修改失败")
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
