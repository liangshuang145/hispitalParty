<template>
  <div name="Add" class="form-panel">
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
        <el-select v-model="form.menuName" size="medium" placeholder="请选择所属页面" @change="selectParentMenu">
          <el-option v-for="item in menuList" :key="item.id" :label="item.name" :value="item.id"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="上级页面" prop="fatherName">
        <el-select v-model="form.fatherName" size="medium" placeholder="请选择上级页面" @change="selectParentPage">
          <el-option v-for="item in fatherOption" :key="item.id" :label="item.name" :value="item.id"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="页面排序" prop="sort">
        <el-input v-model="form.sort" size="medium" :maxlength="50" type="number" class="i-input"></el-input>
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
import PageService from '@/services/PageService'

export default {
  name: 'Add',
  props: [
    'pNode'
  ],
  data() {
    return {
      pageList:[],
      form: {
        createdDate:'',
        lastModifiedDate:'',
        level:'',
        name:'',
        id:'',
        sort:'',
        title:'',
        menuName:'',
        fatherName:''
      },
      rule: {
        name: [{
          validator: Validator.checkName,
          trigger: 'blur'
        }]
      },
      startFatherName:'',
      startFatherId:'',
      startMenuId:'',
      startOption:[],
      fatherOption:[]
    }
  },
  mounted() {
    this.getMenuList()
  },
  watch: {
    pNode(newData, oldData) {
      this.thisNode = newData;
      this.form.fatherName = newData.name;
      this.form.fatherId = newData.id;
      this.form.menuId = newData.menu.id;
      this.form.menuName = newData.menu.name;

      this.startFatherName = newData.name;
      this.startFatherId = newData.id;
      this.startMenuId = newData.menu.id;
      if(!newData.parentData.length){
        let fatherArr = [],arr = [];
        if(newData.parentData.parentData.child){
          fatherArr = newData.parentData.parentData.child
        }else{
          fatherArr = newData.parentData.parentData
        }
        this.startOption = fatherArr;
        this.checkMenuPage(this.form.menuId,fatherArr);
      }else {
        this.fatherOption = []
      }
    }
  },
  computed: {
    ...mapState([
      'menuList'
    ])
  },
  methods: {
    ...mapActions([
      'getMenuList',
      'getPageList'
    ]),
    // 验证上级页面所属关系
    checkMenuPage(menuId,fatherArr){
        let arr = [],list = fatherArr;
        if(this.startMenuId === menuId){
          arr.push({id:this.startFatherId,name:this.startFatherName});
        }
        for(let i = 0; i <  list.length; i++){
            if (menuId === list[i].menu.id){
              arr.push(list[i])
            }
        }
      this.fatherOption = arr;
    },
    // 选择菜单
    selectParentMenu(menuId){
      this.form.menuId = menuId;
      this.form.fatherName = '';
      this.checkMenuPage(menuId,this.startOption)
    },
    selectParentPage(pageId){
      this.form.fatherId = pageId
    },
    submitForm() {
      this.$refs['form'].validate((valid) => {
        if (!valid || !this.form.level || !this.form.menuId || !this.form.fatherId) {
          this.$message.error('请检查字段');
          return
        }

        PageService.addPage(this.form).then((res) => {
          if (res.code === 200){
            this.$message.success("添加成功");
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
  .i-input{
    width:350px;
  }
</style>
