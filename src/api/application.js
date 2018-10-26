import request from 'utils/request'

export function getAppList(typeId = 1) {
  return request({
    url: '/Application/getList',
    method: 'get',
    params: {
      typeId
    }
  })
}

// 修改个人的应用现实排序
export function changeSort(data) {
  return request({
    url: '/Application/changeSort',
    method: 'post',
    data: {
      data
    }
  })
}
