<template>
  <el-dialog :value="value" name="UserDialog" :visible="isShow" :before-close="handleClose" :title="title" width="750px" center>
    <el-form ref="form" :model="form" :rules="rule" label-width="100px" label-position="right">
      <tr>
        <td><el-form-item label="姓名" prop="nickname">
          <el-input v-model="form.nickname" size="medium" :maxlength="30" placeholder="请输入昵称"/>
        </el-form-item></td>
        <td><el-form-item label="性别" prop="gender">
          <el-radio v-model="form.gender" :label="0">女</el-radio>
          <el-radio v-model="form.gender" :label="1">男</el-radio>
          <el-radio v-model="form.gender" :label="-1">未知</el-radio>
        </el-form-item></td>
      </tr>
      <tr>
        <td><el-form-item label="民族" prop="nation ">
          <el-input v-model="form.nation" size="medium" :maxlength="30" auto-complete="new-account" placeholder="请输入民族"/>
        </el-form-item></td>
        <td><el-form-item label="籍贯" prop="nativePlace">
          <el-input v-model="form.nativePlace" size="medium" :maxlength="30" auto-complete="new-account" placeholder="请输入民族"/>
        </el-form-item></td>
      </tr>
      <tr>
        <td><el-form-item label="出生日期" prop="dateOfBirth ">
          <el-date-picker
            v-model="form.dateOfBirth" type="date" placeholder="选择日期" format="yyyy 年 MM 月 dd 日" value-format="yyyy-MM-dd">
          </el-date-picker>
        </el-form-item></td>
        <td><el-form-item label="学历" prop="education">
          <el-select v-model="form.education" placeholder="请选择学历">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
        </el-form-item></td>
      </tr>
      <tr>
        <td><el-form-item label="身份证号" prop="idCard">
          <el-input v-model="form.idCard" size="medium" :maxlength="30" auto-complete="new-account" placeholder="请输入身份证号" type="number"/>
        </el-form-item></td>
        <td><el-form-item label="手机号" prop="weChat ">
          <el-input v-model="form.mobilePhone" size="medium" :maxlength="11" auto-complete="new-account" placeholder="请输入手机号" type="number"/>
        </el-form-item></td>
      </tr>
      <tr>
        <td><el-form-item label="行政编号" prop="number ">
          <el-input v-model="form.number" size="medium" :maxlength="30" auto-complete="new-account" placeholder="请输入行政编号"/>
        </el-form-item></td>
        <td><el-form-item label="微信" prop="weChat ">
          <el-input v-model="form.weChat" size="medium" :maxlength="30" auto-complete="new-account" placeholder="请输入微信号"/>
        </el-form-item></td>
      </tr>
      <tr>
        <td><el-form-item label="行政职务" prop="administrative ">
          <el-input v-model="form.administrative" size="medium" :maxlength="30" auto-complete="new-account" placeholder="请输入行政职务"/>
        </el-form-item></td>
        <td><el-form-item label="邮箱" prop="email">
          <el-input v-model="form.email" size="medium" :maxlength="30" auto-complete="new-account" placeholder="请输入邮箱" />
        </el-form-item></td>
      </tr>
      <tr>
        <td><el-form-item label="办公室电话" prop="email">
          <el-input v-model="form.telephone" size="medium" :maxlength="30" auto-complete="new-account" placeholder="请输入办公室电话号码"/>
        </el-form-item></td>
        <td><el-form-item label="人员类型" prop="peopleType">
          <el-select v-model="form.peopleType" placeholder="请选择人员类型">
            <el-option
              v-for="item in peopleType"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
        </el-form-item></td>
      </tr>
      <tr>
        <td><el-form-item label="党支部" prop="partyBranch">
          <el-input v-model="form.partyBranch" size="medium" :maxlength="30" auto-complete="new-account" placeholder="请输入党支部"/>
        </el-form-item></td>
        <td><el-form-item label="党内职务" prop="partyPosts">
          <el-input v-model="form.partyPosts" size="medium" :maxlength="30" auto-complete="new-account" placeholder="请输入党内职务"/>
        </el-form-item></td>
        <!--<td><el-form-item label="出生日期" prop="dateOfBirth ">-->
          <!--<el-date-picker-->
            <!--v-model="form.dateOfBirth" type="date" placeholder="选择日期" format="yyyy 年 MM 月 dd 日" value-format="yyyy-MM-dd">-->
          <!--</el-date-picker>-->
        <!--</el-form-item></td>-->
      </tr>
      <tr>
        <td><el-form-item label="党籍状态" prop="dangType">
          <el-radio v-model="form.dangType" :label="0">正常</el-radio>
          <el-radio v-model="form.dangType" :label="1">停止党籍</el-radio>
        </el-form-item></td>
      </tr>
      <tr>
        <td v-if="this.form.peopleType == 1||this.form.peopleType == 2||this.form.peopleType == 3||this.form.peopleType == 4 "><el-form-item label="入党申请日期" prop="dateOfGo">
          <el-date-picker
            v-model="form.dateOfGo" type="date" placeholder="选择日期" format="yyyy 年 MM 月 dd 日" value-format="yyyy-MM-dd">
          </el-date-picker>
        </el-form-item></td>
        <td v-if="this.form.peopleType == 1||this.form.peopleType == 2||this.form.peopleType == 3"><el-form-item label="入党积极日期" prop="dataOfShor">
          <el-date-picker
            v-model="form.dataOfShor" type="date" placeholder="选择日期" format="yyyy 年 MM 月 dd 日" value-format="yyyy-MM-dd">
          </el-date-picker>
        </el-form-item></td>
      </tr>
      <tr>
        <td v-if="this.form.peopleType == 1"><el-form-item label="入党日期" prop="dangDate">
          <el-date-picker
            v-model="form.dangDate" type="date" placeholder="选择日期" format="yyyy 年 MM 月 dd 日" value-format="yyyy-MM-dd">
          </el-date-picker>
        </el-form-item></td>
      </tr>
      <tr>
        <td colspan="2"><el-form-item label="家庭住址" prop="description">
            <el-input type="textarea" v-model="form.address" :rows="2" :maxlength="100" placeholder="请输入家庭住址" show-word-limit/>
          </el-form-item></td>
      </tr>
      <tr>
        <td colspan="2"><el-form-item label="一句话的承诺" prop="description">
            <el-input type="textarea" v-model="form.description" :rows="5" :maxlength="255" placeholder="请输入一句话的承诺" show-word-limit/>
          </el-form-item></td>
      </tr>

    </el-form>
    <span slot="footer" class="dialog-footer">
      <el-button v-if="type == 0" size="medium" width="long" @click="cancelClick">关 闭</el-button>
      <template v-else>
        <el-button size="medium" width="long" @click="cancelClick">取 消</el-button>
        <el-button size="medium" width="long" type="primary" @click="sureClick">确 定</el-button>
      </template>
    </span>
  </el-dialog>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import Validator from '@/lib/validator'
import UserService from '@/services/UserService'
import ElFormItem from "../../../../node_modules/element-ui/packages/form/src/form-item";

export default {
  components: {ElFormItem},
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
    type(val) {
      let title = '';
      if(!val){
          val = 0
      }
      switch (val) {
        case 0:
          title = '查看信息';
          break;
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
      this.form.account = data.account;
      this.form.nickname = data.nickname;
      this.form.gender = data.gender;
      this.form.type = data.type;
      this.form.subject = data.subject;
      this.form.depart = data.depart;
      this.form.group = data.group;
      this.form.description = data.description;
      this.form.nation = data.nation;
      this.form.nativePlace = data.nativePlace;
      this.form.dateOfBirth = data.dateOfBirth;
      this.form.education = data.education;
      this.form.mobilePhone = data.mobilePhone;
      this.form.telephone = data.telephone;
      this.form.weChat = data.weChat;
      this.form.email = data.email;
      this.form.address = data.address;
      this.from.idCard = data.idCard;
      this.form.number = data.number;
      this.form.administrative = data.administrative;
      this.form.politicsStatus = data.politicsStatus;
      this.form.peopleType = data.peopleType;
      this.form.partyBranch = data.partyBranch;
      this.form.partyPosts = data.partyPosts;
      this.form.dateOfGo = data.dateOfGo;
      this.form.dataOfShor = data.dataOfShor;
      this.form.dangDate = data.dangDate;
      this.form.dangType = data.dangType;
    }
  },
  data() {
    return {
      isShow: false,
      title:'',
      form: {
        imageUrl:'',
        id: '',
        account: '',
        password: '',
        nickname: '',
        gender: -1,
        type: 2,
        subject: '',
        depart: '',
        group: '',
        description: '',
        nation:'',
        nativePlace:'',
        dateOfBirth:'',
        education:'',
        mobilePhone:'',
        telephone:'',
        weChat:'',
        email:'',
        address:'',
        administrative:'',
        politicsStatus:'',
        idCard:'',
        peopleType:'',
        partyBranch:'',
        partyPosts:'',
        dateOfGo:'',
        dataOfShor:'',
        dangDate:'',
        dangType:''
      },
      rule: {
        name: [{
          validator: Validator.checkName,
          trigger: 'blur'
        }]
      },
      options:[
        {label:'高中',value:1},
        {label:'专科',value:2},
        {label:'本科',value:3},
        {label:'研究生',value:4},
        {label:'硕士',value:5},
        {label:'硕士研究生',value:6},
        {label:'博士',value:7},
      ],
      politicsStatus:[
        {label:'群众',value:1},
        {label:'团员',value:2},
        {label:'党员',value:3},
      ],
      peopleType:[
        {label:'正式党员',value:1},
        {label:'预备党员',value:2},
        {label:'入党积极分子',value:3},
        {label:'入党申请人',value:4},
        {label:'位置',value:5},
      ]
    }
  },
  computed: {},

  methods: {
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
    border: 1px solid #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }
  .uploader-icon {
    font-size: 28px;
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
</style>
