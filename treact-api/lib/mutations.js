'use strict'
const connectDb = require('./db')
const { ObjectId } = require('mongodb')

module.exports = {
  createProyecto: async (root, { input }) => {
    const defaults = {
      profesor: ''
    }
    const newProyecto = Object.assign(defaults, input)
    let db
    let proyecto
    try {
      db = await connectDb()
      proyecto = await db.collection('proyectos').insertOne(newProyecto)
      newProyecto._id = Proyecto.insertedId
    } catch (error) {
      console.error(error)
    }
    return newProyecto
  },
  editProyecto: async (root, { _id, input }) => {
    let db
    let proyecto
    try {
      db = await connectDb()
      await db.collection('proyectos').updateOne(
        { _id: ObjectId(_id) },
        { $set: input }
      )
      proyecto = await db.collection('proyectos').findOne(
        { _id: ObjectId(_id) }
      )
    } catch (error) {
      console.error(error)
    }
    return proyecto
  },

  deleteProyecto: async (root, { _id }) => {
    let db

    try {
      db = await connectDb()
      await db.collection('proyectos').deleteOne(
        { _id: ObjectId(_id) }
      )
      return true
    } catch (error) {
      console.error(error)
      return false
    }
  },

  createUsuario: async (root, { input }) => {
    const defaults = {
      apellido: '',
      correo: '',
      contrasena: '',
      rol: '',
      estado: ''
    }
    const newUsuario = Object.assign(defaults, input)
    let db
    let usuario
    try {
      db = await connectDb()
      usuario = await db.collection('usuarios').insertOne(newUsuario)
      newUsuario._id = Usuario.insertedId
    } catch (error) {
      console.error(error)
    }
    return newUsuario
  },
  editUsuario: async (root, { _id, input }) => {
    let db
    let usuario
    try {
      db = await connectDb()
      await db.collection('usuarios').updateOne(
        { _id: ObjectId(_id) },
        { $set: input }
      )
      usuario = await db.collection('usuarios').findOne(
        { _id: ObjectId(_id) }
      )
    } catch (error) {
      console.error(error)
    }
    return usuario
  },
  deleteUsuario: async (root, { _id }) => {
    let db

    try {
      db = await connectDb()
      await db.collection('usuarios').deleteOne(
        { _id: ObjectId(_id) }
      )
      return true
    } catch (error) {
      console.error(error)
      return false
    }
  }
}
