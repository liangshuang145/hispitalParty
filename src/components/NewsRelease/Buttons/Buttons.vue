 #@Author: bjy @Date: 2019/6/11 10:12 #
<template>
    <div name="buttons" class="buttons">
      <el-row>
        <el-col :span="24">
          <el-button type="info" icon="el-icon-document" @click="lookWork" size="small">查看消息</el-button>
          <!--<el-button type="info" icon="el-icon-document" @click="lookIndicator" size="small">查看指标</el-button>-->
          <el-button type="primary" icon="el-icon-plus" @click="addWork" size="small">添加消息</el-button>
          <!--<el-button type="primary" icon="el-icon-plus" @click="addIndicator" size="small">添加工作指标</el-button>-->
          <el-button type="danger" icon="el-icon-delete" @click="delWork" size="small">删除任务</el-button>
          <!--<el-button type="info" icon="el-icon-document" @click="lookIndicator" size="small">发送消息</el-button>-->
          <el-button type="info" icon="el-icon-document" @click="lookIndicator" size="small">发送任务</el-button>
        </el-col>
      </el-row>
      <work-dialog v-model="isWorkDialogShow" :type="workDialogType" :workData="workData"></work-dialog>
      <!--<indicator-list :IndicatorList = 'workIndicatorList' v-model="isIndicatorListDialogShow" :workData="workData"> </indicator-list>-->
    </div>
</template>

<script>
  import { mapState, mapActions } from 'vuex'
  import ElCol from "element-ui/packages/col/src/col";
  import ElRow from "element-ui/packages/row/src/row";
  import WorkDialog from "../WorkDialog/WorkDialog";
  import WorkService from '../../../services/WorkService'
  import IndicatorList from "../IndicatorList/IndicatorList";
  import TaskService from '../../../services/TaskService'

    export default{
        name: 'buttons',
        props:['changeData'],
        data () {
            return {
              tableData:null,
              isWorkDialogShow:false,// 工作添加
              isIndicatorListDialogShow:false,// 指标列表弹窗
              workDialogType:0,// 类型: 0-查看(默认),1-新增,2-修改\
              workData:{},
            }
        },
      computed: {
        ...mapState([
          'workIndicatorList',
        ])
      },
        // 页面初始化(生命周期)
        created(){
        },
        // 页面方法
        methods: {
          ...mapActions([
            'getWorkIndicatorList',
            'getTaskList',
          ]),
          lookIndicator(){
            if(!this.tableData){
              this.$message.error('操作错误,请先选择数据');
              return
            }
            this.workData = this.changeData;
            this.getWorkIndicatorList({id:this.changeData.id});
            this.isIndicatorListDialogShow = true
          },
            // 查看工作
          lookWork(){
            if(!this.tableData){
              this.$message.error('操作错误,请先选择数据');
              return
            }
            TaskService.getTaskById({id:this.tableData.id}).then((res) => {
                if(res.code === 200){
                  this.workDialogType = 0;
                  this.isWorkDialogShow = true;
                  this.workData = res.data;
                }else {
                    this.$message.error(res.message)
                }
            });

          },
          // 添加工作
          addWork(){
            this.workDialogType = 1;
            this.isWorkDialogShow = true;
            this.workData = {}
          },
          // 删除工作
          delWork(){
            if(!this.tableData){
              this.$message.error('操作错误,请先选择数据');
              return
            }
            this.$confirm('此操作将永久删除该工作, 是否继续?', '提示', {
              confirmButtonText: '确定',
              cancelButtonText: '取消',
              type: 'warning'
            }).then(() => {
              TaskService.delTaskByid({id:this.tableData.id}).then((res) => {
                if(res.code === 200){
                  this.$message.success('删除成功');
                  this.getTaskList();
                }else {
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
          workIndicatorList(data){
              console.log('workIndicatorList',data)
          },
          changeData(tableData) {
              console.log('changeData',tableData)
              this.tableData = tableData
          }
        },
        // 依赖注入
      components: {
        IndicatorList,
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
