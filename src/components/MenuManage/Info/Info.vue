#@Author: bjy @Date: 2019/6/3 15:52 #
<template>
  <div name="Info" class="form-panel">
    <el-form ref="form" :model="form" label-suffix="：" label-width="100px">
      <el-form-item label="名称" prop="name">
        <el-input v-model="form.name" size="medium" :maxlength="50" disabled/>
      </el-form-item>
      <el-form-item label="父级页面" prop="parentName" v-if="form.father">
        <el-input v-model="form.father.name" size="medium" :maxlength="50" disabled/>
      </el-form-item>
      <el-form-item label="描述" prop="description">
        <el-input type="textarea" v-model="form.remark" :rows="5" :maxlength="255" disabled/>
      </el-form-item>
    </el-form>
    <Search/>
  </div>
</template>

<script>
  import Search from '../Search/Search.vue'
  import MenuService from '../../../services/MenuService'
  import { mapState, mapActions } from 'vuex'
  export default {
    name: 'Info',
    components:{
      Search
    },
    props: [
      'pNode'
    ],
    data() {
      return {
        form: {
          id: '',
          name: '',
          subjectId: '',
          subjectName: '',
          parentId: '',
          parentName: '',
          description: ''
        },
        thisNode: this.pNode
      }
    },
    computed: {
      ...mapState([
        'menuInfo'
      ])
    },
    methods:{

    },
    watch: {
      menuInfo(Info){
          if (Info.code === 200){
              this.form = Info.data
          }else {
              this.$message.error(res.message)
          }
          console.log('menuInfo',val)
      },
      pNode(newData, oldData) {
        this.thisNode = newData;
        this.form.id = newData.id;
      },
    }
  }
</script>

<style scoped>
  .form-panel {
    min-height: 520px;
    overflow-y: auto;
  }
</style>

