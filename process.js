
process.on('exit', code => {
    // do one final synchronous operation
    // before the node process terminates
    console.log(`About to exit with code: ${code}`);

});

process.on('uncaughtException', err => {
    // something went unhandled
    // Do any cleanup and exit
    console.log("An UncaughtException Event was triggered");
   
    // don't just do this
    console.error(err); 
    
    // FORCE exit the process to
    process.exit(1);
});

// keep event loop busy
process.stdin.resume();

// trigger a TypeError exception
console.dog();