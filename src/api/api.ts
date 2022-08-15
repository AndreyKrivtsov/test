import axios from "axios"

axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';

const api = axios.create({
    baseURL: 'https://crm.3nt.ru/rest/2471/xjzz2y1hqdrdhyiq/',
    timeout: 1000,
    headers: {'X-Custom-Header': 'foobar'},
    withCredentials: true,
})

export async function getOrders() {
    return api.post('crm.item.list', {
        entityTypeId: 140,
        select: ["id", "title"],
        filter: {
            ufCrm6IntConsumer: 403,
        }
    })
}

export async function putOrder() {
    return api.post('crm.item.add', {
        entityTypeId: 140,
        fields: {
            ufCrm6Specification: {
                '0': ['fileName', 'base64Image'],
            },
            ufCrm6Description: '',
            ufCrm6IntConsumer: 403
        }
    })
}