#@Author: bjy @Date: 2019/6/27 19:01 #
<template>
      <el-dialog :value="value" name="EducationDialog" :visible="isShow" :before-close="handleClose" :title="title" width="750px" top="5vh" center append-to-body>
        <el-form ref="form" :model="form" :rules="rule" label-width="90px" label-position="right">
          <el-form-item label="开始日期" prop="startdate">
            <el-date-picker v-model="form.startdate" type="date" placeholder="选择开始日期" format="yyyy-MM-dd" value-format="yyyy-MM-dd" class="i-el-date-picker"></el-date-picker>
          </el-form-item>
          <el-form-item label="毕业日期" prop="enddate">
            <el-date-picker v-model="form.enddate" type="date" placeholder="选择开毕业日期" format="yyyy-MM-dd" value-format="yyyy-MM-dd" class="i-el-date-picker">
            </el-date-picker>
          </el-form-item>
          <el-form-item label="毕业学校" prop="graduationschool">
            <el-input v-model="form.graduationschool" size="medium" :maxlength="30" auto-complete="new-account" placeholder="请输入毕业学校"></el-input>
          </el-form-item>
          <el-form-item label="所学专业" prop="major">
            <el-input v-model="form.major" size="medium" :maxlength="30" auto-complete="new-account" placeholder="请输入所学专业"></el-input>
          </el-form-item>
          <el-form-item label="教育类别" prop="educationcategory">
            <el-input v-model="form.educationcategory" size="medium" :maxlength="30" auto-complete="new-account" placeholder="请输入教育类别"></el-input>
          </el-form-item>
          <el-form-item label="学历" prop="education">
            <el-input v-model="form.education" size="medium" :maxlength="30" auto-complete="new-account" placeholder="请输入学历"></el-input>
          </el-form-item>
          <el-form-item label="学位" prop="degree">
            <el-input v-model="form.degree" size="medium" :maxlength="30" auto-complete="new-account" placeholder="请输入学位"></el-input>
          </el-form-item>
          <el-form-item label="学位时间" prop="degreedate">
            <el-date-picker v-model="form.degreedate" type="date" placeholder="选择开学位时间" format="yyyy-MM-dd" value-format="yyyy-MM-dd" class="i-el-date-picker">
            </el-date-picker>
          </el-form-item>
          <el-form-item label="学制" prop="edusystem">
            <el-input v-model="form.edusystem" size="medium" :maxlength="30" auto-complete="new-account" placeholder="请输入学制"></el-input>
          </el-form-item>
          <el-form-item label="证明人" prop="witness">
            <el-input v-model="form.witness" size="medium" :maxlength="30" auto-complete="new-account" placeholder="请输入证明人"></el-input>
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
  import { mapState, mapActions } from 'vuex'
  import Validator from '@/lib/validator'
  import UserInfoService from '../../../services/UserInfoService'
    //  此处导入组件,格式,例如:import xxx名称 from "路径"
    export default{
        // 这里是name,记得填写
        name: 'educationDialog',
        props:{
          value:{
            type:Boolean,
            default:false
          },
          type:{
            type: Number,
            default:0
          },
          userInfoData:{
          },
          educationData:{}
        },
        //  数据定义
        data () {
            return {
              title:'',
              isShow:false,
              form:{
                  id:'',
                startdate:'',
                enddate:'',
                graduationschool:'',
                major: '',
                educationcategory:'',
                education:'',
                degree:'',
                degreedate:'',
                edusystem:'',
                witness:'',
                userinfoid:''
              },
              rule:{

              }
            }
        },
        // 页面方法
        methods: {
//          ...mapActions([
//            'getUserInfoEductionList'
//          ]),
          // 确定按钮
          sureClick() {
            this.$refs['form'].validate((valid) => {
              if(valid) {
                switch (this.type) {
                  case 1: // 新增
                    delete this.form.id;
                    UserInfoService.addUserInfoIsContract(this.form).then((res) => {
                      if(res.code === 200){
                        this.$message.success('添加'+res.message);
                        this.$refs['form'].resetFields();
//                        this.getUserInfoEductionList();
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
          educationData(val){
            this.form.id = val.id;
            this.form.startdate = val.startdate;
            this.form.enddate = val.enddate;
            this.form.graduationschool = val.graduationschool;
            this.form.major = val.major;
            this.form.educationcategory = val.educationcategory;
            this.form.education = val.education;
            this.form.degree = val.degree;
            this.form.degreedate = val.degreedate;
            this.form.witness = val.witness;
            this.form.edusystem = val.edusystem;
          },
          value(val){
            this.isShow = val
          },
          isShow(val){
            this.$emit('input',val)
          },
          type(val) {
            let title = '';
            if(!val){
              val = 0
            }
            switch (val) {
              case 1:
                title = '新增教育经历';
                break;
              case 2:
                title = '修改教育经历';
                break;
              default:
                title = '查看教育经历';
                break
            }
            this.title = title
          },
          userInfoData(val){
            this.form.userinfoid = val.userinfoid;
          },
        },
        // 依赖注入
        components: {}
    }
</script>

<!-- 本地样式 -->
<style scoped>

</style>
