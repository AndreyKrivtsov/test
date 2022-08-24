import axios from 'axios'

const baseUrl = 'https://crm.3nt.ru/rest/2471/xjzz2y1hqdrdhyiq/'

// axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*'

const api = axios.create({
    baseURL: baseUrl,
    timeout: 1000,
    // headers: { 'X-Custom-Header': 'foobar' },
    // withCredentials: true,
})

export default api