#@Author: bjy @Date: 2019/6/11 10:12 #
<template>
    <div name="buttons" class="buttons">
      <el-row>
        <el-col :span="10">
          <!--<el-button type="primary" icon="el-icon-s-order" @click="isLook" >查看</el-button>-->
          <el-button type="primary" icon="el-icon-plus" @click="isAdd" >新增</el-button>
          <el-button type="primary" icon="el-icon-edit" @click="isModify" >修改</el-button>
          <el-button type="success" icon="el-icon-folder-add" @click="ImportExcel" >导入表格</el-button>
        </el-col>
        <el-col :span="14">
        </el-col>
      </el-row>
      <userDialog v-model="isUserDialogShow" :type="dialogType" :userData="userData"></userDialog>
      <import-dialog v-model="isImportDialogShow"></import-dialog>
    </div>
</template>

<script>
  import userDialog from '../UserDialog/UserDialog.vue'
  import importDialog from '../ImportDialog/ImportDialog.vue'
  import userService from '../../../services/UserService.js'
  import ElCol from "element-ui/packages/col/src/col";
  import ElRow from "element-ui/packages/row/src/row";
  import Search from "../Search/Search";

    export default{
        name: 'buttons',
        props:['changeData'],
        data () {
            return {
              isUserDialogShow:false,
              isImportDialogShow:false,
              dialogType:0,// 类型: 0-查看(默认),1-新增,2-修改
              tableData:'',
              userData:{}
            }
        },
        // 页面初始化(生命周期)
        created(){
        },
        // 页面方法
        methods: {
          // 导入表格
          ImportExcel(){
              console.log('导入表格');
              this.isImportDialogShow = true
          },
          // 查看
          isLook(){
            if(!this.tableData){
              this.$message.error('操作错误,请先选择数据');
              return
            }
          },
          // 新增
          isAdd(){
            console.log('添加');
            this.dialogType = 1;
            this.isUserDialogShow = true;
            this.userData = {}
          },
          // 修改
          isModify(){
            if(!this.tableData){
              this.$message.error('操作错误,请先选择数据');
              return
            }
          },
          // 本日排行
          rankingOfDay(){
            console.log('本日排行');
          },
          // 本周排行
          rankingOfWeek(){
              console.log('本周排行')
          },
          // 本月排行
          rankingOfMonth(){
            console.log('本月排行');
          },
          // 本年排行
          rankingOfYear(){
              console.log('本年排行')
          },
        },
        // 侦听器
        watch: {
          changeData(tableData) {
              this.tableData = tableData
          }
        },
        // 依赖注入
      components: {
        Search,
        ElRow,
          ElCol,
        importDialog,
        userDialog
        }
    }
</script>

<!-- 本地样式 -->
<style scoped>
  .el-row + .el-row {
    margin: 5px 0;
  }
  .button-search{
    display: flex;
    justify-content: space-between;
    align-content: center;
  }
</style>
