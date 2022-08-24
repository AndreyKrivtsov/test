import api from './api'

export async function getOrders() {
    return await api.post('crm.item.list', {
        entityTypeId: 140,
        select: ['id', 'title'],
        filter: {
            ufCrm6IntConsumer: 403,
        }
    })
}

export async function putOrder(description) {
    return await api.post('crm.item.add', {
        entityTypeId: 140,
        fields: {
            ufCrm6Specification: {
                '0': ['fileName', 'base64Image'],
            },
            ufCrm6Description: description,
            ufCrm6IntConsumer: 403
        }
    })
}