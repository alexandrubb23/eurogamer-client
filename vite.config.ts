import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default ({ mode }) => {
  process.env = { ...process.env, ...loadEnv(mode, process.cwd()) };

  const { VITE_APP_PORT, VITE_PREVIEW_APP_PORT } = process.env;

  return defineConfig({
    plugins: [react()],
    resolve: {
      alias: [
        {
          find: '@',
          replacement: '/src',
        },
      ],
    },
    server: {
      port: parseInt(VITE_APP_PORT),
    },
    preview: {
      port: parseInt(VITE_PREVIEW_APP_PORT),
      host: true,
    },
  });
};
