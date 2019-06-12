#@Author: bjy @Date: 2019/6/5 9:04 #
<template>
  <div name="Search" class="search-panel">
    <el-row>
      <el-select v-model="subject" size="medium" placeholder="请选择机构" @change="selectSubject">
        <el-option v-for="item in subjectList" :key="item.id" :label="item.name" :value="item.id"/>
      </el-select>
      <el-select v-model="depart" size="medium" placeholder="请选择组织(部门)" @change="selectDepart">
        <el-option v-for="item in departList" :key="item.id" :label="item.name" :value="item.id"/>
      </el-select>
      <el-select v-model="group" size="medium" placeholder="请选择行政(小组)" @change="selectGroup">
        <el-option v-for="item in groupList" :key="item.id" :label="item.name" :value="item.id"/>
      </el-select>
    </el-row>
    <el-row>
      <el-input class="search-input" size="medium" v-model="search" placeholder="活动搜索">
        <el-button slot="append" icon="el-icon-search"></el-button>
      </el-input>
      <el-button type="success" size="medium" @click="showAddDialog">添加活动</el-button>
    </el-row>
    <activity-Dialog v-model="isActivityDialogShow" :type="1"></activity-Dialog>
    </div>
</template>

<script>
  import { mapState, mapActions } from 'vuex'
  import activityDialog from '../ActivityDialog/ActivityDialog.vue'
    //  此处导入组件,格式,例如:import xxx名称 from "路径"
    export default{
        // 这里是name,记得填写
        name: 'search',
        //  数据定义
        data () {
            return {
              search: '',
              subject: '',
              depart: '',
              group: '',
              isActivityDialogShow:''
            }
        },
        // 页面初始化(生命周期)
        created(){
        },
        computed: {
          ...mapState([
            'subjectList',
            'departList',
            'groupList'
          ])
        },
        async mounted() {
          await this.getSubjectList()
          await this.getDepartList()
          await this.getGroupList()
        },
        // 页面方法
        methods: {
          ...mapActions([
            'getSubjectList',
            'getDepartList',
            'getGroupList'
          ]),
          selectSubject(val) {
            this.subject = val
          },
          selectDepart(val) {
            this.depart = val
          },
          selectGroup(val) {
            this.group = val
          },
          showAddDialog() {
            this.isUserDialogShow = true
          }
        },
        // 计算属性
        computed: {
          activityDialog
        },
        // 侦听器
        watch: {},
        // 依赖注入
        components: {}
    }
</script>

<!-- 本地样式 -->
<style scoped>
  .search-panel {
    padding: 20px;
    border: 1px solid #eeeeee;
    border-radius: 3px;
  }

  .el-row + .el-row {
    margin-top: 5px;
  }

  .el-input.search-input {
    width: 350px;
  }
</style>
