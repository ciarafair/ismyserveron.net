// eslint.config.js
import { defineConfig } from "eslint/config";

export default defineConfig([
	{
		"env": {
			"browser": true,
			"node": true
		},
		"extends": [
			"eslint:all"
		],
		"root": true,
		"rules": {
			"function-call-argument-newline": "off",
			"max-len": "off",
			"no-console": "off",
			"no-tabs": "off",
			"no-underscore-dangle": "off",
			"object-curly-spacing": "off",
			"one-var": "off",
			"padded-blocks": "off",
			"spaced-comment": "off",
			"indent": ["error", "tab"],
			"no-trailing-spaces": "error"
		},
		"settings": {
			"import/resolver": {
				"node": {
					"extensions": [
						".js",
						".jsx",
						".ts",
						".tsx"
					]
				}
			}
		},
		"plugins": [
		],
		"parserOptions": {
			"project": "./tsconfig.json",
			"ecmaVersion": "latest",
			"sourceType": "module"
		}
	}
]);
