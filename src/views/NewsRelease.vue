#@Author: bjy @Date: 2019/6/11 14:49 #
<template>
  <el-main name="Standardinspection">
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item >首页</el-breadcrumb-item>
      <el-breadcrumb-item >工作管理</el-breadcrumb-item>
      <el-breadcrumb-item >通知消息</el-breadcrumb-item>
      <el-breadcrumb-item >{{ pageTitle }}</el-breadcrumb-item>
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
  import Manage from '@/components/NewsRelease/Manage/Manage.vue'
  import Tree from '@/components/NewsRelease/Tree/Tree.vue'

  export default {
    name: 'NewsRelease',
    components: {
      Manage,
      Tree
    },
    data() {
      return {
        pageTitle: '消息发布',
        currentNode: null,
      }
    },
    computed: {},
    watch: {},
    created() {
    },
    methods: {
      thisDept(data) {
        this.currentNode = data
      },
    }
  }
</script>

<style scoped>
  .content-panel {
    margin-top: 20px;
  }
</style>
