#@Author: bjy @Date: 2019/6/11 10:12 #
<template>
    <div name="buttons" class="buttons">
      <el-row>
        <el-col :span="12">
          <!--<el-button type="primary" icon="el-icon-s-order" @click="isLook" >查看</el-button>-->
          <!--<el-button type="primary" icon="el-icon-plus" @click="isAdd" >新增</el-button>-->
          <!--<el-button type="primary" icon="el-icon-edit" @click="isModify" >修改</el-button>-->
          <el-button type="success" icon="el-icon-folder-add" @click="ImportExcel" disabled>导入表格</el-button>
        </el-col>
        <el-col :span="12" style="text-align: right">
          <el-button type="primary" icon="el-icon-s-data" @click="rankingOfDay" >本日学习排行</el-button>
          <el-button type="primary" icon="el-icon-s-data" @click="rankingOfWeek">本周学习排行</el-button>
          <el-button type="primary" icon="el-icon-s-data" @click="rankingOfMonth">本月学习排行</el-button>
          <el-button type="primary" icon="el-icon-s-data" @click="rankingOfYear">本年学习排行</el-button>
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
  import Search from "../Search/Search";
  import Bus from '../Bus/bus'
  import IdeologService from '../../../services/IdeologService'

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
      mounted() {
        this.getALL(1);
      },

        // 页面方法
        methods: {
          getALL(istype){
            IdeologService.getIdeologypioneerList({type:istype}).then((res) => {
              if(res.code === 200){
//                this.$message.success('成功找到');
                console.log("res.data",res.data);
                this.tableData=res.data;
                //拿到数据进行处理
                for(var i=0;i<this.tableData.length;i++){
                  this.tableData[i]['ranking']=i+1;
                }
                Bus.$emit('val', this.tableData);
              }else{
                this.$message.error(res.message)
              }
            });
          },
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
            this.getALL(0);
          },
          // 本周排行
          rankingOfWeek(){
            this.getALL(1);
          },
          // 本月排行
          rankingOfMonth(){
            this.getALL(2);
          },
          // 本年排行
          rankingOfYear(){
            this.getALL(3);
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
