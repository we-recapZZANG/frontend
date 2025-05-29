import { ConfigEnv, defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import fs from 'fs';
import path from 'path';
import { defineConfig, loadEnv, ConfigEnv } from 'vite';
import tailwindcss from '@tailwindcss/vite';
// import basicSsl from '@vitejs/plugin-basic-ssl';

export default ({ mode }: ConfigEnv) => {
  process.env = { ...process.env, ...loadEnv(mode, process.cwd()) };


  // const isDevelop: boolean = process.env.VITE_DEVELOP === 'true';

  return defineConfig({
    plugins: [react(), tailwindcss()],
    base: '/',
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
      },
    },
    // server: isDevelop
    //   ? {
    //       https: {
    //         key: fs.readFileSync(
    //           path.resolve(__dirname, 'localhost+2-key.pem')
    //         ),
    //         cert: fs.readFileSync(path.resolve(__dirname, 'localhost+2.pem')),
    //       },
    //       port: 5173,
    //       host: '0.0.0.0',
    //       allowedHosts: [
    //         /* ... */
    //       ],
    //     }
    //   : undefined,
  });
};
