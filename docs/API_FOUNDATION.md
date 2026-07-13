# API foundation status

Phase 1E prepares the frontend for a future backend without connecting to one.

- `QueryProvider` is mounted at the application root with dashboard-friendly defaults.
- `VITE_API_BASE_URL` is optional and may remain empty until the backend is available.
- The centralized Axios client and `apiClient` mutator are ready for generated clients.
- Dashboard and landing routes still read their existing local demo data directly.
- No endpoint hooks, generated models, authentication headers, or network requests exist yet.

## Orval activation gate

`orval.config.ts` is a dormant template targeting `./openapi/openapi.json`. Generation must wait until:

1. The real OpenAPI JSON/spec is available.
2. The project runtime can use a current audited Orval release. At setup time, current Orval required Node 22, while older Node 20 releases introduced unacceptable transitive audit findings.
3. Orval is installed as a development dependency and `api:generate` / `api:watch` scripts are added.

Do not create `src/lib/api/generated` manually. Orval should own that directory after the activation gate is met.
