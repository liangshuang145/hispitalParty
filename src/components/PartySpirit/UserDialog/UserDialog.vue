<template>
  <el-dialog :value="value" name="UserDialog" :visible="isShow" :before-close="handleClose" :title="title" width="900px" center>
    <el-form ref="form" :model="form" :rules="rule" label-width="110px" label-position="right">
      <tr>
        <td><el-form-item label="标题" prop="nation ">
            <el-input v-model="form.nation" size="medium" :maxlength="30" auto-complete="new-account" placeholder="请输入标题"/>
          </el-form-item></td>
        <td><el-form-item label="发布日期" prop="dateOfBirth ">
          <el-date-picker
            v-model="form.dateOfBirth" type="datetime" placeholder="选择日期" >
          </el-date-picker>
        </el-form-item></td>
      </tr>
      <!--<template v-for="(item,index) in form.peopletypes">-->
      <tr>
        <td><el-form-item label="审核人" prop="peopletype">
          <el-select v-model="form.name" @change="changegive" filterable placeholder="请选择人员" filterable>
            <el-option
              v-for="item1 in spirituserList"
              :key="item1.value"
              :label="item1.name"
              :value="item1.id">
            </el-option>
          </el-select>
        </el-form-item></td>
        <td><el-form-item label="所属组织/部门" prop="deption ">
          <el-input v-model="form.deption" size="medium" :maxlength="30" auto-complete="new-account" disabled placeholder=""/>
        </el-form-item></td>
      </tr>
      <!--</template>-->
      <tr>
        <td><el-form-item label="类型" prop="peopletype">
          <el-select v-model="form.type" filterable placeholder="请选择类型">
            <el-option
              v-for="item in optionss"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
        </el-form-item></td>
        <td><el-form-item label="状态" prop="peopletype">
          <el-select v-model="form.state" filterable placeholder="请选择状态">
            <el-option
              v-for="item in optionss"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
        </el-form-item></td>
      </tr>

      <tr>
        <td colspan="2">
          <UEditor :config=ueConfig ref="addUeditor" id="addUeditor"></UEditor>
        </td>
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
import UEditor from '../NavUeditor/NavUeditor.vue'
import SpiriService from '@/services/SpiritService'
import Utils from '../Utils/utils'
import Bus from '../Bus/bus'
export default {
  components: {ElFormItem,
    UEditor,Utils,Bus},
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
          title = '新增文章';
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
      this.form.idCard = data.idCard;
      this.form.number = data.number;
      this.form.administrative = data.administrative;
      this.form.politicsStatus = data.politicsStatus;
      this.form.peopletype = data.peopletype;
      this.form.dangtype = data.dangtype;
      this.form.dateOfgo = data.dateOfgo;
      this.form.dataofshor = data.dataofshor;
      this.form.dangdate = data.dangdate;
    }
  },
  data() {
    return {
      //              富文本编辑器相关
      ueConfig: {
        // 可以在此处定义工具栏的内容

        toolbars: [[
          'fullscreen',  '|', 'undo', 'redo', '|',
          'bold', 'italic', 'underline', 'fontborder', 'strikethrough', 'superscript', 'subscript', 'removeformat', 'formatmatch', 'autotypeset', 'blockquote', 'pasteplain', '|', 'forecolor', 'backcolor', 'insertorderedlist', 'insertunorderedlist', 'selectall', 'cleardoc', '|',
          'rowspacingtop', 'rowspacingbottom', 'lineheight', '|',
          'customstyle', 'paragraph', 'fontfamily', 'fontsize', '|',
          'directionalityltr', 'directionalityrtl', 'indent', '|',
//          'justifyleft', 'justifycenter', 'justifyright', 'justifyjustify', '|', 'touppercase', 'tolowercase', '|',
//          'link', 'unlink', 'anchor', '|', 'imagenone', 'imageleft', 'imageright', 'imagecenter', '|',
//          'insertimage', 'emotion', 'scrawl', 'insertvideo', 'music', 'attachment', 'insertframe', 'pagebreak', 'template', 'background', '|',
//          'horizontal', 'date', 'time', 'spechars', 'snapscreen', 'wordimage', '|',
//          'inserttable', 'deletetable', 'insertparagraphbeforetable', 'insertrow', 'deleterow', 'insertcol', 'deletecol', 'mergecells', 'mergeright', 'mergedown', 'splittocells', 'splittorows', 'splittocols', 'charts', '|',
//          'print', 'preview', 'searchreplace', 'help', 'drafts'
        ]],
        zIndex:3000,
        elementPathEnabled : false,// 隐藏下方的元素路径
        autoHeightEnabled: false,
        autoFloatEnabled: true,
        initialContent:'请输入内容',   //初始化编辑器的内容,也可以通过textarea/script给值，看官网例子
        autoClearinitialContent:true, //是否自动清除编辑器初始内容，注意：如果focus属性设置为true,这个也为真，那么编辑器一上来就会触发导致初始化的内容看不到了
        initialFrameWidth: null,
        initialFrameHeight: 300,
        BaseUrl: '',
        UEDITOR_HOME_URL: 'static/ueditor/'
      },
      isShow: false,
      title:'新增文章',
      form: {
        imageUrl:'',
        id: '',
        account: '',
        password: '',
        nickname: '',
        gender: -1,
        type: 1,
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
        dangtype: '',
        dateOfgo:'',
        dataofshor:'',
        dangdate:'',
        //接收的用户
        peopletypes:[{}],
        spirituserList:[],
        //部门
        deption:'',

        //新建的几个数据
        nation:'',
        dateOfBirth:'',
        name:'',
        deption:'',
        type:'',
        state:'',
      },
      jsonlook:{
        name:'',
        time:'',
        content:'',
        fileIds:'',
        imageIds:'',
        userId:'',
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
        {label:'未审核',value:1},
        {label:'已审核',value:2},
      ],
      politicsStatus:[
        {label:'群众',value:1},
        {label:'团员',value:2},
        {label:'党员',value:3},
      ]
    }
  },
  computed: {
   ...mapState([
//      'subjectList',
//      'departList',
//      'groupList',
      'spirituserList'
    ]),
  },
//  async mounted() {
//    await this.getSubjectList()
//    await this.getDepartList()
//    await this.getGroupList()
//  },
  mounted() {
    this.getSpiritUsers()
//    this.spirituserList()
  },
  methods: {
    ...mapActions([
//      'getSubjectList',
//      'getDepartList',
//      'getGroupList',
//      'getUserList',
      'getSpiritUsers',
    ]),
    changegive(old){
      SpiriService.getSpirituserSubject({id:old}).then((res) => {
        if(res.code === 200){
           this.form.deption=res.data;
        }else{
          this.$message.error(res.message);
        }
      })
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
        case 1:
//            // 新增`
//          UserService.addUser(this.form).then((res) => {
//            this.$message.success('已添加');
//
//            this.getUserList();
//            this.isShow = false
//          });
//          break;
//          this.

          let _this = this;
          // 获取富文本中的信息
          let contentHtml = this.$refs.addUeditor.getUEContent();// html格式
          let content = this.$refs.addUeditor.getContentTxt();//纯文本形式
          this.jsonlook.name = this.form.nation;
          this.jsonlook.time = Utils.formatTime11111(this.form.dateOfBirth);
          this.jsonlook.content = contentHtml;
          this.jsonlook.fileIds = '';
          this.jsonlook.imageIds = '';
          this.jsonlook.userId = this.form.name;
          console.log("发起请求前的jsonlook",this.jsonlook);

          SpiriService.getSpiritadd(this.jsonlook).then((res)=>{
            if(res.code ===200){
              this.$message.success(res.message);
              //只是作为一个触发时间
              Bus.$emit('val', "1");
            }else{
                this.$message.error(res.message);
            }
          })

        case 2: // 修改
          // 注意不要修改密码
          UserService.updateUser(this.form).then((res) => {
            this.$message.success('已修改');

//            this.getUserList();
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
  },

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
