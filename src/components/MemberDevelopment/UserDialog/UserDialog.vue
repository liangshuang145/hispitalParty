<template>
  <el-dialog :value="value" name="UserDialog" :visible="isShow" :before-close="handleClose" :title="title" width="750px" center>
    <el-form ref="form" :model="form" :rules="rule" label-width="100px" label-position="right">
      <tr>
        <td><el-form-item label="上传头像" prop="imgUrl">
            <el-upload class="avatar-uploader" action="https://jsonplaceholder.typicode.com/posts/" :show-file-list="false" :on-success="handleAvatarSuccess">
              <img v-if="form.imageUrl" :src="form.imageUrl" class="avatar">
              <i v-else class="el-icon-plus uploader-icon"></i>
            </el-upload>
          </el-form-item></td>
      </tr>
      <tr>
        <td><el-form-item label="登录名" prop="account">
            <el-input v-model="form.account" size="medium" :maxlength="30" auto-complete="new-account" placeholder="请输入账号"/>
          </el-form-item></td>
        <td><el-form-item label="用户名" prop="nickname">
          <el-input v-model="form.nickname" size="medium" :maxlength="30" placeholder="请输入昵称"/>
        </el-form-item></td>
      </tr>
      <tr>
        <td v-if="type == 0 || type == 1"><el-form-item v-if="type == 0 || type == 1" label="密码" prop="password">
            <el-input type="password" v-model="form.password" size="medium" :maxlength="30" auto-complete="new-password" placeholder="请输入密码"/>
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
        <td><el-form-item label="身份证号" prop="idCard">
          <el-input v-model="form.idCard" size="medium" :maxlength="30" auto-complete="new-account" placeholder="请输入身份证号" type="number"/>
        </el-form-item></td>
      </tr>
      <tr>
        <td><el-form-item label="人员类型" prop="peopletype">
          <el-select v-model="form.peopletype" placeholder="请选择类型">
            <el-option
              v-for="item in optionss"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
        </el-form-item></td>
        <td><el-form-item label="党籍状态" prop="dangtype">
          <el-radio v-model="form.dangtype" :label="0">正常</el-radio>
          <el-radio v-model="form.dangtype" :label="1">停止党籍</el-radio>
        </el-form-item></td>
      </tr>
      <tr>
        <td><el-form-item label="行政编号" prop="number ">
          <el-input v-model="form.number" size="medium" :maxlength="30" auto-complete="new-account" placeholder="请输入行政编号"/>
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
        <td><el-form-item label="行政职务" prop="administrative ">
          <el-input v-model="form.administrative" size="medium" :maxlength="30" auto-complete="new-account" placeholder="请输入行政职务"/>
        </el-form-item></td>
        <td><el-form-item label="政治面貌" prop="politicsStatus ">
          <el-select v-model="form.education" placeholder="请选择政治面貌">
            <el-option
              v-for="item in politicsStatus"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
          <!--<el-input v-model="form.politicsStatus" size="medium" :maxlength="30" auto-complete="new-account" placeholder="请输入邮箱" />-->
        </el-form-item></td>
      </tr>
      <tr>
        <td><el-form-item label="微信" prop="weChat ">
          <el-input v-model="form.weChat" size="medium" :maxlength="30" auto-complete="new-account" placeholder="请输入微信号"/>
        </el-form-item></td>
        <td><el-form-item label="邮箱" prop="email">
          <el-input v-model="form.email" size="medium" :maxlength="30" auto-complete="new-account" placeholder="请输入邮箱" />
        </el-form-item></td>
      </tr>
      <tr>
        <td><el-form-item label="手机" prop="weChat ">
          <el-input v-model="form.mobilePhone" size="medium" :maxlength="11" auto-complete="new-account" placeholder="请输入手机号" type="number"/>
        </el-form-item></td>
        <td><el-form-item label="办公室电话" prop="email">
          <el-input v-model="form.telephone" size="medium" :maxlength="30" auto-complete="new-account" placeholder="请输入办公室电话号码"/>
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

      <!--<el-form-item label="类型" prop="type">-->
        <!--<el-radio v-model="form.type" :label="0">超级管理员</el-radio>-->
        <!--<el-radio v-model="form.type" :label="1">管理员</el-radio>-->
        <!--<el-radio v-model="form.type" :label="2">成员</el-radio>-->
      <!--</el-form-item>-->
      <!--<el-form-item label="机构" prop="subject">-->
        <!--<el-select v-model="form.subject" size="medium" placeholder="请选择机构" @change="selectSubject">-->
          <!--<el-option v-for="item in subjectList" :key="item.id" :label="item.name" :value="item.id"/>-->
        <!--</el-select>-->
      <!--</el-form-item>-->
      <!--<el-form-item label="组织(部门)" prop="depart">-->
        <!--<el-select v-model="form.depart" size="medium" placeholder="请选择组织(部门)" @change="selectDepart">-->
          <!--<el-option v-for="item in departList" :key="item.id" :label="item.name" :value="item.id"/>-->
        <!--</el-select>-->
      <!--</el-form-item>-->
      <!--<el-form-item label="行政(小组)" prop="group">-->
        <!--<el-select v-model="form.group" size="medium" placeholder="请选择行政(小组)" @change="selectGroup">-->
          <!--<el-option v-for="item in groupList" :key="item.id" :label="item.name" :value="item.id"/>-->
        <!--</el-select>-->
      <!--</el-form-item>-->

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
      this.form.peopletype = data.peopletype;
      this.form.dangtype = data.dangtype;
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
        peopletype:'',
        dangtype: ''
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
      optionss:[
        {label:'正式党员',value:1},
        {label:'预备党员',value:2},
        {label:'入党积极分子',value:3},
        {label:'入党申请树',value:4},
        {label:'未知',value:5},
      ],
      politicsStatus:[
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
    ...mapActions([
      'getSubjectList',
      'getDepartList',
      'getGroupList',
      'getUserList'
    ]),
    selectSubject(val) {
      this.form.subject = val
    },
    selectDepart(val) {
      this.form.depart = val
    },
    selectGroup(val) {
      this.form.group = val
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
