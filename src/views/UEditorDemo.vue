#@Author: bjy @Date: 2019/5/17 15:40 #
<template>
  <el-main name="UEditorDemo">
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item to="/">首页</el-breadcrumb-item>
      <el-breadcrumb-item to="/Index">基础管理</el-breadcrumb-item>
      <el-breadcrumb-item to="/Index/UEditorDemo">{{ pageTitle }}</el-breadcrumb-item>
    </el-breadcrumb>
    <div class="content-panel">
      <UEditor ref="Ueditor" id="ueditor" :config="config"/>
    </div>
  </el-main>
</template>

<script>
import UEditor from '@/components/UEditor/UEditor.vue'

export default {
  name: 'UEditorDemo',
  components: {
    UEditor
  },
  data() {
    return {
      pageTitle: 'UEditorDemo',
      config: {
        autoHeightEnabled: false,
        autoFloatEnabled: true,
        initialContent: '请输入内容', // 初始化编辑器的内容,也可以通过textarea/script给值，看官网例子
        autoClearinitialContent: true, // 是否自动清除编辑器初始内容，注意：如果focus属性设置为true,这个也为真，那么编辑器一上来就会触发导致初始化的内容看不到了
        initialFrameWidth: null,
        initialFrameHeight: 600,
        BaseUrl: '',
        UEDITOR_HOME_URL: 'static/ueditor/'
      }
    }
  },
  // 页面初始化(生命周期)
  created() {
  },
  // 页面方法
  methods: {},
  // 计算属性
  computed: {},
  // 侦听器
  watch: {}
}
</script>

<style scoped>
.content-panel {
  margin-top: 20px;
}
</style>
