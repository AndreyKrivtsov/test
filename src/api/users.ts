import api from './api'
import type { ApiCrmResponse } from '@/types'

export interface User {
    id: string
}

export async function getUser(phone: string) {
    const result = await api.post<ApiCrmResponse<User[]>>('user.search', {
        filter: {
            PERSONAL_PHONE: phone,
            ADMIN_MODE: 'True',
        }
    })
    return result.data.result
}