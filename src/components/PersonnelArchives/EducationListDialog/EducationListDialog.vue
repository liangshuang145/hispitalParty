#@Author: bjy @Date: 2019/6/25 10:36 #
<template>
  <el-dialog :value="value" name="EducationListDialog" :visible="isShow" :before-close="handleClose" :title="title" width="1500px" top="15vh" center
             :modal-append-to-body='false' append-to-body>
    <el-row>
      <el-col>
        <el-button type="primary" icon="el-icon-plus" @click="addEducation" size="small">添加教育经历</el-button>
        <el-button type="danger" icon="el-icon-delete" @click="delEducation" size="small">删除教育经历</el-button>
      </el-col>
    </el-row>
    <el-table :data="userInfoEductionList" style="width: 100%" border highlight-current-row @current-change="handleTableChange">
      <el-table-column prop="startdate" label="开始日期" width="157px"></el-table-column>
      <el-table-column prop="enddate" label="毕业日期" width="157px"></el-table-column>
      <el-table-column prop="graduationschool" label="毕业学校"></el-table-column>
      <el-table-column prop="major" label="所学专业"></el-table-column>
      <el-table-column prop="educationcategory" label="教育类别"></el-table-column>
      <el-table-column prop="education" label="学历" width="100px"></el-table-column>
      <el-table-column prop="degree" label="学位" width="100px"></el-table-column>
      <el-table-column prop="degreedate" label="学位时间" width="157px"></el-table-column>
      <el-table-column prop="edusystem" label="学制(年)" width="100px"></el-table-column>
      <el-table-column prop="witness" label="证明人" width="120px"></el-table-column>
    </el-table>
    <education-dialog v-model="isEducationDialog" :type="isEducationDialogType" :educationData="educationData" :userInfoData="userInfoDataIsE"></education-dialog>
  </el-dialog>
</template>

<script>
  import { mapState, mapActions } from 'vuex'
  import UserInfoService from '../../../services/UserInfoService'
  import ElCol from "element-ui/packages/col/src/col";
  import EducationDialog from "../EducationDialog/EducationDialog";
    //  此处导入组件,格式,例如:import xxx名称 from "路径"
    export default{
        // 这里是name,记得填写
        name: 'educationListDialog',
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
//            type:Object,
//            default(){
//                return {}
//            }
          }
//          educationData:{
//            type:Object,
//            default() {
//              return {}
//            }
//          }
        },
        //  数据定义
        data () {
            return {
                isShow:false,
              title:'教育经历',
              tableData:null,
              isEducationDialog:false,
              isEducationDialogType:0,// 类型 0 查看 1 新增 2 修改
              educationData:null,
              userInfoDataIsE:null,
              educationBackgroundOptions:[
                {label:'小学',value:1},
                {label:'初中',value:2},
                {label:'高中',value:3},
                {label:'大专',value:4},
                {label:'本科',value:5},
                {label:'硕士',value:6},
                {label:'博士',value:7},
                {label:'其他',value:8},
              ],
            }
        },
        // 页面初始化(生命周期)
        created(){
        },
        // 页面方法
        methods: {
          ...mapActions([
            'getUserInfoEductionList'
          ]),
          // 添加教育经历 添加一行
          addEducation(){
            this.isEducationDialog = true;
            this.isEducationDialogType = 1;
            this.userInfoDataIsE = this.userInfoData;
            this.educationData = {}
          },
          // 删除某一行 教育经历,
          delEducation( ){
              if(!this.tableData){
                this.$message.error('操作错误,请先选择数据');
                return
              }
            this.$confirm('此操作将永久删除该条教育经历, 是否继续?', '提示', {
              confirmButtonText: '确定',
              cancelButtonText: '取消',
              type: 'warning'
            }).then(() => {
              UserInfoService.delUserInfoEducation({id:this.tableData.id}).then((res) => {
                  if(res.code === 200){
                    this.$message.success('删除'+res.message);
                    this.getUserInfoEductionList({id:this.userInfoData.id})
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
            'userInfoEductionList'
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
            title = '教育经历';
            this.title = title
          },
          // 用户数据
          userInfoData(val){
              this.getUserInfoEductionList({id:val.id})
          }
        },
        // 依赖注入
        components: {
          EducationDialog,
          ElCol}
    }
</script>

<!-- 本地样式 -->
<style scoped>
.i-el-date-picker{
  width: 98%;
}
.el-row{
  margin:5px 0;
}
</style>
