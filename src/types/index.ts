interface ApiCrmResponse<T> {
    result: T
}

interface SelectOption {
    label: string
    value: string
    [key: string]: string
}

export type {
    ApiCrmResponse,
    SelectOption
}