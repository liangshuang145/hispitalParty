#@Author: bjy @Date: 2019/6/24 16:15 #
<template>
  <el-dialog :value="value" name="WorkIndicatorParticularsDialog" :visible.sync="isShow" :before-close="handleClose" :title="title" width="750px"
             :modal-append-to-body='false' append-to-body center>
    <el-form ref="form" :model="form" :rules="rule" label-width="100px" label-position="right">
      <el-form-item label="指标名称" prop="name">
        <el-input v-model="form.name" size="medium" :maxlength="30" auto-complete="new-account" placeholder="请输入指标名称"></el-input>
      </el-form-item>
      <el-form-item label="所属指标" prop="indicatorId">
        <el-select v-model="form.indicatorId" size="medium" filterable placeholder="请选择指标" @change="selectIndicatorId">
          <el-option v-for="item in workIndicatorList" :key="item.id" :label="item.name" :value="item.id"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="考核对象" prop="assessmentObject">
        <el-radio-group v-model="assessmentObject">
          <el-radio :label="item.label" v-for="item in assessmentObjectArr" :key="item.label">{{item.name}}</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="组织(部门)" prop="departId">
        <el-select v-model="form.departId" size="medium" filterable placeholder="请选择组织(部门)" @change="selectDepartId">
          <el-option v-for="item in departList" :key="item.id" :label="item.name" :value="item.id"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="行政(小组)" prop="groupId">
        <el-select v-model="form.groupId" size="medium" filterable placeholder="请选择行政(小组)" @change="selectGroupId">
          <el-option v-for="item in groupList" :key="item.id" :label="item.name" :value="item.id"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="个人用户" prop="userId">
        <el-select v-model="form.userId" size="medium" filterable placeholder="请选择个人用户" @change="selectUserId">
          <el-option v-for="item in userLists" :key="item.id" :label="item.name" :value="item.id"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="所属年度" prop="year">
        <el-date-picker v-model="form.year" type="year" placeholder="选择指标详情所属年度" value-format="yyyy"></el-date-picker>
      </el-form-item>
      <el-form-item label="考核月份" prop="month">
        <el-date-picker v-model="form.month" type="month" placeholder="选择指标详情所属月份" value-format="MM"></el-date-picker>
      </el-form-item>
      <el-form-item label="图片上传">
        <el-upload class="upload-demo" action="http://192.168.1.17/work/addImage" :on-preview="handlePreviewImg" :on-remove="handleRemoveImg" :file-list="imageList"
                   list-type="picture" :on-success="uploadImageSuccess" :on-error="uploadImageError">
          <el-button size="small" type="primary">点击上传</el-button>
          <!--<div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>-->
        </el-upload>
      </el-form-item>
      <el-form-item label="附件上传">
        <el-upload class="upload-demo" action="http://192.168.1.17/work/addFile" :on-preview="handlePreviewFile" :on-remove="handleRemoveFile" :file-list="fileList"
                    :on-success="uploadFileSuccess" :on-error="uploadFileError" name="file">
          <el-button size="small" type="primary">点击上传</el-button>
          <!--<div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>-->
        </el-upload>
      </el-form-item>
      <el-form-item label="指标情况" prop="completion">
        <el-input v-model="form.completion" size="medium" :maxlength="30" auto-complete="new-account" placeholder="请输入指标情况"></el-input>
      </el-form-item>
      <el-form-item label="指标简介" prop="intro">
        <el-input type="textarea" v-model="form.intro" :rows="5" :maxlength="255" placeholder="请输入指标简介" show-word-limit></el-input>
      </el-form-item>

    </el-form>
    <!-- 操作 -->
    <span slot="footer" class="dialog-footer">
      <!--<el-button v-if="type == 0" size="medium" width="long" @click="cancelClick">返回</el-button>-->
      <!--<template v-else>-->
        <el-button size="medium" width="long" @click="cancelClick">取 消</el-button>
        <el-button size="medium" width="long" type="primary" @click="sureClick">确 定</el-button>
      <!--</template>-->
    </span>
  </el-dialog>
</template>

<script>
  import { mapState, mapActions } from 'vuex'
  import Validator from '@/lib/validator'
  import WorkService from '../../../services/WorkService'
    //  此处导入组件,格式,例如:import xxx名称 from "路径"
    export default{
        // 这里是name,记得填写
        name: 'workIndicatorParticularsDialog',
        props:{
          value:{
              type: Boolean,
            default: false,
          },
          type: { // 类型: 0-查看(默认),1-新增,2-修改
            type: Number,
            default: 0
          },
          fatherWorkData:{
              type:Object,
            default(){
                  return{}
            }
          }
        },
        //  数据定义
        data () {
            return {
              title:'',
              isShow:false,
              form:{
                indicatorId: '',
                name: '',
                intro: '',
                departId: '',
                groupId: '',
                imageIds:[],
                fileIds:[]
              },
              imageList:[],// 图片上传
              fileList:[],// 附件上传
              userLists:[],
              subjectId:'',
              subjectName:'',
              assessmentObject:0,
              assessmentObjectArr:[
                {label:0,name:'组织(部门)'},
                {label:1,name:'行政(小组)'},
                {label:2,name:'个人用户'}
              ],
              rule: {
                name: [{
                  validator: Validator.checkName,
                  trigger: 'blur'
                }],
              }
            }
        },
        // 页面方法
        methods: {
          ...mapActions([
            'getWorkIndicatorList',
            'getDepartListBySubjectId',
            'getGroupListBySubjectId',
            'getWorkIndicatorList',
            'getUserListByName'
          ]),
          // 上传文件成功
          uploadFileSuccess(event, file, fileList){
            this.form.fileIds.push(event.data.id)
            console.log(event, file, fileList)
          },
          // 上传文件失败
          uploadFileError(err, file, fileList){
            console.log(err, file, fileList)
          },
          // 删除文件
          handleRemoveFile(file, fileList) {
            console.log(file, fileList);
          },
          // --?上传文件
          handlePreviewFile(file){
              console.log(file)
          },
          // 上传图片成功
          uploadImageSuccess(event, file, fileList){
              this.form.imageIds.push(event.data.id)
              console.log(event, file, fileList)
          },
          // 上传图片失败
          uploadImageError(err, file, fileList){
            console.log(err, file, fileList)
          },
          // 删除图片
          handleRemoveImg(file, fileList) {
            console.log(file, fileList);
          },
          // --?
          handlePreviewImg(file) {
            console.log(file);
          },

          // 选择指标
          selectIndicatorId(val){
              this.form.indicatorId = val;
          },
          // 选择部门
          selectDepartId(id){
            this.form.departId = id;
          },
          // 选择行政小组
          selectGroupId(id){
              this.form.groupId = id;
          },
          // 选择个人用户
          selectUserId(id){
            this.form.userId = id
          },
          // 关闭按钮
          handleClose() {
            this.isShow = false
          },
          // 获得当前工作信息
          getThisWorkInfo(id){
              WorkService.getWork({id:id}).then((res) => {
                  if(res.code === 200){
                      this.subjectId = res.data.subject.id;
                    this.subjectName = res.data.subject.name;
                    this.getWorkIndicatorList({id:res.data.id});
                    this.getDepartListBySubjectId({subjectId:res.data.subject.id});
                    this.getGroupListBySubjectId({subjectId:res.data.subject.id});
                    this.getUserListByName({key:'name',value:'',page:0,size:100000})
                  }else {
                      this.$message.error(res.message)
                  }
              })
          },
          // 取消按钮
          cancelClick() {
            this.isShow = false
          },
          // 确定按钮点击
          sureClick(){
              WorkService.addWorkIndicationParticulars(this.form).then((res) => {
                  if(res.code === 200){
                      this.$message.success('添加'+res.message);
                    this.isShow = false;
                    this.$refs['form'].resetFields();
                    this.imageList = [];// 图片上传
                    this.fileList = [];// 附件上传
                  }else {
                      this.$message.error(res.message)
                  }
              })
//              switch (this.type){
//                case 1: // 新增
//                  break;
//                case 2: // 修改
//                  break;
//                default:
//                  break;
//              }
          }
        },
        computed: {
          ...mapState([
            'workIndicatorList',
            'departList',
            'groupList',
            'userList'
          ])
        },
        // 侦听器
        watch: {
            userList(val){
                if (val.code === 200){
                  this.userLists = val.data.content;
                }else {
                    this.$message.error(res.message)
                }
              console.log('userList',val)
            },
          type(val){
              let title = '';
            switch (val) {
              case 1:
                title = '新增指标详情';
                break;
              case 2:
                title = '修改指标详情';
                break;
              case 0:
                title = '查看指标详情';
                break;
              default:
                title = '查看指标详情';
                break;
            }
            this.title = title
          },
          value(val){
              this.isShow = val
          },
          isShow(data){
            this.$emit('input', data)
          },
          fatherWorkData(data){
            this.getThisWorkInfo(data.id)
          }
        },
        // 依赖注入
        components: {}
    }
</script>

<!-- 本地样式 -->
<style scoped>

</style>
