#@Author: bjy @Date: 2019/5/17 11:16 #
<template>
  <el-main name="UserManageDemo">
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item to="/">首页</el-breadcrumb-item>
      <el-breadcrumb-item to="/Index">基础管理</el-breadcrumb-item>
      <el-breadcrumb-item to="/Index/UserGroupManageDemo">{{ pageTitle }}</el-breadcrumb-item>
    </el-breadcrumb>
    <div class="content-panel">
      <el-row>
        <el-col :span="8">
          <tree @nodeDept="thisDept"/>
        </el-col>
        <el-col :span="16">
          <manage :currentNode="currentNode"/>
        </el-col>
      </el-row>
    </div>
  </el-main>
</template>

<script>
import Tree from '@/components/UserGroupManage/Tree/Tree.vue'
import Manage from '@/components/UserGroupManage/Manage/Manage.vue'

export default {
  name: 'UserGroupManageDemo',
  components: {
    Tree,
    Manage
  },
  data() {
    return {
      pageTitle: '用户组管理',
      currentNode: null
    }
  },
  computed: {},
  watch: {},
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
