import path from 'path';
import { Plugin } from 'vite';

const config = ({ mode }: { mode: string }): Plugin => {
  console.log('mode: ', mode);
  return {
    name: 'config',
    config() {
      return {
        cacheDir: '.vite',
        build: {
          rollupOptions: {
            input: {
              main: path.resolve(__dirname, '..', 'index.html'),
              heathCheck: path.resolve(__dirname, '..', 'health.html'),
            },
          },
          outDir: path.resolve(__dirname, '..', 'dist'),
        },
        resolve: {
          alias: {
            '@/': `${path.resolve(process.cwd(), 'src')}/`,
            '@@/': `${path.resolve(process.cwd())}/`,
          },
        },
      };
    },
  };
};

export default config;
