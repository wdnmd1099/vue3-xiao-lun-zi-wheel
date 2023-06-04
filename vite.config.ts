import { md } from "./plugins/md";
import vue from '@vitejs/plugin-vue'

export default {
  base: './',
  assetsDir: 'assets',
  plugins: [vue(), md()],
  server:{
    host:'192.168.0.103',
    port:3000,
  },
};
