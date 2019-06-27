`<template>
  <el-dialog :value="value" name="UserDialog" :visible="isShow" :before-close="handleClose" :title="title" width="1500px" top="5vh" center >
    <el-form ref="form" :model="form" :rules="rule" label-width="90px" label-position="right">
      <el-row>
        <el-col :span="24"><div class="grid-content bg-purple-light form-title">基本信息</div></el-col>
      </el-row>
      <!-- 头像 姓名- 性别- 出生日期- 学历- 民族- 籍贯-  身份证号- 个人身份- 职务- 职称- 所在科室- 所在支部-   -->
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
          <!-- 姓名- 性别- 出生日期- 学历-  -->
          <el-row>
            <el-col :span="6">
              <el-form-item label=" 姓名" prop="name">
                <el-select v-model="form.userInfo.name" size="medium" filterable :filter-method="selectUserByName" placeholder="请选择姓名" @change="selectName">
                  <el-option v-for="item in userLists" :key="item.id" :label="item.name" :value="item.id"></el-option>
                </el-select>
              </el-form-item>
            </el-col>
            <el-col :span="6">
              <el-form-item label="性别" prop="sex">
                <el-radio v-model="form.userInfo.sex" :label="0">女</el-radio>
                <el-radio v-model="form.userInfo.sex" :label="1">男</el-radio>
              </el-form-item>
            </el-col>
            <el-col :span="6">
              <el-form-item label="出生日期" prop="birthday">
                <el-date-picker
                  v-model="form.userInfo.birthday" type="date" placeholder="选择日期" format="yyyy-MM-dd" value-format="yyyy-MM-dd">
                </el-date-picker>
              </el-form-item>
            </el-col>
            <el-col :span="6">
              <el-form-item label="学历" prop="education">
                <!--<el-input v-model="form.userInfo.education " size="medium" :maxlength="30" auto-complete="new-account" placeholder="请输入学历"></el-input>-->
                <el-select v-model="form.userInfo.education" placeholder="请选择学历">
                  <el-option v-for="item in educationBackgroundOptions" :key="item" :label="item" :value="item">
                  </el-option>
                </el-select>
              </el-form-item>
            </el-col>
          </el-row>
          <!--  民族 籍贯 身份证 个人身份-->
          <el-row>
            <el-col :span="6">
              <el-form-item label="民族" prop="nation ">
                <el-input v-model="form.userInfo.nation" size="medium" :maxlength="30" auto-complete="new-account" placeholder="请输入民族"/>
              </el-form-item>
            </el-col>
            <el-col :span="6">
              <el-form-item label="籍贯" prop="place">
                <!--<el-input v-model="form.userInfo.place" size="medium" :maxlength="30" auto-complete="new-account" placeholder="请输入籍贯"/>-->
                <el-select v-model="form.userInfo.place" placeholder="请选择籍贯">
                  <el-option v-for="item in placeArr" :key="item" :label="item" :value="item">
                  </el-option>
                </el-select>
              </el-form-item>
            </el-col>
            <el-col :span="6">
              <el-form-item label="身份证号" prop="idCard">
                <el-input v-model="form.userInfo.idCard" size="medium" :maxlength="30" auto-complete="new-account" placeholder="请输入身份证号" type="number"/>
              </el-form-item>
            </el-col>
            <el-col :span="6">
              <el-form-item label="个人身份" prop="idEntity">
                <el-input v-model="form.userInfo.idEntity" size="medium" :maxlength="30" auto-complete="new-account" placeholder="请输入个人身份"/>
              </el-form-item>
            </el-col>
          </el-row>
          <!-- 职务 职称 所在科室 所在支部 -->
          <el-row>
            <el-col :span="6">
              <el-form-item label="职务" prop="post">
                <el-input v-model="form.userInfo.post " size="medium" :maxlength="30" auto-complete="new-account" placeholder="请输入职务"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="6">
              <el-form-item label="职称" prop="title">
                <el-input v-model="form.userInfo.title " size="medium" :maxlength="30" auto-complete="new-account" placeholder="请输入职称"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="6">
              <el-form-item label="所在科室" prop="department">
                <!--<el-input v-model="form.userInfo.department" size="medium" :maxlength="30" auto-complete="new-account" placeholder="请输入所在科室"></el-input>-->
                <el-select v-model="form.userInfo.department" placeholder="请选择所在科室">
                  <el-option v-for="item in departmentOptions" :key="item" :label="item" :value="item">
                  </el-option>
                </el-select>
              </el-form-item>
            </el-col>
            <el-col :span="6">
              <el-form-item label="所在支部" prop="branchName">
                <el-select v-model="form.userInfo.branchName" placeholder="请选择所在科室">
                  <el-option v-for="item in branchNameOptions" :key="item" :label="item" :value="item">
                  </el-option>
                </el-select>
                <!--<el-input v-model="form.userInfo.branchName" size="medium" :maxlength="30" auto-complete="new-account" placeholder="请输入所在支部"></el-input>-->
              </el-form-item>
            </el-col>
          </el-row>
        </el-col>
      </el-row>
      <!--  行政编号- 工作时间- 入党时间- 转正时间- 联系电话- -->
      <el-row>
        <el-col :span="4">
          <el-form-item label="行政编号" prop="number">
            <el-input v-model="form.userInfo.number" size="medium" :maxlength="30" auto-complete="new-account" placeholder="请输入行政编号"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="4">
          <el-form-item label="工作时间" prop="workDate">
            <el-date-picker
              v-model="form.userInfo.workDate" type="date" placeholder="选择工作时间" format="yyyy-MM-dd" value-format="yyyy-MM-dd" class="i-el-date-picker">
            </el-date-picker>
          </el-form-item>
        </el-col>
        <el-col :span="4">
          <el-form-item label="入党时间" prop="partyDate">
            <el-date-picker
              v-model="form.userInfo.partyDate" type="date" placeholder="选择入党时间" format="yyyy-MM-dd" value-format="yyyy-MM-dd" class="i-el-date-picker">
            </el-date-picker>
          </el-form-item>
        </el-col>
        <el-col :span="4">
          <el-form-item label="转正时间" prop="correctionDate">
            <el-date-picker
              v-model="form.userInfo.correctionDate" type="date" placeholder="选择转正时间" format="yyyy-MM-dd" value-format="yyyy-MM-dd" class="i-el-date-picker">
            </el-date-picker>
          </el-form-item>
        </el-col>
        <el-col :span="4">
          <el-form-item label="联系电话" prop="phone">
            <el-input v-model="form.userInfo.phone" size="medium" :maxlength="30" auto-complete="new-account" placeholder="请输入联系电话" type="number"></el-input>
          </el-form-item>
        </el-col>
      </el-row>

      <!-- 人事信息 -->
      <el-row>
        <el-col :span="24"><div class="grid-content bg-purple-light form-title">人事信息</div></el-col>
      </el-row>
      <!-- 人员类别- 户口所在地- 户口性质- 婚姻状况- 政治面貌- 入党团日期-  -->
      <el-row>
        <el-col :span="4">
          <el-form-item label="人员类别" prop="personneltype">
            <el-input v-model="form.userInfoPersonnel.personneltype " size="medium" :maxlength="30" auto-complete="new-account" placeholder="请输入人员类别"/>
          </el-form-item>
        </el-col>
        <el-col :span="4">
          <el-form-item label="户口所在地" prop="hukouwhere">
            <el-input v-model="form.userInfoPersonnel.hukouwhere " size="medium" :maxlength="30" auto-complete="new-account" placeholder="请输入户口所在"/>
          </el-form-item>
        </el-col>
        <el-col :span="4">
          <el-form-item label="户口性质" prop="hukounature ">
            <el-input v-model="form.userInfoPersonnel.hukounature " size="medium" :maxlength="30" auto-complete="new-account" placeholder="请输入户口性质 "/>
          </el-form-item>
        </el-col>
        <el-col :span="4">
          <el-form-item label="婚姻状况" prop="maritalstatus">
            <el-select v-model="form.userInfoPersonnel.maritalstatus" placeholder="请选择婚姻状况">
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
          <el-form-item label="政治面貌" prop="politicalappearance">
            <el-select v-model="form.userInfoPersonnel.politicalappearance" placeholder="请选择政治面貌">
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
          <el-form-item label=" 入党团日期" prop="partydate ">
            <el-date-picker
              v-model="form.userInfoPersonnel.partydate" type="date" placeholder="选择入党团日期" format="yyyy-MM-dd" value-format="yyyy-MM-dd" class="i-el-date-picker">
            </el-date-picker>
          </el-form-item>
        </el-col>
      </el-row>
      <!--  所在支部- 党内职务- 任命时间- 其他职务- 兼评职称- 兼评时间- -->
      <el-row>
        <el-col :span="4">
          <el-form-item label="所在支部" prop="branchname ">
            <el-input v-model="form.userInfoPersonnel.branchname " size="medium" :maxlength="30" auto-complete="new-account" placeholder="请输入所在支部"/>
          </el-form-item>
        </el-col>
        <el-col :span="4">
          <el-form-item label="党内职务" prop="partypost">
            <el-input v-model="form.userInfoPersonnel.partypost " size="medium" :maxlength="30" auto-complete="new-account" placeholder="请输入党内职务"/>
          </el-form-item>
        </el-col>
        <el-col :span="4">
          <el-form-item label="任命时间" prop="servingdate">
            <el-date-picker
              v-model="form.userInfoPersonnel.servingdate" type="date" placeholder="选择任命时间" format="yyyy-MM-dd" value-format="yyyy-MM-dd" class="i-el-date-picker">
            </el-date-picker>
          </el-form-item>
        </el-col>
        <el-col :span="4">
          <el-form-item label="其他职务" prop="otherpost">
            <el-input v-model="form.userInfoPersonnel.otherpost " size="medium" :maxlength="30" auto-complete="new-account" placeholder="请输入其他职务"/>
          </el-form-item>
        </el-col>
        <el-col :span="4">
          <el-form-item label="兼评职称" prop="jianpingpost">
            <el-input v-model="form.userInfoPersonnel.jianpingpost " size="medium" :maxlength="30" auto-complete="new-account" placeholder="请输入兼评职称"/>
          </el-form-item>
        </el-col>
        <el-col :span="4">
          <el-form-item label="兼评时间" prop="jianpingdate">
            <el-date-picker
              v-model="form.userInfoPersonnel.jianpingdate" type="date" placeholder="选择兼评时间" format="yyyy-MM-dd" value-format="yyyy-MM-dd" class="i-el-date-picker">
            </el-date-picker>
          </el-form-item>
        </el-col>
      </el-row>
      <!--  工人工种- 工人等级- 工龄(年)- 工龄(月)- 聘任时间- 调入前单位- -->
      <el-row>
        <el-col :span="4">
          <el-form-item label="工人工种" prop="typeworker">
            <el-input v-model="form.userInfoPersonnel.typeworker " size="medium" :maxlength="30" auto-complete="new-account" placeholder="请输入工人工种"/>
          </el-form-item>
        </el-col>
        <el-col :span="4">
          <el-form-item label="工人等级" prop="gradeworker">
            <el-input v-model="form.userInfoPersonnel.gradeworker " size="medium" :maxlength="30" auto-complete="new-account" placeholder="请输入工人等级"/>
          </el-form-item>
        </el-col>
        <el-col :span="4">
          <el-form-item label="工龄(年)" prop="workyear">
            <el-input v-model="form.userInfoPersonnel.workyear " size="medium" :maxlength="30" auto-complete="new-account" placeholder="请输入工龄" type="number"/>
          </el-form-item>
        </el-col>
        <el-col :span="4">
          <el-form-item label="工龄(月)" prop="workmonth">
            <el-input v-model="form.userInfoPersonnel.workmonth " size="medium" :maxlength="30" auto-complete="new-account" placeholder="请输入工龄(月)" type="number"/>
          </el-form-item>
        </el-col>
        <el-col :span="4">
          <el-form-item label="聘任时间" prop="appointmenttime">
            <el-date-picker
              v-model="form.userInfoPersonnel.appointmenttime" type="date" placeholder="选择聘任时间" format="yyyy-MM-dd" value-format="yyyy-MM-dd" class="i-el-date-picker">
            </el-date-picker>
          </el-form-item>
        </el-col>
        <el-col :span="4">
          <el-form-item label="调入前单位" prop="beforecompany">
            <el-input v-model="form.userInfoPersonnel.beforecompany " size="medium" :maxlength="30" auto-complete="new-account" placeholder="请输入调入前单位" />
          </el-form-item>
        </el-col>
      </el-row>
      <!--  预定离院日期- 首次合同开始日期- 返聘到期日期- 家庭地址- -->
      <el-row>
        <el-col :span="5">
          <el-form-item label="预定离院日期" prop="reserveleavedate">
            <el-date-picker
              v-model="form.userInfoPersonnel.reserveleavedate" type="date" placeholder="选择预定离院日期" format="yyyy-MM-dd" value-format="yyyy-MM-dd" class="i-el-date-picker">
            </el-date-picker>
          </el-form-item>
        </el-col>
        <el-col :span="5">
          <el-form-item label="首次合同开始日期" prop="firstcontractdate">
            <el-date-picker
              v-model="form.userInfoPersonnel.firstcontractdate" type="date" placeholder="首次合同开始日期" format="yyyy-MM-dd" value-format="yyyy-MM-dd" class="i-el-date-picker">
            </el-date-picker>
          </el-form-item>
        </el-col>
        <el-col :span="5">
          <el-form-item label="返聘到期日期" prop="fanpinenddate">
            <el-date-picker
              v-model="form.userInfoPersonnel.fanpinenddate" type="date" placeholder="返聘到期日期" format="yyyy-MM-dd" value-format="yyyy-MM-dd" class="i-el-date-picker">
            </el-date-picker>
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label=" 家庭地址" prop="familyaddr ">
            <el-input v-model="form.userInfoPersonnel.familyaddr " size="medium" :maxlength="100" auto-complete="new-account" placeholder="请输入家庭地址 " show-word-limit/>
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
import UserInfoService from '@/services/UserInfoService'
import UserService from '../../../services/UserService'
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
    userList(res){
        if(res.code === 200){
            this.userLists = res.data.content
        }else {
            this.$message.error(res.message)
        }
    },
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
          let userInfo = {},userInfoPersonnel ={}
          if(this.type != 1){
            userInfo.name = data.name; // 姓名
            userInfo.sex = Number(data.sex);// 性别
            userInfo.number = data.number;// 行政编号
            userInfo.branchName = data.branchName;// 所在支部
            userInfo.department = data.department;// 所在科室
            userInfo.birthday = data.birthday;// 出生日期
            userInfo.education = data.education;// 学历
            userInfo.place = data.place;// 籍贯
            userInfo.nation = data.nation;// 民族
            userInfo.post = data.post;// 职务
            userInfo.title = data.title;// 职称
            userInfo.idEntity = data.idEntity;// 个人身份
            userInfo.workDate = data.workDate;// 工作时间
            userInfo.partyDate = data.partyDate;// 入党时间
            userInfo.correctionDate = data.correctionDate;// 转正时间
            userInfo.phone = data.phone;// 联系电话
            userInfo.idcard = data.idcard;// 身份证号

            this.form.userInfo = userInfo; //userInfo 表信息

            userInfoPersonnel.workyear = data.workyear;// 工龄(年)
            userInfoPersonnel.workmonth = data.workmonth;// 工龄(月)
            userInfoPersonnel.partypost = data.partypost; // 党内职务
            userInfoPersonnel.servingdate = data.servingdate;// 任命时间
            userInfoPersonnel.otherpost = data.otherpost;// 其他职务
            userInfoPersonnel.jianpingpost = data.jianpingpost;// 兼评职称
            userInfoPersonnel.jianpingdate = data.jianpingdate;// 兼评时间
            userInfoPersonnel.politicalappearance = data.politicalappearance;// 政治面貌
            userInfoPersonnel.partydate = data.partydate;// 入党团日期
            userInfoPersonnel.branchname = data.branchname;// 所在支部
            userInfoPersonnel.typeworker = data.typeworker;// 工人工种
            userInfoPersonnel.gradeworker = data.gradeworker;// 工人等级
            userInfoPersonnel.appointmenttime = data.appointmenttime;// 聘任时间
            userInfoPersonnel.maritalstatus = data.maritalstatus;// 婚姻状况
            userInfoPersonnel.hukounature = data.hukounature;// 户口性质
            userInfoPersonnel.hukouwhere = data.hukouwhere;// 户口所在地
            userInfoPersonnel.beforecompany = data.beforecompany;// 调入前单位
            userInfoPersonnel.reserveleavedate = data.reserveleavedate;// 预订离院日期
            userInfoPersonnel.firstcontractdate = data.firstcontractdate;// 首次合同开始日期
            userInfoPersonnel.familyaddr = data.familyaddr;// 家庭地址
            userInfoPersonnel.personneltype = data.personneltype;// 人员类别
            userInfoPersonnel.fanpinenddate = data.fanpinenddate;// 返聘日期

            this.form.userInfoPersonnel = userInfoPersonnel; // userInfoPersonnel 表信息

          }
    }
  },
  data() {
    return {
      isShow: false,
      title:'',
      userLists: [],
      form: {
        userInfo:{
          userid:'',
          number:'',
          name:'',
          branchName:'',
          department:'',
          birthday:'',
          education:'',
          place:'',
          nation:'',
          post:'',
          title:'',
          idEntity:'',
          workDate:'',
          partyDate:'',
          correctionDate:'',
          phone:'',
          idcard:''
        },
        userInfoPersonnel:{
          workyear:'',
          workmonth:'',
          partypost:'',
          servingdate:'',
          otherpost:'',
          jianpingpost:'',
          jianpingdate:'',
          politicalappearance:'',
          partydate:'',
          branchname:'',
          typeworker:'',
          gradeworker:'',
          appointmenttime:'',
          maritalstatus:'',
          hukounature:'',
          hukouwhere:'',
          beforecompany:'',
          reserveleavedate:'',
          firstcontractdate:'',
          familyaddr:'',
          personneltype:'',
          fanpinenddate:''
        }
      },
      placeArr:[
          '杭州','非杭州'
      ],
      rule: {
        name: [{
          validator: Validator.checkName,
          trigger: 'blur'
        }],
        number:[{
          validator: Validator.checkNumber,
          trigger: 'blur'
        }],
        branchName:[{
          validator: Validator.checkBranchName,
          trigger: 'blur'
        }],
        department:[{
          validator: Validator.checkDepartment,
          trigger: 'blur'
        }],
        birthday:[{
          validator: Validator.checkBirthday,
          trigger: 'blur'
        }],
        education:[{
          validator: Validator.checkEducation,
          trigger: 'blur'
        }],
        place:[{
          validator: Validator.checkPlace,
          trigger: 'blur'
        }],
        nation:[{
          validator: Validator.checkNation,
          trigger: 'blur'
        }],
        post:[{
          validator: Validator.checkPost,
          trigger: 'blur'
        }],
      },
      departmentOptions:[
          '急诊科','眼科','外科','皮肤科','中医科','康复科'
      ],
      educationBackgroundOptions:[
          '高中','大专','本科','硕士','博士'
      ],
      branchNameOptions:[
          '第一党支部','第二党支部','第三党支部','第四党支部','第五党支部'
      ],
      maritalStatusOptions:[
        {label:'未婚',value:'未婚'},
        {label:'已婚',value:'已婚'},
      ],
      optionss:[
        {label:'正式党员',value:1},
        {label:'预备党员',value:2},
        {label:'入党积极分子',value:3},
        {label:'入党申请人',value:4},
        {label:'未知',value:5},
      ],
      politicsStatusArr:[
        {label:'群众',value:'群众'},
        {label:'团员',value:'团员'},
        {label:'党员',value:'党员'},
      ]
    }
  },
  computed: {
    ...mapState([
      'userList',
    ]),
  },
//  async mounted() {
//    await this.getSubjectList()
//    await this.getDepartList()
//    await this.getGroupList()
//  },
  methods: {
    ...mapActions([
      'getUserListByName',
      'getUserInfoList'
    ]),
    // 添加教育经历
    addEducationExperience(){
        this.form.educationExperience.push({
          id:this.form.educationExperience.length+1
        })
    },
    selectUserByName(val){
      this.getUserListByName({key:'name',value:val,page:0,size:1000})
    },
    // 确定按钮
    sureClick() {
      this.$refs['form'].validate((valid) => {
        if(valid) {
          switch (this.type) {
            case 1: // 新增
              UserInfoService.addUserInfo(this.form).then((res) => {
                if (res.code === 200){
                  this.$message.success('添加'+res.message);
                  this.getUserInfoList();
                  this.isShow = false
                }else {
                  this.$message.error(res.message);
                }
              });
              break;
            case 2: // 修改
              // 注意不要修改密码
//          UserService.updateUser(this.form).then((res) => {
//            this.$message.success('已修改');
//
//            this.getUserList();
//            this.isShow = false
//          });
              break;
            default:
              break
          }
        }
      })
    },
    // 选择用户
    selectName(val){
      UserService.getUserInfo({id:val}).then((res) => {
          if(res.code === 200){
            this.form.userInfo.sex = Number(res.data.sex);
            this.form.userInfo.name = res.data.name;
            this.form.userInfo.userid = res.data.id;
          }else{
              this.$message.error(res.message)
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
