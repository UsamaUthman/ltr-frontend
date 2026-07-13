import axios from 'axios'
import { appEnv } from '@/config/env'
import { toApiError } from './api-error'

export const httpClient = axios.create({
  baseURL: appEnv.apiBaseUrl || undefined,
  timeout: 15_000,
  headers: {
    Accept: 'application/json',
  },
})

httpClient.interceptors.request.use((config) => {
  // Add authenticated headers here after a real auth/session source exists.
  return config
})

httpClient.interceptors.response.use(
  (response) => response,
  (error: unknown) => Promise.reject(toApiError(error)),
)
