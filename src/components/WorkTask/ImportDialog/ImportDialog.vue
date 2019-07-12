#@Author: bjy @Date: 2019/6/12 19:18 #
<template>
  <el-dialog :value="value" name="ImportDialog" :visible="isShow" :before-close="handleClose" title="导入表格" width="800px" left>
    <el-form  ref="form" label-width="100px" label-position="right" class="i-form">
      <el-form-item label="第一步">
        <a href="http://www.ydyy.online/partyBuilding/static/peopleImport.xls" rel="external nofollow" download="导入模板" >
          <el-button type="warning" class="i-button" icon="el-icon-download">下载模板</el-button>
        </a>
        <span class="remark"> 注: 下载项目导入模版:按照模版的要求，填写对应的信息（尤其需要注意的是：按照模版要求的数据类型填写信息！）</span>
      </el-form-item>
      <el-form-item label="第二步">
        <el-upload
          class="upload-demo"
          ref="upload"
          action="https://jsonplaceholder.typicode.com/posts/"
          :on-preview="handlePreview"
          :on-remove="handleRemove"
          :file-list="fileList"
          :auto-upload="false">
          <el-button type="warning"  slot="trigger"  style="width: 160px" class="i-button" icon="el-icon-folder-opened">点击选择上传文件</el-button>
        </el-upload>
      </el-form-item>
      <el-form-item label="第三步">
        <el-button type="warning"  class="i-button" @click="submitUpload" icon="el-icon-upload2">上传文件</el-button>
      </el-form-item>
    </el-form>
  </el-dialog>
</template>


<script>
  import ElFormItem from '../../../../node_modules/element-ui/packages/form/src/form-item';
  import ElForm from "../../../../node_modules/element-ui/packages/form/src/form";
  import ElButton from "../../../../node_modules/element-ui/packages/button/src/button";
    //  此处导入组件,格式,例如:import xxx名称 from "路径"
    export default{
        // 这里是name,记得填写
        name: 'importDialog',
        props:{
          value:{
            type:Boolean,
            default: false
          },
          type: { // 类型: 0-查看(默认),1-新增,2-修改
            type: Number,
            default: 0
          },
        },
        //  数据定义
        data () {
            return {
              isShow:false,
              fileList: []
            }
        },
        // 页面初始化(生命周期)
        created(){
        },
        // 页面方法
        methods: {
            // 上传图片
          submitUpload() {
            this.$refs.upload.submit();
          },
          handleRemove(file, fileList) {
            console.log(file, fileList);
          },
          handlePreview(file) {
            console.log(file);
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
          value(val) {
            this.isShow = val
          },
          isShow(val) {
            this.$emit('input', val)
          },
        },
      /**
       *
       */
        // 依赖注入
        components: {
          ElButton,
          ElForm,
          ElFormItem}
    }
</script>

<!-- 本地样式 -->
<style scoped>
  .remark{
    margin-left: 10px;
    font-size: 15px;
  }
  .i-button{
    width: 160px;
  }
  .upload-demo{
    width: 55%
  }
  .i-form{
    padding-bottom: 50px;
  }
</style>
