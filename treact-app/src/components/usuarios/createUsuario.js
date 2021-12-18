import React, {useRef} from "react";
import {AvForm, AvField, AvGroup } from 'availity-reactstrap-validation';
import { Button } from "reactstrap";

const CrearUsaurio = ({usuario, onSubmit}) =>{
    let form = useRef();
    const _onSubmit = (values)=>{
        onSubmit(values);
        form.reset();
    }

    return (
        <>
        <h3 className="mb-3">{usuario ? 'Editar': 'Nueva' } usuario</h3>
        <AvForm ref={c=>(form = c)} onValidSubmit={(_, values)=> _onSubmit(values)} >
            <AvGroup className="mb-3">
                <AvField name="nombre" label="Nombre" required value={usuario ? usuario.nombre : '' }></AvField> 

            </AvGroup>
            
            <div className="text-end">
                <Button color="primary">Guardar</Button>

            </div>

        </AvForm>

        </>
    );

}

export default CrearUsaurio;