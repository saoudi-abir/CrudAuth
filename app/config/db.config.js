//module.exports = {
  // url: " mongodb+srv://add-tutorial:<password>@cluster0.dikvs.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
 // };
 // W74BSAWJ0r3hbglh
 // mongodb+srv://add-tutorial:<password>@cluster0.dikvs.mongodb.net/myFirstDatabase?retryWrites=true&w=majority

 //const mongodb = require('mongodb');
 //const url = 'mongodb+srv://add-tutorial:eYUr3RFazned0wlN@cluster0.dikvs.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
 

 //const MongoClient = require('mongodb').MongoClient;
// const url = 'mongodb+srv://sanek:Sanek*+1990@cluster0.x4jz9.mongodb.net/sanek?retryWrites=true&w=majority'
//const dbName = 'lasttry';

//MongoClient.connect(url , function(err, client) {
 // console.log("Connecté à MongoDB");
  //const db = client.db(dbName);
 // client.close();
//});
require('dotenv').config()
const mongoose = require('mongoose')

mongoose.Promise = Promise

mongoose.connection.on('connected', () => {
  console.log('Connection Established')
})

mongoose.connection.on('reconnected', () => {
  console.log('Connection Reestablished')
})

mongoose.connection.on('disconnected', () => {
  console.log('Connection Disconnected')
})

mongoose.connection.on('close', () => {
  console.log('Connection Closed')
})
mongoose.connection.on('error', (error) => {
    console.log('ERROR: ' + error)
  })
  
  process.on('SIGINT', function(){
    mongoose.connection.close(function(){
        console.log("Mongoose default connection is disconnected due to application termination");
        process.exit(0)
    });
  });
  
  module.exports.run= async () => {
    return new Promise(async function(res, rej) {
      res(await mongoose.connect(process.env.DATABASE_URL, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useFindAndModify: false,
        useUnifiedTopology: true 
    }))
        
    })
    
  }
  
  module.exports.close= async () => {
      await mongoose.disconnect()
    }
  
  