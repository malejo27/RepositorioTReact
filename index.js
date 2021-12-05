"use strict";

//require('dotenv').config()
const { graphql, buildSchema } = require("graphql"); //primer  tipo de consulta squema
//const {makeExecutableSchema}= require('graphql-tools') 
 const express = require("express") 
 const { graphqlHTTP } = require("express-graphql") //el point donde voy a hacer las peticiones
// //libreria de manejor de archivos
 const {readFileSync} = require("fs") 
const {join} = require("path")
const resolvers = require("./lib/resolvers") //traer un archivo js con una funcion


 const app = express(); //llamando el servicio configurando un server
 const port = process.eventNames.port || 3000; //debo darle un puerto para escuchar las peticiones

 const schema = buildSchema(
    readFileSync(
        join(__dirname, 'lib', 'schema.graphql'), //ruta donde esta el archivo 
        'utf-8'
    )
);


// const typeDefs = readFileSync(
//     join(__dirname, 'lib', 'schema.graphql'),
//     'utf-8'
// )
// //llamo a la dependencia
// const schema = makeExecutableSchema({
//     typeDefs, resolvers})

// //configurar la aplicacion para cuando se lance, la ruta relativa, llamo al middleware y
// // pasamos los tres argumentos: schema, rootValue, graphiql (aplicacion grafixa)

app.use('/api', graphqlHTTP({
    schema: schema, 
    rootValue: resolvers,
    graphiql:true
}))


app.listen(port, ()=>{
    console.log(`Server listening at http://localhost:${port}/api`)
})