import React from "react";
import {faClock, faCheckCircle, faEdit, faTrash} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';



const ListaUsuarios = ({ usuarios }) => {
  return (
    <>
      <h3 className="mb-3">Mi lista de usuarios</h3>

      {usuarios.map((usuario) => (
        <div className="mb-3 border rounded p-3" key={usuario.id}>
          <div>
            <div className="d-flex justify-content-between mb-1">
              <div className="fw-bold">{usuario.nombre}</div>
              <div className="text muted small">
                  <FontAwesomeIcon icon={faEdit} className="cursor-pointer"/> 
                  <FontAwesomeIcon icon={faTrash} className="cursor-pointer ms-2"/> 
              </div>
            </div>
            <div>
                {
                    usuario.completado ?
                    <div className="text-success small">
                        <FontAwesomeIcon icon={faCheckCircle} />{""}
                        completado
                    </div>
                    :
                    <div className="text-secondary small">
                        <FontAwesomeIcon icon={faClock} />{""}
                        Pendiente
                    </div>

                }

            </div>

          </div>
        </div>
      ))}
    </>
  );
};
export default ListaUsuarios;
