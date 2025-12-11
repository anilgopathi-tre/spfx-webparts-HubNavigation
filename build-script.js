const { spawn } = require('child_process');
const fs = require('fs');

const build = spawn('node', ['./node_modules/gulp/bin/gulp.js', 'build'], {
  stdio: 'pipe',
  shell: true
});

let output = '';
let errorOutput = '';

build.stdout.on('data', (data) => {
  output += data.toString();
  process.stdout.write(data);
});

build.stderr.on('data', (data) => {
  errorOutput += data.toString();
  process.stderr.write(data);
});

build.on('close', (code) => {
  fs.writeFileSync('build-log.txt', `EXIT CODE: ${code}\n\nSTDOUT:\n${output}\n\nSTDERR:\n${errorOutput}`);
  console.log(`\nBuild finished with code ${code}. Output saved to build-log.txt`);
  process.exit(code);
});

