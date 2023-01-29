const esbuild = require('esbuild');
const fs = require('fs');

const BuildOptions = {
  entryPoints: ['./src/index.tsx'],
  bundle: true,
  outfile: 'dist/out.js',
};

async function postEsbuild() {
  fs.copyFileSync('./assets/index.html', 'dist/index.html')
}

async function build() {
  await esbuild.build(BuildOptions);
  await postEsbuild();
}

async function serve() {
  const context = await esbuild.context(BuildOptions);
  await postEsbuild();

  const { host, port } = await context.serve({ servedir: './dist' });
  console.log(`Started: ${host}:${port}`)
}

serve();