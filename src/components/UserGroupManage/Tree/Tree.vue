#@Author: bjy @Date: 2019/5/15 15:07 #
<template>
  <div class="tree">
    <el-tabs type="border-card">
      <el-tab-pane label="用户组">
        <el-input size="medium" placeholder="输入关键字进行过滤" v-model="filterText"></el-input>
        <el-tree
          :data="userGroupList"
          :props="defaultProps"
          @node-click="nodeClick"
          current-node-key
          default-expand-all
          highlight-current
          :filter-node-method="filterNode"
          ref="tree"
        >
          <span class="custom-tree-node" slot-scope="{ node, data }">
          <span>{{ node.label }}</span>
          <span>
            <el-button
              type="text"
              size="mini"
              @click="showChild(data)">
              查看子集
            </el-button>
          </span>
          </span>
        </el-tree>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import UserGroupService from '../../../services/UserGroupService'

export default {
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
    // 展示子集
    showChild(data){
      UserGroupService.getUserGroupListById({id:data.id}).then((res) => {
        if(res.code === 200){
          this.$set(data, 'child', []);
          data.child = res.data;
        }else{
          this.$message.error(res.message)
        }
      });
    },
    // 过滤
    filterNode(value, data) {
      if (!value) return true
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
  overflow: auto;
  height: 475px;
  margin-top: 10px;
}
.custom-tree-node {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 14px;
  padding-right: 8px;
}
</style>
