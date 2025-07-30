import dotenv from "dotenv";

import { defineConfig } from "mobx-tanstack-query-api/cli";
import { fileURLToPath } from "url";
import path from "path";

dotenv.config()

const __filename = fileURLToPath(import.meta.url); 
const __dirname = path.dirname(__filename);

const EXCLUDED_PATHS = [
  '/healthz',
  '/pingdb',
  '/ping'
]

export default defineConfig({
  // input: path.resolve(__dirname, './openapi.yaml'),
  input: process.env.SWAGGER_API_URL,
  output: path.resolve(__dirname, './src/shared/api/__generated__'),
  fetchSchemaRequestOptions: {
    headers: process.env.GITLAB_TOKEN ? {
      'PRIVATE-TOKEN': process.env.GITLAB_TOKEN
    } : undefined
  },
  httpClient: {
    exportName: 'httpClient',
    path: '@/shared/config'
  },
  queryClient: {
    exportName: 'queryClient',
    path: '@/shared/config'
  },
  endpoint: 'builtin',
  filterEndpoints: (endpoint) => {
    return EXCLUDED_PATHS.every(excludedPath => !endpoint.raw.route.startsWith(excludedPath))
  },
  // namespace: 'collectedName',
  // groupBy: 'tag',
  removeUnusedTypes: true,
  outputType: 'one-endpoint-per-file',
  // groupBy: 'tag-1',
  // groupBy: 'path-segment',
  // groupBy: 'path-segment-1',
  // filterEndpoints: () => true,
  // groupBy:  route => {
  //   const api = apis.find(api => api.urls.some(url => route.raw.route.startsWith(url)))
  //   return api?.name ?? 'other'
  // },
  // formatExportGroupName: (groupName) => `${groupName}Api`,
})