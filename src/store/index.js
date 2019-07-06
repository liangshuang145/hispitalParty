import Vue from 'vue'
import Vuex from 'vuex'
import storage from '@/lib/storage'

// 引入数据操作类
import UserService from '@/services/UserService'
import UserGroupService from '@/services/UserGroupService'
import UserInfoService from '../services/UserInfoService'
import RoleService from '@/services/RoleService'
import SubjectService from '@/services/SubjectService'
import DepartService from '@/services/DepartService'
import GroupService from '@/services/GroupService'
import MenuService from '@/services/MenuService'
import ButtonService from '@/services/ButtonService'
import FieldService from '@/services/FieldService'
import PageService from  '@/services/PageService'
import WorkService from '../services/WorkService'
import SpiriService from '@/services/SpiritService'
import TaskService from '@/services/TaskService'
import AdvicesService from '@/services/AdvicesService'
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    lang: 'en', // 语言
    userInfo: '', // 用户信息
    userList: [], // 用户列表
    userGroupList: [], // 用户组列表
    roleList: [], // 角色列表
    subjectList: [], // 机构列表
    departList: [], // 组织(部门)列表
    groupList: [], // 行政(小组)列表
    menuList: [], // 菜单列表
    buttonList: [], // 按钮列表
    fieldList: [], // 字段列表
    pageList: [], // 页面列表
    menuInfo: {},// 单个菜单信息
    workList: [],// 中心工作列表
    workIndicatorList: [],// 中心工作, 单个工作指标列表
    spiritList: [],//党内精神列表
    // ----- 人事档案 -----
    userInfoList:[],// 用户信息列表
    userInfoEductionList:[],// 用户教育经历列表
    userInfoWorkList:[],// 用户工作经历列表
    userInfoContractList:[],// 用户合同记录列表
    // ----- 民主党派 ----
    userInfoMzdpList: [],// 民主党派
    // ----- 高知群体 ---
    userInfoGzqtList:[], // 告知群体
    // ----- 工会 ---
    userInfoGhList:[], // 工会
    // ----- 团委 ---
    userInfoTwList:[], // 团委
    // ----- 妇代会 ---
    userInfoFdhList:[], // 妇代会
    // ----- 离职老干部 ---
    userInfoLtxlgbList:[], // 离职老干部
    // ----- 党员发展 ---
    userInfoPartyList:[], //党员发展
    //党内用户列表
    spirituserList:[],
    //学习强国排名表
    ideologycountryList:[],
    //党内谨慎列表
    spiritAll:[],
    //任务列表
    taskList:[],
    //消息列表
    advicesList:[],
  },
  mutations: {
    // 登录
    userLogin(state, data) {
      storage.setStorage('userInfo', data)
      state.userInfo = data
    },
    // 退出
    userLogout(state) {
      storage.delStorage('userInfo')
      state.userInfo = ''
    },
    // 用户列表
    setUserList(state, data) {
      state.userList = data
    },
    // 用户组列表
    setUserGroupList(state, data) {
      state.userGroupList = data
    },
    // 角色列表
    setRoleList(state, data) {
      state.roleList = data
    },
    // 机构列表
    setSubjectList(state, data) {
      state.subjectList = data
    },
    // 组织(部门)列表
    setDepartList(state, data) {
      state.departList = data
    },
    // 行政(小组)列表
    setGroupList(state, data) {
      state.groupList = data
    },
    // 菜单列表
    setMenuList(state, data) {
      state.menuList = data
    },
    // 菜单列表
    setButtonList(state, data) {
      state.buttonList = data
    },
    // 单个菜单信息
    setMenuInfo(state, data){
      state.menuInfo = data
    },
    // 字段列表
    setFieldList(state, data){
      state.fieldList = data
    },
    // 页面列表
    setPageList(state, data){
      state.pageList = data
    },
    // 获取工作列表
    setWorkList(state, data){
      state.workList = data
    },
    // 中心工作, 单个工作指标列表
    setWorkIndicatorList(state, data){
      state.workIndicatorList = data
    },
    //党内精神列表
    setSpiritList(state, data){
      state.spiritList = data
    },
    // ----------- 人事档案-------
    // 用户信息列表
    setUserInfoList(state, data){
      state.userInfoList = data
    },
    // 用户教育经历列表
    setUserInfoEductionList(state, data){
      state.userInfoEductionList = data
    },
    // 用户工作经历列表
    setUserInfoWorkList(state, data){
      state.userInfoWorkList = data
    },
    // 用户合同记录列表
    setUserInfoContractList(state, data){
      state.userInfoContractList = data
    },
    // ----------- 民主党派 -------------
    setUserInfoMzdpList(state, data){
      state.userInfoMzdpList = data
    },
    // ----------- 高知群体 --------
    setUserInfoGzqtList(state, data){
      state.userInfoGzqtList = data
    },
    // ----------- 工会 --------
    setUserInfoGhList(state, data){
      state.userInfoGhList = data
    },
    // ----------- 团委 --------
    setUserInfoTwList(state, data){
      state.userInfoTwList = data
    },
    // ----------- 妇代会 -------- userInfoLtxlgbList
    setUserInfoFdhList(state, data){
      state.userInfoFdhList = data
    },
    // ----------- 离职老干部 --------
    setUserInfoLtxlgbList(state, data){
      state.userInfoLtxlgbList = data
    },
    // ----------- 党员发展列表 ----
    setUserInfoPartyList(state, data){
      state.userInfoPartyList = data
    },
    // ----------- 获取精神用户列表 --------
    setSpirituserList(state,data){
      state.spirituserList = data
    },
    // ----------- 获取精神table列表 --------
    setSpiritAll(state,data){
      state.spiritAll = data
    },
    // ----------- 获取任务列表 --------
    setTaskList(state,data){
      state.taskList = data
    },
    //-----------获取消息列表-------------
    setAdvicesList(state,data){
     state.advicesList = data
    },
  },
  actions: {
    // 获取用户列表 废弃
    getUserList({commit}) {
      UserService.getUserList().then((res) => {
        console.log('this is getList work ...')

        commit('setUserList', res)
      })
    },
    // 通过部门id获取用户列表-分页
    getUserListByDepartId({commit}, param){
      UserService.getUserListByDepartId(param).then((res) => {
        commit('setUserList', res)
      })
    },
    // 通过小组id获取用户列表-分页
    getUserListByGroupId({commit}, param){
      UserService.getUserListByGroupId(param).then((res) => {
        commit('setUserList', res)
      })
    },
    // 通过名称获取用户列表-分页
    getUserListByName({commit}, param){
      UserService.getUserListByName(param).then((res) => {
        commit('setUserList', res)
      })
    },
    // 获取用户组列表
    getUserGroupList({commit}) {
      UserGroupService.getUserGroupList().then((res) => {
        console.log('this is getUserGroupList work ...')

        commit('setUserGroupList', res)
      })
    },
    // 获取角色列表
    getRoleList({commit}) {
      RoleService.getRole().then((res) => {
        console.log('this is getRoleList work ...')
        commit('setRoleList', res)
      })
    },
    // 获取机构列表
    getSubjectList({commit}) {
      SubjectService.getSubject().then((res) => {
        console.log('this is getSubjectList work ...')

        commit('setSubjectList', res)
      })
    },
    // 获取组织(部门)列表
    getDepartList({commit}) {
      DepartService.getDepart().then((res) => {
        console.log('this is getDepartList work ...');
        commit('setDepartList', res)
      })
    },
    // 通过机构id查询组织(部门)列表
    getDepartListBySubjectId({commit}, param){
      DepartService.getDepartListBySubjectId(param).then((res) => {
        commit('setDepartList', res)
      })
    },
    // 获得所有部门列表
    getDepartListIsAll(){
      DepartService.getDepartListIsAll(param).then((res) => {
        commit('setDepartList', res)
      })
    },
    // 获取行政(小组)列表
    getGroupList({commit}) {
      GroupService.getGroup().then((res) => {
        commit('setGroupList', res)
      })
    },
    // 通过机构id查询行政小组列表
    getGroupListBySubjectId({commit}, param){
      GroupService.getGroupListBySubjectId(param).then((res) => {
        commit('setGroupList', res)
      })
    },
    // 获取所有行政列表
    getGroupListIsAll({ commit }){
      GroupService.getGroupListIsAll().then((res) => {
        commit('setGroupList', res)
      })
    },
    // 获取菜单列表
    getMenuList({commit}) {
      MenuService.getMenuList().then((res) => {
        console.log('this is getMenuList work ...');

        commit('setMenuList', res)
      })
    },
    // 通过菜单id获取菜单信息
    getMenuById({commit}, id){
      MenuService.getMenu({id: id}).then((res) => {
        commit('setMenuInfo', res)
      })
    },
    // 获取按钮列表
    getButtonList({commit}){
      ButtonService.getButtonList().then((res) => {
        console.log('this is getButtonList work ...');

        commit('setButtonList', res)
      })
    },
    // 获取字段列表
    getFieldList({commit}){
      FieldService.getFieldList().then((res) => {
        console.log('this is getFieldList work ...')
        commit('setFieldList', res)
      })
    },
    // 获取页面列表
    getPageList({commit}){
      PageService.getPageList().then((res) => {
        console.log('this is getPageList work ...')
        commit('setPageList', res)
      })
    },
    // 获取中心工作列表
    getWorkList({commit}){
      WorkService.getWorkList().then((res) => {
        commit('setWorkList', res)
      })
    },
    // 中心工作 通过工作id获取工作指标列表
    getWorkIndicatorList({commit}, param){
      WorkService.getWorkIndicatorList(param).then((res) => {
        commit('setWorkIndicatorList', res)
      })
    },
	//党内精神列表
    getSpiritList({commit}){
      SpiriService.getSpiritList().then((res) => {
        console.log('this is getSpiritList work ...')
        commit('setSpiritList', res)
      })
    },
    // ---------- 人事档案----------
    // 获取用户信息列表
    getUserInfoList({ commit }){
      UserInfoService.getUserInfoList().then((res) => {
        commit('setUserInfoList',res)
      })
    },
    // 用户条件查询 列表 姓名 工号 科室
    selectUserInfoListByNameOrNumberOrOffice({ commit },param){
      UserInfoService.selectUserInfoListByNameOrNumberOrOffice(param).then((res) =>{
        commit('setUserInfoList',res)
      })
    },
    // 通过部门id查询用户详情
    selectUserInfoListByDepartId({ commit },param){
      UserInfoService.selectUserInfoListByDepartId(param).then((res) => {
        commit('setUserInfoList', res)
      })
    },
    // 通过行政id查询用户详情
    selectUserInfoListByGroupId({ commit },param){
      UserInfoService.selectUserInfoListByGroupId(param).then((res) => {
        commit('setUserInfoList', res)
      })
    },
    // 获取用户教育经历列表
    getUserInfoEductionList({ commit },param){
      UserInfoService.getUserInfoEductionList(param).then((res) => {
        commit('setUserInfoEductionList',res)
      })
    },
    // 获取用户工作经历列表
    getUserInfoWorkList({ commit },param){
      UserInfoService.getUserInfoWorkList(param).then((res) => {
        commit('setUserInfoWorkList',res)
      })
    },
    // 获取用户合同记录列表
    getUserInfoContractList({ commit },param){
      UserInfoService.getUserInfoContractList(param).then((res) =>{
        commit('setUserInfoContractList',res)
      })
    },
    // ---------------民主党派---------
    getUserInfoMzdpList({ commit }){
      UserInfoService.getUserInfoMzdpList().then((res) => {
        commit('setUserInfoMzdpList',res)
      })
    },
    // 通过组织id 获得民主党派列表
    selectUserInfoMzdpListByDepartId({ commit },param){
      UserInfoService.selectUserInfoMzdpListByDepartId(param).then((res) => {
        commit('setUserInfoMzdpList',res)
      })
    },
    // 通过行政id 获得民主党派列表
    selectUserInfoMzdpListByGroupId({ commit },param){
      UserInfoService.selectUserInfoMzdpListByGroupId(param).then((res) => {
        commit('setUserInfoMzdpList',res)
      })
    },
    // 民主党派 用户条件查询 列表 姓名 工号 科室
    selectUserInfoMzdpListByNameOrNumberOrOffice({ commit },param){
      UserInfoService.selectUserInfoMzdpListByNameOrNumberOrOffice(param).then((res) => {
        commit('setUserInfoMzdpList',res)
      })
    },
    // -------------- 高知群体 ------
    getUserInfoGzqtList({ commit }){
      UserInfoService.getUserInfoGzqtList().then((res) => {
        commit('setUserInfoGzqtList',res)
      })
    },
    // 通过组织id 获得列表
    selectUserInfoGzqtListByDepartId({ commit },param){
      UserInfoService.selectUserInfoGzqtListByDepartId(param).then((res) => {
        commit('setUserInfoGzqtList',res)
      })
    },
    // 通过行政id 获得列表
    selectUserInfoGzqtListByGroupId({ commit },param){
      UserInfoService.selectUserInfoGzqtListByGroupId(param).then((res) => {
        commit('setUserInfoGzqtList',res)
      })
    },
    // 用户条件查询 列表 姓名 工号 科室
    selectUserInfoGzqtListByNameOrNumberOrOffice({ commit },param){
      UserInfoService.selectUserInfoGzqtListByNameOrNumberOrOffice(param).then((res) => {
        commit('setUserInfoGzqtList',res)
      })
    },
    // -------------- 工会 ------
    getUserInfoGhList({ commit }){
      UserInfoService.getUserInfoGhList().then((res) => {
        commit('setUserInfoGhList',res)
      })
    },
    // 通过组织id 获得列表
    selectUserInfoGhListByDepartId({ commit },param){
      UserInfoService.selectUserInfoGhListByDepartId(param).then((res) => {
        commit('setUserInfoGhList',res)
      })
    },
    // 通过行政id 获得列表
    selectUserInfoGhListByGroupId({ commit },param){
      UserInfoService.selectUserInfoGhListByGroupId(param).then((res) => {
        commit('setUserInfoGhList',res)
      })
    },
    // 用户条件查询 列表 姓名 工号 科室
    selectUserInfoGhListByNameOrNumberOrOffice({ commit },param){
      UserInfoService.selectUserInfoGhListByNameOrNumberOrOffice(param).then((res) => {
        commit('setUserInfoGhList',res)
      })
    },
    // -------------- 团委 ------
    getUserInfoTwList({ commit }){
      UserInfoService.getUserInfoTwList().then((res) => {
        commit('setUserInfoTwList',res)
      })
    },
    // 通过组织id 获得列表
    selectUserInfoTwListByDepartId({ commit },param){
      UserInfoService.selectUserInfoTwListByDepartId(param).then((res) => {
        commit('setUserInfoTwList',res)
      })
    },
    // 通过行政id 获得列表
    selectUserInfoTwListByGroupId({ commit },param){
      UserInfoService.selectUserInfoTwListByGroupId(param).then((res) => {
        commit('setUserInfoTwList',res)
      })
    },
    // 用户条件查询 列表 姓名 工号 科室
    selectUserInfoTwListByNameOrNumberOrOffice({ commit },param){
      UserInfoService.selectUserInfoTwListByNameOrNumberOrOffice(param).then((res) => {
        commit('setUserInfoTwList',res)
      })
    },
    // -------------- 妇代会 ------
    getUserInfoFdhList({ commit }){
      UserInfoService.getUserInfoFdhList().then((res) => {
        commit('setUserInfoFdhList',res)
      })
    },
    // 通过组织id 获得列表
    selectUserInfoFdhListByDepartId({ commit },param){
      UserInfoService.selectUserInfoFdhListByDepartId(param).then((res) => {
        commit('setUserInfoFdhList',res)
      })
    },
    // 通过行政id 获得列表
    selectUserInfoFdhListByGroupId({ commit },param){
      UserInfoService.selectUserInfoFdhListByGroupId(param).then((res) => {
        commit('setUserInfoFdhList',res)
      })
    },
    // 用户条件查询 列表 姓名 工号 科室
    selectUserInfoFdhListByNameOrNumberOrOffice({ commit },param){
      UserInfoService.selectUserInfoFdhListByNameOrNumberOrOffice(param).then((res) => {
        commit('setUserInfoFdhList',res)
      })
    },
    // -------------- 离职老干部 ------
    getUserInfoLtxlgbList({ commit }){
      UserInfoService.getUserInfoLtxlgbList().then((res) => {
        commit('setUserInfoLtxlgbList',res)
      })
    },
    // 通过组织id 获得列表
    selectUserInfoLtxlgbListByDepartId({ commit },param){
      UserInfoService.selectUserInfoLtxlgbListByDepartId(param).then((res) => {
        commit('setUserInfoLtxlgbList',res)
      })
    },
    // 通过行政id 获得列表
    selectUserInfoLtxlgbListByGroupId({ commit },param){
      UserInfoService.selectUserInfoLtxlgbListByGroupId(param).then((res) => {
        commit('setUserInfoLtxlgbList',res)
      })
    },
    // 用户条件查询 列表 姓名 工号 科室
    selectUserInfoLtxlgbListByNameOrNumberOrOffice({ commit },param){
      UserInfoService.selectUserInfoLtxlgbListByNameOrNumberOrOffice(param).then((res) => {
        commit('setUserInfoLtxlgbList',res)
      })
    },
    // ------------- 党员发展列表 -------
    getUserInfoPartyList({ commit },param){
      UserInfoService.getUserInfoPartyList(param).then((res) => {
        commit('setUserInfoPartyList',res)
      })
    },
    // 通过组织id 获得列表
    selectUserInfoPartyListByDepartId({ commit },param){
      UserInfoService.selectUserInfoPartyListByDepartId(param).then((res) => {
        commit('setUserInfoPartyList',res)
      })
    },
    // 通过行政id 获得列表
    selectUserInfoPartyListByGroupId({ commit },param){
      UserInfoService.selectUserInfoPartyListByGroupId(param).then((res) => {
        commit('setUserInfoPartyList',res)
      })
    },
    // 用户条件查询 列表 姓名 工号 科室
    selectUserInfoPartyListByNameOrNumberOrOffice({ commit },param){
      UserInfoService.selectUserInfoPartyListByNameOrNumberOrOffice(param).then((res) => {
        commit('setUserInfoPartyList',res)
      })
    },
    // -------------- 党内谨慎用户列表 ------
  getSpiritUsers({ commit }){
    SpiriService.getSpiritUsers().then((res) => {
        commit('setSpirituserList',res)
      })
    },

    // -------------- 党内精神table表 ------
    getSpiritAll({ commit }){
      SpiriService.getSpiritAll().then((res) => {
        commit('setSpiritAll',res)
      })
    },

    // -------------- 任务table表 ------
    getTaskList({ commit }){
      TaskService.getTaskList().then((res) => {
        commit('setTaskList',res)
      })
    },

    // -------------- 消息table表 ------
    getAdvicesList({ commit }){
      AdvicesService.getAdvicesList().then((res) => {
        commit('setAdvicesList',res)
      })
    },
  }
})
