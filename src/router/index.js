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


    ]
  }]
})
