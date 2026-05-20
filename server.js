const express = require("express") ;
const app = express() ;
const cors = require("cors") ;
const notesRouter = require('./controllers/noteController.js') ;
const userRouter = require('./controllers/userController.js') ;

//middleware 
app.use(cors());
app.use(express.json()) ;


//endpoints 
app.use('/notes', notesRouter) ;
app.use('/users', userRouter);
module.exports = app ;

