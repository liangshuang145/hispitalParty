#@Author: bjy @Date: 2019/6/11 11:06 #
<template>
  <div class="tree">
    <el-tabs type="border-card">
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
        />
    </el-tabs >
  </div>
</template>

<script>
  import { mapState, mapActions } from 'vuex'
  import Bus from '../../bus/bus01.js'

  export default {
    name: 'Tree',
    data() {
      return {
        filterText: '',
        defaultProps: {
          children: 'child',
          label: 'name'
        },
        currentNode:[],
        treename:''
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
//      this.getUserGroupList()
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
          //获取点击id
        console.log(data);
        this.treename=data.id;
        console.log(this.treename);

        //发送接口请求

        data['parentData'] = node.parent.data;
        this.$emit('nodeDept', data);

        //发送请求
        this.$http.post("localhost:8080/"+""+this.treename)
          .then((res)=>{
            //数据传递成功
            if(res.data.code==200){
              //执行下面方法
              this.currentNode=res;
              console.log(this.currentNode, "111");
              Bus.$emit('txt',this.currentNode);
            }
          },(res)=>{
            alert("接口测试失败");
        });


      },

    }
  }
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
