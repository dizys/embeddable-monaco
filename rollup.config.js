import vue from 'rollup-plugin-vue';
import resolve from 'rollup-plugin-node-resolve';
import babel from '@rollup/plugin-babel';
import css from 'rollup-plugin-css-only';
import commonjs from '@rollup/plugin-commonjs';

export default {
  input: 'src/index.js',
  output: {
    name: 'Embeddable',
    exports: 'named',
    globals: {
      vue: 'Vue',
    },
  },
  plugins: [
    resolve(),
    css({
      output: 'embeddable.css',
    }),
    vue({
      css: false,
      compileTemplate: true,
    }),
    babel({
      exclude: '**/node_modules/**',
      babelHelpers: 'bundled',
    }),
    commonjs(),
  ],
};
