<template>
  <el-dialog :value="value" name="UserDialog" :visible="isShow" :before-close="handleClose" :title="title" width="750px" center>
    <el-form ref="form" :model="form" :rules="rule" label-width="100px" label-position="right">
      <el-form-item label="选择用户" prop="userName">
        <el-select v-model="userName" size="medium" filterable :filter-method="selectUserByName" placeholder="请选择用户" @change="selectUser">
          <el-option v-for="item in userInfoList" :key="item.id" :label="item.name" :value="item.id"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="时间" prop="time">
        <el-date-picker v-model="form.time" type="date" placeholder="选择时间" format="yyyy 年 MM 月 dd 日" value-format="yyyy-MM-dd"></el-date-picker>
      </el-form-item>
      <el-form-item label="党派类型" prop="democraticparties">
        <el-select v-model="form.democraticparties" filterable size="medium" placeholder="请选择党派类型">
          <el-option v-for="item in democraticpartiesArr" :key="item.value" :label="item.name" :value="item.value"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="职位" prop="partyPost">
        <el-input v-model="form.partyPost" size="medium" :maxlength="30" auto-complete="new-account" placeholder="请输入职位"></el-input>
      </el-form-item>
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
  computed: {
    ...mapState([
      'userInfoList'
    ])
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
      this.form.democraticpartiesArr = data.democraticpartiesArr;
    }
  },
  data() {
    return {
      isShow: false,
      title:'',
      userName:'',
      form:{
        userinfoid:'',
        democraticparties:'',
        partyPost:'',
        time:'',
      },
      rule: {
        democraticparties: [{
          validator: Validator.checkdemocraticparties,
          trigger: 'blur'
        }]
      },
      democraticpartiesArr:[
        {value:0,name:'中国国民党革命委员会'},
        {value:1,name:'中国民主同盟'},
        {value:2,name:'中国民主建国会'},
        {value:3,name:'中国民主促进会'},
        {value:4,name:'中国农工民主党'},
        {value:5,name:'中国致公党'},
        {value:6,name:'九三学社'},
        {value:7,name:'太晚民主自治同盟'},
      ]
    }
  },
  methods: {
    ...mapActions([
      'selectUserInfoListByNameOrNumberOrOffice',
      'getUserInfoMzdpList'
    ]),
    selectUserByName(search){
      this.selectUserInfoListByNameOrNumberOrOffice({name:search,department:'',number:''});
    },
    selectUser(val){
        this.form.userinfoid = val
    },
    // 确定按钮
    sureClick() {
      this.$refs['form'].validate((valid) => {
        if (valid) {
          switch (this.type) {
            case 1: // 新增
              UserInfoService.addUserInfoMzdp(this.form).then((res) => {
                if(res.code == 200){
                  this.$message.success('添加'+res.message);
                  this.$refs['form'].resetFields();
                  this.getUserInfoMzdpList();
                  this.isShow = false
                }else{
                  this.$message.error(res.message);
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
