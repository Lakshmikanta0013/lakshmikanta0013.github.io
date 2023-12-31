import react from '@vitejs/plugin-react-swc';
import dns from 'dns';
import { defineConfig } from 'vite';
import { ViteAliases } from 'vite-aliases';
import mkcert from 'vite-plugin-mkcert';
import svgr from 'vite-plugin-svgr';

dns.setDefaultResultOrder('verbatim');

export default defineConfig({
  plugins: [
    react(),
    svgr(),
    mkcert(),
    ViteAliases({
      prefix: '#',
    }),
  ],
  server: {
    port: 5555,
    open: true,
  },
  preview: {
    port: 8080,
  },
});
