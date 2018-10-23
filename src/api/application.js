import request from '@/assets/js/request'

export function getAppList(typeId = 1) {
  return request({
    url: '/Application/getList',
    method: 'get',
    params: {
      typeId
    }
  })
}
