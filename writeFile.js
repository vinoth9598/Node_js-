// Write file synchronous 

// const fs = require("fs")  ;

// const content = `Session 1 : ${new Date().toISOString()}` ;

// try {
//     fs.writeFileSync('./test.txt', content) ;
//     console.log("Content written successfully");

// }catch(err){
//     console.log("Error :",  err);
// }

//Write file As-Synchronous

const fs = require("fs") ;

const content = "\nWork with frondend and backend" ;

fs.writeFile('./test.txt', content , {flag :'a'}, err => {
    if(err) console.log(err);
    console.log('Content written successfully');
}) ;