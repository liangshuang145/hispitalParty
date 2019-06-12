#@Author: bjy @Date: 2019/5/17 11:16 #
<template>
  <el-main name="GroupManageDemo">
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item to="/">首页</el-breadcrumb-item>
      <el-breadcrumb-item to="/Index">基础管理</el-breadcrumb-item>
      <el-breadcrumb-item to="/Index/GroupManageDemo">{{ pageTitle }}</el-breadcrumb-item>
    </el-breadcrumb>
    <div class="content-panel">
      <search/>
    </div>
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
import Search from '@/components/GroupManage/Search/Search.vue'
import Tree from '@/components/GroupManage/Tree/Tree.vue'
import Manage from '@/components/GroupManage/Manage/Manage.vue'

export default {
  name: 'GroupManageDemo',
  components: {
    Search,
    Tree,
    Manage
  },
  data() {
    return {
      pageTitle: '行政(小组)管理',
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
