import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/medals/",
  plugins: [react()],
  server: {
    port: 5173,
    proxy: {
      
      "/api": {
        target: "https://localhost:7001",
        changeOrigin: true,
        secure: false,
      },
      "/jwtapi": {
        target: "https://localhost:7001",
        changeOrigin: true,
        secure: false,
      },
      
      "/medalsHub": {
        target: "https://localhost:7001",
        changeOrigin: true,
        secure: false,
        ws: true,
      },
    },
  },
  build: {
    outDir: "../Medals-Api/wwwroot",
    emptyOutDir: true,
  },
});