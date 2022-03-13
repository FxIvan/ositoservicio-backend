const { Schema , model} = require('mongoose')

const formulario = new Schema({
    nombre:String,
    email:String,
    telefono:Number,
    consulta:String
},
{
    timestamps:{createdAt:false, updatedAt:true}
})

const dbDatos = model('formularios', formulario)

module.exports = dbDatos