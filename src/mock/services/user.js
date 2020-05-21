import Mock from 'mockjs2'
import { builder } from '../util'

const info = options => {
  const userInfo = {
    id: '4291d7da9005377ec9aec4a71ea837f',
    name: '天野远子',
    username: 'admin',
    password: '',
    avatar: '/avatar2.jpg',
    status: 1,
    telephone: '',
    lastLoginIp: '27.154.74.117',
    lastLoginTime: 1534837621348,
    creatorId: 'admin',
    createTime: 1497160610259,
    merchantCode: 'TLif2btpzg079h15bk',
    deleted: 0,
    roleId: 'admin',
    role: {}
  }
  // role
  const roleObj = {
    id: 'admin',
    name: '管理员',
    describe: '拥有所有权限',
    status: 1,
    creatorId: 'system',
    createTime: 1497160610259,
    deleted: 0,
    permissions: [
      {
        roleId: 'admin',
        permissionId: 'dashboard',
        permissionName: '仪表盘',
        actions:
          '[{"action":"add","defaultCheck":false,"describe":"新增"},{"action":"query","defaultCheck":false,"describe":"查询"},{"action":"get","defaultCheck":false,"describe":"详情"},{"action":"update","defaultCheck":false,"describe":"修改"},{"action":"delete","defaultCheck":false,"describe":"删除"}]',
        actionEntitySet: [
          {
            action: 'add',
            describe: '新增',
            defaultCheck: false
          },
          {
            action: 'query',
            describe: '查询',
            defaultCheck: false
          },
          {
            action: 'get',
            describe: '详情',
            defaultCheck: false
          },
          {
            action: 'update',
            describe: '修改',
            defaultCheck: false
          },
          {
            action: 'delete',
            describe: '删除',
            defaultCheck: false
          }
        ],
        actionList: null,
        dataAccess: null
      },
      {
        roleId: 'admin',
        permissionId: 'exception',
        permissionName: '异常页面权限',
        actions:
          '[{"action":"add","defaultCheck":false,"describe":"新增"},{"action":"query","defaultCheck":false,"describe":"查询"},{"action":"get","defaultCheck":false,"describe":"详情"},{"action":"update","defaultCheck":false,"describe":"修改"},{"action":"delete","defaultCheck":false,"describe":"删除"}]',
        actionEntitySet: [
          {
            action: 'add',
            describe: '新增',
            defaultCheck: false
          },
          {
            action: 'query',
            describe: '查询',
            defaultCheck: false
          },
          {
            action: 'get',
            describe: '详情',
            defaultCheck: false
          },
          {
            action: 'update',
            describe: '修改',
            defaultCheck: false
          },
          {
            action: 'delete',
            describe: '删除',
            defaultCheck: false
          }
        ],
        actionList: null,
        dataAccess: null
      },
      {
        roleId: 'admin',
        permissionId: 'result',
        permissionName: '结果权限',
        actions:
          '[{"action":"add","defaultCheck":false,"describe":"新增"},{"action":"query","defaultCheck":false,"describe":"查询"},{"action":"get","defaultCheck":false,"describe":"详情"},{"action":"update","defaultCheck":false,"describe":"修改"},{"action":"delete","defaultCheck":false,"describe":"删除"}]',
        actionEntitySet: [
          {
            action: 'add',
            describe: '新增',
            defaultCheck: false
          },
          {
            action: 'query',
            describe: '查询',
            defaultCheck: false
          },
          {
            action: 'get',
            describe: '详情',
            defaultCheck: false
          },
          {
            action: 'update',
            describe: '修改',
            defaultCheck: false
          },
          {
            action: 'delete',
            describe: '删除',
            defaultCheck: false
          }
        ],
        actionList: null,
        dataAccess: null
      },
      {
        roleId: 'admin',
        permissionId: 'profile',
        permissionName: '详细页权限',
        actions:
          '[{"action":"add","defaultCheck":false,"describe":"新增"},{"action":"query","defaultCheck":false,"describe":"查询"},{"action":"get","defaultCheck":false,"describe":"详情"},{"action":"update","defaultCheck":false,"describe":"修改"},{"action":"delete","defaultCheck":false,"describe":"删除"}]',
        actionEntitySet: [
          {
            action: 'add',
            describe: '新增',
            defaultCheck: false
          },
          {
            action: 'query',
            describe: '查询',
            defaultCheck: false
          },
          {
            action: 'get',
            describe: '详情',
            defaultCheck: false
          },
          {
            action: 'update',
            describe: '修改',
            defaultCheck: false
          },
          {
            action: 'delete',
            describe: '删除',
            defaultCheck: false
          }
        ],
        actionList: null,
        dataAccess: null
      },
      {
        roleId: 'admin',
        permissionId: 'table',
        permissionName: '表格权限',
        actions:
          '[{"action":"add","defaultCheck":false,"describe":"新增"},{"action":"import","defaultCheck":false,"describe":"导入"},{"action":"get","defaultCheck":false,"describe":"详情"},{"action":"update","defaultCheck":false,"describe":"修改"}]',
        actionEntitySet: [
          {
            action: 'add',
            describe: '新增',
            defaultCheck: false
          },
          {
            action: 'import',
            describe: '导入',
            defaultCheck: false
          },
          {
            action: 'get',
            describe: '详情',
            defaultCheck: false
          },
          {
            action: 'update',
            describe: '修改',
            defaultCheck: false
          }
        ],
        actionList: null,
        dataAccess: null
      },
      {
        roleId: 'admin',
        permissionId: 'form',
        permissionName: '表单权限',
        actions:
          '[{"action":"add","defaultCheck":false,"describe":"新增"},{"action":"get","defaultCheck":false,"describe":"详情"},{"action":"query","defaultCheck":false,"describe":"查询"},{"action":"update","defaultCheck":false,"describe":"修改"},{"action":"delete","defaultCheck":false,"describe":"删除"}]',
        actionEntitySet: [
          {
            action: 'add',
            describe: '新增',
            defaultCheck: false
          },
          {
            action: 'get',
            describe: '详情',
            defaultCheck: false
          },
          {
            action: 'query',
            describe: '查询',
            defaultCheck: false
          },
          {
            action: 'update',
            describe: '修改',
            defaultCheck: false
          },
          {
            action: 'delete',
            describe: '删除',
            defaultCheck: false
          }
        ],
        actionList: null,
        dataAccess: null
      },
      {
        roleId: 'admin',
        permissionId: 'order',
        permissionName: '订单管理',
        actions:
          '[{"action":"add","defaultCheck":false,"describe":"新增"},{"action":"query","defaultCheck":false,"describe":"查询"},{"action":"get","defaultCheck":false,"describe":"详情"},{"action":"update","defaultCheck":false,"describe":"修改"},{"action":"delete","defaultCheck":false,"describe":"删除"}]',
        actionEntitySet: [
          {
            action: 'add',
            describe: '新增',
            defaultCheck: false
          },
          {
            action: 'query',
            describe: '查询',
            defaultCheck: false
          },
          {
            action: 'get',
            describe: '详情',
            defaultCheck: false
          },
          {
            action: 'update',
            describe: '修改',
            defaultCheck: false
          },
          {
            action: 'delete',
            describe: '删除',
            defaultCheck: false
          }
        ],
        actionList: null,
        dataAccess: null
      },
      {
        roleId: 'admin',
        permissionId: 'permission',
        permissionName: '权限管理',
        actions:
          '[{"action":"add","defaultCheck":false,"describe":"新增"},{"action":"get","defaultCheck":false,"describe":"详情"},{"action":"update","defaultCheck":false,"describe":"修改"},{"action":"delete","defaultCheck":false,"describe":"删除"}]',
        actionEntitySet: [
          {
            action: 'add',
            describe: '新增',
            defaultCheck: false
          },
          {
            action: 'get',
            describe: '详情',
            defaultCheck: false
          },
          {
            action: 'update',
            describe: '修改',
            defaultCheck: false
          },
          {
            action: 'delete',
            describe: '删除',
            defaultCheck: false
          }
        ],
        actionList: null,
        dataAccess: null
      },
      {
        roleId: 'admin',
        permissionId: 'role',
        permissionName: '角色管理',
        actions:
          '[{"action":"add","defaultCheck":false,"describe":"新增"},{"action":"get","defaultCheck":false,"describe":"详情"},{"action":"update","defaultCheck":false,"describe":"修改"},{"action":"delete","defaultCheck":false,"describe":"删除"}]',
        actionEntitySet: [
          {
            action: 'add',
            describe: '新增',
            defaultCheck: false
          },
          {
            action: 'get',
            describe: '详情',
            defaultCheck: false
          },
          {
            action: 'update',
            describe: '修改',
            defaultCheck: false
          },
          {
            action: 'delete',
            describe: '删除',
            defaultCheck: false
          }
        ],
        actionList: null,
        dataAccess: null
      },
      {
        roleId: 'admin',
        permissionId: 'table',
        permissionName: '桌子管理',
        actions:
          '[{"action":"add","defaultCheck":false,"describe":"新增"},{"action":"get","defaultCheck":false,"describe":"详情"},{"action":"query","defaultCheck":false,"describe":"查询"},{"action":"update","defaultCheck":false,"describe":"修改"},{"action":"delete","defaultCheck":false,"describe":"删除"}]',
        actionEntitySet: [
          {
            action: 'add',
            describe: '新增',
            defaultCheck: false
          },
          {
            action: 'get',
            describe: '详情',
            defaultCheck: false
          },
          {
            action: 'query',
            describe: '查询',
            defaultCheck: false
          },
          {
            action: 'update',
            describe: '修改',
            defaultCheck: false
          },
          {
            action: 'delete',
            describe: '删除',
            defaultCheck: false
          }
        ],
        actionList: null,
        dataAccess: null
      },
      {
        roleId: 'admin',
        permissionId: 'user',
        permissionName: '用户管理',
        actions:
          '[{"action":"add","defaultCheck":false,"describe":"新增"},{"action":"import","defaultCheck":false,"describe":"导入"},{"action":"get","defaultCheck":false,"describe":"详情"},{"action":"update","defaultCheck":false,"describe":"修改"},{"action":"delete","defaultCheck":false,"describe":"删除"},{"action":"export","defaultCheck":false,"describe":"导出"}]',
        actionEntitySet: [
          {
            action: 'add',
            describe: '新增',
            defaultCheck: false
          },
          {
            action: 'import',
            describe: '导入',
            defaultCheck: false
          },
          {
            action: 'get',
            describe: '详情',
            defaultCheck: false
          },
          {
            action: 'update',
            describe: '修改',
            defaultCheck: false
          },
          {
            action: 'delete',
            describe: '删除',
            defaultCheck: false
          },
          {
            action: 'export',
            describe: '导出',
            defaultCheck: false
          }
        ],
        actionList: null,
        dataAccess: null
      }
    ]
  }

  roleObj.permissions.push({
    roleId: 'admin',
    permissionId: 'support',
    permissionName: '超级模块',
    actions:
      '[{"action":"add","defaultCheck":false,"describe":"新增"},{"action":"import","defaultCheck":false,"describe":"导入"},{"action":"get","defaultCheck":false,"describe":"详情"},{"action":"update","defaultCheck":false,"describe":"修改"},{"action":"delete","defaultCheck":false,"describe":"删除"},{"action":"export","defaultCheck":false,"describe":"导出"}]',
    actionEntitySet: [
      {
        action: 'add',
        describe: '新增',
        defaultCheck: false
      },
      {
        action: 'import',
        describe: '导入',
        defaultCheck: false
      },
      {
        action: 'get',
        describe: '详情',
        defaultCheck: false
      },
      {
        action: 'update',
        describe: '修改',
        defaultCheck: false
      },
      {
        action: 'delete',
        describe: '删除',
        defaultCheck: false
      },
      {
        action: 'export',
        describe: '导出',
        defaultCheck: false
      }
    ],
    actionList: null,
    dataAccess: null
  })

  userInfo.role = roleObj
  return builder(userInfo)
}

const userNav = options => {
  const nav = [
    // dashboard
    {
      path: 'dashboard',
      name: 'dashboard',
      redirect: '/dashboard/workplace',
      component: 'RouteView',
      meta: { title: '仪表盘', icon: 'dashboard' },
      children: [
        {
          path: 'analysis/:pageNo([1-9]\\d*)?',
          name: 'Analysis',
          component: 'Analysis',
          meta: { title: '分析页' }
        },
        // 外部链接
        // {
        //   path: 'https://www.baidu.com/',
        //   name: 'Monitor',
        //   meta: { title: '监控页（外部）', target: '_blank' }
        // },
        {
          path: 'workplace',
          name: 'Workplace',
          component: 'Workplace',
          meta: { title: '工作台' }
        },
        {
          path: 'test-work',
          name: 'TestWork',
          component: 'TestWork',
          meta: { title: '测试功能' }
        }
      ]
    },

    // forms
    {
      path: '/form',
      redirect: '/form/base-form',
      component: 'PageView',
      meta: { title: '表单页', icon: 'form' },
      children: [
        {
          path: '/form/base-form',
          name: 'BaseForm',
          component: 'BasicForm',
          meta: { title: '基础表单' }
        },
        {
          path: '/form/step-form',
          name: 'StepForm',
          component: 'StepForm',
          meta: { title: '分步表单' }
        },
        {
          path: '/form/advanced-form',
          name: 'AdvanceForm',
          component: 'AdvanceForm',
          meta: { title: '高级表单' }
        }
      ]
    },

    // list
    {
      path: '/list',
      name: 'list',
      component: 'PageView',
      redirect: '/list/table-list',
      meta: { title: '列表页', icon: 'table' },
      children: [
        {
          path: '/list/table-list/:pageNo([1-9]\\d*)?',
          name: 'TableListWrapper',
          hideChildrenInMenu: true, // 强制显示 MenuItem 而不是 SubMenu
          component: 'TableList',
          meta: { title: '查询表格' }
        },
        {
          path: '/list/basic-list',
          name: 'BasicList',
          component: 'StandardList',
          meta: { title: '标准列表' }
        },
        {
          path: '/list/card',
          name: 'CardList',
          component: 'CardList',
          meta: { title: '卡片列表' }
        },
        {
          path: '/list/search',
          name: 'SearchList',
          component: 'SearchLayout',
          redirect: '/list/search/article',
          meta: { title: '搜索列表' },
          children: [
            {
              path: '/list/search/article',
              name: 'SearchArticles',
              component: 'SearchArticles',
              meta: { title: '搜索列表（文章）' }
            },
            {
              path: '/list/search/project',
              name: 'SearchProjects',
              component: 'SearchProjects',
              meta: { title: '搜索列表（项目）' }
            },
            {
              path: '/list/search/application',
              name: 'SearchApplications',
              component: 'SearchApplications',
              meta: { title: '搜索列表（应用）' }
            }
          ]
        }
      ]
    },

    // profile
    {
      path: '/profile',
      name: 'profile',
      component: 'RouteView',
      redirect: '/profile/basic',
      meta: { title: '详情页', icon: 'profile' },
      children: [
        {
          path: '/profile/basic',
          name: 'ProfileBasic',
          component: 'ProfileBasic',
          meta: { title: '基础详情页' }
        },
        {
          path: '/profile/advanced',
          name: 'ProfileAdvanced',
          component: 'ProfileAdvanced',
          meta: { title: '高级详情页' }
        }
      ]
    },

    // result
    {
      path: '/result',
      name: 'result',
      component: 'PageView',
      redirect: '/result/success',
      meta: { title: '结果页', icon: 'check-circle-o' },
      children: [
        {
          path: '/result/success',
          name: 'ResultSuccess',
          component: 'ResultSuccess',
          meta: { title: '成功', hiddenHeaderContent: true }
        },
        {
          path: '/result/fail',
          name: 'ResultFail',
          component: 'ResultFail',
          meta: { title: '失败', hiddenHeaderContent: true }
        }
      ]
    },

    // Exception
    {
      path: '/exception',
      name: 'exception',
      component: 'RouteView',
      redirect: '/exception/403',
      meta: { title: '异常页', icon: 'warning' },
      children: [
        {
          path: '/exception/403',
          name: 'Exception403',
          component: 'Exception403',
          meta: { title: '403' }
        },
        {
          path: '/exception/404',
          name: 'Exception404',
          component: 'Exception404',
          meta: { title: '404' }
        },
        {
          path: '/exception/500',
          name: 'Exception500',
          component: 'Exception500',
          meta: { title: '500' }
        }
      ]
    },

    // account
    {
      path: '/account',
      component: 'RouteView',
      redirect: '/account/center',
      name: 'account',
      meta: { title: '个人页', icon: 'user' },
      children: [
        {
          path: '/account/center',
          name: 'center',
          component: 'AccountCenter',
          meta: { title: '个人中心' }
        },
        {
          path: '/account/settings',
          name: 'settings',
          component: 'AccountSettings',
          meta: { title: '个人设置', hideHeader: true },
          redirect: '/account/settings/base',
          hideChildrenInMenu: true,
          children: [
            {
              path: '/account/settings/base',
              name: 'BaseSettings',
              component: 'BaseSettings',
              meta: { title: '基本设置', hidden: true }
            },
            {
              path: '/account/settings/security',
              name: 'SecuritySettings',
              component: 'SecuritySettings',
              meta: { title: '安全设置', hidden: true }
            },
            {
              path: '/account/settings/custom',
              name: 'CustomSettings',
              component: 'CustomSettings',
              meta: { title: '个性化设置', hidden: true }
            },
            {
              path: '/account/settings/binding',
              name: 'BindingSettings',
              component: 'BindingSettings',
              meta: { title: '账户绑定', hidden: true }
            },
            {
              path: '/account/settings/notification',
              name: 'NotificationSettings',
              component: 'NotificationSettings',
              meta: { title: '新消息通知', hidden: true }
            }
          ]
        }
      ]
    },

    // other
    {
      path: '/other',
      name: 'otherPage',
      component: 'PageView',
      meta: { title: '其他组件', icon: 'slack' },
      redirect: '/other/icon-selector',
      children: [
        {
          path: '/other/icon-selector',
          name: 'TestIconSelect',
          component: 'other/IconSelectorView',
          meta: { title: 'IconSelector', icon: 'tool' }
        },
        {
          path: '/other/list',
          component: 'RouteView',
          meta: { title: '业务布局', icon: 'layout' },
          redirect: '/other/list/tree-list',
          children: [
            {
              path: '/other/list/tree-list',
              name: 'TreeList',
              component: 'other/TreeList',
              meta: { title: '树目录表格' }
            },
            {
              path: '/other/list/edit-table',
              name: 'EditList',
              component: 'other/TableInnerEditList',
              meta: { title: '内联编辑表格' }
            },
            {
              path: '/other/list/user-list',
              name: 'UserList',
              component: 'other/UserList',
              meta: { title: '用户列表' }
            },
            {
              path: '/other/list/role-list',
              name: 'RoleList',
              component: 'other/RoleList',
              meta: { title: '角色列表' }
            },
            {
              path: '/other/list/system-role',
              name: 'SystemRole',
              component: 'role/RoleList',
              meta: { title: '角色列表2' }
            },
            {
              path: '/other/list/permission-list',
              name: 'PermissionList',
              component: 'other/PermissionList',
              meta: { title: '权限列表' }
            }
          ]
        }
      ]
    },
    //参考demo
    {
      path: '/demo',
      name: 'demo',
      component: 'PageView',
      meta: { title: '参考demo组件', icon: 'slack' },
      redirect: '/demo/tabList',
      children: [
        {
          path: '/demo/bmap',
          name: 'demoBmap',
          component: 'demoPage/bMap',
          meta: { title: '百度地图' }
        },
        {
          path: '/demo/tabList',
          name: 'demoTabList',
          component: 'demoPage/tabList',
          meta: { title: '列表' }
        },
        {
          path: '/demo/treeList',
          name: 'treeList',
          component: 'demoPage/treeList',
          meta: { title: '树形表格' }
        },
        {
          path: '/demo/demoForm',
          name: 'demoForm',
          component: 'demoPage/demoForm',
          meta: { title: '表单' }
        }
      ]
    }
  ]
  const json = builder(nav)
  console.log('json', json)
  return json
}

Mock.mock(/\/api\/user\/info/, 'get', info)
Mock.mock(/\/api\/user\/nav/, 'get', userNav)
