#@Author: bjy @Date: 2019/6/22 16:04 #
<template>
  <el-dialog :value="value" name="WorkDialog" :visible.sync="isShow" :before-close="handleClose" :title="title" width="750px"
             :modal-append-to-body='false' append-to-body center>
    <el-form ref="form" :model="form" :rules="rule" label-width="100px" label-position="right">
      <el-form-item label="任务标题" prop="name">
        <el-input v-model="form.title" size="medium" :maxlength="30" auto-complete="new-account" placeholder="请输入工作名称"></el-input>
      </el-form-item>
      <tr>
       <td> <el-form-item label="任务类型" prop="workType">
          <el-select v-model="form.workType" placeholder="请选择工作类型">
            <el-option v-for="item in workTypeArr" :key="item.value" :label="item.label" :value="item.value"></el-option>
          </el-select>
        </el-form-item></td>
        <td>
        <el-form-item label="所在机构" prop="subjectId">
          <el-select v-model="form.subjectId" size="medium" filterable placeholder="请选择所在机构" @change="selectSubject">
            <el-option v-for="item in subjectList" :key="item.id" :label="item.name" :value="item.id"></el-option>
          </el-select>
        </el-form-item></td>
      </tr>
    <tr>
      <td>
      <el-form-item label="组织部门" prop="departId">
        <el-select v-model="form.departId" size="medium" filterable placeholder="请选择组织部门" @change="selectDepart">
          <el-option v-for="item in departList" :key="item.id" :label="item.name" :value="item.id"></el-option>
        </el-select>
      </el-form-item></td>
      <td>
      <el-form-item label="行政小组" prop="groupId">
        <el-select v-model="form.groupId" size="medium" filterable placeholder="请选择行政小组" @change="selectGroup">
          <el-option v-for="item in groupList" :key="item.id" :label="item.name" :value="item.id"></el-option>
        </el-select>
      </el-form-item>
      </td>
    </tr>
      <tr>
        <td><el-form-item label="开始日期" prop="beagntime ">
          <el-date-picker
            v-model="form.issuertime" type="datetime" placeholder="选择日期" >
          </el-date-picker>
        </el-form-item></td>
        <td><el-form-item label="结束日期" prop="dateOfBirth1 ">
          <el-date-picker
            v-model="form.dateOfBirth1" type="datetime" placeholder="选择日期" >
          </el-date-picker>
        </el-form-item></td>
      </tr>

      <el-form-item label="描述" prop="remark">
        <el-input type="textarea" v-model="form.tasktext" :rows="5" :maxlength="255" placeholder="请输入描述" show-word-limit></el-input>
      </el-form-item>
    </el-form>
    <!-- 操作 -->
    <span slot="footer" class="dialog-footer">
      <el-button v-if="type == 0" size="medium" width="long" @click="cancelClick">关 闭</el-button>
      <template v-else>
        <el-button size="medium" width="long" @click="cancelClick">取 消</el-button>
        <el-button size="medium" width="long" type="primary" @click="sureClick">确 定</el-button>
      </template>
    </span>
  </el-dialog>
</template>

<script>
  import { mapState, mapActions } from 'vuex'
  import Validator from '@/lib/validator'
  import WorkService from  '../../../services/WorkService'
  import ElFormItem from "../../../../node_modules/element-ui/packages/form/src/form-item";
  import TaskService from '../../../services/TaskService'
  import Utils from '../Utils/utils'

    export default{
      components: {ElFormItem},
      name: 'workDialog',
        props:{
          workData: { // 用户数据
            type: Object,
            default() {
              return {}
            }
          },
          type: { // 类型: 0-查看(默认),1-新增,2-修改
            type: Number,
            default: 0
          },
          value: {
            type: Boolean,
            default: false
          }
        },
        //  数据定义
        data () {
            return {
              title:'',
              isShow:false,
              form:{
                id:'',
                title:'',
                name:'',
                workType:'',
                tasktext:'',
                subjectId:'',
                departId:'',
                groupId:'',
                issuertime:'',
                dateOfBirth1:'',
              },
              rule: {
//                name: [{
//                  validator: Validator.checkName,
//                  trigger: 'blur'
//                }],
//                subjectId:[{
//                  validator: Validator.checkSubjectId,
//                  trigger: 'blur'
//                }],
//                year:[{
//                  validator: Validator.checkYear,
//                  trigger: 'blur'
//                }],
//                workCycle:[{
//                  validator: Validator.checkWorkCycle,
//                  trigger: 'blur'
//                }]
              },
              // 0 医共体建设 1 等级医院评审 2 最多跑一次 3 优质服务专项行动 4 核心业务指标
              workTypeArr:[
                {value:0,label:'医共体建设'},
                {value:1,label:'等级医院评审'},
                {value:2,label:'最多跑一次'},
                {value:3,label:'优质服务专项行动'},
                {value:4,label:'核心业务指标'},
              ]
            }
        },
        computed: {
          ...mapState([
              'subjectList',
            'departList',
            'groupList'
          ])
        },
        watch:{
          workData(data){
              if(this.type != 1){
                this.form.id = data.id;
                this.form.title = data.title;
                this.form.name = data.name;
                this.form.workType = data.workType;
                this.form.subjectId = data.subjectId;
                this.form.departId = data.departId;
                this.form.groupId = data.groupId;
                this.form.tasktext = data.tasktext;
                this.form.issuertime = data.issuertime;
              }else {
                this.form.workType = 0;
              }
          },
          //  工作周期
          'form.workCycle'(data){
            this.form.startTime = String(data[0]);
            this.form.endTime = String(data[1]);
          },
          type(val) {
            let title = '';
            switch (val) {
              case 1:
                title = '新增任务';
                break;
              case 2:
                title = '修改任务';
                break;
              case 0:
                title = '查看任务';
                break;
              default:
                  title = '查看任务';
                break;
            }
            this.title = title
          },
          value(val) {
            this.isShow = val
          },
          isShow(val) {
            this.$emit('input', val)
          },
        },
        mounted() {
            this.getSubjectList();
        },
        // 页面方法
        methods: {
          ...mapActions([
            'getGroupListBySubjectId',
            'getDepartListBySubjectId',
            'getSubjectList',
            'getWorkList',
            'getTaskList'
          ]),
          // 选择机构
          selectSubject(subjectId){
              this.getGroupListBySubjectId({subjectId:subjectId});
              this.getDepartListBySubjectId({subjectId:subjectId});
              this.form.subjectId = subjectId
          },
          // 选择部门
          selectDepart(departId){
            this.form.departId = departId
          },
          // 选择行政
          selectGroup(groupId){
            this.form.groupId = groupId
          },
          // 确定按钮
          sureClick() {
            this.$refs['form'].validate((valid) => {
              switch (this.type) {
                case 1: // 新增
                  if (!this.form.workType) {
                    this.form.workType = 0
                  }
                  this.form.issuertime=Utils.formatTime(this.form.issuertime);
                  let userInfo = JSON.parse(sessionStorage.getItem('userInfo'));
                  this.form.id = userInfo.id;
                  TaskService.addTask(this.form).then((res) => {
                    if (res.code === 200) {
                      this.$message.success(res.message);
                      this.$refs['form'].resetFields();
                      // 重载列表
                      this.getTaskList();
                      // 窗口关闭
                      this.handleClose();
                    } else {
                      this.$message.error(res.message)
                    }
                  });
                  break;
                case 2:// 修改
                  break;
                default:
                  break;
              }
            });
          },
          // 关闭按钮
          handleClose() {
            this.isShow = false
          },
          // 取消按钮
          cancelClick() {
            this.isShow = false
          },
        },
    }
</script>

<!-- 本地样式 -->
<style scoped>

</style>
