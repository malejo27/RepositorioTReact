'use strict'

const connectDb = require('./db')
const { ObjectId } = require('mongodb')

module.exports = {
  getProyectos: async () => {
    let db
    let proyectos = []
    try {
      db = await connectDb()
      proyectos = await db.collection('proyectos').find().toArray()
    } catch (error) {
      console.error(error)
    }
    return proyectos
  },
  getProyecto: async (root, { id }) => {
    let db
    let proyecto
    try {
      db = await connectDb()
      proyecto = await db.collection('proyectos').findOne({ _id: ObjectId(id) })
    } catch (error) {
      console.error(error)
    }
    return proyecto
  },
  getUsuarios: async () => {
    let db
    let usuarios = []
    try {
      db = await connectDb()
      usuarios = await db.collection('usuarios').find().toArray()
    } catch (error) {
      console.error(error)
    }
    return usuarios
  },
  getUsuario: async (root, { id }) => {
    let db
    let usuario
    try {
      db = await connectDb()
      usuario = await db.collection('usuarios').findOne({ _id: ObjectId(id) })
    } catch (error) {
      console.error(error)
    }
    return usuario
  }
}
