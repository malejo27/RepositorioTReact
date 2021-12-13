import React from "react";
import {AvForm, AvField, AvInput, AvGroup } from 'availity-reactstrap-validation';
import { Button, Label } from "reactstrap";

const CrearUsaurio = () =>{
    return (
        <>
        <h3 className="mb-3">Nuevo Usuario</h3>
        <AvForm>
            <AvGroup className="mb-3">
                <AvField name="nombre" label="Nombre" required></AvField> 

            </AvGroup>
            <AvGroup check className="mb-3">
                <AvInput type="checbox" name="copletado" />
                <Label   check for ="completado"> Completado</Label>
            </AvGroup>
            <div className="text-end">
                <Button color="primary">Guardar</Button>

            </div>

        </AvForm>

        </>
    );

}

export default CrearUsaurio;