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
    url: '/action/getUserInfo',
    method: 'get'
  })
}

export function authorizeUrl(returnUrl) {
  return request({
    url: '/action/authorizeUrl',
    method: 'get',
    params: {
      returnUrl
    }
  })
}

export function logout(returnUrl) {
  return request({
    url: '/action/logout',
    method: 'post',
    data: {
      returnUrl
    }
  })
}
