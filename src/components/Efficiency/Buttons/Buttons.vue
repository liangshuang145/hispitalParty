#@Author: bjy @Date: 2019/6/11 10:12 #
<template>
    <div name="buttons" class="buttons">
      <el-row>
        <el-col :span="5">
          <el-button type="success" icon="el-icon-delete" @click="ImportExcel" >导入表格</el-button>
          <el-button type="primary" icon="el-icon-s-data" @click="manylook1" >扣分明细</el-button>
        </el-col>
        <el-col :span="18" style="text-align: right">
          <el-date-picker
            v-model="value3"
            type="year"
            placeholder="选择年">
          </el-date-picker>
          <el-date-picker
            v-model="value2"
            type="month"
            placeholder="选择月">
          </el-date-picker>
          <el-button type="primary" icon="el-icon-s-data" @click="rankingOfMonth">百分比排名</el-button>

        </el-col>
      </el-row>
      <import-dialog v-model="isImportDialogShow"></import-dialog>
      <el-dialog title="扣分明细" :visible.sync="dialogTableVisible">
        <el-table :data="gridData">
          <el-table-column property="date" label="扣分项" width="150"></el-table-column>
          <el-table-column property="name" label="扣分详情" width="200"></el-table-column>
          <el-table-column property="address" label="扣除分数"></el-table-column>
        </el-table>
      </el-dialog>
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
              value2:'',
              value3: '',
              isUserDialogShow:false,
              isImportDialogShow:false,
              dialogType:0,// 类型: 0-查看(默认),1-新增,2-修改
              tableData:'',
              userData:{},
              gridData: [{
                date: '扣分项1',
                name: '扣分详情1',
                address: '扣除分数1'
              }],
              dialogTableVisible: false,

            }
        },
        // 页面初始化(生命周期)
        created(){
        },
        // 页面方法
        methods: {
            //查看扣分明细
          manylook1(){
            if(!this.tableData){
              this.$message.error('操作错误,请先选择数据');
              return
            }
            console.log('查看');
            this.dialogType = 0;
            this.dialogTableVisible = true;
//            this.gridData = this.tableData
          },
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
