#@Author: bjy @Date: 2019/6/11 10:12 #
<template>
    <div name="buttons"  class="buttons">
      <el-row>
        <el-col :span="11">
          <el-row>
            <el-col :span="24">
              <el-button type="primary " icon="el-icon-document" @click="look" size="small">查看</el-button>
              <el-button type="primary" icon="el-icon-plus" @click="addUser" size="small">添加人事信息</el-button>
              <!--<el-button type="success" icon="el-icon-edit" @click="updateUser" size="small">修改人事信息</el-button>-->
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
      <education-list-dialog v-model="isEducationListDialog" :type="educationListDialogType" :userInfoData="userInfoData" ></education-list-dialog>
      <work-list-dialog v-model="isWorkListDialog" :userInfoData="userInfoDataIsWork"></work-list-dialog>
      <contract-record-list-dialog v-model="isContractRecordListDialog" :userInfoData = 'userInfoDataIsC'></contract-record-list-dialog>
      <medical-care-dialog v-model="isMedicalCareDialog" :userInfoData="userInfoDataIsM" :medicalCareData="medicalCareData" :type="isMedicalCareDialogType"></medical-care-dialog>
      <job-title-dialog v-model="isJobTitleDialog" :type="isJobTitleDialogType" :jobTitleData="jobTitleData" :userInfoData="userInfoDataIsJ"></job-title-dialog>
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
  import MedicalCareDialog from "../MedicalCareDialog/MedicalCareDialog";
  import JobTitleDialog from "../JobTitleDialog/JobTitleDialog";
  import ContractRecordListDialog from "../ContractRecordListDialog/ContractRecordListDialog";

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
              isContractRecordListDialog: false, //合同记录
              isMedicalCareDialog:false,//医务医理
              isMedicalCareDialogType:0,
              isJobTitleDialog:false,// 职务职称
              isJobTitleDialogType:0,
              userInfoDataIsWork:{},
              userInfoDataIsC:{},
              userInfoDataIsJ:{},
              medicalCareData:{},
              userInfoData:null,
              jobTitleData:{},
              userInfoDataIsM:{},
              tableData:'',
              userData:{},
              form: {
                imageid: '',
                fileid: [],
                userInfo: {
                  userid: '',
                  number: '',
                  name: '',
                  branchName: '',
                  department: '',
                  birthday: '',
                  education: '',
                  place: '',
                  nation: '',
                  post: '',
                  title: '',
                  idEntity: '',
                  workDate: '',
                  partyDate: '',
                  correctionDate: '',
                  phone: '',
                  idcard: ''
                },
                userInfoPersonnel: {
                  workyear: '',
                  workmonth: '',
                  partypost: '',
                  servingdate: '',
                  otherpost: '',
                  jianpingpost: '',
                  jianpingdate: '',
                  politicalappearance: '',
                  partydate: '',
                  branchname: '',
                  typeworker: '',
                  gradeworker: '',
                  appointmenttime: '',
                  maritalstatus: '',
                  hukounature: '',
                  hukouwhere: '',
                  beforecompany: '',
                  reserveleavedate: '',
                  firstcontractdate: '',
                  familyaddr: '',
                  personneltype: '',
                  fanpinenddate: ''
                }
              }
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
            UserInfoService.getUserInfo({id:this.tableData.id}).then((res) => {
                if (res.code === 200){
                  this.userData = res.data[0];
                  this.isUserDialogShow = true;
                  this.dialogType = 0;// 类型: 0-查看(默认),1-新增,2-修改
                }else {
                    this.$message.error(res.message)
                }
            })
          },
          // 查看教育经历
          lookEducation(){
            if(!this.tableData){
              this.$message.error('操作错误,请先选择数据');
              return
            }
            this.userInfoData = this.tableData;
            this.isEducationListDialog = true
          },
          // 查看合同记录
          lookContractRecord(){
            if(!this.tableData){
              this.$message.error('操作错误,请先选择数据');
              return
            }
            this.userInfoDataIsC = this.tableData;
              this.isContractRecordListDialog = true
          },
          // 查看医务护理
          lookMedicalCare(){
            if(!this.tableData){
              this.$message.error('操作错误,请先选择数据');
              return
            }
            UserInfoService.getUserInfoMedicalCare({id:this.tableData.id}).then((res)  => {
              if(res.code === 200 ){
//                this.medicalCareData = res.data;
                if(res.data[0]){ // 查看
                  this.isMedicalCareDialogType = 0;
                  this.medicalCareData = res.data[0];
                }else{ // 新增
                  this.isMedicalCareDialogType = 1;
                  this.medicalCareData = {}
                }
                this.userInfoDataIsM = this.tableData;
                this.isMedicalCareDialog = true
              }else {
                this.$message.error(res.message)
              }
            });

          },
          // 查看职务职称
          lookJobTitle(){
            if(!this.tableData){
              this.$message.error('操作错误,请先选择数据');
              return
            }
            UserInfoService.getUserInfoTitlePost({id:this.tableData.id}).then((res)  => {
              if(res.code === 200 ){
                console.log('查看职务职称',res.data);
                if(res.data[0]){// 查看
                  this.isJobTitleDialogType = 0;
                  this.jobTitleData = res.data[0]
                }else{
                  this.isJobTitleDialogType = 1;
                  this.jobTitleData = {}
                }
                this.userInfoDataIsJ = this.tableData;
                this.isJobTitleDialog = true
              }else {
                this.$message.error(res.message)
              }
            });
          },
          // 查看工作经历
          lookWork(){
            if(!this.tableData){
              this.$message.error('操作错误,请先选择数据');
              return
            }
              this.userInfoDataIsWork = this.tableData;
              this.isWorkListDialog = true
          },
          // 添加人事信息
          addUser(){
            this.dialogType = 1;
            this.isUserDialogShow = true;
            this.userData = this.form
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
              this.$message.error('操作错误,请先选择数据');
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
          ContractRecordListDialog,
          JobTitleDialog,
          MedicalCareDialog,
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
