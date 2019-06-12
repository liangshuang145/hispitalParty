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

Vue.use(Vuex)

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
    menuList:[] // 菜单列表
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
    }
  },
  actions: {
    // 获取用户列表
    getUserList({ commit }) {
      UserService.getUserList().then((res) => {
        console.log('this is getList work ...')

        commit('setUserList', res)
      })
    },
    // 获取用户组列表
    getUserGroupList({ commit }) {
      UserGroupService.getUserGroup().then((res) => {
        console.log('this is getUserGroupList work ...')

        commit('setUserGroupList', res)
      })
    },
    // 获取角色列表
    getRoleList({ commit }) {
      RoleService.getRole().then((res) => {
        console.log('this is getRoleList work ...')

        commit('setRoleList', res)
      })
    },
    // 获取机构列表
    getSubjectList({ commit }) {
      SubjectService.getSubject().then((res) => {
        console.log('this is getSubjectList work ...')

        commit('setSubjectList', res)
      })
    },
    // 获取组织(部门)列表
    getDepartList({ commit }) {
      DepartService.getDepart().then((res) => {
        console.log('this is getDepartList work ...')

        commit('setDepartList', res)
      })
    },
    // 获取行政(小组)列表
    getGroupList({ commit }) {
      GroupService.getGroup().then((res) => {
        console.log('this is getGroupList work ...')

        commit('setGroupList', res)
      })
    },
    // 获取菜单列表
    getMenuList({ commit }) {
      MenuService.getMenuList().then((res) => {
        console.log('this is getMenuList work ...')

        commit('setMenuList', res)
      })
    },
  }
})
