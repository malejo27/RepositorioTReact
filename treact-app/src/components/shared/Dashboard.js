import React from 'react';
// import { consultarDocumentoDatabase, logOutUsuario } from '../conexion-bd/funciones';
 import {  withRouter } from "react-router-dom"



 function Dashboard({ usuario }) {
//     const handleLogOut = () => {
//         logOutUsuario()
//     }
//     const [usuarioBd, setUsuarioBd] = useState([])

//     const consultarUsuario = async (idUsuario) => {
//         const Usuarios = await consultarDocumentoDatabase('usuarios', idUsuario)
//         setUsuarioBd(Usuarios)
//         return usuarioBd
//     }

//     useEffect(() => {
//         if (usuario) {
//             consultarUsuario(usuario.id)
//         }
//     }, [usuario])

    // console.log(usuarioBd)


    return (
        <>

           
        </>
    )
}

export default withRouter(Dashboard);