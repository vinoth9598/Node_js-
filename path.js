const path = require('path') ;

const test = '/Users/sathish/Documents/Desktop/sathish/be-b51/test.txt' ;

//get the directory name of the file

console.log(path.dirname(test));

// get the basename

console.log(path.basename(test)) ;

//get the extension alone
console.log(path.extname(test)) ;
console.log('.' + test.split('.')[1]) ;

//get the fileName without the extension
console.log(path.basename(test, path.extname(test))) ;

console.log(path.resolve('test.txt')) ;