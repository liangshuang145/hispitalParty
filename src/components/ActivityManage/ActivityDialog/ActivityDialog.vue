#@Author: bjy @Date: 2019/6/5 14:48 #
<template>
  <el-dialog
    :value="value"
    name="ActivityDialog"
    :visible="isShow"
    :before-close="handleClose"
    :title="title"
    width="640px"
    center
  >
  </el-dialog>
</template>

<script>
    //  此处导入组件,格式,例如:import xxx名称 from "路径"
    export default{
        // 这里是name,记得填写
        name: 'activityDialog',
        prop:{
          userData: { // 活动数据
            type: Object,
            default() {
              return {}
            }
          },
          type: { // 类型: 0-查看(默认),1-新增,2-修改
            type: Number,
            default: 0
          },
          value: {
            type: Boolean,
            default: false
          }
        },
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
        watch: {
          value(val) {
            this.isShow = val
          },
          isShow(val) {
            this.$emit('input', val)
          },
        },
        // 依赖注入
        components: {}
    }
</script>

<!-- 本地样式 -->
<style scoped>

</style>
