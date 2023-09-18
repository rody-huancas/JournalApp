import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from "path";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "src": path.resolve(__dirname, "src/"),
      "auth": path.resolve(__dirname, "src/auth"),
      "journal": path.resolve(__dirname, "src/journal"),
      "router": path.resolve(__dirname, "src/router"),
      "theme": path.resolve(__dirname, "src/theme"),
    },
  },
});