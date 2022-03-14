require('dotenv').config()
const mongoose = require('mongoose')

const MONGO_URL=`mongodb+srv://${process.env.NODE_MONGODB_USERNAME}:${process.env.NODE_MONGODB_PASSWORD}@ositoservicio.om4w0.mongodb.net/${process.env.NODE_MONGODB_DB}?retryWrites=true&w=majority`
/* MONGO_URL,{useNewUrlParser:true , useUnifiedTopology:true} */
mongoose.connect(MONGO_URL,{useNewUrlParser:true , useUnifiedTopology:true})
.then(()=>{
    console.log('Conexion Establecida')
})
.catch(err=>{
    console.log('Error: ', err)
})