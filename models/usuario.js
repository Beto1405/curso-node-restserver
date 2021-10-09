const mongoose = require('mongoose');


const UsuarioSchema = new mongoose.Schema({

    nombre :{
        type: String,
        required:[true, 'El nombre es Obligatorio']
    },
    
    correo :{
        type: String,
        required:[true, 'El correo es Obligatorio'],
        unique: true
    },

    password :{
        type: String,
        required:[true, 'El password es Obligatorio']
    },
     
    img :{
        type: String,
        default:""
    },

    rol :{
        type: String,
        required:true,
        enum:['ADMIN_ROLE','USER_ROLE']
    },
    
    estado :{
        type: Boolean,
        default:true,
    },

    google :{
        type: Boolean,
        default:false,
    },




})

module.exports = mongoose.model('Usuario', UsuarioSchema);