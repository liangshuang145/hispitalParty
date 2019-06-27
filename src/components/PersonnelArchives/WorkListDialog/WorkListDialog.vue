#@Author: bjy @Date: 2019/6/25 14:22 #
<template>
  <el-dialog :value="value" name="WorkListDialog" :visible="isShow" :before-close="handleClose" :title="title" width="1500px" top="15vh" center
             :modal-append-to-body='false' append-to-body>
    <el-row>
      <el-col>
        <el-button type="primary" icon="el-icon-plus" @click="addWorkEducation" size="small">添加工作经历</el-button>
        <el-button type="danger" icon="el-icon-delete" @click="delWorkEducation" size="small">删除工作经历</el-button>
      </el-col>
    </el-row>
    <el-table :data="userInfoWorkList" style="width: 100%" border highlight-current-row @current-change="handleTableChange">
      <el-table-column prop="startdate" label="开始日期" width="157px"></el-table-column>
      <el-table-column prop="enddate" label="结束日期" width="157px"></el-table-column>
      <el-table-column prop="workunit" label="工作单位" ></el-table-column>
      <el-table-column prop="toservepost" label="担任职务" ></el-table-column>
      <el-table-column prop="posttitle" label="岗位职称" ></el-table-column>
      <el-table-column prop="witness" label="证明人" width="157px"></el-table-column>
    </el-table>
    <work-dialog v-model="isWorkDialog" :type="isWorkDialogType" :userInfoData="userInfoDataIsWork" :workData="workData"></work-dialog>
  </el-dialog>
</template>

<script>
  import { mapState, mapActions } from 'vuex'
  import UserInfoService from '../../../services/UserInfoService'
  import WorkDialog from "../WorkDialog/WorkDialog";
    //  此处导入组件,格式,例如:import xxx名称 from "路径"
    export default{
        name: 'workListDialog',
        props:{
          value:{
            type:Boolean,
            default:false,
          },
          type:{
            type:Number,
            default:0,
          },
          userInfoData:{
          },
        },
        data () {
            return {
              isShow:false,
              title:'工作经历',
              tableData:null,
              isWorkDialog:false,
              isWorkDialogType:0,
              workData:null,
              userInfoDataIsWork:null,
              workExperienceTable:[

              ]
            }
        },
        // 页面初始化(生命周期)
        created(){
        },
        // 页面方法
        methods: {
          ...mapActions([
            'getUserInfoWorkList'
          ]),
          // 添加工作经历
          addWorkEducation(){
            this.userInfoDataIsWork = this.userInfoData;
            this.isWorkDialog = true;
            this.isWorkDialogType = 1;
            this.workData = {}
          },
          // 删除工作经历
          delWorkEducation(){
              if(!this.tableData){
                  this.$message.error('操作错误,请先选择数据');
                return;
              }
            this.$confirm('此操作将永久删除该条工作经历, 是否继续?', '提示', {
              confirmButtonText: '确定',
              cancelButtonText: '取消',
              type: 'warning'
            }).then(() => {
              UserInfoService.delUserInfoWork({id:this.tableData.id}).then((res) => {
                if(res.code === 200){
                  this.$message.success('删除'+res.message);
                  this.getUserInfoWorkList({id:this.userInfoData.id})
                }else {
                  this.$message.error(res.message)
                }
              });
            }).catch(() => {
              this.$message.info('已取消')
            })

          },
            // 列表数据选中
          handleTableChange(data){
              this.tableData = data
          },
          // 关闭按钮
          handleClose() {
            this.isShow = false
          },
        },
        // 计算属性
        computed: {
          ...mapState([
            'userInfoWorkList'
          ])
        },
        // 侦听器
        watch: {
          value(val){
            this.isShow = val
          },
          isShow(val){
            this.$emit('input',val)
          },
          // 用户数据
          userInfoData(val){
            this.getUserInfoWorkList({id:val.id})
          }
        },
        // 依赖注入
        components: {WorkDialog}
    }
</script>

<!-- 本地样式 -->
<style scoped>
.el-row{
  margin:5px 0;
}
  .i-el-date-picker{
    width:98%;
  }
</style>
