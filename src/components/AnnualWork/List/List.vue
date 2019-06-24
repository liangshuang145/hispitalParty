<template>
  <div name="List" class="list-panel">
    <!--<buttons></buttons>-->
    <el-table ref="multipleTable" :data="userList"   highlight-current-row @current-change="handleTableChange" height="520">
      <el-table-column prop="text016" label="类型" />
      <el-table-column prop="text011" label="工作名称" />
      <el-table-column prop="text04" label="开始时间" />
      <el-table-column prop="text04" label="结束时间" />
      <el-table-column prop="text02" label="说明" />
      <!--<el-table-column prop="text014" label="结束时间" width="180"/>-->
      <!--<el-table-column prop="text08" label="合格分数" width="180"/>-->
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
      'workList'
    ])
  },
  mounted() {
    this.getWorkList();
//    //Tree传递数据
//    Bus.$on('txt',(data)=> {
//      this.setUserList(state,data)
//      this.getUserList();
//    })
  },
  methods: {
    ...mapActions([
      'getWorkList'
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
