import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { env } from 'node:process'

const getBase = () => {
  if (env.VITE_BASE_PATH) return env.VITE_BASE_PATH

  const repoName = env.GITHUB_REPOSITORY?.split('/')[1]
  if (!repoName || repoName.endsWith('.github.io')) return '/'

  return `/${repoName}/`
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: getBase(),
})
