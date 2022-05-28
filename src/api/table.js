import axios from 'axios'

export function getBillList(params) {
  return service2({
    url: '/bill/getBillList',
    method: 'post',
    data: params
  })
}
