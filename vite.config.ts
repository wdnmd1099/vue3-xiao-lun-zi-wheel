import { md } from "./plugins/md";
import vue from '@vitejs/plugin-vue'

export default {
  base: './',
  assetsDir: 'assets',
  plugins: [vue(), md()],
};
