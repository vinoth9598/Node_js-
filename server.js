
const http = require("http");

const notes = [
    {
        id:1, 
        content:"Backend using node.js",
        important:true 
    },
    {
        id:2,
        content:"node.js is a open source",
        important:false 
    },
    {
        id:3,
        content:"simple web server using node.js",
        important:true
    }
];

const hostName = "127.0.0.1";
const port = 3001 ;

const server = http.createServer((req,res)=>{
    res.statusCode = 200 ;
    res.setHeader("Content-Type", "text/plain");
    res.end(JSON.stringify(notes));

}) ;

server.listen(port, hostName, ()=>{
    console.log(`Server running at port http://${hostName}:${port}`);
});

