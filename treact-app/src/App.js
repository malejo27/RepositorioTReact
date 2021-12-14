

import React from 'react';
import ListUsuarios from "./components/usuarios/listaUsuarios";
import {Col, Container, Row} from 'reactstrap';
import { useState, useEffect } from 'react';
import axios from 'axios';



import './App.css';
import CrearUsaurio from './components/usuarios/createUsuario';
import Footer from './components/shared/Footer';


function App() {
  // const [usuarios, setUsuarios]= useState([]);

  // const cargarUsuarios= () =>{
  //   axios.get('http://localhost:8080')
  //   .then(({data}) => setUsuarios(data));
  // }
  // useEffect(cargarUsuarios, []) 

  return (
    <>
   
    <Container>
      <Row>
        <Col md={6}>
        <ListUsuarios ></ListUsuarios>
        </Col>
        <Col  md={6}>
        <CrearUsaurio />
        </Col>
      </Row>
      <Footer></Footer>
    </Container>
    </>

    
  );
}

export default App;
