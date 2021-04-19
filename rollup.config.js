import typescript from '@rollup/plugin-typescript';

export default {
  input: 'src/index.ts',
  output: {
    dir: 'output',
    format: 'iife',
  },
  context: "ctx",
  plugins: [typescript()],
};