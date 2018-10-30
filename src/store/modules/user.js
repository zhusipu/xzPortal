import { login, logout, getUserInfo } from 'api/action'
import { getToken, setToken, removeToken } from 'utils/auth'

const user = {
  state: {
    token: '',
    name: '',
  },

  mutations: {
    SET_TOKEN: (state, token) => {
      state.token = token
    },
    SET_NAME: (state, name) => {
      state.name = name
    }
  },

  actions: {
    // 用户名登录
    Login({ commit }, userInfo) {
      const username = userInfo.user.trim()
      return new Promise((resolve, reject) => {
        login(username, userInfo.password, userInfo.remember).then(data => {
          if (data.code > 0) {
            commit('SET_TOKEN', data.data.token)
            setToken(data.data.token)
            resolve(data)
          } else {
            reject(data.msg)
          }
        }).catch(error => {
          reject(error)
        })
      })
    },

    // 获取用户信息
    GetUserInfo({ commit, state }) {
      return new Promise((resolve, reject) => {
        getUserInfo().then(data => {
          if (data.code > 0) {
            commit('SET_NAME', data.data.user.name)
            commit('SET_TOKEN', data.data.token)
            setToken(data.data.token)
            resolve(data)
          } else {
            reject(data.msg)
          }
        }).catch(error => {
          reject(error)
        })
      })
    },

    // 第三方验证登录
    // LoginByThirdparty({ commit, state }, code) {
    //   return new Promise((resolve, reject) => {
    //     commit('SET_CODE', code)
    //     loginByThirdparty(state.status, state.email, state.code).then(response => {
    //       commit('SET_TOKEN', response.data.token)
    //       setToken(response.data.token)
    //       resolve()
    //     }).catch(error => {
    //       reject(error)
    //     })
    //   })
    // },

    // 登出
    LogOut({ commit, state }) {
      return new Promise((resolve, reject) => {
        logout().then(() => {
          commit('SET_TOKEN', '')
          removeToken()
          resolve()
        }).catch(error => {
          reject(error)
        })
      })
    },

    // 前端 登出
    FedLogOut({ commit }) {
      return new Promise((resolve, reject) => {
        logout(window.location.href).then((data) => {
          commit('SET_TOKEN', '')
          commit('SET_TOKEN', '')
          removeToken()
          resolve()
          if (data.code > 0) {
            window.location.href = data.data.logoutUrl
          }
        }).catch(error => {
          reject(error)
        })
      })
    },

    // 动态修改权限
    ChangeRoles({ commit, dispatch }, role) {
      return new Promise(resolve => {
        commit('SET_TOKEN', role)
        setToken(role)
        getUserInfo(role).then(response => {
          const data = response.data
          commit('SET_ROLES', data.roles)
          commit('SET_NAME', data.name)
          commit('SET_AVATAR', data.avatar)
          commit('SET_INTRODUCTION', data.introduction)
          dispatch('GenerateRoutes', data) // 动态修改权限后 重绘侧边菜单
          resolve()
        })
      })
    }
  }
}

export default user