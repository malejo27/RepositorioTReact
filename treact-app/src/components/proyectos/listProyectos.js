import React from "react";
// import { consultarDatabase, eliminarDocumentoDatabase } from '../conexion-bd/funciones';


function Proyectos() {

    // const [listaRoles, setlistaRoles] = useState([])

    // const handleCargarDatos = async () => {
    //     const listaRoles = await consultarDatabase('proyecto')
    //     setlistaRoles(listaRoles)
    // }
    // /*  useEffect(() => {
    //      handleCargarDatos()
    //  }, []) */


    // handleCargarDatos()

   

    // const deleteRol = (event) => {
    //     const eliminar = async () => {
    //         const respuestaEliminar = await eliminarDocumentoDatabase('rol', event);
    //     }

    //     if (window.confirm("De verdad quieres eliminar el rol?")) {
    //         eliminar();
    //     } else {
    //         window.location.reload();
    //     }
    // }
    // const [busqueda, setBusqueda] = useState('')

    // const Filter = (search, lista) => {
    //     if (search == '') {
    //         return lista
    //     } else {
    //         var expression = new RegExp(search, 'i');
    //         var listFiletered = [];
    //         lista.forEach((C) => {
    //             if (expression.test(C.Rol) || expression.test(C.Instructor)) {
    //                 listFiletered.push(C)
    //             }
    //         })
    //         return listFiletered;
    //     }
    // }

    // const cursos = Filter(busqueda, listaRoles);

    return (
        <>
            <div class="content-wrapper">
                <section class="content">
                    <div class="container-fluid">
                        <h1>Gestor de Roles</h1>
                        <br />

                        <div className="row d-flex align-items-center justify-content-center">
                            <div className="col-sm-1 align-text-bottom"><h5>Buscar:</h5></div>
                            <div className="col-sm-5">
                            </div>
                           
                        </div>

                        <hr />
                        <table id="TablaUsuarios" class="table table-striped">
                            <thead class="table-dark">
                                <tr>
                                    <th class="text-center">Indice</th>
                                    <th class="text-center">Nombre</th>
                                    <th className="text-center">Acción</th>


                                </tr>
                            </thead>
                            <tbody>

                                {/* {
                                    listaRoles.map((rol, index) => {
                                        return (
                                            <tr key={rol.id}>
                                                <th class="text-center">{index + 1}</th>
                                                <td class="text-center">{rol.nombre}</td>


                                                <td className="text-center">
                                                    <Link to={`/editar_rol/${rol.id}`}>
                                                        <button className='btn btn-sm'><i className="fas fa-edit"></i></button>
                                                    </Link>
                                                </td>
                                            </tr>
                                        )
                                    })
                                } 
                                */}
                            </tbody>
                        </table>
                    </div>
                </section>
            </div>
        </>
    )
}

export default Proyectos;