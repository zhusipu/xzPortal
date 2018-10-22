import request from '@/assets/js/request'

// 获取公司列表
export function getCompList() {
  return request({
    url: '/Department/getCompList',
    method: 'get'
  })
}
