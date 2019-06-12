#@Author: bjy @Date: 2019/5/15 15:07 #
<template>
  <div class="tree">
    <el-tabs type="border-card">
      <el-tab-pane label="列表">
        <el-input size="medium" placeholder="输入关键字进行过滤" v-model="filterText"/>
        <el-tree
          :data="subjectList"
          :props="defaultProps"
          @node-click="nodeClick"
          current-node-key
          default-expand-all
          highlight-current
          :filter-node-method="filterNode"
          ref="tree"
        />
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

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
      'subjectList'
    ])
  },
  mounted() {
    this.getSubjectList()
  },
  methods: {
    ...mapActions([
      'getSubjectList'
    ]),
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
</style>
