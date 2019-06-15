#@Author: bjy @Date: 2019/6/3 10:43 #
<template>
  <el-main name="MenuManageDemo">
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item to="/">首页</el-breadcrumb-item>
      <el-breadcrumb-item to="/Index">基础管理</el-breadcrumb-item>
      <el-breadcrumb-item to="/Index/MenuManageDemo">{{ pageTitle }}</el-breadcrumb-item>
    </el-breadcrumb>
    <!--<div class="content-panel">-->
      <!--<search/>-->
    <!--</div>-->
    <div class="content-panel">
      <el-row>
        <!--<el-col :span="4">-->
          <!--<tree @nodeDept="thisDept"/>-->
        <!--</el-col>-->
        <el-col :span="24">
          <manage :currentNode="currentNode"/>
        </el-col>
      </el-row>
    </div>
  </el-main>
</template>

<script>
//  import Search from '@/components/MenuManage/Search/Search.vue'
  import Tree from '@/components/MenuManage/Tree/Tree.vue'
  import Manage from '@/components/MenuManage/Manage/Manage.vue'
    //  此处导入组件,格式,例如:import xxx名称 from "路径"
    export default{
        // 这里是name,记得填写
        name: 'menuManage',
        //  数据定义
        data () {
            return {
              pageTitle:'菜单管理',
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
        // 依赖注入
      components: {
        Tree,Manage
        }
    }
</script>

<!-- 本地样式 -->
<style scoped>
  .content-panel {
    margin-top: 20px;
  }
</style>
