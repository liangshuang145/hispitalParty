#@Author: bjy @Date: 2019/6/11 10:12 #
<template>
    <div name="buttons" class="buttons">
      <el-row>
        <el-button type="info" icon="el-icon-document" @click="look" >查看</el-button>
        <el-button type="primary" icon="el-icon-plus" @click="addUser">添加</el-button>
        <el-button type="success" icon="el-icon-edit" @click="updateUser">修改</el-button>
        <el-button type="danger" icon="el-icon-delete" @click="delUser">删除</el-button>
      </el-row>
      <userDialog v-model="isUserDialogShow" :type="dialogType" :userData="userData"></userDialog>
    </div>
</template>

<script>
  import userDialog from '../UserDialog/UserDialog.vue'
  import userService from '../../../services/UserService.js'

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
          // 添加
          addUser(){
            console.log('添加');
            this.dialogType = 1;
            this.isUserDialogShow = true;
            this.userData = {}
          },
          // 修改
          updateUser(){
            if(!this.tableData){
              this.$message.error('操作错误,请先选择数据');
              return
            }
            this.dialogType = 2;
            this.isUserDialogShow = true;
            console.log('修改');
            this.userData = this.tableData
          },
          // 删除
          delUser(){
            if(!this.tableData){
              this.$message.error('操作错误,请先选择数据')
              return
            }
            this.$confirm('此操作将永久删除该用户, 是否继续?', '提示', {
              confirmButtonText: '确定',
              cancelButtonText: '取消',
              type: 'warning'
            }).then(() => {
              this.$message.success('已删除')
            }).catch(() => {
              this.$message.info('已取消')
            })
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
          userDialog
        }
    }
</script>

<!-- 本地样式 -->
<style scoped>
  .el-row + .el-row {
    margin: 5px 0;
  }
</style>
