import axios from 'axios'
import store from '@/store'
import { Modal } from 'iview'
import { getToken } from 'utils/auth'
import { authorizeUrl } from 'api/action'

// create an axios instance
const service = axios.create({
  baseURL: process.env.BASE_API, // api 的 base_url
  timeout: 5000 // request timeout
})

// response interceptor
service.interceptors.response.use(
  config => {
    // Do something before request is sent
    if (store.getters.token) {
      // 让每个请求携带token-- ['X-Token']为自定义key 请根据实际情况自行修改
      config.headers['X-Token'] = getToken()
    }
    return config
  }
)

service.interceptors.response.use(
  response => {
    const res = response.data
    // 50014:Token 过期了;
    if (res.code === 403) {
      Modal.confirm({
        title: '提示',
        content: res.msg, 
        okText: '重新登录',
        cancelText: '取消',
        type: 'warning',
        onOk: () => {
          store.dispatch('FedLogOut').then(() => {
            authorizeUrl(window.location.href).then((data) => {
              if (data.code === 1) {
                window.location.href = data.data.authorizeUrl
              }
            })
          })
        }
      })
      return Promise.reject('error.axios')
    } else if (res.code === 50014) { 
      authorizeUrl(window.location.href).then((data) => {
        if (data.code === 1) {
          window.location.href = data.data.authorizeUrl
        }
      })
    } else {
      return response.data
    }
  },
  /**
   * 下面的注释为通过在response里，自定义code来标示请求状态
   * 当code返回如下情况则说明权限有问题，登出并返回到登录页
   * 如想通过 xmlhttprequest 来状态码标识 逻辑可写在下面error中
   * 以下代码均为样例，请结合自生需求加以修改，若不需要，则可删除
   */
  // response => {
  //   const res = response.data
  //   if (res.code !== 20000) {
  //     Message({
  //       message: res.message,
  //       type: 'error',
  //       duration: 5 * 1000
  //     })
  //     // 50008:非法的token; 50012:其他客户端登录了;  50014:Token 过期了;
  //     if (res.code === 50008 || res.code === 50012 || res.code === 50014) {
  //       // 请自行在引入 MessageBox
  //       // import { Message, MessageBox } from 'element-ui'
  //       MessageBox.confirm('你已被登出，可以取消继续留在该页面，或者重新登录', '确定登出', {
  //         confirmButtonText: '重新登录',
  //         cancelButtonText: '取消',
  //         type: 'warning'
  //       }).then(() => {
  //         store.dispatch('FedLogOut').then(() => {
  //           location.reload() // 为了重新实例化vue-router对象 避免bug
  //         })
  //       })
  //     }
  //     return Promise.reject('error')
  //   } else {
  //     return response.data
  //   }
  // },
  error => {
    console.log('err' + error) // for debug
    Message.error(error.message)
    return Promise.reject(error)
  }
)

export default service
