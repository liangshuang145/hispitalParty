<template>
  <el-dialog :value="value" name="Entering" :visible.sync="isShow" :before-close="handleClose" :title="title"
             :modal-append-to-body='false' width="1130px" center>

    <el-dialog title="内层 Dialog" :visible.sync="innerVisible1" append-to-body>

    </el-dialog>
    <el-dialog title="内层 Dialog" :visible.sync="innerVisible2" append-to-body>

    </el-dialog>
    <el-dialog title="内层 Dialog" :visible.sync="innerVisible3" append-to-body>

    </el-dialog>
    <el-table :data="gridData1" max-height="450" highlight-current-row @current-change="handleTableChange">
      <el-table-column property="text01" label="组织名称"></el-table-column>
      <el-table-column property="text02" label="指标进度"></el-table-column>
      <!--<el-table-column property="text03" label="指标简介"></el-table-column>-->
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button
            size="mini"
            type="primary"
            @click="handleEdit(scope.$index, scope.row)">查看详情
          </el-button>
          <el-button
            size="mini"
            type="primary"
            @click="handleDelete(scope.$index, scope.row)">查看附件
          </el-button>
          <el-button
            size="mini"
            type="primary"
            @click="selectpicture(scope.$index, scope.row)">查看图片
          </el-button>
        </template>
      </el-table-column>
    </el-table>


    <span slot="footer" class="dialog-footer">
      <!--<el-button v-if="type == 0" size="medium" width="long" @click="cancelClick">关 闭</el-button>-->
      <template>
        <el-button size="medium" width="long" @click="cancelClick">取 消</el-button>
        <el-button size="medium" width="long" type="primary" @click="sureClick">确 定</el-button>
      </template>
    </span>
  </el-dialog>
</template>

<script>
  import {mapState, mapActions} from 'vuex'
  import Validator from '@/lib/validator'
  import UserService from '@/services/UserService'
  import ElFormItem from "../../../../node_modules/element-ui/packages/form/src/form-item";

  export default {
    components: {ElFormItem},
    name: 'Entering',
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
        if (!val) {
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
        this.form.peopleType = data.peopleType;
        this.form.partyBranch = data.partyBranch;
        this.form.partyPosts = data.partyPosts
        this.form.equipment = data.equipment;
      }
    },
    data() {
      return {
        innerVisible1:false,
        innerVisible2:false,
        innerVisible3:false,
        gridData1:[{
          text01:'111',
          text02:'222',
          text03:'333'
        },{
          text01:'111a',
          text02:'222a',
          text03:'333a'
        },{
          text01:'111a',
          text02:'222a',
          text03:'333a'
        },],
        textall: [
          {
            num01: '',
            num02: '',
            num03: '',
            num04: '',
            num05: '',
            num06: '',
            num07: '',
            num08: '',
            num09: '',
            num10: '',
            num11: '',
            num12: '',
          },
          {
            num01: '',
            num02: '',
            num03: '',
            num04: '',
            num05: '',
            num06: '',
            num07: '',
            num08: '',
            num09: '',
            num10: '',
            num11: '',
            num12: '',
          },
          {
            num01: '',
            num02: '',
            num03: '',
            num04: '',
            num05: '',
            num06: '',
            num07: '',
            num08: '',
            num09: '',
            num10: '',
            num11: '',
            num12: '',
          },
          {
            num01: '',
            num02: '',
            num03: '',
            num04: '',
            num05: '',
            num06: '',
            num07: '',
            num08: '',
            num09: '',
            num10: '',
            num11: '',
            num12: '',
          },
          {
            num01: '',
            num02: '',
            num03: '',
            num04: '',
            num05: '',
            num06: '',
            num07: '',
            num08: '',
            num09: '',
            num10: '',
            num11: '',
            num12: '',
          },
          {
            num01: '',
            num02: '',
            num03: '',
            num04: '',
            num05: '',
            num06: '',
            num07: '',
            num08: '',
            num09: '',
            num10: '',
            num11: '',
            num12: '',
          },
          {
            num01: '',
            num02: '',
            num03: '',
            num04: '',
            num05: '',
            num06: '',
            num07: '',
            num08: '',
            num09: '',
            num10: '',
            num11: '',
            num12: '',
          }
        ],
        isShow: false,
        title: '',
        value3: '',
        type: '',
        form: {
          imageUrl: '',
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
          nation: '',
          nativePlace: '',
          dateOfBirth: '',
          education: '',
          mobilePhone: '',
          telephone: '',
          weChat: '',
          email: '',
          address: '',
          administrative: '',
          politicsStatus: '',
          idCard: '',
          peopleType: '',
          partyBranch: '',
          partyPosts: '',
          equipment: '',
          value: '',
          value2: '',
          options: '',
          options2: '',
        },
        rule: {
          name: [{
            validator: Validator.checkName,
            trigger: 'blur'
          }]
        },
        options: [
          {label: '高中', value: 1},
          {label: '专科', value: 2},
          {label: '本科', value: 3},
          {label: '研究生', value: 4},
          {label: '硕士', value: 5},
          {label: '硕士研究生', value: 6},
          {label: '博士', value: 7},
        ],
        politicsStatus: [
          {label: '群众', value: 1},
          {label: '团员', value: 2},
          {label: '党员', value: 3},
        ],
        peopleType: [
          {label: '正式党员', value: 1},
          {label: '预备党员', value: 2},
          {label: '入党积极分子', value: 3},
          {label: '入党申请人', value: 4},
          {label: '位置', value: 5},
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
      handleEdit(index, row) {
        console.log(index, row);
        this.innerVisible1=true;

      },
      handleDelete(index, row) {
        console.log(index, row);
      },
      selectpicture(index, row){
        console.log(index, row);
      },
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
