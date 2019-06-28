<template>
  <div name="List" class="list-panel">
    <!--<buttons></buttons>-->
    <el-table ref="multipleTable" :data="userInfoPartyList"   highlight-current-row @current-change="handleTableChange" height="520">
      <el-table-column prop="number" label="工号" ></el-table-column>
      <el-table-column prop="name" label="姓名" ></el-table-column>
      <el-table-column prop="branchName" label="所属支部" ></el-table-column>
      <el-table-column prop="sex" label="性别" ></el-table-column>
      <el-table-column prop="department" label="科室" ></el-table-column>
      <el-table-column prop="post" label="职务" ></el-table-column>
      <el-table-column prop="phone" label="手机号" ></el-table-column>
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
      'userInfoPartyList'
    ])
  },
  mounted() {
    this.getUserInfoPartyList({type:'未入党'})
  },
  methods: {
    ...mapActions([
      'getUserInfoPartyList'
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
