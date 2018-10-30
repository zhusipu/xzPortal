import request from 'utils/request'

// 获取个人信息
export function getUserInfo() {
  return request({
    url: '/SelfService/getUserInfo',
    method: 'get'
  })
}
