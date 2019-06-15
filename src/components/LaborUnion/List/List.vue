  <template>
  <div name="List" class="list-panel">
    <!--<buttons></buttons>-->
    <el-table ref="multipleTable" :data="userList"   highlight-current-row @current-change="handleTableChange" height="520">
      <el-table-column prop="nickname" label="姓名" width="180"/>
      <el-table-column prop="gender" label="性别" width="180"/>
      <el-table-column prop="yesorno" label="是否党员" width="180"/>
      <el-table-column prop="type" label="职位" width="180"/>
      <el-table-column prop="iphone" label="手机号" width="180"/>
      <el-table-column prop="text010" label="科室" width="180"/>
      <el-table-column prop="text08" label="工号" width="180"/>
    </el-table>
    <el-pagination background layout="prev, pager, next" :total="1000"/>
    <!--<user-dialog v-model="isUserDialogShow" :type="dialogType" :userData="userData"/>-->
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
      changeTableData: null
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
