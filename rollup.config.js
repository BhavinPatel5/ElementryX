import { terser } from 'rollup-plugin-terser';

export default {
  input: 'src/index.js', // Entry point for your library
  output: {
    file: 'dist/elementryx-components.js', // Output file name
    format: 'umd', // Format for universal compatibility
    name: 'ElementryX', // Global variable name
    sourcemap: true, // Generate source maps for easier debugging
  },
  plugins: [terser()], // Minify the output
};
