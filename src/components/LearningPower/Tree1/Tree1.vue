#@Author: bjy @Date: 2019/6/11 11:06 #
<template>
  <div class="tree">
    <el-tabs type="border-card">
      <el-input size="medium" placeholder="输入关键字进行过滤" v-model="filterText"/>
      <el-tree
        :data="subjectList"
        node-key="id"
        ref="tree"
        highlight-current
        :props="defaultProps"
        lazy
        :load="loadNode"
      >
      </el-tree>
    </el-tabs >
  </div>
</template>

<script>
  import Search from '../Search/Search.vue'
  import MenuManage from '../../../services/MenuService.js'
  import MenuService from '../../../services/MenuService'
  import { mapState, mapActions } from 'vuex'
  import DepartService from '../../../services/DepartService.js'
  import GroupService from '../../../services/GroupService.js'

  export default {
    name: 'Tree1',
    data() {
      return {

        //暂存树数据的集合
        childrenList:[],
        //写死的部落与组织等级为2
        bumenzuzhi:[
          {createdDate: "20190621085030",
            id: "402881836b749ac5016b77836f770001",
            lastModifiedDate: "20190621085030",
            name: "部门",
            level: "2",
            children:[]
          } ,
          {
            createdDate: "20190621085030",
            id: "402881f46afe9429016afea8c2570001",
            lastModifiedDate: "20190621085031",
            name: "组织",
            level: "2",
            children:[]
          }
        ],
        defaultProps: {
          children: 'child',
          label: 'name'
        },
        filterText: '',
        defaultProps: {
          children: 'child',
          label: 'name'
        }
      }
    },
    watch: {
      filterText(val) {
        this.$refs.tree.filter(val)
      }
    },
    computed: {
      ...mapState([
        'userGroupList',
        'subjectList',
      ])
    },
    mounted() {
      this.getUserGroupList(),
        this.getSubjectList()
    },
    methods: {
      ...mapActions([
        'getUserGroupList',
        'getSubjectList'
      ]),
      filterNode(value, data) {
        if (!value) return true
        return data.name.indexOf(value) !== -1
      },
      nodeClick(data, node) {
        data['parentData'] = node.parent.data;
        this.$emit('nodeDept', data)
      },
      //点击一次进行懒加载
      loadNode(node, resolve) {
//          console.log("点击带来的data",data)
        console.log("点击带来的node",node);
        //如果等于1级也就是机构
        if(node.level === 1) {
          resolve(this.bumenzuzhi);
//          this.getChildrenNode(node,resolve);
        }
        //如果label等于部门
        if(node.label === "部门"){
//          通过查询本级
//          this.houlaifangfa(node);
          this.getChildrenNode(node,resolve);
        }
        //如果label等于组织
        if(node.label === "组织"){
          this.getChildrenNodejiajia(node,resolve);
        }
        //如果大于等于3级
        if(node.level >= 3){
          this.getchildmanys(node,resolve);
        }

      },
//    如果是部门下的
      getChildrenNode(node,resolve) {
//      var categoryId = node.data.id;
//        console.log("node.data.id",node.parent.data.id)

        DepartService.getDepartListBySubjectId({subjectId:node.parent.data.id,type:1}).then((res) => {

          if(res.code === 200){
//          this.form = res.data
            this.childrenList = res.data;
//            console.log("res.body",res.data);
//          this.$set(node, 'child', []);
//          node.child = res.data;
//          console.log(node.child);
            if(this.childrenList.length===0){
              this.$message.error('数据拉取失败，请刷新再试！');
              return;
            }
            resolve(this.childrenList);
//            console.log(this.childrenList);
          }else{
            resolve(this.childrenList);
//            this.$message.error(res.message);
          }
//        console.log('获取页面信息Tree',res)
        })


      },
      //如果为组织查询组织下的
      getChildrenNodejiajia(node,resolve){
//        console.log("node.data.id.",node.parent.data.id)
        GroupService.getGroupListBySubjectId({subjectId:node.parent.data.id,type: 1}).then((res) => {
          console.log("组织的res",res.data);
          if(res.code === 200){
//          this.form = res.data
            this.childrenList = res.data;
//            console.log("res.data",res.data);
            if(this.childrenList.length==0){
              this.$message.error('数据拉取失败，请刷新再试！');
              return;
            }
            resolve(this.childrenList);
//            console.log(this.childrenList);
          }
          else{
            resolve(this.childrenList);
//            this.$message.error(res.message)
          }
//        console.log('获取页面信息Tree',res)
        })
      },

      //如果是三级或以上
       //根据id分别从部门和组织进行查询有没有子集
       //这个是根据id查询部门
      getchildmanys(node,resolve){
        console.log("node.key",node.key);
        DepartService.selectDepartChildById({id:node.data.id}).then((res)=>{
          console.log("部门的res",res);
          if(res.code === 200){
//          this.form = res.data
            this.childrenList = res.data;
//            console.log("res.data",res.data);
            if(this.childrenList.length ===0){
            }
            resolve(this.childrenList);
//            console.log("childrenList",this.childrenList);
          }else{
            resolve(this.childrenList);
            this.$message.error(res.message)
          }
        });
      //根据id查询组织下有没有子集
        GroupService.getGroupChildById({id:node.data.id}).then((res)=>{
//          console.log("组织的res",res.data);
          if(res.code === 200){
//          this.form = res.data
            this.childrenList = res.data;
//            console.log("res.data",res.data);
//            if(this.childrenList.length==0){
//              this.$message.error('数据拉取失败，请刷新再试！');
//              return;
//            }
            resolve(this.childrenList);
//            console.log(this.childrenList);
          }else{
            resolve(this.childrenList);
            this.$message.error(res.message)
          }
        });


      }
    }
  }
</script>

<style scoped>
  .tree {
    margin-right: 20px;
  }

  .el-tree {
    overflow: auto;
    height: 640px;
    margin-top: 10px;
  }
</style>
