import request from 'utils/request'

// 获取消息和待办
export function getMessage(page, pageSize, type = '0', title = '', sender = '', postTime = '', todoStatus = '', dept = '', msgSrc = '', comp = '') {
  return request({
    url: '/Message/getMessage',
    method: 'get',
    params: {
      page,
      pageSize,
      type,
      title,
      sender,
      postTime,
      todoStatus,
      dept,
      msgSrc,
      comp
    }
  })
}

// 获取消息中心，消息来源数据
export function getMsgSrcList() {
  return request({
    url: '/Message/getMsgSrcList',
    method: 'get'
  })
}

// 获取消息和待办各系统的消息数量
export function getMsgCount(typeId = 0) {
  return request({
    url: '/Message/getMsgCount',
    method: 'get',
    params: {
      typeId
    }
  })
}
