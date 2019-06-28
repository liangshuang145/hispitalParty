#@Author: bjy @Date: 2019/6/25 19:37 #
<template>
  <el-dialog :value="value" name="JobTitleDialog" :visible="isShow" :before-close="handleClose" :title="title" width="1500px" top="5vh" center >
    <el-form ref="form" :model="form" :rules="rule" label-width="140px" label-position="right">
      <!-- 职务名称 行政职务 任职年限 行政级别 -->
      <el-row>
        <el-col :span="6">
          <el-form-item label="职务名称" prop="postname">
            <el-input v-model="form.postname" size="medium" :maxlength="30" placeholder="请输入职务名称"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="6">
          <el-form-item label="行政职务" prop="administrationpost">
            <el-input v-model="form.administrationpost" size="medium" :maxlength="30" placeholder="请输入行政职务"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="6">
          <el-form-item label="任职年限" prop="servingyears">
            <el-input v-model="form.servingyears" size="medium" :maxlength="30" placeholder="请输入任职年限"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="6">
          <el-form-item label="行政级别" prop="administrationlevel">
            <el-input v-model="form.administrationlevel" size="medium" :maxlength="30" placeholder="请输入行政级别"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <!-- 任命时间 任命截止时间 前行政职务 前行政任命时间 -->
      <el-row>
        <el-col :span="6">
          <el-form-item label="任命时间" prop="servingdate">
            <el-date-picker v-model="form.servingdate" type="date" placeholder="选择任命时间"></el-date-picker>
          </el-form-item>
        </el-col>
        <el-col :span="6">
          <el-form-item label="任命截止时间" prop="servingstopdate">
            <el-date-picker v-model="form.servingstopdate" type="date" placeholder="选择任命截止时间"></el-date-picker>
          </el-form-item>
        </el-col>
        <el-col :span="6">
          <el-form-item label="前行政职务" prop="beforeadministrationpost">
            <el-input v-model="form.beforeadministrationpost" size="medium" :maxlength="30" placeholder="请输入前行政职务"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="6">
          <el-form-item label="前行政任命时间" prop="beforeservingdate">
            <el-date-picker v-model="form.beforeservingdate" type="date" placeholder="选择前行政任命时间"></el-date-picker>
          </el-form-item>
        </el-col>
      </el-row>
      <!-- 前任命截止时间 现资格职称 现资格获得时间 现聘任职称 -->
      <el-row>
        <el-col :span="6">
          <el-form-item label="前任命截止时间" prop="beforeservingstopdate">
            <el-date-picker v-model="form.beforeservingstopdate" type="date" placeholder="选择前任命截止时间"></el-date-picker>
          </el-form-item>
        </el-col>
        <el-col :span="6">
          <el-form-item label="现资格职称" prop="qualificationtitle">
            <el-input v-model="form.qualificationtitle" size="medium" :maxlength="30" placeholder="请输入现资格职称"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="6">
          <el-form-item label="现资格获得时间" prop="qualificationgetdate">
            <el-date-picker v-model="form.qualificationgetdate" type="date" placeholder="选择现资格获得时间"></el-date-picker>
          </el-form-item>
        </el-col>
        <el-col :span="6">
          <el-form-item label="现聘任职称" prop="engagetitle">
            <el-input v-model="form.engagetitle" size="medium" :maxlength="30" placeholder="请输入现聘任职称"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <!--现职称聘任时间  现聘期  前资格名称 前资格获得时间 -->
      <el-row>
        <el-col :span="6">
          <el-form-item label="现职称聘任时间" prop="engagetitledate">
            <el-date-picker v-model="form.engagetitledate" type="date" placeholder="选择现职称聘任时间"></el-date-picker>
          </el-form-item>
        </el-col>
        <el-col :span="6">
          <el-form-item label="现聘期" prop="engagetime">
            <el-input v-model="form.engagetime" size="medium" :maxlength="30" placeholder="请输入现聘期"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="6">
          <el-form-item label="前资格名称" prop="beforequalificationtitle">
            <el-input v-model="form.beforequalificationtitle" size="medium" :maxlength="30" placeholder="请输入前资格名称"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="6">
          <el-form-item label="前资格获得时间" prop="beforequalificationgetdate">
            <el-date-picker v-model="form.beforequalificationgetdate" type="date" placeholder="选择前资格获得时间"></el-date-picker>
          </el-form-item>
        </el-col>
      </el-row>

      <el-row>
        <el-col :span="6">
          <el-form-item label="前聘任职称" prop="beforeengagetitle">
            <el-input v-model="form.beforeengagetitle" size="medium" :maxlength="30" placeholder="请输入前聘任职称"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="6">
          <el-form-item label="前职称聘任时间" prop="beforeengagetitledate">
            <el-date-picker v-model="form.beforeengagetitledate" type="date" placeholder="选择前职称聘任时间"></el-date-picker>
          </el-form-item>
        </el-col>
        <el-col :span="6">
          <el-form-item label="前聘期" prop="beforeengagetime">
            <el-input v-model="form.beforeengagetime" size="medium" :maxlength="30" placeholder="请输入前聘期"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="6">
          <el-form-item label="前聘期截止日期" prop="beforeengagestoptime">
            <el-date-picker v-model="form.beforeengagestoptime" type="date" placeholder="选择前聘期截止日期"></el-date-picker>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="6">
          <el-form-item label="职称技术级别" prop="technicallevel">
            <el-input v-model="form.technicallevel" size="medium" :maxlength="30" placeholder="请输入职称技术级别"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="6">
          <el-form-item label="职称人员类别" prop="personnelcategory">
            <el-input v-model="form.personnelcategory" size="medium" :maxlength="30" placeholder="请输入职称人员类别"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="6">
          <el-form-item label="职称卫技类别" prop="weijicategory">
            <el-input v-model="form.weijicategory" size="medium" :maxlength="30" placeholder="请输入职称卫技类别"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
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
  import ElCol from "element-ui/packages/col/src/col";
  import ElRow from "element-ui/packages/row/src/row";
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

          },
          jobTitleData:{

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
            this.$refs['form'].validate((valid) => {
              if(valid) {
                switch (this.type) {
                  case 1: // 新增
                    delete this.form.id;
                    UserInfoService.addUserInfoTitlePost(this.form).then((res) => {
                      if(res.code === 200){
                        this.$message.success('添加'+res.message);
                        this.$refs['form'].resetFields();
//                        this.getUserInfoContractList({id:this.userInfoData.id});
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
                title = '新增职务职称';
                break;
              case 2:
                title = '修改职务职称';
                break;
              default:
                title = '查看职务职称';
                break
            }
            this.title = title
          },
          userInfoData(val){
            this.form.userinfoid = val.id
          },
          jobTitleData(val){
              this.form.id = val.id;
            this.form.postname = val.postname;
            this.form.administrationpost = val.administrationpost;
            this.form.servingyears = val.servingyears;
            this.form.administrationlevel = val.administrationlevel;
            this.form.servingdate = val.servingdate;
            this.form.servingstopdate = val.servingstopdate;
            this.form.beforeadministrationpost = val.beforeadministrationpost;
            this.form.beforeservingdate = val.beforeservingdate;
            this.form.beforeservingstopdate = val.beforeservingstopdate;
            this.form.qualificationtitle = val.qualificationtitle;
            this.form.qualificationgetdate = val.qualificationgetdate;
            this.form.engagetitle = val.engagetitle;
            this.form.engagetitledate = val.engagetitledate;
            this.form.engagetime = val.engagetime;
            this.form.beforequalificationtitle = val.beforequalificationtitle;
            this.form.beforequalificationgetdate = val.beforequalificationgetdate;
            this.form.beforeengagetitle = val.beforeengagetitle;
            this.form.beforeengagetitledate = val.beforeengagetitledate;
            this.form.beforeengagetime = val.beforeengagetime;
            this.form.beforeengagestoptime = val.beforeengagestoptime;
            this.form.technicallevel = val.technicallevel;
            this.form.personnelcategory = val.personnelcategory;
            this.form.weijicategory = val.weijicategory;
          }
        },
        // 依赖注入
        components: {
          ElRow,
          ElCol}
    }
</script>

<!-- 本地样式 -->
<style scoped>

</style>
