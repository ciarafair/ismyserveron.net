import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

export default defineConfig({
	"build": {
		"assetsDir": "./public",
		"manifest": true,
		"outDir": "./dist"
	},
	"envDir": "./env",
	"plugins": [react()],
	"publicDir": "./public",
	"root": "./",
	"server": {
		"host": "localhost",
		"port": 7676
	}
});
