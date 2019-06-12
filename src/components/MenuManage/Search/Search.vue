<template>
  <div name="Search" class="search-panel">
    <el-row>
      <el-select v-model="subject" size="medium" placeholder="请选择机构" @change="selectSubject">
        <el-option v-for="item in subjectList" :key="item.id" :label="item.name" :value="item.id"/>
      </el-select>
      <el-select v-model="depart" size="medium" placeholder="请选择组织(部门)" @change="selectDepart">
        <el-option v-for="item in departList" :key="item.id" :label="item.name" :value="item.id"/>
      </el-select>
      <el-select v-model="group" size="medium" placeholder="请选择行政(小组)" @change="selectGroup">
        <el-option v-for="item in groupList" :key="item.id" :label="item.name" :value="item.id"/>
      </el-select>
    </el-row>
    <el-row>
      <el-select v-model="subject" size="medium" placeholder="请选择角色" @change="selectSubject">
        <el-option v-for="item in subjectList" :key="item.id" :label="item.name" :value="item.id"/>
      </el-select>
      <el-select v-model="subject" size="medium" placeholder="请选择等级" @change="selectSubject">
        <el-option v-for="item in subjectList" :key="item.id" :label="item.name" :value="item.id"/>
      </el-select>
    </el-row>
  </div>
</template>

<script>
  import { mapState, mapActions } from 'vuex'
  export default {
    name: 'Search',
    components: {
    },
    props: [
      'currentNode'
    ],
    data() {
      return {
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
    }
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
