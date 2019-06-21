<template>
  <div name="List" class="list-panel">
    <el-table ref="multipleTable" :data="userList"   highlight-current-row @current-change="handleTableChange" height="560">
      <el-table-column prop="number" label="行政编号" />
      <el-table-column prop="jobNumber" label="工号" />
      <el-table-column prop="nickname" label="姓名" />
      <el-table-column prop="branch" label="所属支部" />
      <el-table-column prop="sex" label="性别" />
      <el-table-column prop="office" label="科室" />
      <el-table-column prop="job" label="职务" />
      <el-table-column prop="mobilePhone" label="手机号" />
    </el-table>
    <el-pagination
      background
    @current-change="handleCurrentChange"
    :page-size="18"
    layout="prev, pager, next, jumper"
    :total="1000">
  </el-pagination>
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
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
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


<!--<script>-->
<!--import { mapState, mapActions } from 'vuex'-->
<!--import Bus from '../../bus/bus01.js'-->
<!--import ElTableColumn from "element-ui/packages/table/src/table-column";-->

<!--export default {-->
  <!--name: 'List',-->
  <!--components: {-->
    <!--ElTableColumn-->
  <!--},-->
  <!--data() {-->
    <!--return {-->
      <!--isUserDialogShow: false,-->
      <!--dialogType: 0,-->
      <!--userData: {},-->
      <!--changeTableData: null-->
    <!--}-->
  <!--},-->
  <!--computed: {-->
    <!--...mapState([-->
      <!--'userList'-->
    <!--])-->
  <!--},-->
  <!--mounted() {-->
    <!--this.getUserList();-->
    <!--//Tree传递数据-->
    <!--Bus.$on('txt',(data)=> {-->
      <!--this.setUserList(state,data)-->
      <!--this.getUserList();-->
    <!--})-->
  <!--},-->
  <!--methods: {-->
    <!--...mapActions([-->
      <!--'getUserList'-->
    <!--]),-->
    <!--// 列表选中-->
    <!--handleTableChange(val) {-->
      <!--this.changeTableData = val;-->
      <!--this.$emit('tableDataChange',val)-->
    <!--},-->
  <!--}-->
<!--}-->
<!--</script>-->

<!--<style scoped>-->
<!--.el-pagination {-->
  <!--margin: 10px 0;-->
  <!--float: right;-->
<!--}-->
<!--</style>-->
