#@Author: bjy @Date: 2019/6/13 15:10 #
<template>
  <el-main name="Efficiency">
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item to="/Index">首页</el-breadcrumb-item>
      <el-breadcrumb-item to="/Index">党务管理</el-breadcrumb-item>
      <el-breadcrumb-item to="/Index">清廉医院</el-breadcrumb-item>
      <el-breadcrumb-item to="/Index/Efficiency">{{ pageTitle }}</el-breadcrumb-item>
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
  import Manage from '@/components/Efficiency/Manage/Manage.vue'
  import Tree from '@/components/Efficiency/Tree/Tree.vue'

    export default{
        // 这里是name,记得填写
        name: 'efficiency',
        //  数据定义
        data () {
            return {
                pageTitle:'行风效能',
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
