<template>
  <div name="Search" class="search-panel">
    <div class="row-select-search">
      <div>
        <el-select v-model="subject" size="medium" placeholder="请选择机构" @change="selectSubject" filterable>
          <el-option v-for="item in subjectList" :key="item.id" :label="item.name" :value="item.id"/>
        </el-select>
        <el-select v-model="depart" size="medium" placeholder="请选择组织(部门)" @change="selectDepart" filterable>
          <el-option v-for="item in departList" :key="item.id" :label="item.name" :value="item.id"/>
        </el-select>
        <el-select v-model="group" size="medium" placeholder="请选择行政(小组)" @change="selectGroup" filterable>
          <el-option v-for="item in groupList" :key="item.id" :label="item.name" :value="item.id"/>
        </el-select>
      </div>
      <div>
        <el-input class="search-input" size="medium" v-model="search" placeholder="用户搜索" @input="selectUserByName">
          <el-button slot="append" icon="el-icon-search"  @click="selectUserByName"></el-button>
        </el-input>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapState, mapActions } from 'vuex'
  import UserService from '../../../services/UserService'

  export default {
    name: 'Search',
    components: {
    },
    props: [
      'currentNode'
    ],
    data() {
      return {
        isUserDialogShow: false,
        isAddDialogShow: false,
        search: '',
        subject: '',
        depart: '',
        group: ''
      }
    },
    computed: {
      ...mapState([
        'subjectList',
        'departList',
        'groupList'
      ])
    },
    async mounted() {
      await this.getSubjectList();
    },
    methods: {
      ...mapActions([
        'getSubjectList',
        'getGroupListBySubjectId',
        'getDepartListBySubjectId',
        'getUserListByDepartId',
        'getUserListByGroupId',
        'getUserListByName'
      ]),
      selectUserByName(){
          if (this.search){
            this.getUserListByName({name:this.search,page:1,size:20})
          }
      },
      // 选择机构
      selectSubject(val) {
        this.getDepartListBySubjectId({subjectId:val});
        this.getGroupListBySubjectId({subjectId:val});
        this.subject = val
      },
      // 选择部门
      selectDepart(val) {
          this.getUserListByDepartId({departId:val,page:1,size:20});
        this.depart = val
      },
      //选择行政
      selectGroup(val) {
          this.getUserListByGroupId({groupId:val,page:1,size:20});
        this.group = val
      },
    }
  }
</script>

<style scoped>
  .search-panel {
    padding: 20px;
    /*border: 1px solid #eeeeee;*/
    border-radius: 3px;
  }
  .row-select-search{
    display: flex;
    justify-content: space-between;
  }

  .el-row + .el-row {
    margin-top: 5px;
  }

  .el-input.search-input {
    width: 350px;
  }
</style>
