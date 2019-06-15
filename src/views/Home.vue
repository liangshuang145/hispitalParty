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
              你好，{{ userName }}，欢迎回来
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
          background-color="#f0f0f0"
          unique-opened
          text-color="#2c2c2c"
          active-text-color="#950000"
          @select="handleSelect"
        >
          <NavMenu :navMenus="menus"/>
        </el-menu>
      </el-aside>
      <el-main style="height: 100%;">
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
        {'name': '基础管理', 'icon': 'el-icon-message', 'index': '1', 'child': [
          {'name': '用户管理', 'icon': 'el-icon-user', 'index': '/Index/UserManageDemo'},
          {'name': '用户组管理', 'icon': 'el-icon-user', 'index': '/Index/UserGroupManageDemo'},
          {'name': '角色管理', 'icon': 'el-icon-location', 'index': '/Index/RoleManageDemo'},
          {'name': '机构管理', 'icon': 'el-icon-location', 'index': '/Index/SubjectManageDemo'},
          {'name': '组织(部门)管理', 'icon': 'el-icon-location', 'index': '/Index/DepartManageDemo'},
          {'name': '行政(小组)管理', 'icon': 'el-icon-location', 'index': '/Index/GroupManageDemo'},
          {'name': '菜单管理', 'icon': 'el-icon-location', 'index': '/Index/MenuManageDemo'}
          ]
        },
        {'name': '人员管理', 'icon': 'el-icon-setting', 'index': '2', 'child': [
            {'name': '组织人事', 'icon': 'el-icon-location', 'index': '2-1', 'child': [
              {'name': '人事档案', 'icon': 'el-icon-location', 'index': '/Index/personnelArchives'},
              {'name': '党员档案', 'icon': 'el-icon-location', 'index': '/Index/memberArchives'},
              {'name': '建党对象', 'icon': 'el-icon-location', 'index': '/Index/memberBuilding'},
              {'name': '党员发展', 'icon': 'el-icon-location', 'index': '/Index/memberDevelopment'},
              ]
            },
            {'name': '统战群团老干部', 'icon': 'el-icon-location', 'index': '2-2', 'child': [
              {'name': '民主党派', 'icon': 'el-icon-location', 'index': '/Index/democraticParties'},
              {'name': '高知群体', 'icon': 'el-icon-location', 'index': '/Index/intellectual'},
              {'name': '工会', 'icon': 'el-icon-location', 'index': '/Index/laborUnion'},
              {'name': '团委', 'icon': 'el-icon-location', 'index': '/Index/communistYouthLeague'},
              {'name': '妇代会', 'icon': 'el-icon-location', 'index': '/Index/conference'},
              {'name': '离退休老干部', 'icon': 'el-icon-location', 'index': '/Index/retiredVeteranCadre'},
                ]
        }]
        },
        {'name': '党务管理', 'icon': 'el-icon-setting', 'index': '3', 'child': [
          {'name': '清廉医院', 'icon': 'el-icon-location', 'index': '3-1', 'child': [
            {'name': '医德档案', 'icon': 'el-icon-location', 'index':  '/Index/medicalEthics'},
            {'name': '处方点评', 'icon': 'el-icon-location', 'index':  '/Index/drugWarning'},
            {'name': '耗材预警', 'icon': 'el-icon-location', 'index':  '/Index/consumableWarning'},
            {'name': '行风效能', 'icon': 'el-icon-location', 'index':  '/Index/efficiency'},
            {'name': '廉政教育', 'icon': 'el-icon-location', 'index':  '/Index/educationOfCleanPolitic'},
            ]
          },
          {'name': '宣传意识形态', 'icon': 'el-icon-location', 'index': '3-2', 'child': [
            {'name': '党内精神', 'icon': 'el-icon-location', 'index':  '/Index/partySpirit'},
            {'name': '学习强国', 'icon': 'el-icon-location', 'index':  '/Index/learningPower'},
            {'name': '先锋人物', 'icon': 'el-icon-location', 'index':  '/Index/pioneer'},
            ]
          },
            {'name': '力量图谱', 'icon': 'el-icon-location','index': '3-3', 'child': [
              {'name': '党组织力量图谱', 'icon': 'el-icon-location', 'index':  '/Index/partyOrganizationalStrength'},
              {'name': '群团力量图谱', 'icon': 'el-icon-location', 'index':  '/Index/peopleStrength'},
              {'name': '统战力量图谱', 'icon': 'el-icon-location', 'index':  '/Index/unitedFrontStrength'},
              {'name': '老干部力量图谱', 'icon': 'el-icon-location', 'index':  '/Index/veteranCadreStrength'},
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
            {'name': '医共体建设', 'icon': 'el-icon-location', 'index':  '/Index/construction'},
            {'name': '等级医院评审', 'icon': 'el-icon-location', 'index':  '/Index/hospitalReview'},
            {'name': '最多跑一次', 'icon': 'el-icon-location', 'index':  '/Index/runA'},
            {'name': '优质服务专项行动', 'icon': 'el-icon-location', 'index':  '/Index/firstRateService'},
            {'name': '核心业务指标', 'icon': 'el-icon-location', 'index':  '/Index/operationalIndicator'},
            ]
          },
          {'name': '网上办事', 'icon': 'el-icon-location',  'index': '4-2', 'child':[
            {'name': '在线审判', 'icon': 'el-icon-location', 'index':  '/Index/onlineTrial'},
            {'name': '请假审批', 'icon': 'el-icon-location', 'index':  '/Index/askForLeave'},
            {'name': '请示批复', 'icon': 'el-icon-location', 'index':  '/Index/askForInstructions'},
            {'name': '资料交换', 'icon': 'el-icon-location', 'index':  '/Index/dataInterchange'},
            {'name': '签到打卡', 'icon': 'el-icon-location', 'index':  '/Index/signIn'},
            ]
          },
          {'name': '信息发布', 'icon': 'el-icon-location',  'index': '4-3', 'child':[
            {'name': '党建信息', 'icon': 'el-icon-location', 'index':  '/Index/partyInformation'},
            {'name': '群团信息', 'icon': 'el-icon-location', 'index':  '/Index/underInformation'},
            {'name': '老干部信息', 'icon': 'el-icon-location', 'index':  '/Index/veteranCadresInformation'},
            {'name': '统战信息', 'icon': 'el-icon-location', 'index':  '/Index/unitedFrontInformation'},
            ]
          },
          {'name': '通知消息', 'icon': 'el-icon-location',  'index': '4-4', 'child':[
            {'name': '工作任务', 'icon': 'el-icon-location', 'index':  '/Index/workTask'},
            {'name': '消息发布', 'icon': 'el-icon-location', 'index':  '/Index/newsRelease'},
            {'name': '活动报名', 'icon': 'el-icon-location', 'index':  '/Index/activityRegistration'},
            {'name': '在线考试', 'icon': 'el-icon-location', 'index':  '/Index/onlineExamination'},
            ]
          }
        ]
        },
        {'name': '考核管理', 'icon': 'el-icon-setting', 'index': '5', 'child': [
          {'name': '支部考核', 'icon': 'el-icon-location', 'index': '5-1', 'child': [
            {'name': '常规工作', 'icon': 'el-icon-location', 'index': '/Index/routineWork'},
            {'name': '党建品牌', 'icon': 'el-icon-location', 'index': '/Index/partyBuildBrand'},
            {'name': '加分项目', 'icon': 'el-icon-location', 'index': '/Index/plusProject'},
            {'name': '堡垒指数', 'icon': 'el-icon-location', 'index': '/Index/fortIndex'},
            {'name': '动态排名', 'icon': 'el-icon-location', 'index': '/Index/dynamicRanking'},
            {'name': '考核年报', 'icon': 'el-icon-location', 'index': '/Index/assessAnnualReport'},
            ]
          },
          {'name': '党员考核', 'icon': 'el-icon-location', 'index': '5-2', 'child': [
            {'name': '先锋指数', 'icon': 'el-icon-location', 'index': '/Index/pioneerIndex'},
            {'name': '民主评议', 'icon': 'el-icon-location', 'index': '/Index/democraticAppraisal'},
            {'name': '党员年报', 'icon': 'el-icon-location', 'index': '/Index/partyMembersAnnualReports'},
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
//      this.$http({
//        url: this.$BASE_URL + 'api/user/outLogin',
//        headers: {
//          token: sessionStorage.getItem('token')
//        }
//      })
      this.$router.push('/Login')
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
  width: 220px !important;
  background-color: #f0f0f0;
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
