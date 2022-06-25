const { execSync } = require('child_process');
const { build } = require('esbuild');

build({
  entryPoints: ['src/index.ts'],
  minify: true,
  bundle: true,
  watch: process.argv[2] === '--watch',
  outfile: 'dist/index.js',
  plugins: [
    {
      name: 'TypeScriptDeclarationsPlugin',
      setup(build) {
        build.onEnd((result) => {
          if (result.errors.length > 0) {
            return;
          }
          execSync('tsc');
        });
      }
    }
  ]
});
