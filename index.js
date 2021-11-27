"use strict";

const { graphql, buildSchema } = require("graphql"); //primer  tipo de consulta squema
const express = require("express"); //contruir el servicio donde voy  a consumir la consulta
const { graphqlHTTP } = require("express-graphql"); //el point donde voy a hacer las peticiones

const app = express(); //llamando el servicio configurando un server
const port = process.eventNames.port || 3000; //debo darle un puerto para escuchar las peticiones

//primera schema
const schema = buildSchema(`
type Query{
    hello: String
    saludo: String
}
`);

//funciones de hello y saludo
const resolvers ={
    hello:()=>{
        return 'Hola  mundo'
    },
    saludo:()=>{
        return 'hola a todos'
    }
}

//configurar la aplicacion para cuando se lance, la ruta relativa, llamo al middleware y
// pasamos los tres argumentos: schema, rootValue, graphiql (aplicacion grafixa)

app.use('/api', graphqlHTTP({
    schema: schema, 
    rootValue: resolvers,
    graphiql:true
}))


app.listen(port, ()=>{
    console.log(`Server listening at http://localhost:${port}/api`)
})