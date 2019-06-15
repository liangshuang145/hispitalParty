<template>
  <el-dialog title="收货地址" :visible.sync="dialogTableVisible" name="gridData">
    <el-table :data="gridData">
      <el-table-column property="date" label="日期" width="150"></el-table-column>
      <el-table-column property="name" label="姓名" width="200"></el-table-column>
      <el-table-column property="address" label="地址"></el-table-column>
    </el-table>
  </el-dialog>
</template>
<script>
    // import __ from '__' // __是需要手动引入的文件
    export default {
        name: 'gridData',
        components: {},
        data () {
            return {msg: '这个是Home模板页',
              gridData: [{
                date: '2016-05-02',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1518 弄'
              }, {
                date: '2016-05-04',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1518 弄'
              }, {
                date: '2016-05-01',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1518 弄'
              }, {
                date: '2016-05-03',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1518 弄'
              }],


            }
        },
        methods: {}
    }
</script>
<style lang="postcss" scoped>
    body {
        background-color: #ff0000;
    }
</style>
