<template>
  <div name="Search" class="search-panel">
    <el-row>
      <el-select v-model="value" size="medium" placeholder="请选择机构" @change="selectParent">
        <el-option v-for="item in subjectList" :key="item.id" :label="item.name" :value="item.id"/>
      </el-select>
    </el-row>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  name: 'Search',
  props: [
    'currentNode'
  ],
  data() {
    return {
      value: ''
    }
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
      'getSubjectList',
      'getGroupList'
    ]),
    selectParent() {
      this.getGroupList()
    }
  }
}
</script>

<style scoped>
.search-panel {
  padding: 20px;
  margin-top: 20px;
  border: 1px solid #eee;
  border-radius: 3px;
}
</style>
