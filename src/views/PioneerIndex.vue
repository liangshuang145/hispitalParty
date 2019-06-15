#@Author: bjy @Date: 2019/6/13 15:10 #
<template>
  <el-main name="PioneerIndex">
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item to="/Index">首页</el-breadcrumb-item>
      <el-breadcrumb-item to="/Index">考核管理</el-breadcrumb-item>
      <el-breadcrumb-item to="/Index">党员考核</el-breadcrumb-item>
      <el-breadcrumb-item to="/Index/PioneerIndex">{{ pageTitle }}</el-breadcrumb-item>
    </el-breadcrumb>
    <div class="content-panel">
      <el-row>
        <el-col :span="4">
          <tree @nodeDept="thisDept"/>
        </el-col>
        <el-col :span="20">
          <manage :currentNode="currentNode"/>
        </el-col>
      </el-row>
    </div>
  </el-main>
</template>

<script>
  import Manage from '@/components/PioneerIndex/Manage/Manage.vue'
  import Tree from '@/components/PioneerIndex/Tree/Tree.vue'

  export default{
    // 这里是name,记得填写
    name: 'PioneerIndex',
    //  数据定义
    data () {
      return {
        pageTitle:'先锋指数',
        currentNode:null
      }
    },
    // 页面初始化(生命周期)
    created(){
    },
    // 页面方法
    methods: {
      thisDept(data){
        this.currentNode = data
      }
    },
    // 计算属性
    computed: {},
    // 侦听器
    watch: {},
    // 依赖注入
    components: {
      Tree,
      Manage
    }
  }
</script>

<!-- 本地样式 -->
<style scoped>
  .content-panel {
    margin-top: 20px;
  }
</style>
