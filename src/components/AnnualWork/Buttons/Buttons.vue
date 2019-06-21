 #@Author: bjy @Date: 2019/6/11 10:12 #
<template>
    <div name="buttons" class="buttons">
      <el-row>
        <el-col :span="12">
          <el-button type="info" icon="el-icon-document" @click="look1" >查看</el-button>

        </el-col>
      </el-row>
      <!--<import-dialog v-model="isImportDialogShow"></import-dialog>-->
      <userDialog v-model="isUserDialogShow" :type="dialogType" :userData="userData" @buttonisshow="idontknowname"></userDialog>

    </div>
</template>

<script>
  import userDialog from '../UserDialog/UserDialog.vue'
  import importDialog from '../ImportDialog/ImportDialog.vue'
  import userService from '../../../services/UserService.js'
  import ElCol from "element-ui/packages/col/src/col";
  import ElRow from "element-ui/packages/row/src/row";
  import Entering from '../Entering/Entering.vue'
  import Statistics from '../Statistics/Statistics.vue'

    export default{
        name: 'buttons',
        props:['changeData'],
        data () {
            return {
              isUserDialogShow:false,
              isImportDialogShow:false,
              dialogType:0,// 类型: 0-查看(默认),1-新增,2-修改
              tableData:'',
              userData:{},
              isEnteringShow:false,
              EnteringData:{},
              EnteringType:0,
              isStatisticsshow:false,
              StatisticsType:0,
              StatisticsData:{},


            }
        },
        // 页面初始化(生命周期)
        created(){
        },
        // 页面方法
        methods: {
            // 查看
          look1(){
            if(!this.tableData){
              this.$message.error('操作错误,请先选择数据');
              return
            }
            console.log('查看');
            this.dialogType = 0;
            this.isUserDialogShow = true;
            this.userData = this.tableData
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
          userDialog,
        importDialog,
        Entering,
        Statistics,
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
