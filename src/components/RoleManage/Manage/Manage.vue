#@Author: bjy @Date: 2019/5/17 11:43 #
<template>
  <el-tabs type="border-card">
    <el-tab-pane label="查看项">
      <info :pNode="pNode"/>
    </el-tab-pane>
    <el-tab-pane label="修改项">
      <edit :pNode="pNode" @loadingDept="loadingDept"/>
    </el-tab-pane>
    <el-tab-pane label="新增项">
      <add :pNode="pNode" @loadingDept="loadingDept"/>
    </el-tab-pane>
  </el-tabs>
</template>

<script>
import Info from '../Info/Info.vue'
import Edit from '../Edit/Edit.vue'
import Add from '../Add/Add.vue'
import TreeTable from '../TreeTable/TreeTable.vue'

export default {
  name: 'Manage',
  components: {
    Info,
    Edit,
    Add,
    TreeTable
  },
  props: [
    'currentNode'
  ],
  data() {
    return {
      pNode: null,
    }
  },
  watch: {
    currentNode(currentNode) {
      this.pNode = currentNode
    }
  },
  methods: {
    loadingDept() {
      console.log('this is loadingDept ...')
    }
  }
}
</script>
