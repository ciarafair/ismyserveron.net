import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

export default defineConfig({
	"build": {
		"assetsDir": "./assets",
		"copyPublicDir": true,
		"manifest": true,
		"outDir": "./dist",
		"rollupOptions": {
			"input": "./src/index.tsx"
		}
	},
	"plugins": [react()],
	"publicDir": "./public",
	"root": "./",
	"server": {
		"host": "localhost",
		"port": 7676
	}
});
