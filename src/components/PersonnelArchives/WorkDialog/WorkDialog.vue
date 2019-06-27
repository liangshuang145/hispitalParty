#@Author: bjy @Date: 2019/6/27 19:01 #
<template>
  <el-dialog :value="value" name="EducationDialog" :visible="isShow" :before-close="handleClose" :title="title" width="750px" top="5vh" center append-to-body>
    <el-form ref="form" :model="form" :rules="rule" label-width="90px" label-position="right">
      <el-form-item label="开始日期" prop="startdate">
        <el-date-picker v-model="form.startdate" type="date" placeholder="选择开始日期" format="yyyy-MM-dd" value-format="yyyy-MM-dd" class="i-el-date-picker"></el-date-picker>
      </el-form-item>
      <el-form-item label="结束日期" prop="enddate">
        <el-date-picker v-model="form.enddate" type="date" placeholder="选择结束日期" format="yyyy-MM-dd" value-format="yyyy-MM-dd" class="i-el-date-picker">
        </el-date-picker>
      </el-form-item>
      <el-form-item label="工作单位" prop="workunit">
        <el-input v-model="form.workunit" size="medium" :maxlength="30" auto-complete="new-account" placeholder="请输入工作单位"></el-input>
      </el-form-item>
      <el-form-item label="担任职务" prop="toservepost">
        <el-input v-model="form.toservepost" size="medium" :maxlength="30" auto-complete="new-account" placeholder="请输入担任职务"></el-input>
      </el-form-item>
      <el-form-item label="岗位职称" prop="posttitle">
        <el-input v-model="form.posttitle" size="medium" :maxlength="30" auto-complete="new-account" placeholder="请输入岗位职称"></el-input>
      </el-form-item>
      <el-form-item label="证明人" prop="witness">
        <el-input v-model="form.witness" size="medium" :maxlength="30" auto-complete="new-account" placeholder="请输入证明人"></el-input>
      </el-form-item>
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
  import UserInfoService from '../../../services/UserInfoService'
  //  此处导入组件,格式,例如:import xxx名称 from "路径"
  export default{
    // 这里是name,记得填写
    name: 'Dialog',
    props: {
      value: {
        type: Boolean,
        default: false
      },
      type: {
        type: Number,
        default: 0
      },
      userInfoData: {
      },
      workData: {
      }
    },
    //  数据定义
    data () {
      return {
        title:'',
        isShow:false,
        form:{
            id:'',
          startdate:'',
          enddate:'',
          workunit:'',
          toservepost: '',
          posttitle:'',
          witness:'',
          userinfoid:''
        },
        rule:{

        }
      }
    },
    // 页面方法
    methods: {
      ...mapActions([
        'getUserInfoWorkList'
      ]),
      // 确定按钮
      sureClick() {
        this.$refs['form'].validate((valid) => {
          if(valid) {
            switch (this.type) {
              case 1: // 新增
                delete this.form.id;
                UserInfoService.addUserInfoIsWork(this.form).then((res) => {
                  if(res.code === 200){
                    this.$message.success('添加'+res.message);
                    this.$refs['form'].resetFields();
                    this.getUserInfoWorkList();
                    this.isShow = false
                  }else{
                    this.$message.error(res.message)
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
    },
    // 计算属性
    computed: {},
    // 侦听器
    watch: {
      workData(data){
        this.form.id = data.id;
        this.form.startdate = data.startdate;
        this.form.enddate = data.enddate;
        this.form.workunit = data.workunit;
        this.form.toservepost = data.toservepost;
        this.form.posttitle = data.posttitle;
        this.form.posttitle = data.posttitle;
      },
      value(val){
        this.isShow = val
      },
      isShow(val){
        this.$emit('input',val)
      },
      type(val) {
        let title = '';
        if(!val){
          val = 0
        }
        switch (val) {
          case 1:
            title = '新增工作经历';
            break;
          case 2:
            title = '修改工作经历';
            break;
          default:
            title = '查看工作经历';
            break
        }
        this.title = title
      },
      userInfoData(val){
          console.log('userInfoData',val)
        this.form.userinfoid = val.id;
      },
    },
    // 依赖注入
    components: {}
  }
</script>

<!-- 本地样式 -->
<style scoped>

</style>
