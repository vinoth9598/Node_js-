const express = require("express") ;
const app = express() ;
const cors = require("cors") ;
const notesRouter = require('./controllers/noteController.js') ;

//middleware 
app.use(cors());
app.use(express.json()) ;


//endpoints 
app.use('/notes', notesRouter) ;

module.exports = app ;

