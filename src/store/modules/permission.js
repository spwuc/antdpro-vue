import { asyncRouterMap, constantRouterMap } from '@/config/router.config'
import * as loginService from '@/api/login'
import { generatorDynamicRouter } from '@/router/generator-routers'

const permission = {
  state: {
    routers: constantRouterMap,
    addRouters: []
  },
  mutations: {
    SET_ROUTERS: (state, routers) => {
      state.addRouters = routers
      state.routers = constantRouterMap.concat(routers)
    }
  },
  actions: {
    GenerateRoutes({ commit }, data) {
      return new Promise(resolve => {
        generatorDynamicRouter().then(routers => {
          // TODO
          // commit('SET_ROUTERS', routers)
          commit('SET_ROUTERS', asyncRouterMap)
          resolve()
        })
      })
    }
  }
}

export default permission
