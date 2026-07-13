import axios from 'axios'
import type { ApiProblemDetails } from './types'

type ApiErrorOptions<TDetails> = {
  status?: number
  code?: string
  details?: TDetails
  cause?: unknown
}

export class ApiError<TDetails = ApiProblemDetails> extends Error {
  readonly status?: number
  readonly code?: string
  readonly details?: TDetails

  constructor(message: string, options: ApiErrorOptions<TDetails> = {}) {
    super(message, { cause: options.cause })
    this.name = 'ApiError'
    this.status = options.status
    this.code = options.code
    this.details = options.details
  }
}

function getErrorMessage(details: unknown, fallback: string) {
  if (
    details &&
    typeof details === 'object' &&
    'message' in details &&
    typeof details.message === 'string'
  ) {
    return details.message
  }

  return fallback
}

export function toApiError(error: unknown) {
  if (error instanceof ApiError) return error

  if (axios.isAxiosError<ApiProblemDetails>(error)) {
    const details = error.response?.data
    return new ApiError(getErrorMessage(details, error.message || 'API request failed'), {
      status: error.response?.status,
      code: details?.code ?? error.code,
      details,
      cause: error,
    })
  }

  return new ApiError(error instanceof Error ? error.message : 'Unexpected API error', {
    cause: error,
  })
}
