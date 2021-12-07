'use strict'

const { MongoClient } = require("mongodb")
const {

    DB_USER,
    DB_PASSWD,
    DB_HOST,
    DB_PORT,
    DB_NAME,

}= process.env

const mongoUrl= `mongo://${DB_USER}:${DB_PASSWD}@${DB_HOST}:${DB_PORT}/${DB_NAME}`
//const mongoUrl= `mongodb+srv://admin:admin@cluster0.wnrdm.mongodb.net/test`
//configuracion de la base de datos
let connection
async function connectDB(){
    if (connection) return connection //si la conexion es true retorne la conexion

    let client 
    try{
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