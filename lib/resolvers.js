'use strict'

const connectDb = require('./db')




module.exports={
    Query:{
       
        getUsuarios:async()=>{
            let db
            let usuarios =[]
            try{
                db = await connectDb()
                usuarios = await db.collection('usuarios').find().toArray()

            }catch(error){
                console.error(error)
            }
            return usuarios
        },
        getUsuario:(root, args)=>{
            const usuario= Usuarios.filter(usuario=>usuario._id === args.id)
            return usuario.pop()

        }
    }
   
}

