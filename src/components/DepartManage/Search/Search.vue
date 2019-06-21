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
    'fatherValue',
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
  watch:{
    fatherValue(val){
        this.value = val
    }
  },
  mounted() {
    this.getSubjectList()
  },
  methods: {
    ...mapActions([
      'getSubjectList',
      'getDepartListBySubjectId'
    ]),
    selectParent(data) {
      this.getDepartListBySubjectId({subjectId:data});
      this.$emit('changeSubject',data)
    }
  }
}
</script>

<style scoped>
.search-panel {
  margin: 10px 0;
  border-radius: 3px;
}
</style>
