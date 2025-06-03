import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";
import { defineConfig } from "eslint/config";


export default defineConfig([
	{ files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"], plugins: { js }, extends: ["js/recommended"] },
	{ files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"], languageOptions: { globals: globals.browser } },
	tseslint.configs.recommended,
	pluginReact.configs.flat.recommended,

	{
		rules: {
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
		env: {
			"node": true,
		},
	}
]);
