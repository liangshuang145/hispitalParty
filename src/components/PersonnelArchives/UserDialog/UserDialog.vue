`<template>
  <el-dialog :value="value" name="UserDialog" :visible="isShow" :before-close="handleClose" :title="title" width="1500px" top="5vh" center >
    <el-form ref="form" :model="form" :rules="rule" label-width="90px" label-position="right">
      <el-row>
        <el-col :span="24"><div class="grid-content bg-purple-light form-title">基本信息</div></el-col>
      </el-row>
      <!-- 头像 姓名 性别 出生日期 年龄 民族 籍贯  身份证号  工号  职工性质 职工类别  岗位类别-->
      <el-row>
        <el-col :span="4">
          <el-form-item label="上传头像" prop="imgUrl">
            <template>
              <div class="div-upload">
                <el-upload class="avatar-uploader" action="https://jsonplaceholder.typicode.com/posts/" :show-file-list="false" :on-success="handleAvatarSuccess">
                  <img v-if="form.imageUrl" :src="form.imageUrl" class="avatar">
                  <i v-else class="el-icon-plus uploader-icon"></i>
                </el-upload>
              </div>
            </template>
          </el-form-item>
        </el-col>
        <el-col :span="20">
          <!-- 姓名 性别 出生日期 年龄-->
          <el-row>
            <el-col :span="6">
              <el-form-item label=" 姓名" prop="nickname">
                <el-input v-model="form.nickname" size="medium" :maxlength="30" placeholder="请输入昵称"/>
              </el-form-item>
            </el-col>
            <el-col :span="6">
              <el-form-item label="性别" prop="sex">
                <el-radio v-model="form.sex" :label="0">女</el-radio>
                <el-radio v-model="form.sex" :label="1">男</el-radio>
              </el-form-item>
            </el-col>
            <el-col :span="6">
              <el-form-item label="出生日期" prop="dateOfBirth ">
                <el-date-picker
                  v-model="form.dateOfBirth" type="date" placeholder="选择日期" format="yyyy-MM-dd" value-format="yyyy-MM-dd">
                </el-date-picker>
              </el-form-item>
            </el-col>
            <el-col :span="6">
              <el-form-item label="年龄" prop="age">
                <el-input v-model="form.age" size="medium" :maxlength="30" auto-complete="new-account" placeholder="请输入身份证号" type="number"/>
              </el-form-item>
            </el-col>
          </el-row>
          <!--  民族 籍贯 身份证 联系方式-->
          <el-row>
            <el-col :span="6">
              <el-form-item label="民族" prop="nation ">
                <el-input v-model="form.nation" size="medium" :maxlength="30" auto-complete="new-account" placeholder="请输入民族"/>
              </el-form-item>
            </el-col>
            <el-col :span="6">
              <el-form-item label="籍贯" prop="nativePlace">
                <el-input v-model="form.nativePlace" size="medium" :maxlength="30" auto-complete="new-account" placeholder="请输入籍贯"/>
              </el-form-item>
            </el-col>
            <el-col :span="6">
              <el-form-item label="身份证号" prop="idCard">
                <el-input v-model="form.idCard" size="medium" :maxlength="30" auto-complete="new-account" placeholder="请输入身份证号" type="number"/>
              </el-form-item>
            </el-col>
            <el-col :span="6">
              <el-form-item label="个人身份" prop="personalIdentity">
                <el-input v-model="form.personalIdentity" size="medium" :maxlength="30" auto-complete="new-account" placeholder="请输入个人身份"/>
              </el-form-item>
            </el-col>
          </el-row>
          <!-- 工号 职工性质 职工类别  岗位类别-->
          <el-row>
            <el-col :span="6">
              <el-form-item label="工号" prop="jobNumber">
                <el-input v-model="form.jobNumber" size="medium" :maxlength="30" auto-complete="new-account" placeholder="请输入工号"/>
              </el-form-item>
            </el-col>
            <el-col :span="6">
              <el-form-item label="职工性质" prop="jobNature">
                <el-input v-model="form.jobNature" size="medium" :maxlength="30" auto-complete="new-account" placeholder="请输入职工性质"/>
              </el-form-item>
            </el-col>
            <el-col :span="6">
              <el-form-item label="职工类别" prop="workerCategory">
                <el-input v-model="form.workerCategory" size="medium" :maxlength="30" auto-complete="new-account" placeholder="请输入职工类别"/>
              </el-form-item>
            </el-col>
            <el-col :span="6">
              <el-form-item label="岗位类别" prop="jobNumber">
                <el-input v-model="form.JobCategory" size="medium" :maxlength="30" auto-complete="new-account" placeholder="请输入岗位类别"/>
              </el-form-item>
            </el-col>
          </el-row>
        </el-col>
      </el-row>
      <!--  所在科室 所在科室 考勤组 编制 到院时间 转正时间-->
      <el-row>
        <el-col :span="4">
          <el-form-item label="其他工号" prop="otherWorkNumber ">
            <el-input v-model="form.otherWorkNumber " size="medium" :maxlength="30" auto-complete="new-account" placeholder="请输入其他工号"/>
          </el-form-item>
        </el-col>
        <el-col :span="4">
          <el-form-item label="所在科室" prop="physicianDepartment">
            <el-input v-model="form.physicianDepartment" size="medium" :maxlength="30" auto-complete="new-account" placeholder="请输入所在科室"/>
          </el-form-item>
        </el-col>
        <el-col :span="4">
          <el-form-item label="考勤组" prop="checkingIn ">
            <el-input v-model="form.checkingIn" size="medium" :maxlength="30" auto-complete="new-account" placeholder="请输入考勤组"/>
          </el-form-item>
        </el-col>
        <el-col :span="4">
          <el-form-item label="编制" prop="authorizedStrength">
            <el-input v-model="form.authorizedStrength" size="medium" :maxlength="30" auto-complete="new-account" placeholder="请输入籍贯"/>
          </el-form-item>
        </el-col>
        <el-col :span="4">
          <el-form-item label="到院时间" prop="schoolTime">
            <el-date-picker
              v-model="form.schoolTime" type="date" placeholder="选择到院时间" format="yyyy-MM-dd" value-format="yyyy-MM-dd" class="i-el-date-picker">
            </el-date-picker>
          </el-form-item>
        </el-col>
        <el-col :span="4">
          <el-form-item label="转正时间" prop="positiveTime">
            <el-date-picker
              v-model="form.positiveTime" type="date" placeholder="选择转正时间" format="yyyy-MM-dd" value-format="yyyy-MM-dd" class="i-el-date-picker">
            </el-date-picker>
          </el-form-item>
        </el-col>
      </el-row>
      <!-- 工资关系 持续工龄 增加方式 其他工号 备注-->
      <el-row>
        <el-col :span="4">
          <el-form-item label="工资关系" prop="salary ">
            <el-input v-model="form.salary " size="medium" :maxlength="30" auto-complete="new-account" placeholder="请输入工资关系转移"/>
          </el-form-item>
        </el-col>
        <el-col :span="4">
          <el-form-item label="持续工龄" prop="continuousAge ">
            <el-input v-model="form.continuousAge " size="medium" :maxlength="30" auto-complete="new-account" placeholder="请输入计算持续工龄"/>
          </el-form-item>
        </el-col>
        <el-col :span="4">
          <el-form-item label="增加方式" prop="IncreaseWay ">
            <el-input v-model="form.IncreaseWay " size="medium" :maxlength="30" auto-complete="new-account" placeholder="请输入增加方式"/>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="备注" prop="remark">
            <el-input v-model="form.remark " textarea size="medium" :maxlength="255" auto-complete="new-account" placeholder="请输入备注" show-word-limit/>
          </el-form-item>
        </el-col>
      </el-row>

      <!-- 人事信息 -->
      <el-row>
        <el-col :span="24"><div class="grid-content bg-purple-light form-title">人事信息</div></el-col>
      </el-row>
      <!-- 人员类别 户口所在地 户口性质 婚姻状况 工作电话 移动电话 -->
      <el-row>
        <el-col :span="4">
          <el-form-item label="人员类别" prop="personnelCategory">
            <el-input v-model="form.personnelCategory " size="medium" :maxlength="30" auto-complete="new-account" placeholder="请输入人员类别"/>
          </el-form-item>
        </el-col>
        <el-col :span="4">
          <el-form-item label="户口所在地" prop="domicilePlace">
            <el-input v-model="form.domicilePlace " size="medium" :maxlength="30" auto-complete="new-account" placeholder="请输入户口所在"/>
          </el-form-item>
        </el-col>
        <el-col :span="4">
          <el-form-item label="户口性质" prop="householdRegistrationType ">
            <el-input v-model="form.householdRegistrationType " size="medium" :maxlength="30" auto-complete="new-account" placeholder="请输入户口性质 "/>
          </el-form-item>
        </el-col>
        <el-col :span="4">
          <el-form-item label="婚姻状况" prop="maritalStatus ">
            <el-select v-model="form.maritalStatus" placeholder="请选择婚姻状况">
              <el-option
                v-for="item in maritalStatusOptions"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :span="4">
          <el-form-item label="工作电话" prop="workPhone">
            <el-input v-model="form.workPhone" size="medium" :maxlength="30" auto-complete="new-account" placeholder="请输入工作电话 " type="number"/>
          </el-form-item>
        </el-col>
        <el-col :span="4">
          <el-form-item label="移动电话" prop="mobilePhone">
            <el-input v-model="form.mobilePhone" size="medium" :maxlength="30" auto-complete="new-account" placeholder="请输入移动电话" type="number"/>
          </el-form-item>
        </el-col>
      </el-row>
      <!-- 政治面貌 入党团日期 所在支部 党内职务 任命时间 其他职务 -->
      <el-row>
        <el-col :span="4">
          <el-form-item label="政治面貌" prop="politicsStatus  ">
            <el-select v-model="form.politicsStatus" placeholder="请选择政治面貌">
              <el-option
                v-for="item in politicsStatusArr"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :span="4">
          <el-form-item label=" 入党团日期" prop="partyTime ">
            <el-date-picker
              v-model="form.partyTime" type="date" placeholder="选择入党团日期" format="yyyy-MM-dd" value-format="yyyy-MM-dd" class="i-el-date-picker">
            </el-date-picker>
          </el-form-item>
        </el-col>
        <el-col :span="4">
          <el-form-item label="所在支部" prop="branch ">
            <el-input v-model="form.branch " size="medium" :maxlength="30" auto-complete="new-account" placeholder="请输入所在支部"/>
          </el-form-item>
        </el-col>
        <el-col :span="4">
          <el-form-item label="党内职务" prop="partyPosts">
            <el-input v-model="form.partyPosts " size="medium" :maxlength="30" auto-complete="new-account" placeholder="请输入党内职务"/>
          </el-form-item>
        </el-col>
        <el-col :span="4">
          <el-form-item label="任命时间" prop="appointedTime">
            <el-date-picker
              v-model="form.appointedTime" type="date" placeholder="选择任命时间" format="yyyy-MM-dd" value-format="yyyy-MM-dd" class="i-el-date-picker">
            </el-date-picker>
          </el-form-item>
        </el-col>
        <el-col :span="4">
          <el-form-item label="其他职务" prop="otherPosts">
            <el-input v-model="form.otherPosts " size="medium" :maxlength="30" auto-complete="new-account" placeholder="请输入其他职务"/>
          </el-form-item>
        </el-col>
      </el-row>
      <!-- 兼评职称 兼评时间 工人工种 工人等级 工龄 工龄(月)  -->
      <el-row>
        <el-col :span="4">
          <el-form-item label="兼评职称" prop="professionalEvaluation">
            <el-input v-model="form.professionalEvaluation " size="medium" :maxlength="30" auto-complete="new-account" placeholder="请输入兼评职称"/>
          </el-form-item>
        </el-col>
        <el-col :span="4">
          <el-form-item label="兼评时间" prop="professionalEvaluationTime">
            <el-date-picker
            v-model="form.professionalEvaluationTime" type="date" placeholder="选择兼评时间" format="yyyy-MM-dd" value-format="yyyy-MM-dd" class="i-el-date-picker">
            </el-date-picker>
          </el-form-item>
        </el-col>
        <el-col :span="4">
          <el-form-item label="工人工种" prop="wokerType">
            <el-input v-model="form.wokerType " size="medium" :maxlength="30" auto-complete="new-account" placeholder="请输入工人工种"/>
          </el-form-item>
        </el-col>
        <el-col :span="4">
          <el-form-item label="工人工种" prop="wokerGrade">
            <el-input v-model="form.wokerGrade " size="medium" :maxlength="30" auto-complete="new-account" placeholder="请输入工人工种"/>
          </el-form-item>
        </el-col>
        <el-col :span="4">
          <el-form-item label="工龄" prop="wokeAge">
            <el-input v-model="form.wokeAge " size="medium" :maxlength="30" auto-complete="new-account" placeholder="请输入工龄" type="number"/>
          </el-form-item>
        </el-col>
        <el-col :span="4">
          <el-form-item label="工龄(月)" prop="wokeAgeByMonth">
            <el-input v-model="form.wokeAgeByMonth " size="medium" :maxlength="30" auto-complete="new-account" placeholder="请输入工龄(月)" type="number"/>
          </el-form-item>
        </el-col>
      </el-row>
      <!-- 聘任时间 调入前单位 预定离院日期 首次合同开始日期 返聘到期日期-->
      <el-row>
        <el-col :span="4">
          <el-form-item label="聘任时间" prop="appointmentTime">
            <el-date-picker
              v-model="form.appointmentTime" type="date" placeholder="选择聘任时间" format="yyyy-MM-dd" value-format="yyyy-MM-dd" class="i-el-date-picker">
            </el-date-picker>
          </el-form-item>
        </el-col>
        <el-col :span="4">
          <el-form-item label="调入前单位" prop="beforeTheUnit">
            <el-input v-model="form.beforeTheUnit " size="medium" :maxlength="30" auto-complete="new-account" placeholder="请输入调入前单位" />
          </el-form-item>
        </el-col>
        <el-col :span="5">
          <el-form-item label="预定离院日期" prop="departureDate">
            <el-date-picker
              v-model="form.departureDate" type="date" placeholder="选择预定离院日期" format="yyyy-MM-dd" value-format="yyyy-MM-dd" class="i-el-date-picker">
            </el-date-picker>
          </el-form-item>
        </el-col>
        <el-col :span="5">
          <el-form-item label="首次合同开始日期" prop="commencementDate">
            <el-date-picker
              v-model="form.commencementDate" type="date" placeholder="首次合同开始日期" format="yyyy-MM-dd" value-format="yyyy-MM-dd" class="i-el-date-picker">
            </el-date-picker>
          </el-form-item>
        </el-col>
        <el-col :span="5">
          <el-form-item label="返聘到期日期" prop="retirementDateDue">
            <el-date-picker
              v-model="form.retirementDateDue" type="date" placeholder="返聘到期日期" format="yyyy-MM-dd" value-format="yyyy-MM-dd" class="i-el-date-picker">
            </el-date-picker>
          </el-form-item>
        </el-col>
      </el-row>
      <!-- 轮转标志 家庭地址 -->
      <el-row>
        <el-col :span="4">
          <el-form-item label="轮转标志" prop="rotaryMarks">
            <el-input v-model="form.rotaryMarks " size="medium" :maxlength="30" auto-complete="new-account" placeholder="请输入轮转标志" />
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label=" 家庭地址" prop="houseAddress ">
            <el-input v-model="form.houseAddress " size="medium" :maxlength="100" auto-complete="new-account" placeholder="请输入家庭地址 " show-word-limit/>
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
import Validator from '@/lib/validator'
import UserService from '@/services/UserService'
import ElFormItem from "../../../../node_modules/element-ui/packages/form/src/form-item";
import ElRow from "element-ui/packages/row/src/row";
import ElCol from "element-ui/packages/col/src/col";

export default {
  components: {
    ElCol,
    ElRow,
    ElFormItem},
  name: 'UserDialog',
  props: {
    userData: { // 用户数据
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
  watch: {
      'form.peopletype'(val){
        console.log("form.peopletype",val)
      },
    type(val) {
      let title = '';
      if(!val){
          val = 0
      }
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
    userData(data) {
      this.form.id = data.id;
      this.form.nickname = data.nickname;// 姓名
      this.form.number = data.number;// 行政编号
      this.form.jobNumber = data.jobNumber;// 工号
      this.form.sex = data.sex;// 性别
      this.form.branch = data.branch;// 所属支部
      this.form.office = data.office;// 科室
      this.form.idCard = data.idCard;// 身份证号
      this.form.dateOfBirth = data.dateOfBirth;// 出生日期
      this.form.education = data.education;// 学历
      this.form.nation = data.nation;// 民族
      this.form.nativePlace = data.nativePlace;// 籍贯
      this.form.job = data.job;// 职务
      this.form.technicalTitle = data.technicalTitle;// 职称
      this.form.partyTime = data.partyTime; // 入党时间
      this.form.positiveTime = data.positiveTime;// 转正时间
      this.form.mobilePhone = data.mobilePhone;// 联系电话
      this.form.address = data.address;//家庭地址
      this.form.description = data.description;// 一句话的承诺
    }
  },
  data() {
    return {
      isShow: false,
      title:'',
      form: {
        imageUrl:'',// 用户头像
        id: '',
        number:'',// 行政编号
        jobNumber:'',// 工号
        nickname: '',// 姓名
        branch:'',// 所属支部
        sex: -1,// 性别
        office:'',// 科室
        idCard:'',// 身份证号
        dateOfBirth:'',// 出生日期
        education:'',// 学历
        nation:'',// 民族
        nativePlace:'',// 籍贯
        job: '', // 职务
        technicalTitle: '',//职称
        mobilePhone:'',// 联系电话
        address:'',// 家庭住址
        description: '',// 一句话的承诺
        // 教育经历
        educationExperience:[
          {id:1,startDate:'',graduationDate:''}
        ]
      },
      rule: {
        name: [{
          validator: Validator.checkName,
          trigger: 'blur'
        }]
      },
      educationBackgroundOptions:[
        {label:'小学',value:1},
        {label:'初中',value:2},
        {label:'高中',value:3},
        {label:'大专',value:4},
        {label:'本科',value:5},
        {label:'硕士',value:6},
        {label:'博士',value:7},
        {label:'其他',value:8},
      ],
      maritalStatusOptions:[
        {label:'未婚',value:1},
        {label:'已婚',value:2},
      ],
      optionss:[
        {label:'正式党员',value:1},
        {label:'预备党员',value:2},
        {label:'入党积极分子',value:3},
        {label:'入党申请人',value:4},
        {label:'未知',value:5},
      ],
      politicsStatusArr:[
        {label:'群众',value:1},
        {label:'团员',value:2},
        {label:'党员',value:3},
      ]
    }
  },
  computed: {
//    ...mapState([
//      'subjectList',
//      'departList',
//      'groupList'
//    ]),
  },
//  async mounted() {
//    await this.getSubjectList()
//    await this.getDepartList()
//    await this.getGroupList()
//  },
  methods: {
//    ...mapActions([
//      'getSubjectList',
//      'getDepartList',
//      'getGroupList',
//      'getUserList'
//    ]),
    // 添加教育经历
    addEducationExperience(){
        this.form.educationExperience.push({
          id:this.form.educationExperience.length+1
        })
    },
    // 确定按钮
    sureClick() {
      switch (this.type) {
        case 1: // 新增
          UserService.addUser(this.form).then((res) => {
            this.$message.success('已添加');

            this.getUserList();
            this.isShow = false
          });
          break;
        case 2: // 修改
          // 注意不要修改密码
          UserService.updateUser(this.form).then((res) => {
            this.$message.success('已修改');

            this.getUserList();
            this.isShow = false
          });
          break;
        default:
          break
      }
    },

    // 取消按钮
    cancelClick() {
      this.isShow = false
    },
    // 关闭按钮
    handleClose() {
      this.isShow = false
    },
    // 上传拖
    handleAvatarSuccess(res, file) {
      this.form.imageUrl = URL.createObjectURL(file.raw);
    },
  }
}
</script>

<style scoped>
  .avatar-uploader .el-upload {
    border: 1px solid #595959;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }
  .uploader-icon {
    font-size: 30px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
  }
  .avatar {
    width: 178px;
    height: 178px;
    display: block;
  }
  .div-upload{
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
    width: 178px;
    height: 178px;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 4px;
    height: 30px;
  }
  .form-title{
    font-size: 16px;
    line-height:1.7;
    text-align: center;
  }
  .el-row{
    margin-top: 5px;
  }
  .i-el-date-picker{
    width: 94%;
  }
</style>
