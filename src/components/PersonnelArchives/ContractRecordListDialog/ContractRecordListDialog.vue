#@Author: bjy @Date: 2019/6/28 11:37 #
<template>
  <el-dialog :value="value" name="ContractRecordListDialog" :visible="isShow" :before-close="handleClose" :title="title" width="1500px" top="15vh" center
             :modal-append-to-body='false' append-to-body>
    <el-row>
      <el-col>
        <el-button type="primary" icon="el-icon-plus" @click="addContractRecord" size="small">添加合同记录</el-button>
        <el-button type="danger" icon="el-icon-delete" @click="delContractRecord" size="small">删除合同记录</el-button>
      </el-col>
    </el-row>
    <el-table :data="userInfoContractList" style="width: 100%" border highlight-current-row @current-change="handleTableChange">
      <el-table-column prop="archivesmanagementunit" label="档案管理单位" width="157px"></el-table-column>
      <el-table-column prop="contracttype" label="合同类型" width="157px"></el-table-column>
      <el-table-column prop="contractnumber" label="合同编号"></el-table-column>
      <el-table-column prop="contractstarttime" label="合同开始时间"></el-table-column>
      <el-table-column prop="contractendtime" label="合同结束时间"></el-table-column>
      <el-table-column prop="signaturetype" label="签订类型" width="100px"></el-table-column>
      <el-table-column prop="contractperiod" label="合同期限" width="100px"></el-table-column>
      <el-table-column prop="frequency" label="合同签定次数" width="157px"></el-table-column>
    </el-table>
    <contract-record-dialog :userInfoData='userInfoDataIsBefore' :type="isContractRecordDialogType" v-model="isContractRecordDialog"></contract-record-dialog>
  </el-dialog>
</template>

<script>
  import { mapState, mapActions } from 'vuex'
  import UserInfoService from '../../../services/UserInfoService'
  import ContractRecordDialog from "../ContractRecordDialog/ContractRecordDialog";
    export default{
        // 这里是name,记得填写
        name: 'contractRecordListDialog',
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
            }
        },
        //  数据定义
        data () {
            return {
              isShow:false,
              title:'合同记录',
              tableData:null,
              isContractRecordDialogType:0,
              userInfoDataIsBefore:'',
              isContractRecordDialog:false
            }
        },

        // 页面方法
        methods: {
          ...mapActions([
            'getUserInfoContractList'
          ]),
          addContractRecord(){
              this.isContractRecordDialog = true;
              this.isContractRecordDialogType = 1;
            this.userInfoDataIsBefore = this.userInfoData
          },
          // 删除合同记录
          delContractRecord(){
            if(!this.tableData){
              this.$message.error('操作错误,请先选择数据');
              return
            }
            this.$confirm('此操作将永久删除该条合同记录, 是否继续?', '提示', {
              confirmButtonText: '确定',
              cancelButtonText: '取消',
              type: 'warning'
            }).then(() => {
              UserInfoService.delUserInfoIsContract({id:this.tableData.id}).then((res) => {
                if(res.code === 200){
                  this.$message.success('删除'+res.message);
                  this.getUserInfoContractList({id:this.userInfoData.id})
                }else {
                  this.$message.error(res.message)
                }
              });
            }).catch(() => {
              this.$message.info('已取消')
            })
          },
          // 表单数据选择
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
            'userInfoContractList'
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
          type(val) {
            let title = '';
            title = '合同记录';
            this.title = title
          },
          // 用户数据
          userInfoData(val){
            this.getUserInfoContractList({id:val.id})
          }
        },
        // 依赖注入
        components: {ContractRecordDialog}
    }
</script>

<!-- 本地样式 -->
<style scoped>
.el-row{
  margin:5px 0;
}
</style>
