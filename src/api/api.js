import axios from 'axios'
let base = ''
export const ReginUser = params => {
  return axios.post(`${base}/regin`, params)
}
export const LoginUser = params => {
  return axios.post(`${base}/login`, params)
}
