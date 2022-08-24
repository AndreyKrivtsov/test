import api from './api'

interface OrderResponse {
    [key: string]: string
}

export async function getOrders() {
    const result = await api.post<OrderResponse>('crm.item.list', {
        entityTypeId: 140,
        select: ['id', 'title'],
        filter: {
            ufCrm6IntConsumer: 403,
        }
    })
    return result.data
}

export async function putOrder(description: string) {
    const result = await api.post<OrderResponse>('crm.item.add', {
        entityTypeId: 140,
        fields: {
            ufCrm6Specification: {
                '0': ['fileName', 'base64Image'],
            },
            ufCrm6Description: description,
            ufCrm6IntConsumer: 403
        }
    })
    return result.data
}