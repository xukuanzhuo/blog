import request from 'utils/request.js'

export function getBlogIssues (params) {
  return request({
    url: '/repos/xukuanzhuo/xukuanzhuo.github.io/issues',
    method: 'get',
    params: params
  })
}

export function getBlogIssue (number) {
  return request({
    url: `/repos/xukuanzhuo/xukuanzhuo.github.io/issues/${number}`,
    method: 'get'
  })
}
