#@Author: bjy @Date: 2019/6/11 10:12 #
<template>
    <div name="buttons"  class="buttons">
      <el-row>
        <el-col :span="11">
          <el-row>
            <el-col :span="24">
              <el-button type="primary " icon="el-icon-document" @click="look" size="small">查看</el-button>
              <el-button type="primary" icon="el-icon-plus" @click="addUser" size="small">添加人事信息</el-button>
              <el-button type="success" icon="el-icon-edit" @click="updateUser" size="small">修改人事信息</el-button>
              <el-button type="danger" icon="el-icon-delete" @click="delUser" size="small">删除人事信息</el-button>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="24">
              <el-button type="primary " icon="el-icon-document" @click="lookEducation" size="small">查看教育经历</el-button>
              <el-button type="primary " icon="el-icon-document" @click="lookWork" size="small">查看工作经历</el-button>
              <el-button type="primary " icon="el-icon-document" @click="lookContractRecord" size="small">查看合同记录</el-button>
              <el-button type="primary " icon="el-icon-document" @click="lookJobTitle" size="small">查看职务职称</el-button>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="24">
              <el-button type="primary " icon="el-icon-document" @click="lookMedicalCare" size="small">查看医务护理</el-button>
            </el-col>
          </el-row>
        </el-col>
        <el-col :span="13">
          <search></search>
        </el-col>
      </el-row>
        <!--<div>-->
      <!--<search/>-->
      <!--</div>-->
      <userDialog v-model="isUserDialogShow" :type="dialogType" :userData="userData"></userDialog>
      <education-list-dialog v-model="isEducationListDialog" :type="educationListDialogType" :educationData="educationList"></education-list-dialog>
      <work-list-dialog v-model="isWorkListDialog"></work-list-dialog>
      <contract-record-dialog v-model="isContractRecordDialog"></contract-record-dialog>
      <medical-care-dialog v-model="isMedicalCareDialog"></medical-care-dialog>
      <job-title-dialog v-model="isJobTitleDialog"></job-title-dialog>
    </div>
</template>

<script>
  import { mapActions } from 'vuex'
  import userDialog from '../UserDialog/UserDialog.vue';
  import UserInfoService from '../../../services/UserInfoService';
  import ElCol from "element-ui/packages/col/src/col";
  import ElRow from "element-ui/packages/row/src/row";
  import Search from "../Search/Search";
  import EducationListDialog from "../EducationListDialog/EducationListDialog";
  import WorkListDialog from "../WorkListDialog/WorkListDialog";
  import ContractRecordDialog from "../ContractRecordDialog/ContractRecordDialog";
  import MedicalCareDialog from "../MedicalCareDialog/MedicalCareDialog";
  import JobTitleDialog from "../JobTitleDialog/JobTitleDialog";

    export default{
        name: 'buttons',
        props:['changeData'],
        data () {
            return {
              isUserDialogShow:false,// 人事信息
              dialogType:0,// 类型: 0-查看(默认),1-新增,2-修改
              isEducationListDialog:false,// 教育经历
              educationListDialogType:0,// 类型: 0-查看(默认),1-新增,2-修改
              isWorkListDialog:false,// 工作经历
              isContractRecordDialog: false, //合同记录
              isMedicalCareDialog:false,//医务医理
              isJobTitleDialog:false,// 职务职称
              educationList:[],

              tableData:'',
              userData:{}
            }
        },
        // 页面初始化(生命周期)
        created(){
        },
        // 页面方法
        methods: {
          ...mapActions([
            'getUserInfoList'
          ]),
            // 查看人事信息
          look(){
            if(!this.tableData){
              this.$message.error('操作错误,请先选择数据');
              return
            }
//            console.log('查看');
//            this.dialogType = 0;
//            this.isUserDialogShow = true;
//            this.userData = this.tableData;
            this.$router.push({
              path: '/Index/PersonnelArchives/Info',
              params:{
                dialogType:0,
                userData:this.tableData
              }
            })
          },
          // 查看教育经历
          lookEducation(){
//            if(!this.tableData){
//              this.$message.error('操作错误,请先选择数据');
//              return
//            }
            this.isEducationListDialog = true
          },
          // 查看合同记录
          lookContractRecord(){
              this.isContractRecordDialog = true
          },
          // 查看医务护理
          lookMedicalCare(){
              this.isMedicalCareDialog = true
          },
          // 查看职务职称
          lookJobTitle(){
            this.isJobTitleDialog = true
          },
          // 查看工作经历
          lookWork(){
              this.isWorkListDialog = true
          },
          // 添加人事信息
          addUser(){
            console.log('添加');
            this.dialogType = 1;
            this.isUserDialogShow = true;
            this.userData = {}
          },
          // 修改人事信息
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
          // 删除人事信息
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
              UserInfoService.delUserInfo({id:this.tableData.id}).then((res) => {
                if(res.code === 200){
                  this.$message.success('删除'+res.message);
                  this.getUserInfoList()
                }else{
                  this.$message.error(res.message)
                }
              });
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
          JobTitleDialog,
          MedicalCareDialog,
          ContractRecordDialog,
          WorkListDialog,
          EducationListDialog,
          Search,
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
  /*.el-col{*/
    /*margin:5px 0;*/
  /*}*/
</style>
