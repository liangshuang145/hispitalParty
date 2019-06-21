<template>
  <div name="List" class="list-panel">
    <!--<buttons></buttons>-->
    <el-table ref="multipleTable" :data="list"   highlight-current-row @current-change="handleTableChange" height="520">
      <el-table-column prop="account" label="账号" width="110"/>
      <el-table-column prop="nickname" label="昵称" width="100"/>
      <el-table-column prop="gender" label="性别" width="50"/>
      <el-table-column prop="type" label="类型" width="90"/>
      <el-table-column prop="status" label="状态" width="50"/>
      <el-table-column prop="date" label="创建日期" width="110"/>
      <el-table-column prop="work" label="岗位信息" width="240"/>
      <el-table-column prop="description" label="描述"/>
    </el-table>
    <el-pagination
      @current-change="handleCurrentChange"
      :page-size="100"
      layout="prev, pager, next, jumper"
      :total="1000">
    </el-pagination>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import UserDialog from '../UserDialog/UserDialog.vue'
import Buttons from '../Buttons/Buttons.vue'

export default {
  name: 'List',
  components: {
    UserDialog,Buttons
  },
  data() {
    return {
      list:null,
      page: 1,
      changeTableData: null
    }
  },
  watch:{
    userList(Info){
        if(Info.code === 200){
            this.list = Info.data.content;
        }else{
            this.$message.error(res.message)
        }
//        console.log('userList',val)
    }
  },
  computed: {
    ...mapState([
      'userList'
    ])
  },
  mounted() {
    this.getUserList({page:this.page})
  },
  methods: {
    ...mapActions([
      'getUserList'
    ]),
    // 分页组件
    handleCurrentChange(pageNum){

    },
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
