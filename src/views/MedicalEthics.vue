#@Author: bjy @Date: 2019/6/12 16:12 #
<template>
  <el-main name="MedicalEthics">
  <el-breadcrumb separator-class="el-icon-arrow-right">
    <el-breadcrumb-item to="/Index">首页</el-breadcrumb-item>
    <el-breadcrumb-item to="/Index">党务管理</el-breadcrumb-item>
    <el-breadcrumb-item to="/Index">清廉医院</el-breadcrumb-item>
    <el-breadcrumb-item to="/Index/MedicalEthics">{{ pageTitle }}</el-breadcrumb-item>
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
  import Manage from '@/components/MedicalEthics/Manage/Manage.vue'
  import Tree from '@/components/MedicalEthics/Tree/Tree.vue'

    export default{
        name: 'medicalEthics',
        data () {
            return {
              pageTitle:'医德档案',
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
