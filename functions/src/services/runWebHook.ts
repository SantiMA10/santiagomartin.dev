import axios from 'axios'

export const runWebHook = (url: string) => {
  return axios.post(url)
}
