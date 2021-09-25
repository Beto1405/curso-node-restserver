const {request,response} = require('express');

const usuariosGet = (req = request, res = response) => {
    
    const query = req.query;
    res.json({msg:'aplication get'
            ,query})
  }
const usuariosPost = (req = request, res = response) => {

    const body = req.body;

    res.json({
        msg: `aplication desde controller -metodo: Post`,
        body
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