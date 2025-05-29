import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import tailwindcss from '@tailwindcss/vite';

<<<<<<< Updated upstream
// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
});
=======
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
>>>>>>> Stashed changes
