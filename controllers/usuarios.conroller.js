const {request,response} = require('express');
const Usuario = require('../models/usuario');
const bcrypt = require ('bcryptjs');


const usuariosGet = (req = request, res = response) => {
    
    const query = req.query;
    res.json({msg:'aplication get'
            ,query})
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

  const usuariosPut = (req, res = response) => {
    res.json({msg:'aplication Put'})
  }

  const usuariosDelete = (req, res = response) => {
    res.json({msg:'aplication Delete'})
  }

  const usuariosPatch = (req, res = response) => {
    res.json({msg:'aplication Patch from controller'})
  }




  module.exports ={usuariosGet,usuariosPost,usuariosPut,usuariosDelete, usuariosPatch}