#@Author: bjy @Date: 2019/6/11 14:49 #
<template>
  <el-main name="DrugWarning">
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item to="/">首页</el-breadcrumb-item>
      <el-breadcrumb-item to="/Index">党务管理</el-breadcrumb-item>
      <el-breadcrumb-item to="/Index">清廉医院</el-breadcrumb-item>
      <el-breadcrumb-item to="/Index/DrugWarning">{{ pageTitle }}</el-breadcrumb-item>
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
  import Manage from '@/components/DrugWarning/Manage/Manage.vue'
  import Tree from '@/components/DrugWarning/Tree/Tree.vue'

  export default {
    name: 'DrugWarning',
    components: {
      Manage,
      Tree
    },
    data() {
      return {
        pageTitle: '药品预警',
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
