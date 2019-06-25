<template>
  <div name="List" class="list-panel">
    <el-table ref="multipleTable" :data="workList"   highlight-current-row @current-change="handleTableChange" height="520">
      <el-table-column prop="typeName" label="类型" />
      <el-table-column prop="name" label="工作名称" />
      <el-table-column prop="year" label="所属年度" />
      <el-table-column prop="startTime" label="开始时间" />
      <el-table-column prop="endTime" label="结束时间" />
      <el-table-column prop="remark" label="工作描述" />
    </el-table>
    <!--<el-pagination background layout="prev, pager, next" :total="1000"/>-->
  </div>
</template>
<script>
import { mapState, mapActions } from 'vuex'
import Bus from '../../bus/bus01.js'

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
      'workList'
    ])
  },
  watch:{
    workList(list){
        for (let i in list){
            let typeName = '';
          switch (list[i].workType){
            case 'one':
                typeName = '医共体建设';
                break;
            case 'two':
                typeName = '等级医院评审';
                break;
            case 'three':
                typeName = '最多跑一次';
                break;
            case 'four':
                typeName = '优质服务专项行动';
                break;
            case 'five' :
                typeName = '核心业务指标';
                break;
            default:
                typeName = '医共体建设';
                break;
            }

            list[i]['typeName'] = typeName
        }
    }
  },
  mounted() {
    this.getWorkList();
  },
  methods: {
    ...mapActions([
      'getWorkList'
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
