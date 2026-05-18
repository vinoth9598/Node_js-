const express = require("express") ;
const app = express() ;

let notes = [
    {
        id:1,
        content:"Backend using node.js",
        important:true 
    },
    {
        id:2,
        content : "Node js is a open source",
        important:false 
    },
    {
        id:3,
        content : "simple web server using node.js",
        important:true 
    }
];

app.get('/',(req,res)=>{
    res.send("Hello welcome to js");
})

app.get("/notes",(req, res)=>{
    res.send(JSON.stringify(notes));
})

const hostName = "localhost" ;
const port = 3001 ;

app.listen(port, () =>{
    console.log(`Server running at http://${hostName}:${port}`) ;
}) ;
