const sleepTime = parseInt(process.env['INPUT_SLEEP_TIME']);

console.log(`Going to sleep for ${sleepTime} minutes`);
setTimeout(() => {
  console.log('Finished sleeping');
}, sleepTime * 1000 * 60);
