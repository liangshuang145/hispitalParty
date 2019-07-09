#@Author: bjy @Date: 2019/6/11 11:06 #
<template>
  <div class="tree">
    <el-tabs type="border-card">
      <el-tabs-pane label="年度">
        <el-input placeholder="输入关键字进行过滤" v-model="filterText"></el-input>

        <el-tree
          class="filter-tree"
          :data="data"
          :props="defaultProps"
          default-expand-all
          :filter-node-method="filterNode"
          ref="tree"
        ></el-tree>
      </el-tabs-pane>
    </el-tabs>
  </div>
</template>

  <script>
import { mapState, mapActions } from "vuex";
import ElTabsPane from "../../../../node_modules/element-ui/packages/tabs/src/tab-pane";

export default {
  name: "Tree",
  components: { ElTabsPane },
  data() {
    return {
      filterText: "",
      defaultProps: {
        children: "child",
        label: "name"
      },
      data: [
        {
          id: 1,
          label: "一级 1",
          children: [
            {
              id: 4,
              label: "二级 1-1",
              children: [
                {
                  id: 9,
                  label: "三级 1-1-1"
                },
                {
                  id: 10,
                  label: "三级 1-1-2"
                }
              ]
            }
          ]
        },
        {
          id: 2,
          label: "一级 2",
          children: [
            {
              id: 5,
              label: "二级 2-1"
            },
            {
              id: 6,
              label: "二级 2-2"
            }
          ]
        },
        {
          id: 3,
          label: "一级 3",
          children: [
            {
              id: 7,
              label: "二级 3-1"
            },
            {
              id: 8,
              label: "二级 3-2"
            }
          ]
        }
      ]
    };
  },
  watch: {
    filterText(val) {
      this.$refs.tree.filter(val);
    }
  },
  methods: {
    filterNode(value, data) {
      if (!value) return true;
      return data.label.indexOf(value) !== -1;
    }
  },
  computed: {
    ...mapState(["userGroupList"])
  },
  mounted() {
    this.getUserGroupList();
  },
  methods: {
    ...mapActions(["getUserGroupList"]),
    filterNode(value, data) {
      if (!value) return true;
      return data.name.indexOf(value) !== -1;
    },
    nodeClick(data, node) {
      data["parentData"] = node.parent.data;
      this.$emit("nodeDept", data);
    }
  }
};
</script>
<style scoped>
.tree {
  margin-right: 20px;
}

.el-tree {
  overflow: auto;
  height: 640px;
  margin-top: 10px;
}
</style>
