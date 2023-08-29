import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

export default defineConfig({
	"build": {
		"copyPublicDir": true,
		"manifest": true,
		"outDir": "./dist",
		"rollupOptions": {
			"input": "./src/index.tsx"
		}
	},
	"plugins": [react()],
	"preview": {
		"host": "localhost",
		"port": 8002
	},
	"publicDir": "./public",
	"root": "./",
	"server": {
		"host": "localhost",
		"port": 8001
	}
});
