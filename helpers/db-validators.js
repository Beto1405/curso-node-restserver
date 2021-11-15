const Role = require('../models/role');
const Usuarios = require('../models/usuario');


 const isRoleValido = async (rol='')=>{

    const existeRol = await Role.findOne({'role':rol});
    

    if (!existeRol) {
        throw new Error(`El rol ${rol} no existe en la BD`);
        
    }
}


const isemailUsuariosBD = async (registro)=>{

    const isRegistro = await Usuarios.findOne({'correo':registro});
    // console.log(registro);

    if (isRegistro) {

        throw new Error(`El registro ${ registro } dentro de correo ya existe en la BD`);
        
    }
}

const isusUariobyId = async (id)=>{

    const isRegistro = await Usuarios.findById(id);
    
    if (!isRegistro) {

        throw new Error(`El usuario con el id: ${ id } no existe en la BD`);
        
    }
}

module.exports ={isRoleValido, isemailUsuariosBD, isusUariobyId }