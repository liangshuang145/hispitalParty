<template>
  <div name="List" class="list-panel">
    <!--<buttons></buttons>-->
    <el-table ref="multipleTable" :data="userList"   highlight-current-row @current-change="handleTableChange" height="590">
      <el-table-column prop="nickname" label="发起支部" />
      <el-table-column prop="gender" label="标题" />
      <el-table-column prop="status" label="发布时间" />
      <el-table-column prop="status" label="发布者" />
      <el-table-column prop="status" label="类别" />
      <el-table-column prop="type" label="状态" />
    </el-table>
    <el-pagination background layout="prev, pager, next" :total="1000" @current-change="handleCurrentChange"/>
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
    // 分页
    handleCurrentChange(currentPage){
        console.log(currentPage)
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
