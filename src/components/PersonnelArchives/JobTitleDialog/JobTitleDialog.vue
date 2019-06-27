#@Author: bjy @Date: 2019/6/25 19:37 #
<template>
  <el-dialog :value="value" name="JobTitleDialog" :visible="isShow" :before-close="handleClose" :title="title" width="750px" top="5vh" center >
    <el-form ref="form" :model="form" :rules="rule" label-width="140px" label-position="right">
      <el-form-item label="行政职务" prop="contractNumber">
        <el-input v-model="form.contractNumber" size="medium" :maxlength="30" placeholder="请输入合同编号"></el-input>
      </el-form-item>
      <el-form-item label="任命时间" prop="contractNumber">
        <el-date-picker v-model="form.value1" type="date" placeholder="选择执业证书取得时间"></el-date-picker>
      </el-form-item>
      <el-form-item label="行政级别" prop="contractNumber">
        <el-input v-model="form.contractNumber" size="medium" :maxlength="30" placeholder="请输入合同编号"></el-input>
      </el-form-item>
      <el-form-item label="前行政职务" prop="contractNumber">
        <el-input v-model="form.contractNumber" size="medium" :maxlength="30" placeholder="请输入合同编号"></el-input>
      </el-form-item>
      <el-form-item label="前行政任命时间" prop="contractNumber">
        <el-date-picker v-model="form.value1" type="date" placeholder="选择执业证书取得时间"></el-date-picker>
      </el-form-item>
      <el-form-item label="现资格职称" prop="contractNumber">
        <el-input v-model="form.contractNumber" size="medium" :maxlength="30" placeholder="请输入合同编号"></el-input>
      </el-form-item>
      <el-form-item label="现资格获得时间" prop="contractNumber">
        <el-date-picker v-model="form.value1" type="date" placeholder="选择执业证书取得时间"></el-date-picker>
      </el-form-item>
      <el-form-item label="现聘任职称" prop="contractNumber">
        <el-input v-model="form.contractNumber" size="medium" :maxlength="30" placeholder="请输入合同编号"></el-input>
      </el-form-item>
      <el-form-item label="现职称聘任时间" prop="contractNumber">
        <el-date-picker v-model="form.value1" type="date" placeholder="选择执业证书取得时间"></el-date-picker>
      </el-form-item>
      <el-form-item label="前资格名称" prop="contractNumber">
        <el-input v-model="form.contractNumber" size="medium" :maxlength="30" placeholder="请输入合同编号"></el-input>
      </el-form-item>
      <el-form-item label="前资格获得时间" prop="contractNumber">
        <el-date-picker v-model="form.value1" type="date" placeholder="选择执业证书取得时间"></el-date-picker>
      </el-form-item>
      <el-form-item label="前聘任职称" prop="contractNumber">
        <el-input v-model="form.contractNumber" size="medium" :maxlength="30" placeholder="请输入合同编号"></el-input>
      </el-form-item>
      <el-form-item label="前职称聘任时间" prop="contractNumber">
        <el-date-picker v-model="form.value1" type="date" placeholder="选择执业证书取得时间"></el-date-picker>
      </el-form-item>
      <el-form-item label="聘期" prop="contractNumber">
        <el-input v-model="form.contractNumber" size="medium" :maxlength="30" placeholder="请输入合同编号"></el-input>
      </el-form-item>
      <el-form-item label="聘期截止日期" prop="contractNumber">
        <el-date-picker v-model="form.value1" type="date" placeholder="选择执业证书取得时间"></el-date-picker>
      </el-form-item>
      <el-form-item label="职称技术级别" prop="contractNumber">
        <el-input v-model="form.contractNumber" size="medium" :maxlength="30" placeholder="请输入合同编号"></el-input>
      </el-form-item>
      <el-form-item label="职称人员类别" prop="contractNumber">
        <el-input v-model="form.contractNumber" size="medium" :maxlength="30" placeholder="请输入合同编号"></el-input>
      </el-form-item>
      <el-form-item label="职称卫技类别" prop="contractNumber">
        <el-input v-model="form.contractNumber" size="medium" :maxlength="30" placeholder="请输入合同编号"></el-input>
      </el-form-item>
      <el-form-item label="现资格职称" prop="contractNumber">
        <el-input v-model="form.contractNumber" size="medium" :maxlength="30" placeholder="请输入合同编号"></el-input>
      </el-form-item>
      <el-form-item label="现资格获得时间" prop="contractNumber">
        <el-date-picker v-model="form.value1" type="date" placeholder="选择执业证书取得时间"></el-date-picker>
      </el-form-item>
      <el-form-item label="现聘任职称" prop="contractNumber">
        <el-input v-model="form.contractNumber" size="medium" :maxlength="30" placeholder="请输入合同编号"></el-input>
      </el-form-item>
      <el-form-item label="现职称聘任时间" prop="contractNumber">
        <el-date-picker v-model="form.value1" type="date" placeholder="选择执业证书取得时间"></el-date-picker>
      </el-form-item>
      <el-form-item label="任职年限" prop="contractNumber">
        <el-input v-model="form.contractNumber" size="medium" :maxlength="30" placeholder="请输入合同编号"></el-input>
      </el-form-item>
      <el-form-item label="聘期" prop="contractNumber">
        <el-input v-model="form.contractNumber" size="medium" :maxlength="30" placeholder="请输入合同编号"></el-input>
      </el-form-item>
      <el-form-item label="聘任截止日期" prop="contractNumber">
        <el-date-picker v-model="form.value1" type="date" placeholder="选择执业证书取得时间"></el-date-picker>
      </el-form-item>
      <el-form-item label="聘任情况" prop="contractNumber">
        <el-input v-model="form.contractNumber" size="medium" :maxlength="30" placeholder="请输入合同编号"></el-input>
      </el-form-item>
      <el-form-item label="缓聘原因" prop="contractNumber">
        <el-input v-model="form.contractNumber" size="medium" :maxlength="30" placeholder="请输入合同编号"></el-input>
      </el-form-item>
    </el-form>
  </el-dialog>
</template>

<script>
  import { mapState, mapActions } from 'vuex'
  import UserInfoService from '../../../services/UserInfoService'
  import Validator from '@/lib/validator'
    //  此处导入组件,格式,例如:import xxx名称 from "路径"
    export default{
        // 这里是name,记得填写
        name: 'jobTitleDialog',
        props:{
          value:{
            type:Boolean,
            default:false,
          },
          type:{
            type:Number,
            default:0
          },
          userInfoData:{
            type:Object,
            default() {
              return {}
            }
          }
        },
        //  数据定义
        data () {
            return {
              isShow:false,
              title:'',
              form:{

              },
              rule:{

              }
            }
        },
        // 页面初始化(生命周期)
        created(){
        },
        // 页面方法
        methods: {
          // 按钮确定
          sureClick(){

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
          }
        },
        // 依赖注入
        components: {}
    }
</script>

<!-- 本地样式 -->
<style scoped>

</style>
