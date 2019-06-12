#@Author: bjy @Date: 2019/5/17 11:16 #
<template>
  <el-main name="UserManageDemo">
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item to="/">首页</el-breadcrumb-item>
      <el-breadcrumb-item to="/Index">基础管理</el-breadcrumb-item>
      <el-breadcrumb-item to="/Index/UserManageDemo">{{ pageTitle }}</el-breadcrumb-item>
    </el-breadcrumb>
    <div class="content-panel">
      <el-row>
        <el-col :span="5">
          <tree @nodeDept="thisDept"/>
        </el-col>
        <el-col :span="19">
          <manage :currentNode="currentNode"/>
        </el-col>
      </el-row>
    </div>
  </el-main>
</template>

<script>
import Manage from '@/components/UserManage/Manage/Manage.vue'
import Tree from '@/components/UserManage/Tree/Tree.vue'


export default {
  name: 'UserManageDemo',
  components: {
    Manage,
    Tree
  },
  data() {
    return {
      pageTitle: '用户管理',
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
    },
  }
}
</script>

<style scoped>
.content-panel {
  margin-top: 20px;
}
</style>
