const mongoose = require('mongoose');
const mongoURI="mongodb://127.0.0.1:27017/formFiller"

const connectToMongo=()=>{
    mongoose.connect(mongoURI)
    .then(()=>{
        console.log("Connected to MongoDB")
    })
    .catch(err=>{
        console.log("Connection Error ",err)
    })
}
module.exports=connectToMongo;