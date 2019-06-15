#@Author: bjy @Date: 2019/6/14 10:57 #
<template>
    <div name="fields">
      <el-card class="box-card">
        <div slot="header" class="clearfix">
          <span>字段管理</span>
          <el-button style="float: right; padding: 3px 0" type="text" v-if="type === 2">确定</el-button>
        </div>
        <div>
          <el-checkbox :indeterminate="isIndeterminate" v-model="checkAll" @change="handleCheckAllChange">全选</el-checkbox>
          <div style="margin: 15px 0;"></div>
          <el-checkbox-group v-model="checkedOptions" @change="handleCheckedCitiesChange">
            <el-checkbox v-for="item in optionsStartArr" :label="item.id" :key="item.id">{{item.label}}</el-checkbox>
          </el-checkbox-group>
        </div>
      </el-card>
    </div>
</template>

<script>
    export default{
        // 这里是name,记得填写
        name: 'fields',
      props:{
        type:{// 0查看,1新增,2修改
          type:Number,
          default:0,
        }
      },
        data () {
            return {
              checkAll: false,
              checkedOptions: [],
              optionsStartArr: [
                {id:0,label:'姓名'},
                {id:1,label:'年龄'},
                {id:2,label:'入党时间'},
                {id:3,label:'手机号码'},
                {id:4,label:'身份证号码'}
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
            this.checkedCities = val ? this.optionsStartArr : [];
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
