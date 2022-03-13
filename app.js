const express = require('express')
const cors = require('cors')
const app = express()

app.use(cors())
app.use(express.json())

app.set('puerto', process.env.NODE_PUERTO)

app.get('/',(req,res)=>{
    res.send('Conexion correctamente')
})

app.use('/formulario', require('./rutas/routeForm'))

module.exports = app