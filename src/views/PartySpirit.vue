#@Author: bjy @Date: 2019/6/13 15:25 #
<template>
  <el-main name="PartySpirit">
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item to="/Index">首页</el-breadcrumb-item>
      <el-breadcrumb-item to="/Index">党务管理</el-breadcrumb-item>
      <el-breadcrumb-item to="/Index">宣传意识形态</el-breadcrumb-item>
      <el-breadcrumb-item to="/Index/PartySpirit">{{ pageTitle }}</el-breadcrumb-item>
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
  import Manage from '@/components/PartySpirit/Manage/Manage.vue'
  import Tree from '@/components/PartySpirit/Tree/Tree.vue'

    export default{
        name: 'PartySpirit',
        data () {
            return {
              pageTitle:'党内精神',
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
