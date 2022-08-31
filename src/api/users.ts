import api from './api'
import type { ApiCrmResponse } from '@/types'

interface User {
    id: string
}

export type Users = User[]

export async function getUser(phone: string) {
    const result = await api.post<ApiCrmResponse<Users>>('user.search', {
        filter: {
            PERSONAL_PHONE: phone,
            ADMIN_MODE: 'True',
        }
    })
    return result.data.result
}