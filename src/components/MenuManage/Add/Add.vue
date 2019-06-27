#@Author: bjy @Date: 2019/6/3 15:52 #
<template>
  <div name="Add" class="form-panel">
    <div>
    <el-form ref="form" :model="form" :rules="rule" label-suffix="：" label-width="100px">
      <el-form-item label="名称" prop="name">
        <el-input v-model="form.name" size="medium" :maxlength="50"/>
      </el-form-item>
      <el-form-item label="父级" prop="fatherName">
        <el-input v-model="form,fatherName" size="medium" :maxlength="50" disabled/>
      </el-form-item>
      <el-form-item label="描述" prop="description">
        <el-input type="textarea" v-model="form.description" :rows="5" :maxlength="255"/>
      </el-form-item>
      <el-form-item label="等级" prop="gardename">
        <el-select v-model="form.level" size="medium" placeholder="请选择等级">
          <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" />
        </el-select>
        <el-button type="success" size="medium" @click="submitForm">新增</el-button>
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
            ref="tree1"
            highlight-current
            :props="defaultProps1"
            lazy
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
            ref="tree2"
          ></el-tree>

        </div></el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
  import { mapState, mapActions } from 'vuex'
  import Validator from '@/lib/validator'
  import DepartService from '@/services/DepartService'
  import MenuService from '@/services/MenuService'
  import GroupService from '../../../services/GroupService.js'
  import MenuManage from '../../../services/MenuService.js'

  export default {
    name: 'Add',
    props: [
      'pNode'
    ],
    data() {
      return {
          name:'',
        rightkey:[],
        solt1:'0',
        solt2:'',
        halfleft:[],
        fatherhalfleft:[],
        halfright:[],
        asd:'',
        lefttree:[],
        righttree:[],
        fatherId:'',
        fatherName:'',
        form: {
          name: '',
          remark:'',
          isPublic:'',
          fatherId:'',
          level:'',
          father:{
              name:''
          },
          subjectId: '',
          departIds:'',
          groupsIds:'',
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
          groupuIds:[],
          roleIds:[],
          userGroupIds:[],
        },
        childrenList:[],
        defaultProps: {
          children: 'child',
          label: 'name'
        },
        defaultProps1: {
          children: 'child',
          label: 'name'
        },
      }
    },
    async mounted() {
      await this.getSubjectList()
      await this.getDepartList()
      await this.getGroupListBySubjectId()
      await this.getUserGroupList()
    },
    computed: {
      ...mapState([
        'menuInfo',
        'userGroupList',
        'subjectList',
        'departList',
        'groupList',
      ])
    },
    watch: {
      pNode(pNode) {
          console.log('pNpde',pNode)
        this.fatherName = pNode.name;
        this.fatherId = pNode.id;
        this.form.thisNode = pNode;
        this.form.id = pNode.id;
        this.form.name = pNode.name;
        this.form.subjectId = pNode.subjectId;
        this.form.subjectName = pNode.subjectName;
        this.form.parentId = pNode.parentId;
        this.form.parentName = pNode.parentName;
        this.form.description = pNode.description;
        this.getMenu();
      },
      menuInfo(Info){
        if (Info.code === 200){
          this.form = Info.data
        }else {
          this.$message.error(res.message)
        }
      },
      subject(newData, oldData){
//        console.log('newData',newData);
        this.getGroupListBySubjectId({subjectId:newData})

      },
      subjectList(data){
        console.log('获取的机构列表',data)
      },
    },
    methods: {
      getMenu(){
        MenuManage.getMenu({id:this.form.id}).then((res) => {
          if(res.code === 200){
            console.log("form===",res.data);
            this.form = res.data;
            this.form.fatherId = this.fatherId;
            this.form.fatherName = this.fatherName;
//            console.log("form",this.form);
          }else{
            this.$message.error(res.message)
          }
          console.log('获取页面信息Tree',res)
        })      },
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
          node.data['children'] = this.bumenzuzhi;
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
            node.data['children'] = res.data;
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
            node.data['children'] = res.data;
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
            node.data['children'] = res.data;
            console.log('node========>update',node)
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
            node.data['children'] = res.data;
            console.log('node is group ========>update',node)
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

      },

//      submitForm() {
//        this.$refs['form'].validate((valid) => {
//          if (!valid) {
//            this.$message.error('请检查字段')
//            return
//          }
//
//          MenuService.addMenu(this.form).then((res) => {
//            this.$message.success('已添加')
//
//            // 重载 tree
//            this.getDepartList()
//          })
//        })
//      }
      submitForm() {
        this.jsonlook.userGroupIds =[],
          this.$refs['form'].validate((valid) => {
              if (!valid) {
                this.$message.error('请检查字段')
                return
              }
//          console.log("测试data",this.$refs.tree1.getCurrentNode());
            console.log("左边的树",this.$refs.tree1.getCheckedNodes());
//          console.log("左边的树半节点",this.$refs.tree1.getHalfCheckedNodes());
            console.log("右边的树",this.$refs.tree2.getCheckedNodes());
//          console.log("右边的树半节点",this.$refs.tree2.getHalfCheckedNodes());
            //获得可以拿到部门或者组织的id的方法
            this.halfleft=this.$refs.tree1.getCheckedKeys();
            console.log("halfleft",this.halfleft);
            this.rightkey =this.$refs.tree2.getCheckedKeys();
            console.log("rightkey",this.rightkey);
            for(var k=0; k<this.rightkey.length;k++){
              this.jsonlook.userGroupIds.push(this.rightkey[k]);
            }
            //拿到半节点状态的node属性
            this.fatherhalfleft=this.$refs.tree1.getHalfCheckedNodes();
            console.log("fatherhalfletf",this.fatherhalfleft);

            //放下机构值操作
            for(var p=0;p<this.fatherhalfleft.length;p++){
              //如果有这个属性
              if(this.fatherhalfleft[p].hasOwnProperty("children") === true ){
                for(var m=0;m<this.fatherhalfleft[p].children.length;m++){
                  //如果有这个level属性
                  if(this.fatherhalfleft[p].children[m].hasOwnProperty("level") === true ) {
                    //                如果等于2的话
                    if(this.fatherhalfleft[p].children[m].level === "2"){
                      //放入机构这个参数
                      this.jsonlook.subjectId = this.fatherhalfleft[p].id;
                    }
                  }
                }
              }
            };
            //循环遍历拿到组织或部门
//          var _this = this;
            for(var j=0;j < this.halfleft.length;j++){
              if(this.halfleft[j] === this.bumenzuzhi[0].id ){
                this.solt2 = this.bumenzuzhi[0].id;
                this.jsonlook.departIds.push(this.solt2);
                this.solt1++;
              }
              if( this.halfleft[j] === this.bumenzuzhi[1].id){
                this.solt2 = this.bumenzuzhi[1].id;
                this.jsonlook.groupuIds.push(this.solt2);
                this.solt1++;
              }
              if(this.solt1 >=2){
                this.$message.error("只能选择一个机构下 一个部门或组织下的人员");
                this.solt1='0';
                this.jsonlook.groupuIds=[];
                this.jsonlook.departIds=[];
                return;
              }
            };

            this.lefttree=this.$refs.tree1.getCheckedNodes();
            this.righttree=this.$refs.tree2.getCheckedNodes();
            console.log("lefttree",this.lefttree);
            console.log("righttree",this.righttree);

            for(var i=0;i< this.lefttree.length;i++){

              if(this.lefttree[i].hasOwnProperty("children") === false ){
                if(this.solt2 ===this.bumenzuzhi[0].id){
                  this.jsonlook.departIds.push(this.lefttree[i].id);
                }else{
                  this.jsonlook.groupuIds.push(this.lefttree[i].id);
                }
              }else if(this.lefttree[i].children.length === 0){
                if(this.solt2 ===this.bumenzuzhi[0].id){
                  this.jsonlook.departIds.push(this.lefttree[i].id);
                }else{
                  this.jsonlook.groupuIds.push(this.lefttree[i].id);
                }
              }
            };

            this.jsonlook.id = this.form.id;
            this.jsonlook.name = this.form.name,
              this.jsonlook.remark = this.form.description,
              this.jsonlook.level = this.form.level,
//            this.jsonlook.subjectId = this.subject,
//            this.jsonlook.departIds = this.depart,
//            this.jsonlook.groupsIds = this.group,
//            this.jsonlook.userGroupIds = this.user,
//           this.jsonlook.isPublic ;
//            this.jsonlook.fatherId;
//              this.jsonlook.roleIds;

              //发起请求前清空
              this.solt1='0';
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
    }
  }
</script>

<style scoped>
  .form-panel {
    min-height: 520px;
    overflow-y: auto;
  }
</style>
