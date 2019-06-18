#@Author: bjy @Date: 2019/6/11 10:12 #
//
<template>
    <div name="buttons" class="buttons">
      <el-row>
        <el-col :span="12">
          <el-button type="info" icon="el-icon-document" @click="look" >查看</el-button>
          <el-button type="success" icon="el-icon-delete" @click="entering" >录入</el-button>
          <el-button type="success" icon="el-icon-delete" @click="statistics" >统计</el-button>
        </el-col>
      </el-row>
      <!--<import-dialog v-model="isImportDialogShow"></import-dialog>-->
      <userDialog v-model="isUserDialogShow" :type="dialogType" :userData="userData"></userDialog>
    </div>
</template>

<script>
  import userDialog from '../UserDialog/UserDialog.vue'
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
            // 查看
          look(){
            if(!this.tableData){
              this.$message.error('操作错误,请先选择数据');
              return
            }
            console.log('查看');
            this.dialogType = 0;
            this.isUserDialogShow = true;
            this.userData = this.tableData
          },

          //录入
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
          userDialog,
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
