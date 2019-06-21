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
    'subjectName'
  ],
  data() {
    return {
      value: ''
    }
  },
  watch:{
    subjectName(val){
      this.value = val
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
      'getGroupList',
      'getGroupListBySubjectId'
    ]),
    selectParent(data) {
      this.getGroupListBySubjectId({subjectId:data});
      this.$emit('changeSubject',data)
    }
  }
}
</script>

<style scoped>
.search-panel {
  margin: 10px 0;
}
</style>
