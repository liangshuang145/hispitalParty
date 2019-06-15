#@Author: bjy @Date: 2019/6/11 14:49 #
<template>
  <el-main name="PersonnelArchives">
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item to="/">首页</el-breadcrumb-item>
      <el-breadcrumb-item to="/Index">人员管理</el-breadcrumb-item>
      <el-breadcrumb-item to="/Index/MemberArchives">{{ pageTitle }}</el-breadcrumb-item>
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
  import Manage from '@/components/MemberArchives/Manage/Manage.vue'
  import Tree from '@/components/MemberArchives/Tree/Tree.vue'

  export default {
    name: 'MemberArchives',
    components: {
      Manage,
      Tree
    },
    data() {
      return {
        pageTitle: '党员档案',
        currentNode: null,
        currentNode:null
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
