import request from 'utils/request'

// 获取有权限查看通讯录的部门
export function getPrivilegedDept() {
  return request({
    url: '/Addressbook/getPrivilegedDept',
    method: 'get'
  })
}

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
