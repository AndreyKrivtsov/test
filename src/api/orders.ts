import api from './api'
import type { ApiCrmResponse } from '@/types'
import type { User } from '@/api/users'

interface OrderResponse {
    item: {
        id: string
    }
}

export async function getOrders() {
    const result = await api.post<ApiCrmResponse<OrderResponse>>('crm.item.list', {
        entityTypeId: 140,
        select: ['id', 'title'],
        filter: {
            ufCrm6IntConsumer: 403,
        }
    })
    return result.data.result
}

export async function putOrder(description: string, userId: string | User[]) {
    let userIds
    if (typeof userId === 'string') {
        userIds = [userId]
    } else {
        userIds = userId
    }

    const result = await api.post<ApiCrmResponse<OrderResponse>>('crm.item.add', {
        entityTypeId: 140,
        fields: {
            ufCrm6Specification: {
                '0': ['fileName', 'base64Image'],
            },
            ufCrm6Description: description,
            ufCrm6IntConsumer: 403,
            contact_ids: userIds
        }
    })
    return result.data.result.item
}