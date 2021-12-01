'use strict'

const { MongoClient } = require("mongodb")
const {

    DB_USER,
    DB_PASSWD,
    DB_HOST,
    DB_PORT,
    DB_NAME,

}= process.env

//const mongoUrl= `mongodb://${DB_USER}:${DB_PASSWD}@${DB_HOST}:${DB_PORT}/${DB_NAME}`
const mongoUrl= `mongodb+srv://admin:admin@cluster0.wnrdm.mongodb.net/test`
let connection
async function connectDB(){
    if (connection) return connection //si la conexion es true retorne la conexion

    let client 
    //estructura de excepciones,  ejecutar la funcion, si hay un error lo atrapa para  no detener el progra,a
    try{
        //GENERA UN HILO wait hagalo hasta que el servicio responda
        client = await MongoClient.connect(mongoUrl,{
            useNewUrlParser:true
        })
        connection = client.db(DB_NAME)

    }catch(error){
        console.error('Could not conect to db', mongoUrl, error)
        process.exit(1)
       

    } return connection
}

module.exports = connectDB