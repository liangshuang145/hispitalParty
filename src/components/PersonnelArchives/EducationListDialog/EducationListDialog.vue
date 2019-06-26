#@Author: bjy @Date: 2019/6/25 10:36 #
<template>
  <el-dialog :value="value" name="EducationListDialog" :visible="isShow" :before-close="handleClose" :title="title" width="1500px" top="15vh" center >
    <el-row>
      <el-col>
        <el-button type="primary" icon="el-icon-plus" @click="addEducation" size="small">添加教育经历</el-button>
        <el-button type="danger" icon="el-icon-delete" @click="delEducation" size="small">删除教育经历</el-button>
      </el-col>
    </el-row>
    <el-table :data="educationExperienceTable" style="width: 100%" border highlight-current-row @current-change="handleTableChange">
      <el-table-column prop="startDate" label="开始日期" width="157px">
        <template slot-scope="scope">
          <el-date-picker
            v-model="scope.row.startDate" type="date" placeholder="开始日期" format="yyyy-MM-dd" value-format="yyyy-MM-dd" class="i-el-date-picker">
          </el-date-picker>
        </template>
      </el-table-column>
      <el-table-column prop="graduationDate " label="毕业日期" width="157px">
        <template slot-scope="scope">
          <el-date-picker
            v-model="scope.row.graduationDate" type="date" placeholder="毕业日期" format="yyyy-MM-dd" value-format="yyyy-MM-dd" class="i-el-date-picker">
          </el-date-picker>
        </template>
      </el-table-column>
      <el-table-column prop="schoolOfGraduation " label="毕业学校">
        <template slot-scope="scope">
          <el-input v-model="scope.row.schoolOfGraduation " size="medium" :maxlength="50" auto-complete="new-account" placeholder="请输入毕业学校" ></el-input>
        </template>
      </el-table-column>
      <el-table-column prop="major" label="所学专业">
        <template slot-scope="scope">
          <el-input v-model="scope.row.major " size="medium" :maxlength="30" auto-complete="new-account" placeholder="请输入所学专业" ></el-input>
        </template>
      </el-table-column>
      <el-table-column prop="educationCategory" label="教育类别">
        <template slot-scope="scope">
          <el-input v-model="scope.row.educationCategory " size="medium" :maxlength="30" auto-complete="new-account" placeholder="请输入教育类别" />
        </template>
      </el-table-column>
      <el-table-column prop="educationBackground " label="学历" width="100px">
        <template slot-scope="scope">
          <el-select v-model="scope.row.educationBackground" placeholder="请选择学历">
            <el-option v-for="item in educationBackgroundOptions" :key="item.value" :label="item.label" :value="item.value"></el-option>
          </el-select>
        </template>
      </el-table-column>
      <el-table-column prop="degree" label="学位" width="100px">
        <template slot-scope="scope">
          <el-input v-model="scope.row.degree " size="medium" :maxlength="30" auto-complete="new-account" placeholder="学位" ></el-input>
        </template>
      </el-table-column>
      <el-table-column prop="degreeDate" label="学位时间" width="157px">
        <template slot-scope="scope">
          <el-date-picker
            v-model="scope.row.degreeDate" type="date" placeholder="学位时间" format="yyyy-MM-dd" value-format="yyyy-MM-dd"  class="i-el-date-picker">
          </el-date-picker>
        </template>
      </el-table-column>
      <el-table-column prop="lengthOfSchooling" label="学制(年)" width="100px">
        <template slot-scope="scope">
          <el-input v-model="scope.row.lengthOfSchooling " size="medium" :maxlength="30" auto-complete="new-account" placeholder="学制"  type="number"></el-input>
        </template>
      </el-table-column>
      <el-table-column prop="certifier" label="证明人" width="120px">
        <template slot-scope="scope">
          <el-input v-model="scope.row.certifier " size="medium" :maxlength="30" auto-complete="new-account" placeholder="证明人"  ></el-input>
        </template>
      </el-table-column>
    </el-table>
    <span slot="footer" class="dialog-footer">
      <el-button  size="medium" width="long" @click="cancelClick">关 闭</el-button>
      <el-button size="medium" width="long" type="primary" @click="sureClick">确 定</el-button>
      <!--<el-button size="medium" width="long" @click="cancelClick">取 消</el-button>-->
    </span>
  </el-dialog>
</template>

<script>
  import ElCol from "element-ui/packages/col/src/col";
    //  此处导入组件,格式,例如:import xxx名称 from "路径"
    export default{
        // 这里是name,记得填写
        name: 'educationListDialog',
        props:{
            value:{
                type:Boolean,
              default:false,
            },
          type:{
            type:Number,
            default:0,
          },
//          educationData:{
//            type:Object,
//            default() {
//              return {}
//            }
//          }
        },
        //  数据定义
        data () {
            return {
                isShow:false,
              title:'教育经历',
              educationExperienceTable:[
                {startDate:''}
              ],
              tableData:null,
              educationBackgroundOptions:[
                {label:'小学',value:1},
                {label:'初中',value:2},
                {label:'高中',value:3},
                {label:'大专',value:4},
                {label:'本科',value:5},
                {label:'硕士',value:6},
                {label:'博士',value:7},
                {label:'其他',value:8},
              ],
            }
        },
        // 页面初始化(生命周期)
        created(){
        },
        // 页面方法
        methods: {
          // 添加教育经历 添加一行
          addEducation(){
              this.educationExperienceTable.push({
                startDate:''
              })
          },
          // 删除某一行 教育经历,
          delEducation( ){
              if(!this.tableData){
                this.$message.error('操作错误,请先选择数据');
                return
              }
            this.$confirm('此操作将永久删除该条教育经历, 是否继续?', '提示', {
              confirmButtonText: '确定',
              cancelButtonText: '取消',
              type: 'warning'
            }).then(() => {
              this.$message.success('已删除')
            }).catch(() => {
              this.$message.info('已取消')
            })
          },
            //确定按钮
          sureClick(){
            switch (this.type){
              case 1: // 新增
                break;
              case 2: // 修改
                break;
              default:
                break;
            }
          },
          // 表单数据选择
          handleTableChange(data){
            this.tableData = data
          },
          // 取消按钮
          cancelClick() {
            this.isShow = false
          },
          // 关闭按钮
          handleClose() {
            this.isShow = false
          },
        },
        // 计算属性
        computed: {},
        // 侦听器
        watch: {
          value(val){
              this.isShow = val
          },
          isShow(val){
              this.$emit('input',val)
          },
          type(val) {
            let title = '';
            title = '教育经历';
            this.title = title
          },
        },
        // 依赖注入
        components: {ElCol}
    }
</script>

<!-- 本地样式 -->
<style scoped>
.i-el-date-picker{
  width: 98%;
}
.el-row{
  margin:5px 0;
}
</style>
