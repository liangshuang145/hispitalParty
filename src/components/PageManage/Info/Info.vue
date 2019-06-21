<template>
  <div name="Edit" class="form-panel">
    <el-form ref="form" :model="form" label-width="100px">
      </el-form-item>
      <el-form-item label="等级" prop="level">
        <el-input v-model="form.level" size="medium" :maxlength="50" disabled/>
      </el-form-item>
      <el-form-item label="名字" prop="name">
        <el-input v-model="form.name" size="medium" :maxlength="50" disabled/>
      </el-form-item>
      </el-form-item>
      <el-form-item label="类型" prop="sort">
        <el-input v-model="form.sort" size="medium" :maxlength="50" disabled/>
      </el-form-item>
      <el-form-item label="标题" prop="title">
        <el-input v-model="form.title" size="medium" :maxlength="50" disabled/>
      </el-form-item>

    </el-form>
    <el-card class="box-card i-card">
      <div slot="header" class="clearfix">
        <span class="card-title">字段信息</span>
      </div>
      <div>
        <el-checkbox :label="item.name" v-for="item in form.fields" :key="item.id" disabled></el-checkbox>
      </div>
    </el-card>
  </div>
</template>

<script>
  import PageService from '../../../services/PageService'
export default {
  name: 'Info',
  props: [
    'pNode'
  ],
  data() {
    return {
      form: {
        createdDate:'',
        lastModifiedDate:'',
        level:'',
        name:'',
        id:'',
        sort:'',
        title:'',
        fields:'',
      },
      thisNode: this.pNode
    }
  },
  methods:{
      // 获取页面信息
    getPage(){
      PageService.getPage({id:this.form.id}).then((res) => {
          if(res.code === 200){
              this.form = res.data
          }else{
              this.$message.error(res.message)
          }
        console.log('获取页面信息Tree',res)
      })
    }
  },
  watch: {
    pNode(newData, oldData) {
     this.thisNode = newData;
      this.form.createdDate = newData.createdDate;
      this.form.lastModifiedDate = newData.lastModifiedDate;
      this.form.level = newData.level;
      this.form.name = newData.name;
      this.form.id = newData.id;
        this.form.sort = newData.sort;
        this.form.title = newData.title;
      this.form.fields = newData.fields;
      this.getPage();
    }
  }
}
</script>

<style scoped>
.form-panel {
  min-height: 520px;
  overflow-y: auto;
}
  .i-card{
    width:50%;
    margin:0 0 0 50px;
  }
  .card-title{
    color: #595959;
  }
</style>
