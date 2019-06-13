<template>
  <el-dialog :value="value" name="UserDialog" :visible="isShow" :before-close="handleClose" :title="title" width="750px" center>
    <el-form ref="form" :model="form" :rules="rule" label-width="100px" label-position="right">
      <tr>
        <td><el-form-item label="编号" prop="account">
            <el-input v-model="form.account" size="medium" :maxlength="30" auto-complete="new-account" placeholder="请输入编号"/>
          </el-form-item></td>
        <td><el-form-item label="姓名" prop="nickname">
          <el-input v-model="form.nickname" size="medium" :maxlength="30" placeholder="请输入姓名"/>
        </el-form-item></td>
      </tr>
      <tr>
        <td><el-form-item label="性别" prop="gender">
          <el-radio v-model="form.gender" :label="0">女</el-radio>
          <el-radio v-model="form.gender" :label="1">男</el-radio>
          <el-radio v-model="form.gender" :label="-1">未知</el-radio>
        </el-form-item></td>
        <td><el-form-item label="是否党员" prop="gender">
          <el-radio v-model="form.gender" :label="0">是</el-radio>
          <el-radio v-model="form.gender" :label="1">否</el-radio>
        </el-form-item></td>
      </tr>
      <tr>
        <td><el-form-item  label="职位" prop="password">
          <el-input  v-model="form.password" size="medium" :maxlength="30"  placeholder="请输入职位"/>
        </el-form-item></td>
        <td><el-form-item  label="身份证号" prop="password">
          <el-input  v-model="form.password" size="medium" :maxlength="30"  placeholder="请输入身份证号" type="number"/>
        </el-form-item></td>
      </tr>
      <tr>
        <td><el-form-item label="工作时间" prop="gender">
          <el-date-picker
            v-model="form.dateOfBirth" type="date" placeholder="选择工作时间" format="yyyy 年 MM 月 dd 日" value-format="yyyy-MM-dd">
          </el-date-picker>
          </el-form-item></td>
        <td><el-form-item label="微信" prop="weChat ">
          <el-input v-model="form.weChat" size="medium" :maxlength="30" auto-complete="new-account" placeholder="请输入微信号"/>
        </el-form-item></td>
      </tr>
      <tr>
        <td><el-form-item label="手机" prop="weChat ">
          <el-input v-model="form.mobilePhone" size="medium" :maxlength="11" auto-complete="new-account" placeholder="请输入手机号" type="number"/>
        </el-form-item></td>
        <td><el-form-item label="邮箱" prop="email">
          <el-input v-model="form.email" size="medium" :maxlength="30" auto-complete="new-account" placeholder="请输入邮箱" />
        </el-form-item></td>
      </tr>
      <tr>
        <td colspan="2"><el-form-item label="家庭住址" prop="description">
            <el-input type="textarea" v-model="form.address" :rows="2" :maxlength="100" placeholder="请输入家庭住址" show-word-limit/>
          </el-form-item></td>
      </tr>
      <tr>
        <td colspan="2"><el-form-item label="内容" prop="description">
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
        politicsStatus:''
      },
      rule: {
        name: [{
          validator: Validator.checkName,
          trigger: 'blur'
        }]
      },
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
