'use strict'

//const connectDb = require('./db')
const Usuarios=[
    {
        _id:"1",
        nombre: "manuel",
        apellido: "jojoa",
        identificacion:"106177168",
        correo:"manuel@gmail.com",
        contrasena:"ajdhsuodjs",
        rol:"administrador",
        estado:"activo"	
    },
    {
        
        nombre: "johana",
        apellido: "argoty",
        identificacion:"106177187",
        correo:"johana@gmail.com",
        contrasena:"ajdhsuodjs",
        rol:"estudiante",
        estado:"activo"	
    }
]



module.exports={
    Query:{
       
        getUsuarios:()=>{
            return Usuarios
        }

    }
   
}


        // getUsuarios:async()=>{
        //     let db
        //     let usuarios =[]
        //     try{
        //         db = await connectDb()
        //         usuarios = await db.collection('usuarios').find().toArray()

        //     }catch(error){
        //         console.error(error)
        //     }
        //     return usuarios
        // },
        // getUsuario:(root, args)=>{
        //     const usuario= Usuarios.filter(usuario=>usuario._id === args.id)
        //     return usuario.pop()

        // }