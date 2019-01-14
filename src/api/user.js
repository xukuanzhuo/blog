import request from 'utils/request.js'

export function getUser (userName) {
  return request({
    url: `/users/${userName}`,
    method: 'get'
  })
}
