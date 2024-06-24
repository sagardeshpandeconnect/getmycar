import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import fs from 'fs';
import path from 'path';


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    https: {
      key: fs.readFileSync(path.resolve(__dirname, 'getmycar-privateKey.key')),
      cert: fs.readFileSync(path.resolve(__dirname, 'getmycar.crt')),
    },
  },
  resolve: {
    alias: {
      "@src": "/src",
      "@components": "/src/components",
      "@services": "/src/services",
      "@features": "/src/features",
      "@assets": "/src/assets",
      "@hooks": "/src/hooks",
      "@pages": "/src/pages",
      "@utils": "/src/utils",
    },
  },
});
