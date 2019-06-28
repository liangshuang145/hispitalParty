<template>
  <el-dialog :value="value" name="UserDialog" :visible="isShow" :before-close="handleClose" :title="title" width="750px" center>
    <el-form ref="form" :model="form" :rules="rule" label-width="100px" label-position="right">
      <el-form-item label=" 姓名" prop="name">
        <el-select v-model="form.name" size="medium" filterable :filter-method="selectUserByName" placeholder="请选择姓名" @change="selectName">
          <el-option v-for="item in userInfoList" :key="item.id" :label="item.name" :value="item.id"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="党员状态" prop="type">
        <el-select v-model="form.type" placeholder="请选择党员状态">
          <el-option v-for="item in typeOptions" :key="item.value" :label="item.label" :value="item.value">
          </el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="党籍是否在籍" prop="state">
        <el-select v-model="form.state" placeholder="党籍是否在籍">
          <el-option v-for="item in stateOptions" :key="item.value" :label="item.label" :value="item.value">
          </el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="党内职务" prop="partyPost">
        <el-input v-model="form.partyPost" size="medium" :maxlength="30" auto-complete="new-account" placeholder="请输入党内职务"></el-input>
      </el-form-item>
      <el-form-item label="所属支部" prop="partyBranch">
        <el-input v-model="form.partyBranch" size="medium" disabled :maxlength="30" auto-complete="new-account" placeholder="请输入所属支部"></el-input>
      </el-form-item>
      <el-form-item label="入党申请时间" prop="applyDate" v-if="form.type === 2 || form.type === 1 || form.type === 5 || form.type === 3 || form.type === 4 ">
        <el-date-picker v-model="form.applyDate" type="date" placeholder="选择入党申请时间" format="yyyy-MM-dd" value-format="yyyy-MM-dd" class="i-el-date-picker">
        </el-date-picker>
      </el-form-item>
      <el-form-item label="建档对象时间" prop="potDate" v-if="form.type === 3 || form.type === 1 || form.type === 5 || form.type === 4" >
        <el-date-picker v-model="form.potDate" type="date" placeholder="选择建档对象时间" format="yyyy-MM-dd" value-format="yyyy-MM-dd" class="i-el-date-picker">
        </el-date-picker>
      </el-form-item>
      <el-form-item label="积极分子时间" prop="activistDate" v-if="form.type === 4 || form.type === 1 || form.type === 5">
        <el-date-picker v-model="form.activistDate" type="date" placeholder="选择积极分子时间" format="yyyy-MM-dd" value-format="yyyy-MM-dd" class="i-el-date-picker">
        </el-date-picker>
      </el-form-item>
      <el-form-item label="预备党员时间" prop="readyDate" v-if="form.type === 5 || form.type === 1">
        <el-date-picker v-model="form.readyDate" type="date" placeholder="选择预备党员时间" format="yyyy-MM-dd" value-format="yyyy-MM-dd" class="i-el-date-picker">
        </el-date-picker>
      </el-form-item>
      <el-form-item label="入党时间" prop="partyDate" v-if="form.type === 1">
        <el-date-picker v-model="form.partyDate" type="date" placeholder="选择入党时间" format="yyyy-MM-dd" value-format="yyyy-MM-dd" class="i-el-date-picker">
        </el-date-picker>
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
import UserInfoService from '@/services/UserInfoService'
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

    }
  },
  data() {
    return {
      isShow: false,
      title:'',
      form: {
        type:0,
        state:'',
        partyPost:'',
        partyBranch:'',
        applyDate:'',
        potDate:'',
        activistDate:'',
        readyDate:'',
        partyDate:'',
        userinfoid:'',

      },
      rule: {
        name: [{
          validator: Validator.checkName,
          trigger: 'blur'
        }]
      },
      typeOptions:[
        {label:'未入党',value:0},
        {label:'党员',value:1},
        {label:'入党申请人',value:2},
        {label:'建档对象',value:3},
        {label:'入党积极分子',value:4},
        {label:'预备党员',value:5},
      ],
      stateOptions:[
        {label:'停止党籍',value:0},
        {label:'正常党籍',value:1},
      ]
    }
  },
  computed: {
    ...mapState([
      'userInfoList',
//      'departList',
//      'groupList'
    ]),
  },
//  async mounted() {
//    await this.getSubjectList()
//    await this.getDepartList()
//    await this.getGroupList()
//  },
  methods: {
    ...mapActions([
      'selectUserInfoListByNameOrNumberOrOffice',
      'getUserInfoPartyList'
    ]),
    selectUserByName(val){
      this.selectUserInfoListByNameOrNumberOrOffice({name:val,department:'',number:''});
    },
    selectName(id){
      this.form.userinfoid = id;
      UserInfoService.getUserInfo({id:id}).then((res) => {
        if(res.code === 200){
            this.form.partyBranch = res.data[0].userInfoPersonnel.branchname;
        }else{
          this.$message.error(res.message);
        }
      })
    },
    // 确定按钮
    sureClick() {
      switch (this.type) {
        case 1: // 新增`
          UserInfoService.addUserInfoParty(this.form).then((res) => {
            if(res.code === 200){
              this.$message.success('添加'+res.message);
              this.$refs['form'].resetFields();
              this.getUserInfoPartyList({type:'党员'});
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
