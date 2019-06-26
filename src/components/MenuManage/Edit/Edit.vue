#@Author: bjy @Date: 2019/6/3 15:52 #
<template>
  <div name="Edit" class="form-panel">
    <div>
    <el-form ref="form" :model="form" :rules="rule" label-suffix="：" label-width="100px">
      <el-form-item label="名称" prop="name">
        <el-input v-model="form.name" size="medium" :maxlength="50"/>
      </el-form-item>
      <el-form-item label="父级页面" prop="parentName" v-if="form.father">
        <el-input v-model="form.father.name" size="medium" :maxlength="50" disabled/>
      </el-form-item>
      <el-form-item label="描述" prop="description">
        <el-input type="textarea" v-model="form.description" :rows="5" :maxlength="255"/>
      </el-form-item>

      <el-form-item label="等级" prop="gardename">
        <el-select v-model="form.level" size="medium" placeholder="请选择等级">
          <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" />
        </el-select>
        <el-button type="primary" size="medium" @click="submitForm">修改</el-button>
      </el-form-item>
    </el-form>
    </div>
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
  import { mapState, mapActions } from 'vuex'
  import Validator from '@/lib/validator'
  import DepartService from '@/services/DepartService'
  import MenuService from '@/services/MenuService'
  import GroupService from '../../../services/GroupService.js'
  import MenuManage from '../../../services/MenuService.js'

  export default {
    name: 'Edit',
    components: {
      Search
    },
    props: [
      'pNode'
    ],
    data() {
      return {
        defaultProps: {
          children: 'child',
          label: 'name'
        },
        defaultProps1: {
          children: 'child',
          label: 'name'
        },
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
          jsonlook:{
              id:'',
              name:'',
            remark:'',
            isPublic:'',
            fatherId:'',
            level:'',
            subjectId:'',
            departIds:[],
            groupsIds:[],
            roleIds:[],
            userGroupIds:[],
          },
        options: [{
          value: '选项1',
          label: '0'
        }, {
          value: '选项2',
          label: '1'
        }, {
          value: '选项3',
          label: '2'
        }, {
          value: '选项4',
          label: '3'
        }, {
          value: '选项5',
          label: '4'
        }, {
          value: '选项6',
          label: '5'
        }, {
          value: '选项7',
          label: '6'
        }, {
          value: '选项8',
          label: '7'
        }, {
          value: '选项9',
          label: '8'
        }, {
          value: '选项10',
          label: '9'
        }
        ],
        groupuIds:'',
        value: '',
        grade:'',
        search: '',
        subject: '',
        depart: '',
        group: '',
        user: '',
        form: {
          id: '',
          name: '',
          subjectId: '',
          subjectName: '',
          parentId: '',
          parentName: '',
          description: ''
        },
        rule: {
          name: [{
            validator: Validator.checkName,
            trigger: 'blur'
          }]
        },
        thisNode: this.pNode
      }
    },

    computed: {
      ...mapState([
        'subjectList',
        'departList',
        'groupList',
        'userGroupList',
        'menuInfo'
      ])
    },
    async mounted() {
      await this.getSubjectList()
      await this.getDepartList()
      await this.getGroupListBySubjectId()
      await this.getUserGroupList()
    },
    methods: {
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
      ...mapActions([
        'getSubjectList',
        'getDepartList',
        'getGroupListBySubjectId',
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
      },
//      ...mapActions([
//        'getDepartList'
//      ]),
      submitForm() {
        this.$refs['form'].validate((valid) => {
          if (!valid) {
            this.$message.error('请检查字段')
            return
          }
            this.jsonlook.id = this.form.id;
            this.jsonlook.name = this.form.name,
            this.jsonlook.remark = this.form.description,
            this.jsonlook.level = this.value,
            this.jsonlook.subjectId = this.subject,
            this.jsonlook.departIds = this.depart,
            this.jsonlook.groupsIds = this.group,
            this.jsonlook.userGroupIds = this.user,
          MenuService.updateMenu(this.jsonlook).then((res) => {
            if (res.code === 200){
              this.$message.success("修改成功");
              //清空表单
              this.$refs.form.resetFields();
              // 重载 tree
              this.getMenuList();
            }else {
              this.$message.error("修改失败")
            }
          })
//          DepartService.updateDepart(this.form).then((res) => {
//            this.$message.success('已修改');
//
//            // 重载 tree
//            this.getDepartList()
//          })
        })
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

//      getMenu(){
//        MenuManage.getMenu({id:this.form.id}).then((res) => {
//          if(res.code === 200){
//            this.form = res.data
//          }else{
//            this.$message.error(res.message)
//          }
//          console.log('获取页面信息Tree',res)
//        })
//      }
    },
    watch:{
      subject(newData, oldData){
        console.log('newData',newData);
        this.getGroupListBySubjectId({subjectId:newData})

      },

      menuInfo(Info){
        if (Info.code === 200){
          this.form = Info.data
        }else {
          this.$message.error(res.message)
        }
      },
      pNode(newData, oldData) {
        this.form.thisNode = newData;
        this.form.id = newData.id;
        this.form.name = newData.name;
        this.form.subjectId = newData.subjectId;
        this.form.subjectName = newData.subjectName;
        this.form.parentId = newData.parentId;
        this.form.parentName = newData.parentName;
        this.form.description = newData.description;
        this.getMenu();
      }
    }
  }
</script>

<style scoped>
  .form-panel {
    min-height: 520px;
    overflow-y: auto;
  }
</style>
