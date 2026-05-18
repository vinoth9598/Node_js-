const express = require("express") ;
const app = express() ;

//middleware 
app.use(express.json()) ;

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
    },
    {
        id:4,
        content:"express makes backend restful painless",
        important : true 
    },
    {
        id:5, 
        content : "backend restful using nodejs will grow complex",
        important:false 
    }
];

app.get('/',(req,res)=>{
    res.send("Hello welcome to js");
})

app.get("/notes",(req, res)=>{
    res.json(notes) ;
})

//get the single note 
app.get('/notes/:id',(req,res)=>{
    const id = req.params.id ;

    const note = notes.find(note => note.id == id) ;

    if(note) {
        res.status(200).json(note);
    }else {
        res.status(404).json({
            message:"id does not exists" 
        }) ;
    }
}) ;

//post the notes
app.post('/notes/', (req,res)=>{
    notes = notes.concat(req.body) ;
    res.status(201).json({
        message:"note created successfully"
    }) ;
}) ;

//endpoint to delete a note identified by id 

app.delete('/notes/:id', (req,res)=>{
    //get the id from the params 
    const id = req.params.id ;

    //find the note matching the id
    const note = notes.find(note => note.id == id) ;

    notes = notes.filter(note => note.id != id);

    if(note){
        res.status(204).json(note) ;
    }else {
        res.status(404).json({message:" id does not exists"}) ;
    }
})  ;

//endpoint to replace the entire note identified by id with the request data
app.put('/notes/:id' , (req,res)=>{
    //get the id from the params 
    const id = req.params.id ;

    //get the note to replace from the user - request body 
    const noteToReplace = req.body ;

    const note = notes.find(note => note.id == id) ;

    notes = notes.map(note => note.id == id ? noteToReplace : note) ;

    if(note){
        res.status(200).json({message : " note replaced "}) ;
    }else {
        res.status(404).json({message : " id does not exists "}) ;
    }
});

//endpoint to patch a part of note identified by id 
app.patch('/notes/:id', (req,res)=>{
    const id = req.params.id ;

    const noteToReplace = req.body ;

    const note = notes.find(note => note.id == id) ;

    notes = notes.map(note => note.id == id ? {...note, ...noteToReplace} : note) ;
    if(note){
        res.status(200).json({message:" note patched "}) ;
    }else {
        res.status(404).json({message :"id does not exist "});
    }
}) ;

const hostName = "localhost" ;
const port = 3001 ;

app.listen(port, () =>{
    console.log(`Server running at http://${hostName}:${port}`) ;
}) ;
