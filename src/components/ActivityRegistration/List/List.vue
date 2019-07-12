#@Author: bjy @Date: 2019/6/5 13:46 #
<template>
  <div name="List" class="list-panel">
    <el-table ref="multipleTable" :data="userList" @selection-change="handleSelectionChange">
      <el-table-column type="selection" width="35"/>
      <el-table-column prop="account" label="账号" width="110"/>
      <el-table-column prop="nickname" label="昵称" width="100"/>
      <el-table-column prop="gender" label="性别" width="50"/>
      <el-table-column prop="type" label="类型" width="90"/>
      <el-table-column prop="status" label="状态" width="50"/>
      <el-table-column prop="date" label="创建日期" width="110"/>
      <el-table-column prop="work" label="岗位信息" width="240"/>
      <el-table-column prop="description" label="描述"/>
      <el-table-column label="操作" width="130">
        <template slot-scope="scope">
          <el-button type="text" size="mini" @click="viewUser(scope.row)">查看</el-button>
          <el-button type="text" size="mini" @click="updateUser(scope.row)">修改</el-button>
          <el-button type="text" size="mini" @click="deleteUser(scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination background layout="prev, pager, next" :total="1000"/>
    <user-dialog v-model="isUserDialogShow" :type="dialogType" :userData="userData"/>
  </div>
</template>

<script>
  import { mapState, mapActions } from 'vuex'
  import ActivityDialog from '../ActivityDialog/ActivityDialog.vue'

  export default {
    name: 'List',
    components: {
//      UserDialog
    },
    data() {
      return {
        isUserDialogShow: false,
        dialogType: 0,
        userData: {},
        selectedList: []
      }
    },
    computed: {
      ...mapState([
        'activityList'
      ])
    },
    mounted() {
      this.getActivityList()
    },
    methods: {
      ...mapActions([
        'getActivityList'
      ]),
      // 列表选中
      handleSelectionChange(val) {
        this.selectedList = val
      },
      // 查看用户
      viewUser(data) {
        console.log('data =viewUser= ', data)

        this.dialogType = 0
        this.isUserDialogShow = true
        this.userData = data
      },
      // 修改用户
      updateUser(data) {
        console.log('data =updateUser= ', data)

        this.dialogType = 2
        this.isUserDialogShow = true
        this.userData = data
      },
      // 删除用户
      deleteUser(data) {
        console.log('data =deleteUser= ', data)

        this.$confirm('此操作将永久删除该用户, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.$message.success('已删除')
        }).catch(() => {
          this.$message.info('已取消')
        })
      }
    }
  }
</script>

<style scoped>
  .el-pagination {
    margin: 10px 0;
    float: right;
  }
</style>

