<template>
  <div name="List" class="list-panel">
    <!--<buttons></buttons>-->
    <el-table ref="multipleTable" :data="myself"   highlight-current-row @current-change="handleTableChange" height="590">
      <el-table-column prop="hots" label="热度" />
      <el-table-column prop="name" label="标题" />
      <el-table-column prop="time" label="发布时间" />
      <!--<el-table-column prop="status1" label="发布者" />-->
      <!--<el-table-column prop="status2" label="类别" />-->
      <!--<el-table-column prop="type" label="状态" />-->
      <!--<el-table-column prop="nickname" label="姓名" />-->
      <!--<el-table-column prop="text010" label="科室" />-->
      <!--<el-table-column prop="text08" label="工号" />-->
    </el-table>
    <el-pagination background layout="prev, pager, next" :total="1000" @current-change="handleCurrentChange"/>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import SpiritService from "../../../services/SpiritService"
import Bus from '../Bus/bus'

export default {
  name: 'List',
  components: {
    SpiritService,Bus
  },
  data() {
    return {
      myself:[
        {
          nickname: '一支部',
          gender:'党建获得',
          status:'2018-12-12',
          status1:'张三',
          status2:'活动',
          type:'进行中',
          nickname:'李四',
          text010:'101',
          text08:'202',
        },
          ],
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
//      'spiritList'
    ])
  },
  mounted() {
//    this.getSpiritList()
    this.getall();
    //作为触发时间再次调用gettable的方法

    // 用$on事件来接收参数
    Bus.$on('val', (data) => {
      this.getall();
    })
  },
  methods: {


    getall(){
      SpiritService.getSpiritAll().then((res)=>{
          if(res.code === 200){
            console.log("res",res);
            this.myself=res.data.content;
          }else {
              this.$message.error(res.message);
          }

      });

    },

    ...mapActions([
      'getSpiritList'
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
