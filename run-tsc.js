const { execSync } = require('child_process');
const fs = require('fs');

try {
  const result = execSync('npx tsc --project tsconfig.build.json 2>&1', {
    encoding: 'utf8',
    maxBuffer: 10 * 1024 * 1024
  });
  fs.writeFileSync('tsc-output.txt', 'SUCCESS\n' + result);
  console.log('SUCCESS');
  console.log(result);
} catch (error) {
  fs.writeFileSync('tsc-output.txt', 'ERROR\nExit code: ' + error.status + '\n\n' + error.stdout + '\n\nSTDERR:\n' + error.stderr);
  console.log('ERROR');
  console.log('Exit code:', error.status);
  console.log('Output:', error.stdout);
  console.log('Stderr:', error.stderr);
}

