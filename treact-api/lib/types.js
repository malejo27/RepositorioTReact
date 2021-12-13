'use strict'
const connectDb = require('./db')
const {ObjectId} = require('mongodb')
const errorHandler = require ('./errorHandler')

module.exports = {
    Proyecto: {
        people: async ({people})   => {
            let db
            let peopleData
            let ids

            try{
                db = await connectDb()
                ids = people ? people.map(id => ObjectId(id)) : []
                peopleData = ids.length > 0 
                ? await db.collection('estudiantes').find(
                    { _id: {$in: ids}}
                ).toArray() 
                : []
            }catch (error){
                errorHandler(error)
            }
            return peopleData
        }
    },
    Person: {
        __resolveType: (person, context, info) =>{
            if (person.telefono){
                return 'Administrador'
            }
            else if (person.documentoIdentificacion){
                return 'Lider'
                }   
            else {
                return 'Estudiante'
            }     
            }
            
        },
        GlobalSearch: {
            __resolveType: (item, context, info) => {
                if (item.titulo) {
                    return 'Proyecto'
                }
                if (item.telefono) {
                    return 'Administrador'
                }
                if (item.documentoIdentificacion) {
                    return 'Lider'
                }
                return 'Estudiante'
            }
        }
    }