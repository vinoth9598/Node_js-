
const express = require('express') ;
const app = express() ;
const cors = require('cors') ;
const mongoose = require('mongoose') ;
const config = require('./utils/config') ;


//middleware 
app.use(express.json());
app.use(cors()) ;

mongoose.connect(config.MongoDb_URI)
    .then(() =>{
        console.log("Connected to MongoDB,...");
    })
    .catch((err)=>{
        console.log("Error connecting to MongoDB :", err)
    }) ;


//define a schema 
const noteSchema = new mongoose.Schema({
    id: Number,
    content :String ,
    important : Boolean 
});
 
//create a model 
const Note = mongoose.model("Note", noteSchema, 'notes') ;

//endpoint to view all the notes 
app.get('/notes', (request, response)=>{
    Note.find({}, {})
        .then(notes => {
            response.status(200).json(notes) ;
        })
});

app.listen(config.Port, () =>{
    console.log(`Server running at port ${config.Port}`) ;
})