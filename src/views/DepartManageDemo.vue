#@Author: bjy @Date: 2019/5/17 11:16 #
<template>
  <el-main name="DepartManageDemo">
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item to="/">首页</el-breadcrumb-item>
      <el-breadcrumb-item to="/Index">基础管理</el-breadcrumb-item>
      <el-breadcrumb-item to="/Index/DepartManageDemo">{{ pageTitle }}</el-breadcrumb-item>
    </el-breadcrumb>
    <div class="content-panel">
      <el-row>
        <el-col :span="6">
          <tree @nodeDept="thisDept"/>
        </el-col>
        <el-col :span="18">
          <manage :currentNode="currentNode"/>
        </el-col>
      </el-row>
    </div>
  </el-main>
</template>

<script>
import Tree from '@/components/DepartManage/Tree/Tree.vue'
import Manage from '@/components/DepartManage/Manage/Manage.vue'

export default {
  name: 'DepartManageDemo',
  components: {
    Tree,
    Manage
  },
  data() {
    return {
      pageTitle: '组织(部门)管理',
      currentNode: null
    }
  },
  created() {
  },
  methods: {
    thisDept(data) {
      this.currentNode = data
    }
  }
}
</script>

<style scoped>
.content-panel {
  margin-top: 20px;
}
</style>
