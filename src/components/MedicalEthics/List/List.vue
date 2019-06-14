<template>
  <div name="List" class="list-panel">
    <!--<buttons></buttons>-->
    <el-table ref="multipleTable" :data="userList"   highlight-current-row @current-change="handleTableChange" height="520">
      <el-table-column prop="account" label="排名顺序" />
      <el-table-column prop="nickname" label="员工编号" />
      <el-table-column prop="gender" label="员工姓名" />
      <el-table-column prop="type" label="所属部门" />
      <el-table-column prop="status" label="联系电话" />
    </el-table>
    <el-pagination background layout="prev, pager, next" :total="1000"/>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  name: 'List',
  components: {
  },
  data() {
    return {
      isUserDialogShow: false,
      dialogType: 0,
      userData: {},
      changeTableData: null,
      currentPage:1,
      pageSize:20,
    }
  },
  computed: {
    ...mapState([
      'userList'
    ])
  },
  mounted() {
    this.getUserList()
  },
  methods: {
    ...mapActions([
      'getUserList'
    ]),
    // 列表选中
    handleTableChange(val) {
      this.changeTableData = val;
      this.$emit('tableDataChange',val)
    },
//    // 查看用户
//    viewUser(data) {
//      console.log('data =viewUser= ', data)
//
//      this.dialogType = 0
//      this.isUserDialogShow = true
//      this.userData = data
//    },
//    // 修改用户
//    updateUser(data) {
//      console.log('data =updateUser= ', data)
//
//      this.dialogType = 2
//      this.isUserDialogShow = true
//      this.userData = data
//    },
//    // 删除用户
//    deleteUser(data) {
//      console.log('data =deleteUser= ', data)
//
//      this.$confirm('此操作将永久删除该用户, 是否继续?', '提示', {
//        confirmButtonText: '确定',
//        cancelButtonText: '取消',
//        type: 'warning'
//      }).then(() => {
//        this.$message.success('已删除')
//      }).catch(() => {
//        this.$message.info('已取消')
//      })
//    }
  }
}
</script>

<style scoped>
.el-pagination {
  margin: 10px 0;
  float: right;
}
</style>
