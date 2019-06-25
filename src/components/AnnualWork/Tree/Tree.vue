#@Author: bjy @Date: 2019/6/11 11:06 #
<template>
  <div class="tree">
    <el-tabs type="border-card">
      <el-tab-pane label="年度">
        <el-input size="medium" placeholder="输入关键字进行过滤" v-model="filterText"/>
        <el-tree
          :data="userGroupList"
          :props="defaultProps"
          @node-click="nodeClick"
          current-node-key
          default-expand-all
          highlight-current
          :filter-node-method="filterNode"
          ref="tree"
        ></el-tree>
      </el-tab-pane>
    </el-tabs >
  </div>
</template>

<script>
  import { mapState, mapActions } from 'vuex'
  import ElTabPane from "../../../../node_modules/element-ui/packages/tabs/src/tab-pane";

  export default {
    components: {ElTabPane},
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
        'userGroupList'
      ])
    },
    mounted() {
      this.getUserGroupList()
    },
    methods: {
      ...mapActions([
        'getUserGroupList'
      ]),
      filterNode(value, data) {
        if (!value) return true
        return data.name.indexOf(value) !== -1
      },
      nodeClick(data, node) {
        data['parentData'] = node.parent.data;
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
    overflow: auto;
    height: 540px;
    margin-top: 10px;
  }
</style>
