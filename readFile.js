//sync process file manipulation

// const fs = require("fs") ;

// const data = fs.readFileSync('./test.txt', 'utf-8') ;
// console.log(data) ;

// sayHello = () => {
//     console.log("Hello") ;
// }

// sayHello();

//Async process file manipulation

const fs = require("fs") ;

fs.readFile('./test.txt','utf-8', (err, data) => {
    if (err) throw err ;
    console.log(data);
});

sayHello = () => {
    console.log("Hello") ;
}
sayHello();