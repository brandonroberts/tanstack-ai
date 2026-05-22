import { defineConfig, mergeConfig } from 'vitest/config'
import { tanstackViteConfig } from '@tanstack/vite-config'
import packageJson from './package.json'

const config = defineConfig({
  test: {
    name: packageJson.name,
    dir: './',
    watch: false,
    globals: true,
    environment: 'node',
    include: ['tests/**/*.test.ts'],
    coverage: {
      provider: 'v8',
      reporter: ['text', 'json', 'html', 'lcov'],
      exclude: [
        'node_modules/',
        'dist/',
        'tests/',
        'scripts/',
        '**/*.test.ts',
        '**/*.config.ts',
        '**/*.gen.ts',
      ],
      include: ['src/**/*.ts'],
    },
  },
})

// The schemas package ships per-provider subpath barrels. Each entry must be a
// real source file so vite emits a separate chunk consumers can deep-import.
export default mergeConfig(
  config,
  tanstackViteConfig({
    entry: [
      './src/index.ts',
      './src/schemas.ts',
      './src/zod.ts',
      './src/openai-strict.ts',
    ],
    srcDir: './src',
    cjs: false,
  }),
)
