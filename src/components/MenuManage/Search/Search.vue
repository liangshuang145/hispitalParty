<template>
  <div name="Search" class="search-panel">
    <el-row>
      <el-select v-model="subject" size="medium" placeholder="请选择机构" @change="selectSubject">
        <el-option v-for="item in subjectList" :key="item.id" :label="item.name" :value="item.id"/>
      </el-select>
      <el-select v-model="depart" size="medium" placeholder="请选择组织(部门)" @change="selectDepart">
        <el-option v-for="item in departList" :key="item.id" :label="item.name" :value="item.id"/>
      </el-select>
      <el-select v-model="group" size="medium" placeholder="请选择行政(小组)" @change="selectGroup" multiple>
        <el-option v-for="item in groupList" :key="item.id" :label="item.name" :value="item.id"/>
      </el-select>
      <el-select v-model="user" size="medium" placeholder="请选择用户组" @change="selectUser">
        <el-option v-for="item in userGroupList" :key="item.id" :label="item.name" :value="item.id"/>
      </el-select>
      <!--<el-select v-model="grade" size="medium" placeholder="请选择等级" @change="selectGrade">-->
        <!--<el-option v-for="item in options" :key="item.id" :label="item.name" :value="item.id"/>-->
      <!--</el-select>-->
    </el-row>
    <el-row>
      <el-button type="primary" icon="el-icon-menu">确定菜单</el-button>
    </el-row>
  </div>
</template>

<script>
  import { mapState, mapActions } from 'vuex'
  import ElRow from "element-ui/packages/row/src/row";
  import ElButton from "../../../../node_modules/element-ui/packages/button/src/button";
  import GroupService from '../../../services/GroupService'
  export default {
    name: 'Search',
    components: {
      ElButton,
      ElRow
    },
    props: [
      'currentNode'
    ],
    data() {
      return {
        options:[],
        search: '',
        subject: '',
        depart: '',
        group: '',
        user: '',
      }
    },
    computed: {
      ...mapState([
        'subjectList',
        'departList',
        'groupList',
        'userGroupList'
      ])
    },
    async mounted() {
      await this.getSubjectList()
      await this.getDepartList()
      await this.getGroupList()
      await this.getUserGroupList()
    },
    methods: {
      ...mapActions([
        'getSubjectList',
        'getDepartList',
        'getGroupList',
        'getUserGroupList'
      ]),
      selectSubject(val) {
        this.subject = val
      },
      selectDepart(val) {
        this.depart = val
      },
      selectGroup(val) {
        this.group = val
      },
      selectUser(val){
          this.user = val
      },
      selectGrade(val){
          this.grade = val
      }
    },
    watch:{
      subject(newData, oldData){
         console.log('newData',newData);
        this.getGroupList({subjectId:newData})

//        GroupService.getGroup({subjectId:newData}).then((res) => {
//          if(res.code === 200){
//              console.log(res.data);
//            groupList = res.data
//          }else{
//            this.$message.error(res.message)
//          }
//          console.log('根据id获取子集',res)
//        })
      },
    },
  }
</script>

<style scoped>
  .search-panel {
    padding: 20px;
    border: 1px solid #eeeeee;
    border-radius: 3px;
  }

  .el-row + .el-row {
    margin-top: 5px;
  }

  .el-input.search-input {
    width: 350px;
  }
</style>
