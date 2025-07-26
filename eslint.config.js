// eslint.config.js
import { defineConfig } from 'eslint/config'
import reactPlugin from 'eslint-plugin-react'
import typescriptPlugin from '@typescript-eslint/eslint-plugin'
import tsParser from '@typescript-eslint/parser'
import prettierConfig from 'eslint-config-prettier'

export default defineConfig([
    // Base configuration for all JavaScript files
    {
        files: ['**/*.js', '**/*.jsx', '**/*.ts', '**/*.tsx'],
        ignores: ['**/node_modules/**', '**/dist/**', '**/build/**'],
        rules: {
            semi: 'error',
            'no-console': 'warn',
        },
    },

    // TypeScript specific rules
    {
        files: ['**/*.ts', '**/*.tsx'],
        languageOptions: {
            parser: tsParser,
            parserOptions: {
                project: './tsconfig.json',
                ecmaVersion: 'latest',
                sourceType: 'module',
            },
        },
        plugins: {
            '@typescript-eslint': typescriptPlugin,
        },
        rules: {
            'no-unused-vars': 'off',
            '@typescript-eslint/no-unused-vars': 'warn',
            '@typescript-eslint/explicit-function-return-type': 'off',
            '@typescript-eslint/explicit-module-boundary-types': 'off',
        },
    },

    // React specific rules
    {
        files: ['**/*.jsx', '**/*.tsx'],
        plugins: {
            react: reactPlugin,
        },
        languageOptions: {
            parserOptions: {
                ecmaFeatures: {
                    jsx: true,
                },
            },
        },
        rules: {
            'react/react-in-jsx-scope': 'off',
            'react/jsx-uses-react': 'off',
            'react/prop-types': 'off',
        },
        settings: {
            react: {
                version: 'detect',
            },
        },
    },

    // Integration with Prettier (must be last)
    prettierConfig,
])
