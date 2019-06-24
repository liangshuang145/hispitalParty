 #@Author: bjy @Date: 2019/6/11 10:12 #
<template>
    <div name="buttons" class="buttons">
      <el-row>
        <el-col :span="24">
          <el-button type="info" icon="el-icon-document" @click="lookWork" size="small">查看工作</el-button>
          <el-button type="primary" icon="el-icon-plus" @click="addWork" size="small">添加工作</el-button>
          <!--<el-button type="primary" icon="el-icon-plus" @click="addUser" size="small">添加工作指标</el-button>-->
          <!--<el-button type="primary" icon="el-icon-plus" @click="addUser" size="small">添加指标详情</el-button>-->
          <!--<el-button type="danger" icon="el-icon-delete" @click="delUser" size="small">删除工作</el-button>-->
          <!--<el-button type="danger" icon="el-icon-delete" @click="delUser" size="small">删除工作指标</el-button>-->
        </el-col>
      </el-row>
      <work-dialog v-model="isWorkDialogShow" :type="workDialogType" ></work-dialog>
      <!--<userDialog v-model="isUserDialogShow" :type="dialogType" :userData="userData" @buttonisshow="idontknowname"></userDialog>-->

    </div>
</template>

<script>
  import ElCol from "element-ui/packages/col/src/col";
  import ElRow from "element-ui/packages/row/src/row";
  import WorkDialog from "../WorkDialog/WorkDialog";

    export default{
        name: 'buttons',
        props:['changeData'],
        data () {
            return {
              isWorkDialogShow:false,
              workDialogType:0,// 类型: 0-查看(默认),1-新增,2-修改

            }
        },
        // 页面初始化(生命周期)
        created(){
        },
        // 页面方法
        methods: {
            // 查看工作
          lookWork(){
            if(!this.tableData){
              this.$message.error('操作错误,请先选择数据');
              return
            }
            console.log('查看');
            this.dialogType = 0;
            this.isWorkDialogShow = true;
            this.userData = this.tableData
          },
          // 添加工作
          addWork(){
            this.isWorkDialogShow = true
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
        WorkDialog,
        ElRow,
        ElCol,
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
