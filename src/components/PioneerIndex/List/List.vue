<template>
  <div name="List" class="list-panel">
    <!--<buttons></buttons>-->
    <el-table ref="multipleTable" :data="userList"   highlight-current-row @current-change="handleTableChange" height="520">
      <el-table-column prop="nickname" label="姓名" />
      <el-table-column prop="gender" label="性别" />
      <el-table-column prop="datelasttime" label="出生年月" />
      <el-table-column prop="drugover" label="入党时间" />
      <el-table-column prop="type" label="职务" />
      <el-table-column prop="iphone" label="联系电话" />
      <el-table-column prop="text08" label="指数得分" />
      <el-table-column prop="accountid" label="考评等次" />
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
