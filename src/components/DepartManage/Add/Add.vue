<template>
  <div name="Add" class="form-panel">
    <el-form ref="form" :model="form" :rules="rule" label-suffix="：" label-width="120px">
      <el-form-item label="名称" prop="name">
        <el-input v-model="form.name" size="medium" :maxlength="50"></el-input>
      </el-form-item>
      <el-form-item label="所属机构" prop="subjectName">
        <el-select v-model="form.subjectName" size="medium" placeholder="请选择机构" @change="selectParentSubject">
          <el-option v-for="item in subjectList" :key="item.id" :label="item.name" :value="item.id"/>
        </el-select>
        <!--<search :fatherValue="form.subjectName" @changeSubject="changeSubject"></search>-->
      </el-form-item>
      <el-form-item label="上级组织(部门)" prop="fatherName">
        <el-select v-model="form.fatherName" size="medium" placeholder="请选择机构" @change="selectParentDepart">
          <el-option v-for="item in departList" :key="item.id" :label="item.name" :value="item.id"></el-option>
        </el-select>
        <!--<el-input v-model="form.fatherName" size="medium" :maxlength="50" disabled/>-->
      </el-form-item>
      <el-form-item>
        <el-button type="success" size="medium" @click="submitForm">新增</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
  import { mapState, mapActions } from 'vuex'
import Validator from '@/lib/validator'
import DepartService from '@/services/DepartService'
import Search from '../Search/Search.vue'

export default {
  name: 'Add',
  props: [
    'pNode'
  ],
  components:{
    Search
  },
  data() {
    return {
      form: {
        name: '',
        subjectId: '',
        subjectName:'',
        fatherId:'',
        fatherName: '',
        userName: ''
      },
      rule: {
        name: [{
          validator: Validator.checkName,
          trigger: 'blur'
        }],
      },
      departList:[],
      thisNode:''
    }
  },
  created(){
    let userInfo = JSON.parse(sessionStorage.getItem('userInfo'));
    this.form.userId = userInfo.id
  },
  watch: {
    pNode(pNode) {
      this.thisNode = pNode;
      this.form.fatherId = pNode.id;
      this.form.fatherName = pNode.name;
      this.form.subjectName = pNode.subject.name;
      this.form.subjectId = pNode.subject.id;
    },
  },
  computed: {
    ...mapState([
      'subjectList'
    ])
  },
  mounted() {
    this.getSubjectList()
  },
  methods: {
    ...mapActions([
      'getSubjectList'
    ]),
    // 选择机构
    selectParentSubject(subjectId){
      this.form.subjectId = subjectId;
      DepartService.getDepartListBySubjectId({subjectId:subjectId}).then((res) => {
          this.departList = res
      })
    },
    selectParentDepart(departId){
        this.form.fatherId = departId
    },
    submitForm() {
      this.$refs['form'].validate((valid) => {
        if (!valid || !this.form.subjectId || !this.form.fatherId) {
          this.$message.error('请检查字段');
          return
        }
        DepartService.addDepart(this.form).then((res) => {
            if (res.code === 200){
              this.$message.success('添加'+res.message);
              // 清空表单
              this.$refs.form.resetFields();
              // 重载   tree
              this.getDepartList()
            }else{
              this.$message.success(res.message);
            }
        })
      })
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
