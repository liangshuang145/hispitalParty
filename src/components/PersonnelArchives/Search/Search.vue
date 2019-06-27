<template>
  <div name="Search" class="search-panel">
    <div class="change-search">
      <div class="radio-div">
        <el-radio-group v-model="radio" class="radio-group">
          <el-radio v-for="item in radioGroupArr" :key="item.label" :label="item.label" class="bind-button">{{item.name}}</el-radio>
        </el-radio-group>
      </div>
      <div>
        <el-input class="search-input" size="medium" v-model="search" :placeholder="inputPlaceholder" @input="selectSearch">
          <el-button slot="append" icon="el-icon-search" @click="selectSearch"></el-button>
        </el-input>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapState, mapActions } from 'vuex'
  import UserInfoService from '../../../services/UserInfoService'

  export default {
    name: 'search',
    props: [
      'currentNode'
    ],
    data() {
      return {
        radioGroupArr:[
          {label:1,name:'姓名'},
          {label:2,name:'科室'},
          {label:3,name:'工号'}
        ],
        radio:1,
        search: '',
        searchYear:'',
        inputPlaceholder:'根据姓名搜索'
      }
    },
    watch: {
      radio(radio){
        switch (radio){
          case 1:
            this.inputPlaceholder = '根据姓名搜索';
            break;
          case 2:
            this.inputPlaceholder = '根据科室搜索';
            break;
          case 3:
            this.inputPlaceholder = '根据工号搜索';
            break;
        }
      }
    },
    methods: {
        ...mapActions([
          'selectUserInfoListByNameOrNumberOrOffice',
        ]),
      // 搜索
      selectSearch(){
        switch (this.radio){
          case 1: //根据姓名搜索
            this.selectUserInfoListByNameOrNumberOrOffice({name:this.search,department:'',number:''});
            break;
          case 2:
            this.selectUserInfoListByNameOrNumberOrOffice({department:this.search,name:'',number:''});
            // 根据科室搜索
            break;
          case 3:
            this.selectUserInfoListByNameOrNumberOrOffice({number:this.search,name:'',department:''});
            // 根据工号搜索
            break;
        }
      }
    }
  }
</script>

<style scoped>
  .search-panel {
    padding: 20px;
    border-radius: 3px;
  }
  .change-search{
    display: flex;
    justify-content: flex-end;
  }
  .radio-group .radio-div {
    margin-right: 5px;
  }
  .el-input.search-input {
    width: 300px;
  }
  .radio-div {
    margin-right: 5px;
  }
</style>
