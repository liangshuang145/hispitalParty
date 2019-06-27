<template>
  <div name="List" class="list-panel">
    <!--<buttons></buttons>-->
    <el-table ref="multipleTable" :data="qiangguo"   highlight-current-row @current-change="handleTableChange" height="590">
      <el-table-column prop="ranking" label="排名" />
      <el-table-column prop="gender" label="标题" />
      <el-table-column prop="status" label="发布时间" />
      <el-table-column prop="status" label="发布者" />
      <el-table-column prop="status" label="类别" />
      <el-table-column prop="type" label="状态" />
      <el-table-column prop="nickname" label="姓名" />
      <el-table-column prop="text010" label="科室" />
      <el-table-column prop="text08" label="工号" />
    </el-table>
    <el-pagination background layout="prev, pager, next" :total="1000" @current-change="handleCurrentChange"/>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import Bus from '../Bus/bus.js'

export default {
  name: 'List',
  components: {
  },
  data() {
    return {
      qiangguo:[],
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
//      'userList'
    ])
  },
  mounted() {
//    this.getUserList(),
      this.getall()
  },
  methods: {
    getall(){
      var vm = this
      // 用$on事件来接收参数
      Bus.$on('val', (data) => {
        console.log("父组件拿到的值",data)
        this.qiangguo = data
      });
    },
    ...mapActions([
//      'getUserList'
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
