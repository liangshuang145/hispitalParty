#@Author: bjy @Date: 2019/6/24 14:59 #
<template>
  <el-dialog :value="value" name="WorkIndicatorDialog" :visible.sync="isShow" :before-close="handleClose" :title="title" width="750px"
             :modal-append-to-body='false' append-to-body center>
    <el-form ref="form" :model="form" :rules="rule" label-width="100px" label-position="right">
      <el-form-item label="指标名称" prop="name">
        <el-input v-model="form.name" size="medium" :maxlength="30" auto-complete="new-account" placeholder="请输入指标名称"></el-input>
      </el-form-item>
      <el-form-item label="上级指标" prop="fatherId">
        <el-select v-model="form.fatherId" size="medium" filterable placeholder="请选择上级指标(选填)" @change="selectIndicatorId">
          <el-option v-for="item in workIndicatorList" :key="item.id" :label="item.name" :value="item.id"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="指标内容" prop="situation">
        <el-input type="textarea" v-model="form.situation" :rows="5" :maxlength="255" placeholder="请输入描述" show-word-limit></el-input>
      </el-form-item>
    </el-form>
    <!-- 操作 -->
    <span slot="footer" class="dialog-footer">
      <el-button v-if="type == 0" size="medium" width="long" @click="cancelClick">返回</el-button>
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
  import WorkService from '../../../services/WorkService'
    //  此处导入组件,格式,例如:import xxx名称 from "路径"
    export default{
        // 这里是name,记得填写
        name: 'WorkIndicatorDialog',
        props:{
          workData: { // 工作数据
            type: Object,
            default() {
              return {}
            }
          },
          indicatorData:{ // 指标数据
              type:Object,
            default(){
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
        //  数据定义
        data () {
            return {
                title:'',
                isShow:false,
              workId:'',
              form:{
                    name:'',
                situation:'',
                workName:'',
                workId:'',
                fatherId:'',
                fatherName:''
              },
              rule: {
                name: [{
                  validator: Validator.checkName,
                  trigger: 'blur'
                }],
              }
            }
        },
        // 页面初始化(生命周期)
        created(){
        },
        // 页面方法
        methods: {
          ...mapActions([
            'getWorkIndicatorList',
          ]),
          // 选择上级指标
          selectIndicatorId(id){
            this.form.fatherId = id
          },
          // 确定
          sureClick(){
            this.$refs['form'].validate((valid) => {
              switch (this.type) {
                case 1: // 新增
                  console.log(this.form)
                  WorkService.addWorkIndication(this.form).then((res) => {
                    if (res.code === 200){
                        this.$message.success('添加'+res.message);
                        // 关闭窗口
                        this.handleClose();
                      // 重载 列表
                      this.getWorkIndicatorList({id:this.workId})
                    }else {
                        this.$message.error(res.message)
                    }
                  });
                  break;
                case 2: //修改
                  break;
                default:
                  break;
              }
            });
          },
          // 关闭按钮
          handleClose() {
            this.isShow = false
          },
          // 取消按钮
          cancelClick() {
            this.isShow = false
          },
        },
        computed: {
          ...mapState([
            'workIndicatorList',
          ])
        },
        // 侦听器
        watch: {
          value(data){
            this.isShow = data
          },
          isShow(data){
            this.$emit('input', data)
          },
          type(val){
            let title = '';
            switch (val) {
              case 1:
                title = '新增指标';
                break;
              case 2:
                title = '修改指标';
                break;
              case 0:
                title = '查看指标';
                break;
              default:
                title = '查看指标';
                break;
            }
            this.title = title
          },
          workData(data){
            this.form.workName = data.name;
            this.form.workId = data.id;
            this.workId = data.id;
            this.getWorkIndicatorList({id:data.id})
          },
          indicatorData(data){
              if(this.type != 1){

              }
          }
        },
        // 依赖注入
        components: {}
    }
</script>

<!-- 本地样式 -->
<style scoped>

</style>
