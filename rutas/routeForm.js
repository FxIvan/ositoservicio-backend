const { Router } = require('express')
const router = Router()
const dbDatos = require('../models/schema')

router.route('/')
.get(async(req,res)=>{
    const datosFormulario = await dbDatos.find()
    res.json(datosFormulario)
})
.post(async(req,res)=>{
    const { nombre , email , telefono , consulta } = req.body
    console.log(req.body)
    const newFormulario = new dbDatos({
        nombre,
        email,
        telefono,
        consulta
    })
    await newFormulario.save()
})
    
module.exports = router