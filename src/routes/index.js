const express = require('express')
const router = express.Router()

router.get('/',(req,res)=>{
	//res.send('index') envia el texto
	//res.send('index')
	//res.render('index') envia el archivo hbs de la carpeta views
	res.render('index')
})

router.get('/about',(req,res)=>{
	res.render('about')
})


module.exports = router