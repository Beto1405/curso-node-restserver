const express = require('express')
const cors = require('cors');
const { dbConnection } = require('../database/config');
const { logger } = require('../middlewares/validar-campos');


//ejemplo de middlware para entender (no esta en el curso)
// let logger = (req,res,next )=>{
//     console.log('Peticion de tipo', req.method);
//     next();
// }


class Server {

    constructor(){

        this.app = express();
        this.port = process.env.PORT;
        this.usuariosPath = '../routers/usuarios';

        //Servidor de la bd

        this.conexionDB();


        // Middlewares ( son como los decoradores de python)
        this.middlewares();

        // Rutas de mi aplicacion
        this.routes();

       
    }

    async conexionDB(){
        await dbConnection();
    }

    middlewares(){

        this.app.use(cors(),logger,express.static('public')); //los decoradores van siempre antes de la funcion a decorar
        this.app.use(express.json());
    }

    routes(){

        this.app.use('/api/usuarios',require(this.usuariosPath))
        // this.app.use('/api/usuarios',require(this.usuariosPath))
     
    }

    listen(){
    
        this.app.listen(this.port,()=>{console.log('El servidor esta corriendo en el puerto', this.port)});

    }

}

module.exports = Server;