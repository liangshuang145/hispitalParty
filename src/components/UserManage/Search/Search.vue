<template>
  <div name="Search" class="search-panel">
    <div class="row-select-search">
      <div>
        <el-select v-model="subject" size="medium" placeholder="请选择机构" @change="selectSubject">
          <el-option v-for="item in subjectList" :key="item.id" :label="item.name" :value="item.id"/>
        </el-select>
        <el-select v-model="depart" size="medium" placeholder="请选择组织(部门)" @change="selectDepart">
          <el-option v-for="item in departList" :key="item.id" :label="item.name" :value="item.id"/>
        </el-select>
        <el-select v-model="group" size="medium" placeholder="请选择行政(小组)" @change="selectGroup">
          <el-option v-for="item in groupList" :key="item.id" :label="item.name" :value="item.id"/>
        </el-select>
      </div>
      <div>
        <el-input class="search-input" size="medium" v-model="search" placeholder="用户搜索">
          <el-button slot="append" icon="el-icon-search"></el-button>
        </el-input>
      </div>
    </div>
    <!--<buttons></buttons>-->
    <!--<el-row>-->
      <!--<el-input class="search-input" size="medium" v-model="search" placeholder="用户搜索">-->
        <!--<el-button slot="append" icon="el-icon-search"></el-button>-->
      <!--</el-input>-->
      <!--<el-button type="success" size="medium" @click="showAddDialog">添加用户</el-button>-->
    <!--</el-row>-->
    <!--<user-dialog v-model="isUserDialogShow" :type="1"/>-->
  </div>
</template>

<script>
  import { mapState, mapActions } from 'vuex'
  import UserDialog from '../UserDialog/UserDialog.vue'
  import Buttons from '../Buttons/Buttons.vue'

  export default {
    name: 'Search',
    components: {
      Buttons
//      UserDialog
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
      await this.getSubjectList()
      await this.getDepartList()
      await this.getGroupList()
    },
    methods: {
      ...mapActions([
        'getSubjectList',
        'getDepartList',
        'getGroupList'
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
      showAddDialog() {
        this.isUserDialogShow = true
      }
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
