#@Author: bjy @Date: 2019/6/13 16:39 #
<template>
  <el-main name="LearningPower">
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item to="/Index">首页</el-breadcrumb-item>
      <el-breadcrumb-item to="/Index">党务管理</el-breadcrumb-item>
      <el-breadcrumb-item to="/Index">宣传意识形态</el-breadcrumb-item>
      <el-breadcrumb-item to="/Index/LearningPower">{{ pageTitle }}</el-breadcrumb-item>
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
  import Manage from '@/components/LearningPower/Manage/Manage.vue'
  import Tree from '@/components/LearningPower/Tree/Tree.vue'

  export default{
    name: 'learningPower',
    data () {
      return {
        pageTitle:'学习强国',
        currentNode:null,
      }
    },
    created(){
    },
    methods: {
      thisDept(data) {
        this.currentNode = data
      },
    },
    computed: {},
    watch: {},
    components: {
      Manage,
      Tree
    }
  }
</script>

<style scoped>
  .content-panel {
    margin-top: 20px;
  }
</style>
