#@Author: bjy @Date: 2019/6/22 16:04 #
<template>
  <el-dialog :value="value" name="WorkDialog" :visible.sync="isShow" :before-close="handleClose" :title="title" width="750px"
             :modal-append-to-body='false' append-to-body center>
    <el-form ref="form" :model="form" :rules="rule" label-width="100px" label-position="right">
      <el-form-item label="工作名称" prop="name">
        <el-input v-model="form.name" size="medium" :maxlength="30" auto-complete="new-account" placeholder="请输入工作名称"></el-input>
      </el-form-item>
      <el-form-item label="工作类型" prop="workType">
        <el-select v-model="form.workType" placeholder="请选择工作类型">
          <el-option v-for="item in workTypeArr" :key="item.value" :label="item.label" :value="item.value"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="所在机构" prop="subjectName">
        <el-select v-model="form.subjectName" size="medium" placeholder="请选择所在机构" @change="selectSubject">
          <el-option v-for="item in subjectList" :key="item.id" :label="item.name" :value="item.id"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="组织部门" prop="departName">
        <el-select v-model="form.departName" size="medium" placeholder="请选择组织部门" @change="selectDepart">
          <el-option v-for="item in departList" :key="item.id" :label="item.name" :value="item.id"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="行政小组" prop="groupList">
        <el-select v-model="form.groupName" size="medium" placeholder="请选择行政小组" @change="selectGroup">
          <el-option v-for="item in groupList" :key="item.id" :label="item.name" :value="item.id"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="工作年度" prop="year">
        <el-date-picker v-model="form.year" ype="year" placeholder="选择工作年度"></el-date-picker>
      </el-form-item>
      <el-form-item label="工作周期" prop="workCycle">
        <el-date-picker v-model="workCycle" type="daterange" value-format="yyyyMMddHHmmss" start-placeholder="开始日期" end-placeholder="结束日期" :default-time="['00:00:00', '23:59:59']">
        </el-date-picker>
      </el-form-item>
      <el-form-item label="描述" prop="remark">
        <el-input type="textarea" v-model="form.remark" :rows="5" :maxlength="255" placeholder="请输入描述" show-word-limit></el-input>
      </el-form-item>
    </el-form>
  </el-dialog>
</template>

<script>
  import { mapState, mapActions } from 'vuex'
  import Validator from '@/lib/validator'
  import WorkService from  '../../../services/WorkService'
  import ElFormItem from "../../../../node_modules/element-ui/packages/form/src/form-item";

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
                name:'',
                workType:'',
                startTime:'',
                endTime:'',
                year:''
              },
              rule: {
                name: [{
                  validator: Validator.checkName,
                  trigger: 'blur'
                }]
              },
              workCycle:[],
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
          //  工作周期
          workCycle(data){
            this.form.startTime = String(data[0]);
            this.form.endTime = String(data[1]);
          },
          type(val) {
            let title = '';
            switch (val) {
              case 1:
                title = '新增用户';
                break;
              case 2:
                title = '修改用户';
                break;
              default:
                title = '查看用户';
                break
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
            this.getSubjectList()
        },
        // 页面方法
        methods: {
          ...mapActions([
            'getGroupListBySubjectId',
            'getDepartListBySubjectId',
            'getSubjectList'
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
          // 关闭按钮
          handleClose() {
            this.isShow = false
          },
        },
    }
</script>

<!-- 本地样式 -->
<style scoped>

</style>
