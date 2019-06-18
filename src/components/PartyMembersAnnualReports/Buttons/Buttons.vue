#@Author: bjy @Date: 2019/6/11 10:12 #
<template>
    <div name="buttons" class="buttons">
      <el-row>
        <el-col :span="12">
          <el-button type="success" icon="el-icon-delete" @click="ImportExcel" >导入表格</el-button>
        </el-col>
      </el-row>
      <import-dialog v-model="isImportDialogShow"></import-dialog>
    </div>
</template>

<script>
  import importDialog from '../ImportDialog/ImportDialog.vue'
  import userService from '../../../services/UserService.js'
  import ElCol from "element-ui/packages/col/src/col";
  import ElRow from "element-ui/packages/row/src/row";

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
          ElRow,
          ElCol,
        importDialog
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
