const mongoose = require('mongoose');

const dbConnection = async()=>{

    try {
        await mongoose.connect("mongodb+srv://uMongo:W0yY1O9lY3ErJuDg@miclouser.dno9i.mongodb.net/CafeDB");
        console.log('Base de datos online')

    } catch (error) {
        console.log(error);
        throw new Error('Error en la conexion de la base de Datos');
    }


}


module.exports =
{
    dbConnection
}