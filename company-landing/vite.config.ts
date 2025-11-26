// company-landing/vite.config.ts
// (REPLACE YOUR ENTIRE FILE WITH THIS)

import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import path from "path";
import { defineConfig } from "vite";

const plugins = [react(), tailwindcss()];

export default defineConfig({
  plugins,

  // CRITICAL FIX: The 'base' must be the name of your repository, 
  // enclosed in slashes. This ensures assets are loaded from 
  // https://miggy-code.github.io/ThrottlHome/ and not the root domain.
  //base: "/ThrottlHome/",

  resolve: {
    alias: {
      "@": path.resolve(import.meta.dirname, "client", "src"),
      "@shared": path.resolve(import.meta.dirname, "shared"),
      "@assets": path.resolve(import.meta.dirname, "attached_assets"),
    },
  },
  envDir: path.resolve(import.meta.dirname),

  // This tells Vite that your index.html and main entry point are in the 'client' folder.
  // This is correct for your structure.
  root: path.resolve(import.meta.dirname, "client"),

  build: {
    // This tells Vite to place the build output in 'dist/public' relative to 'company-landing'.
    // This is also correct.
    outDir: path.resolve(import.meta.dirname, "dist/public"),
    emptyOutDir: true,
  },
  server: {
    port: 3000,
    host: true,
  },
});