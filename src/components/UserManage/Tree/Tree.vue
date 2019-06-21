#@Author: bjy @Date: 2019/6/11 11:06 #
<template>
  <div class="tree">
    <el-tabs type="border-card">
      <el-row>
        <!--<el-col :span="4">-->
          <!--<el-radio-group v-model="radio">-->
            <!--<el-radio :label="3">备选项</el-radio>-->
            <!--<el-radio :label="6">备选项</el-radio>-->
            <!--<el-radio :label="9">备选项</el-radio>-->
          <!--</el-radio-group>-->
        <!--</el-col>-->
        <el-col :span="24"><div class=" tree-title">机构</div></el-col>
      </el-row>
      <el-row>
        <el-input size="medium" placeholder="输入关键字进行过滤" v-model="filterText"></el-input>
        <el-tree :data="subjectList" :props="defaultProps" @node-click="nodeClick" current-node-key default-expand-all highlight-current
          :filter-node-method="filterNode" ref="treeOfSubject"></el-tree>
      </el-row>
      <el-row>
        <el-col :span="24"><div class=" tree-title">部门</div></el-col>
      </el-row>
      <el-row>
        <el-input size="medium" placeholder="输入关键字进行过滤" v-model="filterText"></el-input>
        <el-tree :data="departList" :props="defaultProps" @node-click="nodeClick" current-node-key default-expand-all highlight-current
                 :filter-node-method="filterNode" ref="treeOfDepart"></el-tree>
      </el-row>
    </el-tabs >
  </div>
</template>

<script>
  import { mapState, mapActions } from 'vuex'
  import ElRow from "element-ui/packages/row/src/row";
  import ElCol from "element-ui/packages/col/src/col";

  export default {
    components: {
      ElCol,
      ElRow},
    name: 'Tree',
    data() {
      return {
        filterText: '',
        defaultProps: {
          children: 'child',
          label: 'name'
        }
      }
    },
    watch: {
      filterText(val) {
        this.$refs.tree.filter(val)
      }
    },
    computed: {
      ...mapState([
        'subjectList',// 机构
        'departList',// 部门
        'groupList',// 行政
      ])
    },
    mounted() {
        this.getSubjectList();
      this.getDepartList();
      this.getGroupList()
    },
    methods: {
      ...mapActions([
        'getSubjectList',
        'getDepartList',
        'getGroupList'
      ]),
      filterNode(value, data) {
        if (!value) return true;
        return data.name.indexOf(value) !== -1
      },
      nodeClick(data, node) {
        data['parentData'] = node.parent.data
        this.$emit('nodeDept', data)
      }
    }
  }
</script>

<style scoped>
  .tree {
    margin-right: 20px;
  }
  .el-tree {
    /*overflow: auto;*/
    height:200px;
    margin-top: 10px;
  }
  .tree-title{
    background: #e5e9f2;
    border-radius: 4px;
    height: 30px;
    margin:10px 0;
    text-align: center;
    color: #595959;
  }
</style>
