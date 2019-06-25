#@Author: bjy @Date: 2019/6/3 15:52 #
<template>
  <div name="Info" class="form-panel">
    <div>
    <el-form ref="form" :model="form" label-suffix="：" label-width="100px">
      <el-form-item label="名称" prop="name">
        <el-input v-model="form.name" size="medium" :maxlength="50" disabled/>
      </el-form-item>
      <el-form-item label="父级页面" prop="parentName" v-if="form.father">
        <el-input v-model="form.father.name" size="medium" :maxlength="50" disabled/>
      </el-form-item>
      <el-form-item label="描述" prop="description">
        <el-input type="textarea" v-model="form.remark" :rows="5" :maxlength="255" disabled/>
      </el-form-item>
      <el-form-item label="等级" prop="gardename">
        <el-select v-model="form.level" size="medium" placeholder="请选择等级"  disabled >
          <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" />
        </el-select>
      </el-form-item>
    </el-form>
    </div>
    <!--<Search/>-->
     <div>
       <el-row>
         <el-col :span="12"><div class="grid-content bg-purple" style="border:3px solid antiquewhite">
           <el-tree
             :data="subjectList"
             show-checkbox
             node-key="id"
             ref="tree"
             highlight-current
             :props="defaultProps1"
             lazy
             :load="loadNode"
           >
           </el-tree>

         </div></el-col>
         <el-col :span="12"><div class="grid-content bg-purple-light" style="border:3px solid antiquewhite" >
           <!--:filter-node-method="filterNode"-->
           <el-tree
             node-key="id"
             :data="userGroupList"
             show-checkbox
             :props="defaultProps"
             @node-click="nodeClick"
             default-expand-all
             highlight-current
             ref="tree"
           ></el-tree>

         </div></el-col>
       </el-row>
     </div>
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
    name: 'Info',
    components:{
      Search
    },
    props: [
      'pNode'
    ],
    data() {
      return {
          bumenzuzhi:[
            {
              createdDate: "20190621085030",
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
          data1:[{
            id: 100,
            label: '部门',
            children:[]
          }],
        data2:[{
          id: 200,
          label: '组织',
          children:[]
        }],
        childrenList:[],
        defaultProps: {
          children: 'child',
          label: 'name'
        },
        defaultProps1: {
          children: 'child',
          label: 'name'
        },
        grade:'',
        options: [{
          value: '选项1',
          label: '1'
        }, {
          value: '选项2',
          label: '2',
        }, {
          value: '选项3',
          label: '3'
        }, {
          value: '选项4',
          label: '4'
        }, {
          value: '选项5',
          label: '5'
        }, {
          value: '选项6',
          label: '6'
        }, {
          value: '选项7',
          label: '7'
        }, {
          value: '选项8',
          label: '8'
        }, {
          value: '选项9',
          label: '9'
        }],
        data: [{
          id: 1,
          label: '一级 1',
          children: [{
            id: 4,
            label: '二级 1-1',
            children: [{
              id: 9,
              label: '三级 1-1-1'
            }, {
              id: 10,
              label: '三级 1-1-2'
            }]
          }]
        }, {
          id: 2,
          label: '一级 2',
          children: [{
            id: 5,
            label: '二级 2-1'
          }, {
            id: 6,
            label: '二级 2-2'
          }]
        }, {
          id: 3,
          label: '一级 3',
          children: [{
            id: 7,
            label: '二级 3-1'
          }, {
            id: 8,
            label: '二级 3-2'
          }]
        }],
        form: {
          id: '',
          name: '',
          subjectId: '',
          subjectName: '',
          parentId: '',
          parentName: '',
          description: '',
          level:''
        },
        thisNode: this.pNode
      }
    },
    mounted() {
      this.getUserGroupList();
      this.getSubjectList();
    },
    computed: {
      ...mapState([
        'menuInfo',
        'userGroupList',
        'subjectList',
      ])
    },


    watch: {
      menuInfo(Info){
          if (Info.code === 200){
              this.form = Info.data
          }else {
              this.$message.error(res.message)
          }
//          console.log('menuInfo',val)
      },
      pNode(newData, oldData) {
        this.form.thisNode = newData
        this.form.id = newData.id
        this.form.name = newData.name
        this.form.subjectId = newData.subjectId
        this.form.subjectName = newData.subjectName
        this.form.parentId = newData.parentId
        this.form.parentName = newData.parentName
        this.form.description = newData.description
        this.getMenu();
      }

    },
    methods:{
      // 获取页面信息
      getMenu(){
        MenuManage.getMenu({id:this.form.id}).then((res) => {
          if(res.code === 200){
              console.log(res.data);
            this.form = res.data
          }else{
            this.$message.error(res.message)
          }
          console.log('获取页面信息Tree',res)
        })
      },
      ...mapActions([
        'getUserGroupList',
         'getSubjectList',
      ]),
      filterNode1(value, data) {
        if (!value) return true
        return data.name.indexOf(value) !== -1
      },
      nodeClick(data, node) {
          console.log(data);
          console.log(node);
        data['parentData'] = node.parent.data;
        this.getMenuById(data.id)
        this.$emit('nodeDept', data)
      },

      //点击一次进行懒加载
      loadNode(node, resolve) {
//          console.log("点击带来的data",data)
          console.log("点击带来的node",node);
          console.log(resolve);
//        if (node.level === 0) {
//          return resolve([{ name: 'region' }]);
//        }
//        if (node.level > 3) return resolve([]);
        if(node.level === 1) { // 二级节点
          console.log("bumenzuzhi",this.bumenzuzhi);
          resolve(this.bumenzuzhi);
//          this.getChildrenNode(node,resolve);
        }
        if(node.label === "部门"){
//          通过查询本级
//          this.houlaifangfa(node);
          this.getChildrenNode(node,resolve);
        }
        if(node.label === "组织"){
            this.getChildrenNodejiajia(node,resolve);
        }
        if(node.level >= 3){
            this.getchildmanys(node,resolve);
        }
//        setTimeout(() => {
//          const data = [{
//            name: 'leaf',
//            leaf: true
//          }, {
//            name: 'zone'
//          }];
//          resolve(data);
//        }, 500);
      },
      houlaifangfa(node){

      },
//    / 二级节点
    getChildrenNode(node,resolve) {
//      var categoryId = node.data.id;
      console.log("node.data.id",node.parent.data.id)
      console.log(node);
      DepartService.getDepartListBySubjectId({subjectId:node.parent.data.id,type:1}).then((res) => {
        console.log("res.data",res.data);
        if(res.code === 200){
//          this.form = res.data
          this.childrenList = res.data;
          console.log("res.body",res.data);
//          this.$set(node, 'child', []);
//          node.child = res.data;
//          console.log(node.child);
          if(this.childrenList.length===0){
            this.$message.error('数据拉取失败，请刷新再试！');
            return;
          }
          resolve(this.childrenList);
          console.log(this.childrenList);
        }else{
            resolve(this.childrenList);
          this.$message.error(res.message);
        }
//        console.log('获取页面信息Tree',res)
      })

//      this.$http.post('/api/getLabelListByCategoryId', {
//          categoryId:categoryId
//        },
//        {
//          emulateJSON: true,
//          emulateHTTP: true
//        }).then(res => {
//        this.childrenList = res.body;
//        if(this.childrenList.length==0){
//          this.$message.error('数据拉取失败，请刷新再试！');
//          return;
//        }
//        resolve(this.childrenList);
//      });
    },
    //如果为组织查询组织下的
      getChildrenNodejiajia(node,resolve){
        console.log("node.data.id.",node.parent.data.id)

        GroupService.getGroupListBySubjectId({subjectId:node.parent.data.id,type: 1}).then((res) => {
            console.log("组织的res",res.data);
          if(res.code === 200){
//          this.form = res.data
            this.childrenList = res.data;
            console.log("res.data",res.data);
            if(this.childrenList.length==0){
              this.$message.error('数据拉取失败，请刷新再试！');
              return;
            }
            resolve(this.childrenList);
            console.log(this.childrenList);
          }
          else{
            resolve(this.childrenList);
            this.$message.error(res.message)
          }
//        console.log('获取页面信息Tree',res)
        })
      },
      //如果level为3或3以上
      getchildmanys(node,resolve){
          console.log("node.key",node.key);
        DepartService.selectDepartChildById({id:node.data.id}).then((res)=>{
          console.log("部门的res",res);
          if(res.code === 200){
//          this.form = res.data
            this.childrenList = res.data;
            console.log("res.data",res.data);
            if(this.childrenList.length ===0){
            }
            resolve(this.childrenList);
            console.log("childrenList",this.childrenList);
          }else{
            resolve(this.childrenList);
            this.$message.error(res.message)
          }
        });

        GroupService.getGroupChildById({id:node.data.id}).then((res)=>{
          console.log("组织的res",res.data);
          if(res.code === 200){
//          this.form = res.data
            this.childrenList = res.data;
            console.log("res.data",res.data);
//            if(this.childrenList.length==0){
//              this.$message.error('数据拉取失败，请刷新再试！');
//              return;
//            }
            resolve(this.childrenList);
            console.log(this.childrenList);
          }else{
            resolve(this.childrenList);
            this.$message.error(res.message)
          }
        });


      }


    },
  }
</script>

<style scoped>
  .form-panel {
    min-height: 520px;
    overflow-y: auto;
  }
</style>

