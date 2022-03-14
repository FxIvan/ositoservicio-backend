const express = require('express')
const cors = require('cors')
const app = express()

app.use(cors())
app.use(express.json())

app.set('puerto', process.env.PORT || 5000)

app.get('/',(req,res)=>{
    res.send('Conexion correctamente')
})

/*
app.use('/formulario', require('./rutas/routeForm'))
*/
module.exports = app