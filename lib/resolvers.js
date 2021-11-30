'use strict'

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
    getUsuarios:()=>{
        return Usuarios
    }
}