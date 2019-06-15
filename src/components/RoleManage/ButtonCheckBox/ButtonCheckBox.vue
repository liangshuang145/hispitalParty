#@Author: bjy @Date: 2019/6/14 10:59 #
<template>
    <div name="buttonCheckBox">
      <el-card class="box-card">
        <div slot="header" class="clearfix">
          <span>按钮管理</span>
          <el-button style="float: right; padding: 3px 0" type="text" v-if="type === 2">确定</el-button>
        </div>
        <div>
          <el-checkbox :indeterminate="isIndeterminate" v-model="checkAll" @change="handleCheckAllChange">全选</el-checkbox>
          <div style="margin: 15px 0;"></div>
          <el-checkbox-group v-model="checkedOptions" @change="handleCheckedCitiesChange">
            <el-checkbox v-for="change in optionsStartArr" :label="change.id" :key="change.id">{{change.label}}</el-checkbox>
          </el-checkbox-group>
        </div>
      </el-card>
    </div>
</template>

<script>
    //  此处导入组件,格式,例如:import xxx名称 from "路径"
    export default{
        // 这里是name,记得填写
        name: 'buttonCheckBox',

        //  数据定义
        data () {
            return {
              checkAll: false,
              checkedOptions: [],
//              optionsStartArr: ['查看','新增','修改','删除','导入','查询','排名'],
              optionsStartArr: [
                {id:0,label:'查看'},
                {id:1,label:'新增'},
                {id:2,label:'删除'},
                {id:3,label:'导入'},
                {id:4,label:'查询'},
                {id:5,label:'排名'}
              ],
              isIndeterminate: true
            }
        },
        // 页面初始化(生命周期)
        created(){
        },
        // 页面方法
        methods: {
          handleCheckAllChange(val) {
            this.checkedOptions = val ? this.optionsStartArr : [];
            this.isIndeterminate = false;
          },
          handleCheckedCitiesChange(value) {
            let checkedCount = value.length;
            this.checkAll = checkedCount === this.optionsStartArr.length;
            this.isIndeterminate = checkedCount > 0 && checkedCount < this.optionsStartArr.length;
          }
        },
        // 计算属性
        computed: {},
        // 侦听器
        watch: {
          type(val){

          },
          checkedOptions(val){
              this.$emit('checkedOptions',val)
          }
        },
        // 依赖注入
        components: {}
    }
</script>

<!-- 本地样式 -->
<style scoped>

  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }
  .clearfix:after {
    clear: both
  }
  .box-card{
    width: 98%;
  }
</style>
