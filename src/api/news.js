import request from '@/assets/js/request'

// 获取轮播图新闻
export function getPicNews() {
  return request({
    url: '/News/getPicNews',
    method: 'get'
  })
}

// 获取企业新闻
export function getNews(page, pageSize, title = '', creator = '', createTime = '', dept = '', comp = '') {
  return request({
    url: '/News/getNews',
    method: 'get',
    params: {
      page,
      pageSize,
      title,
      creator,
      createTime,
      dept,
      comp
    }
  })
}

// 获取新闻详情
export function getNewsDetail(id) {
  return request({
    url: '/News/getNewsDetail',
    method: 'get',
    params: {
      id
    }
  })
}
