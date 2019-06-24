#@Author: bjy @Date: 2019/5/15 15:07 #
<template>
  <div class="tree">
    <el-tabs type="border-card">
      <el-tab-pane label="页面管理">
        <el-input size="medium" placeholder="输入关键字进行过滤" v-model="filterText"></el-input>
        <el-tree
          :data="pageList" :props="defaultProps" @node-click="nodeClick"
          current-node-key default-expand-all highlight-current
          :filter-node-method="filterNode"
          ref="tree"
        >
          <span class="custom-tree-node" slot-scope="{ node, data }">
          <span>{{ node.label }}</span>
          <span>
            <el-button type="text" size="mini" @click="showChild(data)">
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
import PageService from '../../../services/PageService'

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
      'pageList'
    ])
  },
  mounted() {
    this.getPageList()
  },
  methods: {
    ...mapActions([
      'getPageList'
    ]),
    // 获取子集
    showChild(data){
      if (!data.child) {
        this.$set(data, 'child', []);
      }
      PageService.getPageListById({id:data.id}).then((res) => {
        if(res.code === 200){
//            console.log('data',data);
//            console.log(this.$set(data, 'child', []));
            let paramData = res.data;
            for (let i in paramData){
                if(!paramData[i].child){
                    paramData[i]['child'] = ''
                }
            }
//          if (!data.child) {
//            this.$set(data, 'child', []);
//          }
          data.child = paramData;
//          console.log('pageList',this.pageList)
        }else{
          this.$message.error(res.message)
        }
      })
    },
    // 过滤
    filterNode(value, data) {
      if (!value) return true;
      return data.name.indexOf(value) !== -1
    },
    nodeClick(data, node) {
        console.log(data)
      data['parentData'] = node.parent.data;
      this.$emit('changeData', data)
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
  height: 625px;
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
