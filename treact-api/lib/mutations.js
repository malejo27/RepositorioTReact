'use strict'
const connectDb = require('./db')
const {ObjectId} = require ('mongodb')
const errorHandler = require ('./errorHandler')

module.exports = {
    createProyecto: async(root,{ input }) => {
        const defaults = {
            profesor: '',
        }
        const newProyecto = Object.assign(defaults, input)
        let db
        let proyecto
        try {
            db = await  connectDb()
            proyecto = await db.collection('proyectos').insertOne(newProyecto)
            newProyecto._id = proyecto.insertedId
        } catch (error){
            errorHandler(error)
        }
        return newProyecto
    },
    editProyecto: async(root,{_id, input }) => {  
        let db
        let proyecto
        try {
            db = await  connectDb()
            await db.collection('proyectos').updateOne(
                { _id: ObjectId(_id)},
                {$set: input}
            )
            proyecto = await db.collection('proyectos').findOne(
                { _id: ObjectId(_id)}
            )
        } catch (error){
            errorHandler(error)
        }
        return proyecto
    },

    deleteProyecto: async (root, {_id}) => {
        let db

        try{
            db = await connectDb()
            await db.collection('proyectos').deleteOne(
                { _id: ObjectId(_id)}
            )
        return true

    } catch (error){
        errorHandler(error)
        return false
    }
},

    createPerson: async(root,{ input }) => {
        const defaults = {
            correo: '',
            contrasena: '',
            estado: ''
        }
        const newUsuario = Object.assign(defaults, input)
        let db
        let usuario
        try {
            db = await  connectDb()
            usuario = await db.collection('usuarios').insertOne(newUsuario)
            newUsuario._id = usuario.insertedId
        } catch (error){
            errorHandler(error)
        }
        return newUsuario
    },
    editPerson: async(root,{_id, input }) => {  
        let db
        let usuario
        try {
            db = await  connectDb()
            await db.collection('usuarios').updateOne(
                { _id: ObjectId(_id)},
                {$set: input}
            )
            usuario = await db.collection('usuarios').findOne(
                { _id: ObjectId(_id)}
            )
        } catch (error){
            errorHandler(error)
        }
        return usuario
    },
    deletePerson: async (root, {_id}) => {
        let db

        try{
            db = await connectDb()
            await db.collection('usuarios').deleteOne(
                { _id: ObjectId(_id)}
            )
        return true

    } catch (error){
        errorHandler(error)
        return false
    }
  },

  addPeople: async(root, { proyectoID, personID}) => {
      let db
      let proyecto
      let person

      try {
          db = await connectDb()
          proyecto = await db.collection('proyectos').findOne(
              { _id: ObjectId(proyectoID) })

          person = await db.collection('usuarios').findOne(
                  { _id: ObjectId(personID)})
          
          if (!proyecto || !person) throw new Error('La persona o Curso no Existe')
          await db.collection('proyectos').updateOne(
              { _id: ObjectId(proyectoID)},
              { $addToSet: { people: ObjectId(personID)}}
          )
  } catch (error){
      errorHandler(error)
  }
  return proyecto
  }
}
