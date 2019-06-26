#@Author: bjy @Date: 2019/6/26 9:20 #
<template>
  <el-dialog :value="value" name="MedicalCareDialog" :visible="isShow" :before-close="handleClose" :title="title" width="750px" top="15vh" center >
    <el-form ref="form" :model="form" :rules="rule" label-width="140px" label-position="right">
      <el-form-item label="执业资格等级" prop="contractNumber">
        <el-input v-model="form.contractNumber" size="medium" :maxlength="30" placeholder="请输入执业资格等级"></el-input>
      </el-form-item>
      <el-form-item label="执业证号" prop="contractNumber">
        <el-input v-model="form.contractNumber" size="medium" :maxlength="30" placeholder="请输入执业证号"></el-input>
      </el-form-item>
      <el-form-item label="执业证书取得时间" prop="contractNumber">
        <el-date-picker v-model="form.value1" type="date" placeholder="选择执业证书取得时间"></el-date-picker>
      </el-form-item>
      <el-form-item label="技术资格证号" prop="contractNumber">
        <el-input v-model="form.contractNumber" size="medium" :maxlength="30" placeholder="请输入执业证号"></el-input>
      </el-form-item>
      <el-form-item label="技术资格证书时间" prop="contractNumber">
        <el-date-picker v-model="form.value1" type="date" placeholder="选择技术资格证书时间"></el-date-picker>
      </el-form-item>
      <el-form-item label="护士鞋号" prop="contractNumber">
        <el-input v-model="form.contractNumber" size="medium" :maxlength="30" placeholder="请输入护士鞋号"></el-input>
      </el-form-item>
      <el-form-item label="执业范围" prop="contractNumber">
        <el-input v-model="form.contractNumber" size="medium" :maxlength="30" placeholder="请输入执业范围"></el-input>
      </el-form-item>
      <el-form-item label="注册时间" prop="contractNumber">
        <el-date-picker v-model="form.value1" type="date" placeholder="选择注册时间"></el-date-picker>
      </el-form-item>
      <el-form-item label="执业年限" prop="contractNumber">
        <el-input v-model="form.contractNumber" size="medium" :maxlength="30" placeholder="请输入执业年限"></el-input>
      </el-form-item>
      <el-form-item label="执业类别" prop="contractNumber">
        <el-input v-model="form.contractNumber" size="medium" :maxlength="30" placeholder="请输入执业类别"></el-input>
      </el-form-item>
      <el-form-item label="中断执业" prop="contractNumber">
        <el-input v-model="form.contractNumber" size="medium" :maxlength="30" placeholder="请输入中断执业"></el-input>
      </el-form-item>
    </el-form>
    <span slot="footer" class="dialog-footer">
      <!--<el-button v-if="type == 0" size="medium" width="long" @click="cancelClick">关 闭</el-button>-->
      <!--<template v-else>-->
        <el-button size="medium" width="long" type="primary" @click="sureClick">确 定</el-button>
        <el-button size="medium" width="long" @click="cancelClick">取 消</el-button>
      <!--</template>-->
    </span>
  </el-dialog>
</template>

<script>
  import UserInfoService from '../../../services/UserInfoService'
  import Validator from '@/lib/validator'
    //  此处导入组件,格式,例如:import xxx名称 from "路径"
    export default{
        // 这里是name,记得填写
        name: 'medicalCareDialog',
        props:{
           value:{
             type:Boolean,
             default:false
           },
          MedicalCareData:{
            type:Object,
            default(){
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
