const app = require('./server') ;
const config = require('./utils/config') ;
const mongoose = require('mongoose') ;

mongoose.connect(config.MongoDb_URI)
    .then(()=>{
        console.log("Connected to MongoDB...");
        app.listen(config.Port , ()=>{
            console.log(`Server running on port ${config.port}`) ;
        })
    })
    .catch((err)=>{
        console.log('Error connecting to MongoDb :', err);
    })