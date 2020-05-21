import { asyncRouterMap, constantRouterMap } from '@/config/router.config'
import * as loginService from '@/api/login'
import { generatorDynamicRouter } from '@/router/generator-routers'

// const generatorDynamicRouter = () => {
//   return new Promise((resolve, reject) => {
//     loginService
//       .getCurrentUserNav()
//       .then(res => {
//         const { result } = res
//         result.push({
//           path: '*',
//           redirect: '/404',
//           hidden: true
//         })
//         resolve(result)
//       })
//       .catch(err => {
//         reject(err)
//       })
//   })
// }
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
          console.log(routers)
          commit('SET_ROUTERS', routers)
          // commit('SET_ROUTERS', asyncRouterMap)
          resolve()
        })
        // generatorDynamicRouter().then(routers => {
        //   // TODO
        //   console.log('---------generatorDynamicRouter----------')
        //   console.log(
        //     constantRouterMap.concat(
        //       routers.concat([
        //         {
        //           path: '*',
        //           redirect: '/404',
        //           hidden: true
        //         }
        //       ])
        //     )
        //   )
        //   console.log(asyncRouterMap)
        //   commit('SET_ROUTERS', asyncRouterMap)
        //   resolve()
        // })
      })
    }
  }
}

export default permission
