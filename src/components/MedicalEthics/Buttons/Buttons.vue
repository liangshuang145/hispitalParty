#@Author: bjy @Date: 2019/6/11 10:12 #
<template>
    <div name="buttons" class="buttons">
      <el-row>
        <el-col :span="12">
          <el-button type="info" icon="el-icon-document" @click="look" >查看</el-button>
          <el-button type="success" icon="el-icon-delete" @click="delUser" >导入表格</el-button>
        </el-col>
        <el-col :span="12" style="text-align: right">
          <el-button type="primary" icon="el-icon-s-data" @click="rankingOfDay" >本日排行</el-button>
          <el-button type="primary" icon="el-icon-s-data" @click="rankingOfWeek">本周排行</el-button>
          <el-button type="primary" icon="el-icon-s-data" @click="rankingOfMonth">本月排行</el-button>
          <el-button type="primary" icon="el-icon-s-data" @click="rankingOfYear">本年排行</el-button>
        </el-col>
      </el-row>
      <userDialog v-model="isUserDialogShow" :type="dialogType" :userData="userData"></userDialog>
    </div>
</template>

<script>
  import userDialog from '../UserDialog/UserDialog.vue'
  import userService from '../../../services/UserService.js'
  import ElCol from "element-ui/packages/col/src/col";
  import ElRow from "element-ui/packages/row/src/row";

    export default{
        name: 'buttons',
        props:['changeData'],
        data () {
            return {
              isUserDialogShow:false,
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
          userDialog,
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
