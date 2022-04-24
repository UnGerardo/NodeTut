const fs = require('fs');

const readStream = fs.createReadStream('./testStream.txt');
const writeStream = fs.createWriteStream('./newTestStream.txt');

//event listener
//everytime we get a chunk of data from the stream
//this callback is fired
// readStream.on('data', (chunk) => {
//   console.log('---- NEW CHUNK ----');
//   console.log(chunk);
//   // console.log(chunk.toString());
//   writeStream.write('\n---- NEW CHUNK ----\n');
//   writeStream.write(chunk);
// })

// doing the above using a 'pipe'
// must be from a readable stream to a writable stream
// piping - on every chunk load, it is pumped into the write stream
readStream.pipe(writeStream);

// also exists a duplex stream which
// means we can read and write through it
