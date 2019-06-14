#@Author: bjy @Date: 2019/6/14 10:57 #
<template>
    <div name="fields">
      <el-card class="box-card">
        <div slot="header" class="clearfix">
          <span>字段管理</span>
          <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>
        </div>
        <div>
          <el-checkbox :indeterminate="isIndeterminate" v-model="checkAll" @change="handleCheckAllChange">全选</el-checkbox>
          <div style="margin: 15px 0;"></div>
          <el-checkbox-group v-model="checkedCities" @change="handleCheckedCitiesChange">
            <el-checkbox v-for="city in cities" :label="city" :key="city">{{city}}</el-checkbox>
          </el-checkbox-group>
        </div>
      </el-card>
    </div>
</template>

<script>
  const cityOptions = ['上海', '北京', '广州', '深圳'];

    export default{
        // 这里是name,记得填写
        name: 'fields',
        //  数据定义
        data () {
            return {
              checkAll: false,
              checkedCities: ['上海', '北京'],
              cities: cityOptions,
              isIndeterminate: true
            }
        },
        // 页面初始化(生命周期)
        created(){
        },
        // 页面方法
        methods: {
          handleCheckAllChange(val) {
            this.checkedCities = val ? cityOptions : [];
            this.isIndeterminate = false;
          },
          handleCheckedCitiesChange(value) {
            let checkedCount = value.length;
            this.checkAll = checkedCount === this.cities.length;
            this.isIndeterminate = checkedCount > 0 && checkedCount < this.cities.length;
          }
        },
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
