/**
 * Mock 测试数据
 *
 * @author jillyandkai@qq.com
 * @date 2019-03-22
 */
export default {
  // 用户信息
  userInfo: {
    id: 1,
    avatar: '',
    role: 0, // 0-系统管理员,1-,2-...
    username: 'admin',
    password: 'admin',
    email: 'admin@test.com',
    gender: 1 // 0-未知,1-男,2-女
  },
  // 用户列表
  userList: [{
    id: 1,
    nickname: '王小虎',
    gender: '男',
    yesorno:'是',
    type: '助理',
    iphone:'13900000000',
    manysto: '550555055505550555',

  }, {
    id: 2,
    nickname: '王小虎',
    gender: '男',
    yesorno:'是',
    type: '助理',
    iphone:'13900000000',
    manysto: '550555055505550555',
  }, {
    id: 3,
    nickname: '王小虎',
    gender: '男',
    yesorno:'是',
    type: '助理',
    iphone:'13900000000',
    manysto: '550555055505550555',
  }, {
    id: 4,
    nickname: '王小虎',
    gender: '男',
    yesorno:'是',
    type: '助理',
    iphone:'13900000000',
    manysto: '550555055505550555',
  }, {
    id: 5,
    nickname: '王小虎',
    gender: '男',
    yesorno:'是',
    type: '助理',
    iphone:'13900000000',
    manysto: '550555055505550555',
  }, {
    id: 6,
    nickname: '王小虎',
    gender: '男',
    yesorno:'是',
    type: '助理',
    iphone:'13900000000',
    manysto: '550555055505550555',
  }, {
    id: 7,
    nickname: '王小虎',
    gender: '男',
    yesorno:'是',
    type: '助理',
    iphone:'13900000000',
    manysto: '550555055505550555',
  }, {
    id: 8,
    nickname: '王小虎',
    gender: '男',
    yesorno:'是',
    type: '助理',
    iphone:'13900000000',
    manysto: '550555055505550555',
  }, {
    id: 9,
    nickname: '王小虎',
    gender: '男',
    yesorno:'是',
    type: '助理',
    iphone:'13900000000',
    manysto: '550555055505550555',
  }, {
    id: 10,
    nickname: '王小虎',
    gender: '男',
    yesorno:'是',
    type: '助理',
    iphone:'13900000000',
    manysto: '550555055505550555',
  }],
  // 用户组列表
  userGroupList: [{
    id: 1,
    parentId: 0,
    parentName: '-',
    name: '顶级用户组 A',
    description: '顶级用户组 A 的描述',
    child: [{
      id: 2,
      parentId: 1,
      parentName: '顶级用户组 A',
      name: '二级用户组 A',
      description: '二级用户组 A 的描述',
      child: [{
        id: 3,
        parentId: 2,
        parentName: '二级用户组 A',
        name: '三级用户组 A - 1',
        description: '三级用户组 A - 1 的描述'
      }, {
        id: 4,
        parentId: 2,
        parentName: '二级用户组 A',
        name: '三级用户组 A  - 2',
        description: '三级用户组 A - 2 的描述'
      }]
    }]
  }, {
    id: 5,
    parentId: 0,
    parentName: '-',
    name: '顶级用户组 B',
    description: '顶级用户组 B 的描述',
    child: [{
      id: 6,
      parentId: 5,
      parentName: '顶级用户组 B',
      name: '二级用户组 B',
      description: '二级用户组 B 的描述',
      child: [{
        id: 7,
        parentId: 6,
        parentName: '二级用户组 B',
        name: '三级用户组 B - 1',
        description: '三级用户组 B - 1 的描述'
      }, {
        id: 8,
        parentId: 6,
        parentName: '二级用户组 B',
        name: '三级用户组 B  - 2',
        description: '三级用户组 B - 2 的描述'
      }]
    }]
  }],
  // 角色列表
  roleList: [{
    id: 1,
    name: '超级管理员',
    operation: [0, 1, 2, 3],
    description: '超级管理员的描述'
  }, {
    id: 2,
    name: '管理员',
    operation: [0, 1, 2],
    description: '管理员的描述'
  }, {
    id: 3,
    name: '运营',
    operation: [0, 1, 2],
    description: '运营的描述'
  }, {
    id: 4,
    name: '普通用户',
    operation: [],
    description: '普通用户的描述'
  }],
  // 机构列表
  subjectList: [{
    id: 1,
    parentId: 0,
    parentName: '-',
    name: '顶级机构 A',
    type: 1,
    description: '顶级机构 A 的描述',
    child: [{
      id: 2,
      parentId: 1,
      parentName: '顶级机构 A',
      name: '二级机构 A',
      type: 0,
      description: '二级机构 A 的描述',
      child: [{
        id: 3,
        parentId: 2,
        parentName: '二级机构 A',
        name: '三级机构 A - 1',
        type: 2,
        description: '三级机构 A - 1 的描述'
      }, {
        id: 4,
        parentId: 2,
        parentName: '二级机构 A',
        name: '三级机构 A  - 2',
        type: 2,
        description: '三级机构 A - 2 的描述'
      }]
    }]
  }, {
    id: 5,
    parentId: 0,
    parentName: '-',
    name: '顶级机构 B',
    type: 1,
    description: '顶级机构 B 的描述',
    child: [{
      id: 6,
      parentId: 5,
      parentName: '顶级机构 B',
      name: '二级机构 B',
      type: 0,
      description: '二级机构 B 的描述',
      child: [{
        id: 7,
        parentId: 6,
        parentName: '二级机构 B',
        name: '三级机构 B - 1',
        type: 2,
        description: '三级机构 B - 1 的描述'
      }, {
        id: 8,
        parentId: 6,
        parentName: '二级机构 B',
        name: '三级机构 B  - 2',
        type: 2,
        description: '三级机构 B - 2 的描述'
      }]
    }]
  }],
  // 组织(部门)列表
  departList: [{
    id: 1,
    subjectId: 1,
    subjectName: '顶级机构 A',
    parentId: 0,
    parentName: '-',
    name: '顶级组织(部门) A',
    type: 1,
    description: '顶级组织(部门) A 的描述',
    child: [{
      id: 2,
      subjectId: 1,
      subjectName: '顶级机构 A',
      parentId: 1,
      parentName: '顶级组织(部门) A',
      name: '二级组织(部门) A',
      type: 0,
      description: '二级组织(部门) A 的描述',
      child: [{
        id: 3,
        subjectId: 1,
        subjectName: '顶级机构 A',
        parentId: 2,
        parentName: '二级组织(部门) A',
        name: '三级组织(部门) A - 1',
        type: 2,
        description: '三级组织(部门) A - 1 的描述'
      }, {
        id: 4,
        subjectId: 1,
        subjectName: '顶级机构 A',
        parentId: 2,
        parentName: '二级组织(部门) A',
        name: '三级组织(部门) A  - 2',
        type: 2,
        description: '三级组织(部门) A - 2 的描述'
      }]
    }]
  }, {
    id: 5,
    subjectId: 5,
    subjectName: '顶级机构 B',
    parentId: 0,
    parentName: '-',
    name: '顶级组织(部门) B',
    type: 1,
    description: '顶级组织(部门) B 的描述',
    child: [{
      id: 6,
      subjectId: 5,
      subjectName: '顶级机构 B',
      parentId: 5,
      parentName: '顶级组织(部门) B',
      name: '二级组织(部门) B',
      type: 0,
      description: '二级组织(部门) B 的描述',
      child: [{
        id: 7,
        subjectId: 5,
        subjectName: '顶级机构 B',
        parentId: 6,
        parentName: '二级组织(部门) B',
        name: '三级组织(部门) B - 1',
        type: 2,
        description: '三级组织(部门) B - 1 的描述'
      }, {
        id: 8,
        subjectId: 5,
        subjectName: '顶级机构 B',
        parentId: 6,
        parentName: '二级组织(部门) B',
        name: '三级组织(部门) B  - 2',
        type: 2,
        description: '三级组织(部门) B - 2 的描述'
      }]
    }]
  }],
  // 行政(小组)列表
  groupList: [{
    id: 1,
    subjectId: 1,
    subjectName: '顶级机构 A',
    parentId: 0,
    parentName: '-',
    name: '顶级行政(小组) A',
    type: 1,
    description: '顶级行政(小组) A 的描述',
    child: [{
      id: 2,
      subjectId: 1,
      subjectName: '顶级机构 A',
      parentId: 1,
      parentName: '顶级行政(小组) A',
      name: '二级行政(小组) A',
      type: 0,
      description: '二级行政(小组) A 的描述',
      child: [{
        id: 3,
        subjectId: 1,
        subjectName: '顶级机构 A',
        parentId: 2,
        parentName: '二级行政(小组) A',
        name: '三级行政(小组) A - 1',
        type: 2,
        description: '三级行政(小组) A - 1 的描述'
      }, {
        id: 4,
        subjectId: 1,
        subjectName: '顶级机构 A',
        parentId: 2,
        parentName: '二级行政(小组) A',
        name: '三级行政(小组)  - 2',
        type: 2,
        description: '三级行政(小组) A - 2 的描述'
      }]
    }]
  }, {
    id: 5,
    subjectId: 5,
    subjectName: '顶级机构 B',
    parentId: 0,
    parentName: '-',
    name: '顶级行政(小组) B',
    type: 1,
    description: '顶级行政(小组) B 的描述',
    child: [{
      id: 6,
      subjectId: 5,
      subjectName: '顶级机构 B',
      parentId: 5,
      parentName: '顶级行政(小组) B',
      name: '二级行政(小组) B',
      type: 0,
      description: '二级行政(小组) B 的描述',
      child: [{
        id: 7,
        subjectId: 5,
        subjectName: '顶级机构 B',
        parentId: 6,
        parentName: '二级行政(小组) B',
        name: '三级行政(小组) B - 1',
        type: 2,
        description: '三级行政(小组) B - 1 的描述'
      }, {
        id: 8,
        subjectId: 5,
        subjectName: '顶级机构 B',
        parentId: 6,
        parentName: '二级行政(小组) B',
        name: '三级行政(小组) B  - 2',
        type: 2,
        description: '三级行政(小组) B - 2 的描述'
      }]
    }]
  }],
  // 菜单列表
  menuList:[
    {
      id: 1,
      subjectId: 1,
      subjectName: '基础管理',
      parentId: 0,
      parentName: '-',
      name: '基础管理',
      type: 1,
      description: '基础管理的描述',
      child: [{
        id: 2,
        subjectId: 1,
        subjectName: '基础管理',
        parentId: 1,
        parentName: '基础管理',
        name: '用户管理',
        type: 0,
        description: '用户管理的描述',
        child: [{
          id: 3,
          subjectId: 1,
          subjectName: '基础管理',
          parentId: 2,
          parentName: '用户管理',
          name: '三级菜单',
          type: 2,
          description: '三级菜单的描述'
        }, {
          id: 4,
          subjectId: 1,
          subjectName: '基础管理',
          parentId: 2,
          parentName: '用户管理',
          name: '三级菜单2',
          type: 2,
          description: '三级菜单2的描述'
        }]
      }]
    }
  ],
}
