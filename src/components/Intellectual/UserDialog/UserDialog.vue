<template>
  <el-dialog :value="value" name="UserDialog" :visible="isShow" :before-close="handleClose" :title="title" width="750px" center>
    <el-form ref="form" :model="form" :rules="rule" label-width="100px" label-position="right">
      <tr>
        <td><el-form-item label="姓名" prop="nickname">
          <el-select v-model="form.name" size="medium" filterable :filter-method="selectUserByName" placeholder="请选择姓名" @change="selectName">
            <el-option v-for="item in userInfoList" :key="item.id" :label="item.name" :value="item.id"></el-option>
          </el-select>
        </el-form-item></td>
        <td><el-form-item label="学历" prop="account">
          <el-select v-model="form.education" placeholder="请选择学历">
            <el-option v-for="item in educationBackgroundOptions" :key="item" :label="item" :value="item">
            </el-option>
          </el-select>
        </el-form-item></td>
      </tr>
      <tr>
        <td><el-form-item label="职称" prop="nickname">
          <el-input v-model="form.title" size="medium" :maxlength="30" auto-complete="new-account" placeholder="请输入职称"></el-input>
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
import UserInfoService from '../../../services/UserInfoService'
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
      this.form.gender = data.gender;
      this.form.type = data.type;
      this.form.group = data.group;
      this.form.userinfoid = data.userinfoid;
      this.form.education = data.education;
      this.form.title = data.title;
      this.form.account= data.account;
      this.form.name = data.name;
    }
  },
  data() {
    return {
      isShow: false,
      title:'',
      userLists:[],
      educationBackgroundOptions:[
        '高中','大专','本科','硕士','博士'
      ],
      form: {
        text:'',
          title:'',
        account: '',
        gender: -1,
        type: 2,
        name:'',
        userinfoid:'',
        education:'',
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
    ...mapState([
//      'subjectList',
//      'departList',
//      'groupList'
      'userInfoList',
      'userInfoGzqtList',
      ''
    ]),
  },
//  async mounted() {
//    await this.getSubjectList()
//    await this.getDepartList()
//    await this.getGroupList()
//  },
  methods: {
    selectUserByName(search){
      this.selectUserInfoListByNameOrNumberOrOffice({name:search,department:'',number:''});
    },
    selectName(val){
      this.form.userinfoid = val
    },
    ...mapActions([
      'getUserInfoGzqtList',
      'selectUserInfoListByNameOrNumberOrOffice',
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
          UserInfoService.addUserInfoGzqt(this.form).then((res) => {
            if(res.code===200){
              this.$message.success('已添加');
              this.getUserInfoGzqtList().then((res)=>{
              });
              this.isShow = false
            }else{
                this.$message.error(res.message);
            }

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
