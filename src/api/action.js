import request from 'utils/request'

// 获取公司列表
export function login(username, password, remember) {
  return request({
    url: '/action/login',
    method: 'post',
    data: {
      username,
      password,
      remember
    }
  })
}

export function getUserInfo() {
  return request({
    url: '/action/userinfo',
    method: 'get'
  })
}

export function logout() {
  return request({
    url: '/action/logout',
    method: 'post'
  })
}
