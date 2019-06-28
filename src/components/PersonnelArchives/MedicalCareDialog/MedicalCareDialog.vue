#@Author: bjy @Date: 2019/6/26 9:20 #
<template>
  <el-dialog :value="value" name="MedicalCareDialog" :visible="isShow" :before-close="handleClose" :title="title" width="750px" top="15vh" center >
    <el-form ref="form" :model="form" :rules="rule" label-width="140px" label-position="right">
      <el-form-item label="执业资格等级" prop="parcticelevel">
        <el-input v-model="form.parcticelevel" size="medium" :maxlength="30" placeholder="请输入执业资格等级"></el-input>
      </el-form-item>
      <el-form-item label="执业证号" prop="practicenumber">
        <el-input v-model="form.practicenumber" size="medium" :maxlength="30" placeholder="请输入执业证号"></el-input>
      </el-form-item>
      <el-form-item label="执业证书取得时间" prop="parcticebookobtaindate">
        <el-date-picker v-model="form.parcticebookobtaindate" type="date" placeholder="选择执业证书取得时间" format="yyyy-MM-dd" value-format="yyyy-MM-dd"></el-date-picker>
      </el-form-item>
      <el-form-item label="技术资格证号" prop="technologynumber">
        <el-input v-model="form.technologynumber" size="medium" :maxlength="30" placeholder="请输入技术资格证书"></el-input>
      </el-form-item>
      <el-form-item label="技术资格证书时间" prop="technologybookobtaindate">
        <el-date-picker v-model="form.technologybookobtaindate" type="date" placeholder="选择技术资格证书时间" format="yyyy-MM-dd" value-format="yyyy-MM-dd"></el-date-picker>
      </el-form-item>
      <el-form-item label="护士鞋号" prop="nurseshoesize">
        <el-input v-model="form.nurseshoesize" size="medium" :maxlength="30" placeholder="请输入护士鞋号"></el-input>
      </el-form-item>
      <el-form-item label="执业范围" prop="practicerange">
        <el-input v-model="form.practicerange" size="medium" :maxlength="30" placeholder="请输入执业范围"></el-input>
      </el-form-item>
      <el-form-item label="注册时间" prop="registrationtime">
        <el-date-picker v-model="form.registrationtime" type="date" placeholder="选择注册时间" format="yyyy-MM-dd" value-format="yyyy-MM-dd"></el-date-picker>
      </el-form-item>
      <el-form-item label="执业年限" prop="practiceyears">
        <el-input v-model="form.practiceyears" size="medium" :maxlength="30" placeholder="请输入执业年限"></el-input>
      </el-form-item>
      <el-form-item label="执业类别" prop="practicecategory">
        <el-input v-model="form.practicecategory" size="medium" :maxlength="30" placeholder="请输入执业类别"></el-input>
      </el-form-item>
      <el-form-item label="中断执业" prop="interruptpractice">
        <el-input v-model="form.interruptpractice" size="medium" :maxlength="30" placeholder="请输入中断执业"></el-input>
      </el-form-item>
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
          type:{
            type:Number,
            default:0
          },
          userInfoData:{
          },
          medicalCareData:{
          }
        },
        //  数据定义
        data () {
            return {
              isShow:false,
              title:'',
              form:{
                  id:'',
                parcticelevel:'',
                practicenumber:'',
                parcticebookobtaindate:'',
                technologynumber:'',
                technologybookobtaindate:'',
                nurseshoesize:'',
                practicerange:'',
                registrationtime:'',
                practiceyears:'',
                practicecategory:'',
                interruptpractice:'',
                userinfoid:''
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
            this.$refs['form'].validate((valid) => {
              if(valid) {
                switch (this.type) {
                  case 1: //
                    delete this.form.id;
                    UserInfoService.addUserInfoMedicalCare(this.form).then((res) => {
                      if(res.code === 200){
                        this.$message.success('添加'+res.message);
                        this.$refs['form'].resetFields();
//                        this.getUserInfoEductionList({id:this.userInfoData.id});
                        this.isShow = false
                      }else{
                        this.$message.error(res.message)
                      }
                    });
                    break;
                  case 2: // 修改
                    this.cancelClick();
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
          userInfoData(val){
              this.form.userinfoid = val.id
          },
          type(val){
            let title = '';
            if(!val){
              val = 0
            }
            switch (val) {
              case 1:
                title = '新增医务护理';
                break;
              case 2:
                title = '修改医务护理';
                break;
              default:
                title = '查看医务护理';
                break
            }
            this.title = title
          },
          medicalCareData(val){
              console.log('medicalCareData',val);
              this.form.id = val.id;
              this.form.parcticelevel = val.parcticelevel;
            this.form.practicenumber = val.practicenumber;
            this.form.parcticebookobtaindate = val.parcticebookobtaindate;
            this.form.technologynumber = val.technologynumber;
            this.form.technologybookobtaindate = val.technologybookobtaindate;
            this.form.nurseshoesize = val.nurseshoesize;
            this.form.practicerange = val.practicerange;
            this.form.registrationtime = val.registrationtime;
            this.form.practiceyears = val.practiceyears;
            this.form.practicecategory = val.practicecategory;
            this.form.interruptpractice = val.interruptpractice;
          }
        },
        // 依赖注入
        components: {}
    }
</script>

<!-- 本地样式 -->
<style scoped>

</style>
