#@Author: bjy @Date: 2019/6/25 19:06 #
<template>
  <el-dialog :value="value" name="ContractRecordDialog" :visible="isShow" :before-close="handleClose" :title="title" width="750px" top="15vh" center >
    <el-form ref="form" :model="form" :rules="rule" label-width="120px" label-position="right">
      <el-form-item label="合同编号" prop="contractNumber">
        <el-input v-model="form.contractNumber" size="medium" :maxlength="30" placeholder="请输入合同编号"></el-input>
      </el-form-item>
      <el-form-item label="合同类别" prop="contractType">
        <el-input v-model="form.contractType" size="medium" :maxlength="30" placeholder="请输入合同类别"></el-input>
      </el-form-item>
      <el-form-item label="鉴定次数" prop="identificationNumber">
        <el-input v-model="form.identificationNumber" size="medium" :maxlength="30" placeholder="请输入鉴定次数" type="number"></el-input>
      </el-form-item>
      <el-form-item label="签订类型" prop="concludeType">
        <el-input v-model="form.concludeType" size="medium" :maxlength="30" placeholder="请输入签订类型" ></el-input>
      </el-form-item>
      <el-form-item label="档案管理单位" prop="archivesUnit">
        <el-input v-model="form.archivesUnit" size="medium" :maxlength="30" placeholder="请输入档案管理单位" ></el-input>
      </el-form-item>
      <el-form-item label="合同期限" prop="contractPeriod">
        <el-input v-model="form.contractPeriod" size="medium" :maxlength="30" placeholder="请输入合同期限" ></el-input>
      </el-form-item>
      <el-form-item label="合同周期" prop="workCycle">
        <el-date-picker v-model="form.workCycle" type="daterange" value-format="yyyyMMddHHmmss" start-placeholder="开始日期" end-placeholder="结束日期" :default-time="['00:00:00', '23:59:59']">
        </el-date-picker>
      </el-form-item>
      <el-form-item label="备注" prop="remark">
        <el-input type="textarea" v-model="form.remark" :rows="5" :maxlength="255" placeholder="请输入备注" show-word-limit></el-input>
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
        name: 'contractRecordDialog',
        props:{
          value:{
            type:Boolean,
            default:false,
          },
          type:{
            type:Number,
            default:0
          },
          contractRecordData:{
            type:Object,
            default(){
                  return {}
            }
          }
        },
        data () {
            return {
              title:'合同记录',
              isShow:false,
              form:{

              },
              rule: {
                name: [{
                  validator: Validator.checkName,
                  trigger: 'blur'
                }]
              },
            }
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
