import api from './api'
import type { ApiCrmResponse } from '@/types'

interface Contact {
    id: string
}

type Contacts = Contact[]

interface UserData {
    name: string
    lastName: string
    phone: string
}

export async function getContact(phone: string): Promise<Contacts> {
    const result = await api.post<ApiCrmResponse<Contacts>>('crm.contact.list', {
        filter: { 'PHONE': phone },
        select: [ 'ID']
    })
    return result.data.result
}

export async function addContact(userData: UserData): Promise<Contacts> {
    const result = await api.post<ApiCrmResponse<Contacts>>('crm.contact.add', {
        fields:
            {
                NAME: userData.name,
                LAST_NAME: userData.lastName,
                OPENED: 'Y',
                ASSIGNED_BY_ID: 2426,
                TYPE_ID: 'CLIENT',
                SOURCE_ID: 7,
                'PHONE': [ { 'VALUE': userData.phone, 'VALUE_TYPE': 'WORK' } ]
            }
    })
    return result.data.result
}