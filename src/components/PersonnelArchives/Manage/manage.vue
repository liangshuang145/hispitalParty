#@Author: bjy @Date: 2019/6/11 11:49 #
<template>
      <el-tabs type="border-card">
        <div>
          <buttons :changeData="tableData"/>
        </div>
        <div>
          <list  @tableDataChange="changeData"></list>
          <!--<list @tableDataChange="changeData"/>-->
        </div>
      </el-tabs>
</template>

<script>
  import Search from '../Search/Search.vue'
//  import List from '../List/List.vue'
  import Buttons from '../Buttons/Buttons.vue'
  import List from "../List/List";
    //  此处导入组件,格式,例如:import xxx名称 from "路径"
    export default{
        // 这里是name,记得填写
        name: 'manage',
        props:['currentNode'],
        //  数据定义
        data () {
            return {
              tableData:null
            }
        },
        // 页面初始化(生命周期)
        created(){
        },
        // 页面方法
        methods: {
          changeData(data){
            this.tableData = data
          }
        },
        // 计算属性
        computed: {},
        // 侦听器
        watch: {
          currentNode(data){
              console.log('树结构点击数据',data)
          }
        },
        // 依赖注入
        components: {
          List,
          Search,
//          List,
          Buttons
        }
    }
</script>

<!-- 本地样式 -->
<style scoped>

</style>
