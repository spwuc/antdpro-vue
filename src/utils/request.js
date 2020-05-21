import Vue from 'vue'
import axios from 'axios'
import store from '@/store'
import notification from 'ant-design-vue/es/notification'
import Message from 'ant-design-vue/es/message'
import { VueAxios } from './axios'
import { ACCESS_TOKEN } from '@/store/mutation-types'
// 创建 axios 实例
const service = axios.create({
  baseURL: process.env.VUE_APP_API_BASE_URL, // api base_url
  timeout: 60000, // 请求超时时间
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded;'
  }
})

const err = error => {
  console.log(error.response)
  if (error.response) {
    const { status } = error.response
    const data = error.response.data
    const token = Vue.ls.get(ACCESS_TOKEN)

    if (status == '404') {
      window.router.push('/404')
    } else if (status == '403') {
      window.router.push('/403')
    } else if (status == '500') {
      window.router.push('/500')
    } else if (status === 401) {
      debugger
      if (token) {
        store.dispatch('Logout').then(() => {
          setTimeout(() => {
            window.location.reload()
          }, 1500)
        })
      }
      notification.destroy()
      return notification.error({
        message: '未经授权',
        description: '权限校验失败'
      })
    } else {
      notification.destroy()
      return notification.error({
        message: 'Forbidden',
        description: data.message
      })
    }
  }
  return Promise.reject(error)
}
// request interceptor
service.interceptors.request.use(config => {
  const token = Vue.ls.get(ACCESS_TOKEN)
  if (token) {
    config.headers['Authorization'] = token // 让每个请求携带自定义 token 请根据实际情况自行修改
  }

  if (config.url.split('/')[config.url.split('/').length - 1].indexOf('Export') == 0) {
    config.responseType = 'arraybuffer'
  }
  store.state.loadding = true
  console.log(config)

  return config
}, err)

// response interceptor
service.interceptors.response.use(response => {
  store.state.loadding = false
  if (response.headers['content-type'] == 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet') {
    let name = response.headers['content-disposition'].split("filename*=UTF-8''")[1]
    return {
      name: name,
      blob: response.data
    }
  } else {
    console.log(response)
    const res = response.data
    // 返回状态码进行管理数据
    if (res.errorCode != '000000') {
      Message.destroy()
      Message.error(res.message || 'Error', 5 * 1000)

      if (res.errorCode == '000001') {
        store.dispatch('Logout').then(() => {
          window.router.push(`/user/login`)
        })
      }
      return Promise.reject(new Error(res.message || 'Error'))
    }
    return res
  }
}, err)

const installer = {
  vm: {},
  install(Vue) {
    Vue.use(VueAxios, service)
  }
}

export { installer as VueAxios, service as axios }

// 请求路径配置
export const $http = {
  login: '/Account/Login', //账户登录

  /**
   * Post 统一请求
   * @param (String) url 请求地址
   * @param (Object) params 请求参数
   */
  post: (url, params = {}) => {
    return service({
      url: url,
      method: 'post',
      data: params
    })
  }
}
