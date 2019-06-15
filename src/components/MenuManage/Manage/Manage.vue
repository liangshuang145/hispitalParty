#@Author: bjy @Date: 2019/6/3 15:44 #
<template>
  <el-tabs type="border-card">
    <div>
      <search></search>
    </div>
    <div>
      <tree-table :data="data" :columns="columns"></tree-table>
    </div>
    <!--<el-tab-pane label="查看项">-->
      <!--<info :pNode="pNode"/>-->
    <!--</el-tab-pane>-->
    <!--<el-tab-pane label="修改项">-->
      <!--<edit :pNode="pNode" @loadingDept="loadingDept"/>-->
    <!--</el-tab-pane>-->
    <!--<el-tab-pane label="新增项">-->
      <!--<add :pNode="pNode" @loadingDept="loadingDept"/>-->
    <!--</el-tab-pane>-->
  </el-tabs>
</template>

<script>
  import Info from '../Info/Info.vue'
  import Edit from '../Edit/Edit.vue'
  import Add from '../Add/Add.vue'
  import Search from '../Search/Search.vue'
  import TreeTable from '../TreeTable/TreeTable.vue'

  export default {
    name: 'Manage',
    components: {
      Info,
      Edit,
      Add,
      Search,
      TreeTable
    },
    props: [
      'currentNode'
    ],
    data() {
      return {
        pNode: null,
        columns: [
          {
            text: "事件",
            value: "event",
            width: 200
          },
          {
            text: "ID",
            value: "id"
          }
        ],
        data: [
          {
            id: 0,
            event: "事件1",
            timeLine: 50,
            comment: "无"
          },
          {
            id: 1,
            event: "事件2",
            timeLine: 100,
            comment: "无",
            child: [
              {
                id: 2,
                event: "事件2",
                timeLine: 10,
                comment: "无"
              },
              {
                id: 3,
                event: "事件3",
                timeLine: 90,
                comment: "无",
              }
            ]
          },
          {
            id: 4,
            event: "事件4",
            timeLine: 100,
            comment: "无",
            child: [
              {
                id: 5,
                event: "事件2",
                timeLine: 10,
                comment: "无"
              },
              {
                id: 6,
                event: "事件3",
                timeLine: 90,
                comment: "无",
              }
            ]
          }
        ]
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

