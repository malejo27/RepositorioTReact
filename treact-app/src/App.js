

import React from 'react';
import ListUsuarios from "./components/usuarios/listaUsuarios";
import {Col, Container, Row} from 'reactstrap';
import { useState, useEffect } from 'react';
import axios from 'axios';



import './App.css';
import CrearUsaurio from './components/usuarios/createUsuario';


function App() {
  const [usuarios, setUsuarios]= useState([]);

  const cargarUsuarios= () =>{
    axios.get('http://localhost:3000/api')
    .then(({data}) => setUsuarios(data));
  }
  useEffect(cargarUsuarios, []) 

  return (
    <>
   
    <Container>
      <Row>
        <Col md={6}>
        <ListUsuarios usuarios={usuarios}></ListUsuarios>
        </Col>
        <Col  md={6}>
        <CrearUsaurio />
        </Col>
      </Row>
    </Container>
    </>

    
  );
}

export default App;
