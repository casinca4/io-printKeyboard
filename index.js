const fs = require('fs');                             //fs ist von node
console.log(fs);


fs.readFile('./keyboard.txt', 'utf8', (err, data) => {
    if (err) throw err;
    console.log('string test');
    console.log(data);    
    });