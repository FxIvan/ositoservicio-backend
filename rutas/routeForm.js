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
router.route('/:_id')
.get(async(req,res)=>{
    const datosId = await dbDatos.findById(req.params._id)
    console.log(req.params._id)
    res.json(datosId)
})
.delete(async(req,res)=>{
    await dbDatos.findByIdAndDelete(req.params._id)
    res.json({message:'Elemento eliminado'})
})

    
module.exports = router