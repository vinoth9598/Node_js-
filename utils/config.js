require('dotenv').config();
const MongoDb_URI = process.env.MongoDb_URI ;
const Port = process.env.Port ;

module.exports = {
    MongoDb_URI ,
    Port 
}