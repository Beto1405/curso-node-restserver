const {request,response} = require('express');
const Usuario = require('../models/usuario');
const bcrypt = require ('bcryptjs');


const usuariosGet = async (req = request, res = response) => {
    
    const {limite = 5, desde = 0} = req.query;

 
    const [total,usuarios] = await Promise.all([Usuario.countDocuments({"estado":true}),
       Usuario.find({"estado":true})
      .skip(Number(desde))
      .limit(Number(limite))])

    
    res.json({total,usuarios})
}

const usuariosPost = async (req = request, res = response) => {

    
    const {nombre, correo, password, rol} = req.body;
    const usuario = new Usuario({nombre,correo, password, rol});

    const salt = bcrypt.genSaltSync();
    usuario.password = bcrypt.hashSync(password,salt);  

    await usuario.save();
    
    res.json({
        // msg: `aplication desde controller -metodo: Post`,
        
        usuario

    });

    

}

  const usuariosPut = async (req, res = response) => {

    const {id} = req.params;
    
    const{password,google,img,...resto} = req.body;
    
    if(password){
      
      const salt = bcrypt.genSaltSync();
      resto.password = bcrypt.hashSync(password,salt);  
      
    }
    
    const usuario = await Usuario.findByIdAndUpdate(id,resto);

    res.json(usuario)

  }

  const usuariosDelete = async (req, res = response) => {
    
    const {id} =req.params;
    const usuario = await Usuario.findByIdAndUpdate(id,{'estado':false});
    res.json({msg:'aplication Delete',usuario})
  }

  const usuariosPatch = (req, res = response) => {
    res.json({msg:'aplication Patch from controller'})
  }




  module.exports ={usuariosGet,usuariosPost,usuariosPut,usuariosDelete, usuariosPatch}