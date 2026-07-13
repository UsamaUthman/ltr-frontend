import type { AxiosRequestConfig } from 'axios'
import { httpClient } from './http-client'

/**
 * Shared Orval-compatible Axios mutator. It is intentionally unused until a
 * real OpenAPI specification and backend are available.
 */
export async function apiClient<TResponse>(
  config: AxiosRequestConfig,
  options?: AxiosRequestConfig,
): Promise<TResponse> {
  const response = await httpClient.request<TResponse>({
    ...config,
    ...options,
    headers: {
      ...config.headers,
      ...options?.headers,
    },
  })

  return response.data
}

export default apiClient
