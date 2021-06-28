import babel from 'rollup-plugin-babel';
import postcss from 'rollup-plugin-postcss';
import image from '@rollup/plugin-image';
import typescript from 'rollup-plugin-typescript2';
import nodeResolve from 'rollup-plugin-node-resolve';
import common from 'rollup-plugin-commonjs';
import globals from 'rollup-plugin-node-globals';
import filesize from 'rollup-plugin-filesize';
import { terser } from 'rollup-plugin-terser';

const pkg = require('./package.json');

function onwarn(warning) {
  if (warning.code !== 'CIRCULAR_DEPENDENCY') {
      console.error(`(!) ${warning.message}`);
  }
}
export default [
  {
    input: 'src/index.tsx',
    context: 'window',
    onwarn,
    output: {
      file: pkg.module,
      format: 'es',
      globals: {
        'react-dom': 'ReactDOM',
        react: 'React',
      },
    },
    plugins: [
      nodeResolve(),
      common({
        include: 'node_modules/**',
      }),
      typescript(),
      image(),
      postcss(),
      babel({
        presets: [
          '@babel/preset-react',
        ],
        plugins: [ ['import', { libraryName: 'antd', libraryDirectory: 'es', style: 'css' }] ],
        babelrc: false, // 不采用babelrc配置，否则上面的presets设置无效
        compact: true, // 事实上，只要不为auto就不会警告
        exclude: 'node_modules/**',
        extensions: ['.jsx', '.tsx', '.js', '.ts'],
      }),
      globals(),
      terser(),
      filesize(),
    ],
    external: [
      ...Object.keys(pkg.dependencies || {}),
      ...Object.keys(pkg.peerDependencies || {}),
      'react-is'
    ],
  },
  {
    input: 'src/index.tsx',
    context: 'window',
    onwarn,
    output: {
      file: pkg.main,
      format: 'cjs',
      globals: {
        'react-dom': 'ReactDOM',
        react: 'React',
      },
    },
    plugins: [
      nodeResolve({
        extensions: [ '.js', '.json', '.jsx' ]
      }),
      common({
        include: 'node_modules/**',
      }),
      typescript(),
      image(),
      postcss(),
      babel({
        presets: [
          '@babel/preset-react',
        ],
        plugins: [ ['import', { libraryName: 'antd', libraryDirectory: 'es', style: 'css' }] ],
        babelrc: false, // 不采用babelrc配置，否则上面的presets设置无效
        compact: true, // 事实上，只要不为auto就不会警告
        exclude: 'node_modules/**',
        extensions: ['.jsx', '.tsx', '.js', '.ts'],
      }),
      globals(),
      terser(),
      filesize(),
    ],
    external: [
      ...Object.keys(pkg.dependencies || {}),
      ...Object.keys(pkg.peerDependencies || {}),
      'react-is'
    ],
  }
]