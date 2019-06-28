#@Author: bjy @Date: 2019/6/25 19:06 #
<template>
  <el-dialog :value="value" append-to-body name="ContractRecordDialog" :visible="isShow" :before-close="handleClose" :title="title" width="750px" top="15vh" center >
    <el-form ref="form" :model="form" :rules="rule" label-width="120px" label-position="right">
      <el-form-item label="合同编号" prop="contractnumber">
        <el-input v-model="form.contractnumber" size="medium" :maxlength="30" placeholder="请输入合同编号"></el-input>
      </el-form-item>
      <el-form-item label="合同类别" prop="contracttype">
        <el-input v-model="form.contracttype" size="medium" :maxlength="30" placeholder="请输入合同类别"></el-input>
      </el-form-item>
      <el-form-item label="鉴定次数" prop="frequency">
        <el-input v-model="form.frequency" size="medium" :maxlength="30" placeholder="请输入鉴定次数"></el-input>
      </el-form-item>
      <el-form-item label="签订类型" prop="signaturetype">
        <el-input v-model="form.signaturetype" size="medium" :maxlength="30" placeholder="请输入签订类型" ></el-input>
      </el-form-item>
      <el-form-item label="档案管理单位" prop="archivesmanagementunit">
        <el-input v-model="form.archivesmanagementunit" size="medium" :maxlength="30" placeholder="请输入档案管理单位" ></el-input>
      </el-form-item>
      <el-form-item label="合同期限" prop="contractperiod">
        <el-input v-model="form.contractperiod" size="medium" :maxlength="30" placeholder="请输入合同期限" ></el-input>
      </el-form-item>
      <el-form-item label="合同开始日期" prop="contractstarttime">
        <el-date-picker v-model="form.contractstarttime" type="date" placeholder="选择开始日期" format="yyyy-MM-dd" value-format="yyyy-MM-dd" class="i-el-date-picker"></el-date-picker>
      </el-form-item>
      <el-form-item label="合同结束日期" prop="contractendtime">
        <el-date-picker v-model="form.contractendtime" type="date" placeholder="选择结束日期" format="yyyy-MM-dd" value-format="yyyy-MM-dd" class="i-el-date-picker">
        </el-date-picker>
      </el-form-item>
      <!--<el-form-item label="备注" prop="remark">-->
        <!--<el-input type="textarea" v-model="form.remark" :rows="5" :maxlength="255" placeholder="请输入备注" show-word-limit></el-input>-->
      <!--</el-form-item>-->
    </el-form>
    <span slot="footer" class="dialog-footer">
      <el-button v-if="type == 0" size="medium" width="long" @click="cancelClick">关 闭</el-button>
      <template v-else>
        <el-button size="medium" width="long" type="primary" @click="sureClick">确 定</el-button>
        <el-button size="medium" width="long" @click="cancelClick">取 消</el-button>
      </template>
    </span>
  </el-dialog>
</template>

<script>
  import { mapState, mapActions } from 'vuex'
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
          },
          userInfoData:{
          }
        },
        data () {
            return {
              title:'合同记录',
              isShow:false,
              form:{
                contracttype:'',
                contractnumber:'',
                contractstarttime:'',
                contractendtime:'',
                signaturetype:'',
                contractperiod:'',
                frequency:'',
                userinfoid:''
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
          ...mapActions([
            'getUserInfoContractList'
          ]),
            // 按钮确定
          sureClick(){
            this.$refs['form'].validate((valid) => {
              if(valid) {
                switch (this.type) {
                  case 1: // 新增
                    delete this.form.id;
                    UserInfoService.addUserInfoIsContract(this.form).then((res) => {
                      if(res.code === 200){
                        this.$message.success('添加'+res.message);
                        this.$refs['form'].resetFields();
                        this.getUserInfoContractList({id:this.userInfoData.id});
                        this.isShow = false
                      }else{
                        this.$message.error(res.message)
                      }
                    });
                    break;
                  case 2: // 修改
                    break;
                  default:
                    break
                }
              }
            })
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
          type(val){
            let title = '';
            if(!val){
              val = 0
            }
            switch (val) {
              case 1:
                title = '新增合同记录';
                break;
              case 2:
                title = '修改合同记录';
                break;
              default:
                title = '查看合同记录';
                break
            }
            this.title = title
          },
          userInfoData(val){
              this.form.userinfoid = val.id
          }
        },
        // 依赖注入
        components: {}
    }
</script>

<!-- 本地样式 -->
<style scoped>

</style>
