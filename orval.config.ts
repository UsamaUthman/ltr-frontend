// Dormant template: install a Node-compatible, audited Orval release before use.
// Do not run generation until ./openapi/openapi.json contains the real backend spec.
export default {
  ltrApi: {
    input: {
      target: './openapi/openapi.json',
    },
    output: {
      target: './src/lib/api/generated/endpoints.ts',
      schemas: './src/lib/api/generated/models',
      client: 'react-query',
      clean: true,
      override: {
        mutator: {
          path: './src/lib/api/api-client.ts',
          name: 'apiClient',
        },
      },
    },
  },
}
