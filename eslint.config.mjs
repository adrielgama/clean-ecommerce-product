import { dirname } from 'path'
import { fileURLToPath } from 'url'
import { FlatCompat } from '@eslint/eslintrc'
import simpleImportSort from 'eslint-plugin-simple-import-sort'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const compat = new FlatCompat({
  baseDirectory: __dirname,
})

const eslintConfig = [
  ...compat.config({
    extends: ['next/core-web-vitals', 'next/typescript'],
  }),
  {
    plugins: {
      'simple-import-sort': simpleImportSort,
    },
    rules: {
      '@typescript-eslint/no-unused-vars': 'off',
      '@typescript-eslint/no-explicit-any': 'off',
      'simple-import-sort/imports': [
        'error',
        {
          groups: [
            // Side effect imports.
            ['^\\u0000'],
            // React, React DOM, Next.js specific imports
            ['^react$', '^react-dom$', '^next(/.*)?$'],
            // Node.js built-in modules.
            ['^node:'],
            // External packages.
            ['^@?\\w'],
            // Internal aliases (assuming @/ is your primary alias).
            ['^@/'],
            // Relative parent imports.
            ['^\\.\\.(?!/?$)', '^\\.\\./?$'],
            // Relative sibling and current directory imports.
            ['^\\./(?=.*/)(?!/?$)', '^\\.(?!/?$)', '^\\./?$'],
          ],
        },
      ],
      'simple-import-sort/exports': 'error',
    },
  },
]

export default eslintConfig
