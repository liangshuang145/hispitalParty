<template>
  <div name="List" class="list-panel">
    <el-table ref="multipleTable" :data="userList"   highlight-current-row @current-change="handleTableChange" height="520">
      <el-table-column prop="account" label="统战人士编号" />
      <el-table-column prop="nickname" label="统战人士姓名" />
      <el-table-column prop="gender" label="学习时间" />
      <el-table-column prop="type" label="学习次数" />
      <el-table-column prop="status" label="学习总积分" />
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
  }
}
</script>

<style scoped>
.el-pagination {
  margin: 10px 0;
  float: right;
}
</style>
