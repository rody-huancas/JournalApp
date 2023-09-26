import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from "path";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "src": path.resolve(__dirname, "src/"),
      "auth": path.resolve(__dirname, "src/auth"),
      "firebaseConfig": path.resolve(__dirname, "src/firebase"),
      "hooks": path.resolve(__dirname, "src/hooks"),
      "journal": path.resolve(__dirname, "src/journal"),
      "router": path.resolve(__dirname, "src/router"),
      "store": path.resolve(__dirname, "src/store"),
      "theme": path.resolve(__dirname, "src/theme"),
      "ui": path.resolve(__dirname, "src/ui"),
    },
  },
});