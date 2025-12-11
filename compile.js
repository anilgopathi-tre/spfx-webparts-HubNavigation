const ts = require('typescript');
const fs = require('fs');
const path = require('path');

// Read tsconfig
const configPath = path.join(__dirname, 'tsconfig.build.json');
const configFile = ts.readConfigFile(configPath, ts.sys.readFile);

if (configFile.error) {
  console.log('Config file error:', ts.flattenDiagnosticMessageText(configFile.error.messageText, '\n'));
  fs.writeFileSync('compile-log.txt', 'CONFIG ERROR:\n' + ts.flattenDiagnosticMessageText(configFile.error.messageText, '\n'));
  process.exit(1);
}

const parsedConfig = ts.parseJsonConfigFileContent(
  configFile.config,
  ts.sys,
  __dirname
);

if (parsedConfig.errors.length > 0) {
  console.log('Parse errors:', parsedConfig.errors.map(e => ts.flattenDiagnosticMessageText(e.messageText, '\n')).join('\n'));
  fs.writeFileSync('compile-log.txt', 'PARSE ERRORS:\n' + parsedConfig.errors.map(e => ts.flattenDiagnosticMessageText(e.messageText, '\n')).join('\n'));
  process.exit(1);
}

console.log('Files to compile:', parsedConfig.fileNames.length);
console.log(parsedConfig.fileNames.join('\n'));

// Create program
const program = ts.createProgram(parsedConfig.fileNames, parsedConfig.options);
const emitResult = program.emit();

// Get diagnostics
const allDiagnostics = ts.getPreEmitDiagnostics(program).concat(emitResult.diagnostics);

let output = 'COMPILATION RESULTS:\n\n';
output += `Files to compile: ${parsedConfig.fileNames.length}\n`;
output += parsedConfig.fileNames.join('\n') + '\n\n';

if (allDiagnostics.length > 0) {
  output += `\nERRORS (${allDiagnostics.length}):\n`;
  allDiagnostics.forEach(diagnostic => {
    if (diagnostic.file) {
      const { line, character } = ts.getLineAndCharacterOfPosition(diagnostic.file, diagnostic.start);
      const message = ts.flattenDiagnosticMessageText(diagnostic.messageText, '\n');
      output += `${diagnostic.file.fileName}(${line + 1},${character + 1}): ${message}\n`;
      console.log(`${diagnostic.file.fileName}(${line + 1},${character + 1}): ${message}`);
    } else {
      output += ts.flattenDiagnosticMessageText(diagnostic.messageText, '\n') + '\n';
      console.log(ts.flattenDiagnosticMessageText(diagnostic.messageText, '\n'));
    }
  });
}

output += `\nEmit skipped: ${emitResult.emitSkipped}\n`;
console.log('\nEmit skipped:', emitResult.emitSkipped);

fs.writeFileSync('compile-log.txt', output);
console.log('\nResults written to compile-log.txt');

