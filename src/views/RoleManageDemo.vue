#@Author: bjy @Date: 2019/5/17 11:16 #
<template>
  <el-main name="RoleManageDemo">
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item to="/">首页</el-breadcrumb-item>
      <el-breadcrumb-item to="/Index">基础管理</el-breadcrumb-item>
      <el-breadcrumb-item to="/Index/RoleManageDemo">{{ pageTitle }}</el-breadcrumb-item>
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
import Tree from '@/components/RoleManage/Tree/Tree.vue'
import Manage from '@/components/RoleManage/Manage/Manage.vue'

export default {
  name: 'RoleManageDemo',
  components: {
    Tree,
    Manage
  },
  data() {
    return {
      pageTitle: '角色管理',
      currentNode: null
    }
  },
  created() {
  },
  // 页面方法
  methods: {
    thisDept(data) {
      this.currentNode = data
    }
  },
  // 计算属性
  computed: {},
  // 侦听器
  watch: {}
}
</script>

<style scoped>
.content-panel {
  margin-top: 20px;
}
</style>
