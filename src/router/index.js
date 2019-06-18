import Vue from 'vue'
import Router from 'vue-router'

// 登录
import Login from '../views/Login.vue'

// 首页
import Home from '../views/Home.vue'

// 用户管理
import UserManageDemo from '../views/UserManageDemo.vue'
// 用户组管理
import UserGroupManageDemo from '../views/UserGroupManageDemo.vue'
// 角色管理
import RoleManageDemo from '../views/RoleManageDemo.vue'
// 机构管理
import SubjectManageDemo from '../views/SubjectManageDemo.vue'
// 组织（部门）管理
import DepartManageDemo from '../views/DepartManageDemo.vue'
// 行政（小组）管理
import GroupManageDemo from '../views/GroupManageDemo.vue'
// 菜单管理
import MenuManageDemo from '../views/MenuManageDemo.vue'

// --------组织人事--------
//人事管理
import PersonnelArchives from '../views/PersonnelArchives.vue'
//党员档案
import MemberArchives from  '../views/MemberArchives.vue'
//建党对象
import MemberBuilding from '../views/MemberBuilding.vue'
//党员发展
import MemberDevelopment from  '../views/MemberDevelopment.vue'

// -------统战群团老干部-----
// 民主党派
import DemocraticParties from '../views/DemocraticParties.vue'
//高知群体
import Intellectual from  '../views/Intellectual.vue'
//工会
import LaborUnion from '../views/LaborUnion.vue'
//团委
import CommunistYouthLeague from '../views/CommunistYouthLeague.vue'
//妇代会
import Conference from '../views/Conference.vue'
//离退休老干部
import RetiredVeteranCadre from '../views/RetiredVeteranCadre.vue'
// ---------清廉医院-------
import MedicalEthics from '../views/MedicalEthics.vue'
//药品预警
import DrugWarning from '../views/DrugWarning.vue'
//耗材预警
import ConsumableWarning from '../views/ConsumableWarning.vue'
//廉政教育
import EducationOfCleanPolitic from '../views/EducationOfCleanPolitic.vue'

// 行风效能
import Efficiency from '../views/Efficiency.vue'
// 党内精神
import PartySpirit from '../views/PartySpirit.vue'
// 学习强国
import LearningPower from  '../views/LearningPower.vue'
// 先锋人物
import Pioneer from '../views/Pioneer.vue'
//党组织力量图谱
import  PartyOrganizationalStrength from '../views/PartyOrganizationalStrength.vue'
//群团力量图谱
import  PeopleStrength from '../views/PeopleStrength.vue'
//统战力量图谱
import  UnitedFrontStrength from '../views/UnitedFrontStrength.vue'
//老干部力量图谱
import VeteranCadreStrength from '../views/VeteranCadreStrength.vue'
//标准考核
import Standardinspection from '../views/Standardinspection.vue'

//先锋指数
import PioneerIndex from '../views/PioneerIndex.vue'

//民主评议
import DemocraticAppraisal from '../views/DemocraticAppraisal.vue'
//党员年报
import PartyMembersAnnualReports from '../views/PartyMembersAnnualReports.vue'
// ------------活动管理
import ActivityManage from '../views/ActivityManage.vue'

// 百度编辑器
import UEditorDemo from '../views/UEditorDemo.vue'

Vue.use(Router);

export default new Router({
  routes: [
    {path: '/', name: 'Login', component: Login},
    {path: '/Login', name: 'Login', component: Login},
    {path: '/Index', component: Home, children: [
      {path: 'UserManageDemo', name: 'UserManageDemo', component: UserManageDemo},
      {path: 'UserGroupManageDemo', name: 'UserGroupManageDemo', component: UserGroupManageDemo},
      {path: 'RoleManageDemo', name: 'RoleManageDemo', component: RoleManageDemo},
      {path: 'SubjectManageDemo', name: 'SubjectManageDemo', component: SubjectManageDemo},
      {path: 'DepartManageDemo', name: 'DepartManageDemo', component: DepartManageDemo},
      {path: 'GroupManageDemo', name: 'GroupManageDemo', component: GroupManageDemo},
      {path: 'MenuManageDemo', name: 'MenuManageDemo', component: MenuManageDemo},
      {path: 'UEditorDemo', name: 'UEditorDemo', component: UEditorDemo},
      {path: 'ActivityManage',name: 'ActivityManage', component: ActivityManage},// 活动管理
      {path: 'PersonnelArchives',name: 'PersonnelArchives',component: PersonnelArchives},// 人事档案
      {path: 'MemberArchives',name: 'MemberArchives',component: MemberArchives},// 党员管理
      {path: 'MemberBuilding',name: 'MemberBuilding', component: MemberBuilding},// 建党对象
      {path: 'MemberDevelopment',name: 'MemberDevelopment',component: MemberDevelopment},// 党员管理
      {path: 'DemocraticParties',name: 'DemocraticParties',component: DemocraticParties},// 民主党派
      {path: 'Intellectual',name: 'Intellectual',component: Intellectual},// 高知群体
      {path: 'LaborUnion',name: 'LaborUnion',component: LaborUnion},// 工会
      {path: 'CommunistYouthLeague',name: 'CommunistYouthLeague',component: CommunistYouthLeague},// 团委
      {path: 'Conference',name: 'Conference',component: Conference},// 妇代会
      {path: 'RetiredVeteranCadre',name: 'RetiredVeteranCadre',component: RetiredVeteranCadre},// 离退休老干部
      {path: 'MedicalEthics',name: 'MedicalEthics',component: MedicalEthics},// 医德档案
      {path: 'DrugWarning',name: 'DrugWarning',component: DrugWarning},// 药品预警
      {path: 'ConsumableWarning',name: 'ConsumableWarning',component: ConsumableWarning},// 耗材预警
      {path: 'EducationOfCleanPolitic',name: 'EducationOfCleanPolitic',component: EducationOfCleanPolitic},// 廉政教育
      {path: 'Efficiency',name: 'Efficiency', component: Efficiency},// 行风效能
      {path: 'PartySpirit',name: 'PartySpirit',component:PartySpirit},//党内精神
      {path: 'LearningPower',name: 'PartySpirit',component:LearningPower},//学习强国
      {path: 'Pioneer',name: 'Pioneer',component:Pioneer},//先锋人物
      {path: 'PartyOrganizationalStrength',name: 'PartyOrganizationalStrength',component:PartyOrganizationalStrength}, //党组织力量图谱
      {path: 'PeopleStrength',name: 'PeopleStrength',component:PeopleStrength}, //群团力量图谱
      {path: 'UnitedFrontStrength',name: 'UnitedFrontStrength',component:UnitedFrontStrength}, //统战力量图谱
      {path: 'VeteranCadreStrength',name: 'VeteranCadreStrength',component:VeteranCadreStrength}, //老干部力量图谱
      {path: 'Standardinspection',name: 'Standardinspection',component:Standardinspection},//先锋指数
      {path: 'PioneerIndex',name: 'PioneerIndex',component:PioneerIndex},//先锋指数
      {path: 'DemocraticAppraisal',name: 'DemocraticAppraisal',component:DemocraticAppraisal},//民主评议1
      {path: 'PartyMembersAnnualReports',name: 'PartyMembersAnnualReports',component:PartyMembersAnnualReports},//党员年报
    ]
  }]
})
