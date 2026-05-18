const express = require('express') ;
const app = express();

let notes = [
    {
        id:1,
        content:"simple web server using node.js",
        important:true 
    },
    {
        id:2,
        content:"express makes backend restful painless",
        important : false 
    }
];

app.get('/',(request, response)=>{
    response.send("Hello World welcome to Node js");
})

//define the server hostName and port Number 
const hostName = "127.0.0.1" ;
const port = 3001 ;

app.listen(port, hostName, ()=>{
    console.log(`Server running at http://${hostName}:${port}`) ;
});
