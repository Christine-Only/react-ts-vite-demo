import path from 'path';
import { Plugin } from 'vite';

const config = ({ mode }: { mode: string }): Plugin => {
  console.log('mode: ', mode);
  return {
    name: 'config',
    config() {
      return {
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
