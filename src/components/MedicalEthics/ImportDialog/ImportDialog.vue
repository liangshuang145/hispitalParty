#@Author: bjy @Date: 2019/6/12 19:18 #
<template>
  <el-dialog :value="value" name="UserDialog" :visible="isShow" :before-close="handleClose" title="导入表格" width="750px" center>

  </el-dialog>
</template>

<script>
    //  此处导入组件,格式,例如:import xxx名称 from "路径"
    export default{
        // 这里是name,记得填写
        name: '',
        //  数据定义
        data () {
            return {}
        },
        // 页面初始化(生命周期)
        created(){
        },
        // 页面方法
        methods: {},
        // 计算属性
        computed: {},
        // 侦听器
        watch: {},
        // 依赖注入
        components: {}
    }
</script>

<!-- 本地样式 -->
<style scoped>

</style>
