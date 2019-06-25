#@Author: bjy @Date: 2019/6/24 10:51 #
<template>
  <el-dialog :value="value" name=" WorkIndicatorListDialog" :visible.sync="isShow" :before-close="handleClose" :title="workData.name + ' 指标列表'" width="750px"
             :modal-append-to-body='false' append-to-body center top="8vh">
    <el-form ref="workData" :model="workData"  label-width="100px" label-position="right" inline>
      <el-form-item label="工作名称" prop="name">
        <el-input v-model="workData.name" size="medium" :maxlength="30" auto-complete="new-account" placeholder="请输入工作名称" disabled></el-input>
      </el-form-item>
      <el-form-item label="工作类型" prop="typeName">
        <el-input v-model="workData.typeName" size="medium" :maxlength="30" auto-complete="new-account"  disabled></el-input>
      </el-form-item>
      <el-form-item label="开始时间" prop="startTime">
        <el-input v-model="workData.startTime" size="medium" :maxlength="30" auto-complete="new-account" disabled></el-input>
      </el-form-item>
      <el-form-item label="结束时间" prop="endTime">
        <el-input v-model="workData.endTime" size="medium" :maxlength="30" auto-complete="new-account"  disabled></el-input>
      </el-form-item>
    </el-form>
    <el-row>
      <el-col>
        <el-button type="primary" icon="el-icon-plus" @click="addWorkIndicator" size="small">添加工作指标</el-button>
        <el-button type="primary" icon="el-icon-plus" @click="addWorkIndicatorParticulars" size="small">添加指标详情</el-button>
      </el-col>
    </el-row>
    <el-table ref="multipleTable" :data="IndicatorList"  border  highlight-current-row @current-change="handleTableChange" height="520">
      <el-table-column prop="name" label="指标名称" ></el-table-column>
      <el-table-column prop="situation" label="指标内容" ></el-table-column>
      <el-table-column prop="createdDate" label="创建时间" ></el-table-column>
    </el-table>
    <!-- 指标 -->
    <work-indicator-dialog :type="workIndicatorDialogType" :workData="workDataIsIndicator" v-model="workIndicatorDialogShow" :indicatorData="indicatorData"></work-indicator-dialog>
    <work-indicator-particulars-dialog :type="workIndicatorParticularsType" v-model="workIndicatorParticularsShow"></work-indicator-particulars-dialog>
  </el-dialog>
</template>

    <script>
      import ElCol from "element-ui/packages/col/src/col";
      import ElButton from "../../../../node_modules/element-ui/packages/button/src/button";
      import ElRow from "element-ui/packages/row/src/row";
      import WorkIndicatorDialog from "../WorkIndicatorDialog/WorkIndicatorDialog";
      import WorkIndicatorParticularsDialog from "../WorkIndicatorParticulars/WorkIndicatorParticularsDialog";
        //  此处导入组件,格式,例如:import xxx名称 from "路径"
        export default{
            // 这里是name,记得填写
            name: 'workIndicatorList',
            props:{
              IndicatorList:{
                  type:Array,
                default:[]
              },
              value:{
                  type:Boolean,
                default:false
              },
              workData:{
                  type:Object,
                default:{}
              }
            },
            //  数据定义
            data () {
                return {
                  isShow: false,
                  workName: '',
                  workTypeName: '',
                  tableCheckedData:null,
                  indicatorData:null,
                  // 指标
                  workIndicatorDialogType:0,//  类型: 0-查看(默认),1-新增,2-修改
                  workIndicatorDialogShow:false,
                  workDataIsIndicator:null,
                  // 指标详情
                  workIndicatorParticularsType:0,//  类型: 0-查看(默认),1-新增,2-修改
                  workIndicatorParticularsShow:false

                }
            },
            // 页面初始化(生命周期)
            created(){
            },
            // 页面方法
            methods: {
                // 添加工作指标
              addWorkIndicator(){
                  this.workIndicatorDialogShow = true;
                  this.workIndicatorDialogType = 1;
                this.workDataIsIndicator = this.workData
              },
              // 添加工作指标详情
              addWorkIndicatorParticulars(){
//                  if(!this.tableCheckedData){
//                    this.$message.error('操作错误,请先选择数据');
//                    return
//                  }
                this.workIndicatorParticularsShow = true
              },
              // 表单数据选中
              handleTableChange(data){
                  this.tableCheckedData = data
              },
              // 关闭按钮
              handleClose() {
                this.isShow = false
              },
            },
            // 计算属性
            computed: {},
            // 侦听器
            watch: {
              workData(data){
                  this.workName = data.name;
                  this.workTypeName = data.typeName;
              },
              value(data){
                  this.isShow = data
              },
              isShow(val) {
                this.$emit('input', val)
              },
            },
            // 依赖注入
            components: {
              WorkIndicatorParticularsDialog,
              WorkIndicatorDialog,
              ElRow,
              ElButton,
              ElCol
            }
        }
    </script>

    <!-- 本地样式 -->
<style scoped>
  .el-row{
    margin:5px 0;
  }
</style>
