<template>
  <div name="Edit" class="form-panel">
    <el-form ref="form" :model="form" label-width="100px">
      <el-form-item label="名称" prop="name">
        <el-input v-model="form.name" size="medium" :maxlength="50" disabled/>
      </el-form-item>
      <!--<el-form-item label="类型">-->
        <!--<el-radio v-model="form.type" :label="0" disabled>总院</el-radio>-->
        <!--<el-radio v-model="form.type" :label="1" disabled>分院</el-radio>-->
        <!--<el-radio v-model="form.type" :label="2" disabled>其他</el-radio>-->
      <!--</el-form-item>-->
      <el-form-item label="描述" prop="description">
        <el-input type="textarea" v-model="form.description" :rows="5" :maxlength="255" disabled/>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
  import { mapState, mapActions } from 'vuex'
  import FieldService from '../../../services/FieldService'

export default {
  name: 'Info',
  props: [
    'pNode'
  ],
  data() {
    return {
      form: {
        id: '',
        name: '',
      },
      thisNode: this.pNode
    }
  },
  methods:{
    ...mapActions([
      'getUserGroupList',
      'getPageList',
      'getRoleList',
      'getFieldList'
    ]),
    getField(id){
      FieldService.getField({id:id}).then((res) => {
          if(res.code === 200){
              console.log(res.data)
          }
      })
    }
  },
  computed: {
    ...mapState([
      'pageList',
      'userGroupList',
      'roleList'
    ])
  },
  mounted() {
    this.getUserGroupList();
    this.getPageList();
    this.getRoleList()
  },
  watch: {
    pNode(newData, oldData) {
      this.thisNode = newData;
      this.form.id = newData.id;
      this.getField(newData.id);
    }
  }
}
</script>

<style scoped>
.form-panel {
  min-height: 520px;
  overflow-y: auto;
}
</style>
