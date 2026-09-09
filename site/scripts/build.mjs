// vinext beta calls process.exit(0) immediately after prerendering. On Windows,
// this races native async-handle teardown. Let Node finish a successful build
// naturally; nonzero failures retain their original exit behavior.
if (process.platform === 'win32') {
 const exit = process.exit.bind(process);
 process.exit = (code = 0) => {
  if (Number(code) !== 0) return exit(code);
  process.exitCode = 0;
 };
}
process.argv = [process.execPath, 'vinext', 'build', ...process.argv.slice(2)];
await import(new URL('./cli.js', import.meta.resolve('vinext')).href);

