#@Author: bjy @Date: 2019/5/17 11:16 #
<template>
  <el-container name="Home">
    <el-header>
      <div class="headerDiv">
        <div class="headerDiv-left"></div>
        <div class="headerDiv-left">
          <div class="headerDiv-left-subhead"></div>
        </div>
        <div class="headerDiv-right">
          <el-dropdown>
            <span class="el-dropdown-link">
              您好，{{ userName }}，欢迎回来
              <i class="el-icon-arrow-down"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>
                <router-link to="/index/user">修改密码</router-link>
              </el-dropdown-item>
              <el-dropdown-item>
                <span @click="outLogin">退出登录</span>
              </el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </div>
      </div>
    </el-header>
    <el-container>
      <el-aside class="el-aside">
        <el-menu
          default-active="1"
          router
          class="el-menu-vertical-demo"
          background-color="#ffffff"
          unique-opened
          text-color="#747474"
          active-text-color="#fd3333"
          @select="handleSelect"
        >
          <NavMenu :navMenus="menus"/>
        </el-menu>
      </el-aside>
      <el-main style="height: 100%;background-color: #f5f5f5">
        <div style="width: 100%; height: 100%;">
          <router-view/>
        </div>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import NavMenu from '@/components/NavMenu/NavMenu.vue'
import LoginService from '../services/LoginService'

export default {
  name: 'Home',
  components: {
    NavMenu
  },
  data() {
    return {
      userName: 'xxx',
      userRole: '',
      projectTitle: '杭州市富阳区第一人民医院智慧党建系统',
      menus: [
        {'name': '基础管理', 'icon': 'el-icon-setting', 'index': '1', 'child': [
          {'name': '用户管理', 'icon': 'el-icon-user', 'index': '/Index/UserManageDemo'},
          {'name': '用户组管理', 'icon': 'el-icon-user', 'index': '/Index/UserGroupManageDemo'},
          {'name': '角色管理', 'icon': 'el-icon-location', 'index': '/Index/RoleManageDemo'},
          {'name': '机构管理', 'icon': 'el-icon-location', 'index': '/Index/SubjectManageDemo'},
          {'name': '组织(部门)管理', 'icon': 'el-icon-location', 'index': '/Index/DepartManageDemo'},
          {'name': '行政(小组)管理', 'icon': 'el-icon-location', 'index': '/Index/GroupManageDemo'},
          {'name': '菜单管理', 'icon': 'el-icon-location', 'index': '/Index/MenuManageDemo'},
          {'name': '页面管理', 'icon': 'el-icon-location', 'index': '/Index/PageManage'},
          {'name': '按钮管理', 'icon': 'el-icon-location', 'index': '/Index/ButtonManage'},
          {'name': '字段管理', 'icon': 'el-icon-location', 'index': '/Index/FieldManage'},
          ]
        },
        {'name': '人员管理', 'icon': 'el-icon-setting', 'index': '2', 'child': [
            {'name': '组织人事', 'icon': 'el-icon-location', 'index': '2-1', 'child': [
              {'name': '人事档案', 'icon': 'el-icon-location', 'index': '/Index/PersonnelArchives'},
              {'name': '党员档案', 'icon': 'el-icon-location', 'index': '/Index/MemberArchives'},
              {'name': '建党对象', 'icon': 'el-icon-location', 'index': '/Index/MemberBuilding'},
              {'name': '党员发展', 'icon': 'el-icon-location', 'index': '/Index/MemberDevelopment'},
              ]
            },
            {'name': '统战群团老干部', 'icon': 'el-icon-location', 'index': '2-2', 'child': [
              {'name': '民主党派', 'icon': 'el-icon-location', 'index': '/Index/DemocraticParties'},
              {'name': '高知群体', 'icon': 'el-icon-location', 'index': '/Index/Intellectual'},
              {'name': '工会', 'icon': 'el-icon-location', 'index': '/Index/LaborUnion'},
              {'name': '团委', 'icon': 'el-icon-location', 'index': '/Index/CommunistYouthLeague'},
              {'name': '妇代会', 'icon': 'el-icon-location', 'index': '/Index/Conference'},
              {'name': '离退休老干部', 'icon': 'el-icon-location', 'index': '/Index/RetiredVeteranCadre'},
                ]
        }]
        },
        {'name': '党务管理', 'icon': 'el-icon-setting', 'index': '3', 'child': [
          {'name': '清廉医院', 'icon': 'el-icon-location', 'index': '3-1', 'child': [
            {'name': '医德档案', 'icon': 'el-icon-location', 'index':  '/Index/MedicalEthics'},
            {'name': '处方点评', 'icon': 'el-icon-location', 'index':  '/Index/DrugWarning'},
            {'name': '耗材预警', 'icon': 'el-icon-location', 'index':  '/Index/ConsumableWarning'},
            {'name': '行风效能', 'icon': 'el-icon-location', 'index':  '/Index/Efficiency'},
            {'name': '廉政教育', 'icon': 'el-icon-location', 'index':  '/Index/EducationOfCleanPolitic'},
            ]
          },
          {'name': '宣传意识形态', 'icon': 'el-icon-location', 'index': '3-2', 'child': [
            {'name': '党内精神', 'icon': 'el-icon-location', 'index':  '/Index/PartySpirit'},
            {'name': '学习强国', 'icon': 'el-icon-location', 'index':  '/Index/LearningPower'},
            {'name': '先锋人物', 'icon': 'el-icon-location', 'index':  '/Index/Pioneer'},
            ]
          },
            {'name': '力量图谱', 'icon': 'el-icon-location','index': '3-3', 'child': [
              {'name': '党组织力量图谱', 'icon': 'el-icon-location', 'index':  '/Index/PartyOrganizationalStrength'},
              {'name': '群团力量图谱', 'icon': 'el-icon-location', 'index':  '/Index/PeopleStrength'},
              {'name': '统战力量图谱', 'icon': 'el-icon-location', 'index':  '/Index/UnitedFrontStrength'},
              {'name': '老干部力量图谱', 'icon': 'el-icon-location', 'index':  '/Index/VeteranCadreStrength'},
              ]
            },
//            {'name': '党务公开', 'icon': 'el-icon-location','index': '3-4', 'child': [
//              {'name': '党务公开', 'icon': 'el-icon-location', 'index':  '/Index/partyAffairs '},
//              ]
//            }
          ]
        },
        {'name': '工作管理', 'icon': 'el-icon-setting', 'index': '4', 'child': [
          {'name': '中心工作', 'icon': 'el-icon-location',  'index': '4-1', 'child':[
            {'name': '年度工作', 'icon': 'el-icon-location', 'index':  '/Index/AnnualWork'}
//            {'name': '医共体建设', 'icon': 'el-icon-location', 'index':  '/Index/construction'},
//            {'name': '等级医院评审', 'icon': 'el-icon-location', 'index':  '/Index/hospitalReview'},
//            {'name': '最多跑一次', 'icon': 'el-icon-location', 'index':  '/Index/runA'},
//            {'name': '优质服务专项行动', 'icon': 'el-icon-location', 'index':  '/Index/firstRateService'},
//            {'name': '核心业务指标', 'icon': 'el-icon-location', 'index':  '/Index/operationalIndicator'},
            ]
          },
          {'name': '网上办事', 'icon': 'el-icon-location',  'index': '4-2', 'child':[
            {'name': '在线审判', 'icon': 'el-icon-location', 'index':  '/Index/OnlineTrial'},
            {'name': '请假审批', 'icon': 'el-icon-location', 'index':  '/Index/AskForLeave'},
            {'name': '请示批复', 'icon': 'el-icon-location', 'index':  '/Index/AskForInstructions'},
            {'name': '资料交换', 'icon': 'el-icon-location', 'index':  '/Index/DataInterchange'},
            {'name': '签到打卡', 'icon': 'el-icon-location', 'index':  '/Index/SignIn'},
            ]
          },
          {'name': '信息发布', 'icon': 'el-icon-location',  'index': '4-3', 'child':[
            {'name': '党建信息', 'icon': 'el-icon-location', 'index':  '/Index/PartyInformation'},
            {'name': '群团信息', 'icon': 'el-icon-location', 'index':  '/Index/UnderInformation'},
            {'name': '老干部信息', 'icon': 'el-icon-location', 'index':  '/Index/VeteranCadresInformation'},
            {'name': '统战信息', 'icon': 'el-icon-location', 'index':  '/Index/UnitedFrontInformation'},
            ]
          },
          {'name': '通知消息', 'icon': 'el-icon-location',  'index': '4-4', 'child':[
            {'name': '工作任务', 'icon': 'el-icon-location', 'index':  '/Index/WorkTask'},
            {'name': '消息发布', 'icon': 'el-icon-location', 'index':  '/Index/NewsRelease'},
            {'name': '活动报名', 'icon': 'el-icon-location', 'index':  '/Index/ActivityRegistration'},
            {'name': '在线考试', 'icon': 'el-icon-location', 'index':  '/Index/OnlineExamination'},
            ]
          }
        ]
        },
        {'name': '考核管理', 'icon': 'el-icon-setting', 'index': '5', 'child': [
          {'name': '支部考核', 'icon': 'el-icon-location', 'index': '5-1', 'child': [
            {'name': '标准考核', 'icon': 'el-icon-location', 'index': '/Index/StandardInspection'},
//            {'name': '常规工作', 'icon': 'el-icon-location', 'index': '/Index/routineWork'},
//            {'name': '党建品牌', 'icon': 'el-icon-location', 'index': '/Index/partyBuildBrand'},
//            {'name': '加分项目', 'icon': 'el-icon-location', 'index': '/Index/plusProject'},
//            {'name': '堡垒指数', 'icon': 'el-icon-location', 'index': '/Index/fortIndex'},
//            {'name': '动态排名', 'icon': 'el-icon-location', 'index': '/Index/dynamicRanking'},
//            {'name': '考核年报', 'icon': 'el-icon-location', 'index': '/Index/assessAnnualReport'},
            ]
          },
          {'name': '党员考核', 'icon': 'el-icon-location', 'index': '5-2', 'child': [
            {'name': '先锋指数', 'icon': 'el-icon-location', 'index': '/Index/PioneerIndex'},
            {'name': '民主评议', 'icon': 'el-icon-location', 'index': '/Index/DemocraticAppraisal'},
            {'name': '党员年报', 'icon': 'el-icon-location', 'index': '/Index/PartyMembersAnnualReports'},
            ]
          }
          ]
        }
      ]
    }
  },
  created() {
      this.getUserInfoByStorage()
  },
  methods: {
    handleSelect(key, keyPath) {

    },
    // 通过缓存
    getUserInfoByStorage(){
        let userInfo = JSON.parse(sessionStorage.getItem('userInfo'));
        this.userName = userInfo.name;
    },
    outLogin() {
        LoginService.outLogin().then( (res) => {
          if(res.code === 200){
            this.$router.push('/Login');
            this.$notify.success({
              title: res.message,
              duration: 5000
            });
          }else {
            this.$notify.error({
              title: "错误码："+res.code,
              message: res.message,
              duration: 5000
            });
          }
        },err => {
            console.error(err)
        });
//      this.$http({
//        url: this.$BASE_URL + 'api/user/outLogin',
//        headers: {
//          token: sessionStorage.getItem('token')
//        }
//      })
    }
  }
}
</script>

<style>
.el-container {
  width: 100%;
  height: 100%;
}

.el-header {
  background: url("../assets/header.png") no-repeat;
  background-size: 100% 100%;
  text-align: left;
  border-bottom: 1px solid #eee;
}

/*.el-main {*/
  /*background: url(../assets/bg1.png);*/
  /*background-size: cover;*/
  /*color: #333333;*/
  /*margin: 0;*/
  /*padding: 0;*/
  /*width: 100%;*/
  /*max-width: 1920px;*/
/*}*/

.el-header .headerDiv-left {
  float: left;
}

.el-header .headerDiv-left-title {
  font-size: 24px;
}

.el-header .headerDiv-left-subhead {
  padding-left: 20px;
  color: #dddddd;
  font-size: 18px;
}

.el-header .headerDiv-right {
  padding-right: 10px;
  float: right;
}

.el-header .el-dropdown {
  margin-top: 15px;
}

.el-header .el-dropdown-link {
  cursor: pointer;
  color: #000;
  font-size: 16px;
}

.el-aside {
  width: 240px !important;
  background-color: #ffffff;
  color: #333333;
  margin: 0;
  padding: 0;
  border-right: 1px solid #eee;
}

.el-aside .el-menu {
  border-right: none;
}

.el-main {
  height: 100%;
}
</style>
