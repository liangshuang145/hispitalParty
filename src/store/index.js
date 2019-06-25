import Vue from 'vue'
import Vuex from 'vuex'
import storage from '@/lib/storage'

// 引入数据操作类
import UserService from '@/services/UserService'
import UserGroupService from '@/services/UserGroupService'
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
    }
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
  }
})
