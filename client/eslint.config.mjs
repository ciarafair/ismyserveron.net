import { fixupConfigRules, fixupPluginRules } from '@eslint/compat'
import react from 'eslint-plugin-react'
import typescriptEslint from '@typescript-eslint/eslint-plugin'
import reactHooks from 'eslint-plugin-react-hooks'
import globals from 'globals'
import tsParser from '@typescript-eslint/parser'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import js from '@eslint/js'
import { FlatCompat } from '@eslint/eslintrc'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const compat = new FlatCompat({
	baseDirectory: __dirname,
	recommendedConfig: js.configs.recommended,
	allConfig: js.configs.all,
})

export default [
	...fixupConfigRules(
		compat.extends(
			'plugin:react/recommended',
			'plugin:@typescript-eslint/recommended'
		)
	),
	{
		plugins: {
			react: fixupPluginRules(react),
			'@typescript-eslint': fixupPluginRules(typescriptEslint),
			'react-hooks': fixupPluginRules(reactHooks),
		},

		languageOptions: {
			globals: {
				...globals.browser,
				...globals.jest,
			},

			parser: tsParser,
			ecmaVersion: 12,
			sourceType: 'module',
			parserOptions: {
				ecmaFeatures: {
					jsx: true,
				},
			},
		},

		settings: {
			'import/resolver': {
				typescript: {},
			},
		},

		rules: {
			'react-hooks/rules-of-hooks': 'error',
			'react-hooks/exhaustive-deps': 'warn',
			'import/prefer-default-export': 'off',
			'react/prop-types': 'off',
		},
	},
]