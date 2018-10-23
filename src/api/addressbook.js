import request from '@/assets/js/request'

// 获取通讯录
export function getAddressbook(page, pageSize, dept = '', empNo = '', empName = '', phone = '') {
  return request({
    url: '/Addressbook/getAddressbook',
    method: 'get',
    params: {
      page,
      pageSize,
      dept,
      empNo,
      empName,
      phone
    }
  })
}
