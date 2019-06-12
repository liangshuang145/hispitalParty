#@Author: bjy @Date: 2019/6/5 9:01 #
<template>
  <el-main name="Activity">
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item to="/">首页</el-breadcrumb-item>
      <el-breadcrumb-item to="/Index">基础管理</el-breadcrumb-item>
      <el-breadcrumb-item to="/Index/UserManageDemo">{{ pageTitle }}</el-breadcrumb-item>
    </el-breadcrumb>
    <div class="content-panel">
      <search/>
    </div>
    <div class="content-panel">
      <list/>
    </div>
  </el-main>
</template>

<script>
  import Search from '../components/ActivityManage/Search/Search.vue'
  import List from '../components/ActivityManage/List/List.vue'
    //  此处导入组件,格式,例如:import xxx名称 from "路径"
    export default{
        // 这里是name,记得填写
        name: 'activity',
        //  数据定义
        data () {
            return {
              pageTitle:'活动管理'
            }
        },
        // 页面初始化(生命周期)
        created(){
        },
        // 页面方法
        methods: {},
        // 计算属性
        computed: {},
        // 侦听器
        watch: {},
        // 依赖注入
        components: {
          Search,List
        }
    }
</script>

<!-- 本地样式 -->
<style scoped>
  .content-panel {
    margin-top: 20px;
  }
</style>
