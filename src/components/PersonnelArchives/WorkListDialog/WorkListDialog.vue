#@Author: bjy @Date: 2019/6/25 14:22 #
<template>
  <el-dialog :value="value" name="WorkListDialog" :visible="isShow" :before-close="handleClose" :title="title" width="1500px" top="15vh" center >
    <el-row>
      <el-col>
        <el-button type="primary" icon="el-icon-plus" @click="addWorkEducation" size="small">添加工作经历</el-button>
        <el-button type="danger" icon="el-icon-delete" @click="delWorkEducation" size="small">删除工作经历</el-button>
      </el-col>
    </el-row>
    <el-table :data="workExperienceTable" style="width: 100%" border highlight-current-row @current-change="handleTableChange">
      <el-table-column prop="startDate" label="开始日期" width="157px">
        <template slot-scope="scope">
          <el-date-picker
            v-model="scope.row.startDate" type="date" placeholder="开始日期" format="yyyy-MM-dd" value-format="yyyy-MM-dd" class="i-el-date-picker">
          </el-date-picker>
        </template>
      </el-table-column>
      <el-table-column prop="endDate" label="结束日期" width="157px">
        <template slot-scope="scope">
          <el-date-picker
            v-model="scope.row.endDate" type="date" placeholder="毕业日期" format="yyyy-MM-dd" value-format="yyyy-MM-dd" class="i-el-date-picker">
          </el-date-picker>
        </template>
      </el-table-column>
      <el-table-column prop="workUnit" label="工作单位" >
        <template slot-scope="scope">
          <el-input v-model="scope.row.workUnit " size="medium" :maxlength="50" auto-complete="new-account" placeholder="请输入工作单位" ></el-input>
        </template>
      </el-table-column>
      <el-table-column prop="holdOffice" label="担任职务" >
        <template slot-scope="scope">
          <el-input v-model="scope.row.holdOffice " size="medium" :maxlength="50" auto-complete="new-account" placeholder="请输入担任职务" ></el-input>
        </template>
      </el-table-column>
      <el-table-column prop="jobTitle" label="岗位职称" >
        <template slot-scope="scope">
          <el-input v-model="scope.row.jobTitle" size="medium" :maxlength="50" auto-complete="new-account" placeholder="请输入岗位职称" ></el-input>
        </template>
      </el-table-column>
      <el-table-column prop="certifier" label="证明人" width="157px">
        <template slot-scope="scope">
          <el-input v-model="scope.row.certifier " size="medium" :maxlength="50" auto-complete="new-account" placeholder="请输入证明人" ></el-input>
        </template>
      </el-table-column>
    </el-table>
    <span slot="footer" class="dialog-footer">
      <el-button  size="medium" width="long" @click="cancelClick">关 闭</el-button>
      <el-button size="medium" width="long" type="primary" @click="sureClick">确 定</el-button>
    </span>
  </el-dialog>
</template>

<script>
  import UserInfoService from '../../../services/UserInfoService'
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
//          workData:{
//            type:Object,
//            default() {
//              return {}
//            }
//          }
        },
        data () {
            return {
                isShow:false,
              title:'工作经历',
              tableData:null,
              workExperienceTable:[

              ]
            }
        },
        // 页面初始化(生命周期)
        created(){
        },
        // 页面方法
        methods: {

          // 添加工作经历
          addWorkEducation(){
              this.workExperienceTable.push({
                startDate:''
              })
          },
          // 删除工作经历
          delWorkEducation(){
              if(!this.tableData){
                  this.$message.error('操作错误,请先选择数据');
                return;
              }
          },
          // 确定按钮
          sureClick(){

          },
            // 列表数据选中
          handleTableChange(data){
              this.tableData = data
          },
          // 取消按钮
          cancelClick() {
            this.isShow = false
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
        },
        // 依赖注入
        components: {}
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
