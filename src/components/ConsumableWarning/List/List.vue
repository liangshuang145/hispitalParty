<template>
  <div name="List" class="list-panel">
    <!--<buttons></buttons>-->
    <el-table ref="multipleTable" :data="userList"   highlight-current-row @current-change="handleTableChange" height="520">
      <el-table-column prop="accountid" label="人员编号" width="180"/>
      <el-table-column prop="nickname" label="人员名称" width="180"/>
      <el-table-column prop="datelasttime" label="初次诊断时间" width="180"/>
      <el-table-column prop="equipment" label="使用器材" width="180"/>
      <el-table-column prop="dangerous" label="预警" width="180"/>
      <el-table-column prop="text010" label="科室" width="180"/>
      <el-table-column prop="text08" label="工号" width="180"/>
    </el-table>
    <el-pagination background layout="prev, pager, next" :total="1000"/>
    <!--<user-dialog v-model="isUserDialogShow" :type="dialogType" :userData="userData"/>-->
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import Bus from '../../bus/bus01.js'

export default {
  name: 'List',
  components: {
  },
  data() {
    return {
      isUserDialogShow: false,
      dialogType: 0,
      userData: {},
      changeTableData: null
    }
  },
  computed: {
    ...mapState([
      'userList'
    ])
  },
  mounted() {
    this.getUserList();
    //Tree传递数据
    Bus.$on('txt',(data)=> {
      this.setUserList(state,data)
      this.getUserList();
    })
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
