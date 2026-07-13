import type { AxiosRequestConfig } from 'axios'

export type ApiRequestOptions = AxiosRequestConfig

export type ApiProblemDetails = {
  message?: string
  code?: string
  errors?: Record<string, string[]>
  [key: string]: unknown
}

export type PaginatedResponse<TItem> = {
  items: TItem[]
  page: number
  pageSize: number
  total: number
}
