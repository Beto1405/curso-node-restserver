const express = require('express')
const cors = require('cors');


//ejemplo de middlware para entender (no esta en el curso)
let logger = (req,res,next )=>{
    console.log('Peticion de tipo', req.method);
    next();
}


class Server {

    constructor(){

        this.app = express();
        this.port = process.env.PORT;
        this.usuariosPath = '../routers/usuarios';
        this.middlewares();

        this.routes();

       
    }

  

    middlewares(){

        this.app.use(cors(),express.static('public'),logger);
        this.app.use(express.json());
    }

    routes(){

        this.app.use('/api/usuarios',require(this.usuariosPath))
     
    }

    listen(){
    
        this.app.listen(this.port,()=>{console.log('El servidor esta corriendo en el puerto', this.port)});

    }

}

module.exports = Server;