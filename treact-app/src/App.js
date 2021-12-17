import React from 'react';
import ListUsuarios from "./components/usuarios/ListaUsuarios";
import {Col, Container, Row} from 'reactstrap';
import { useState, useEffect } from 'react';
import axios from 'axios';
import 'boostrap/dist/css/boostrap.min.css';
import {Table, Button, Container, Modal, ModalBody, ModalHeader, FormGroup, ModalFooter} from 'reactstrap';

//import './App.css';
import CrearUsaurio from './components/usuarios/createUsuario';
import Footer from './components/shared/Footer';

const data =[

]
function App() {
   const [usuarios, setUsuarios]= useState([]);

   const cargarUsuarios= () =>{
     axios.get('http://localhost:8080/usuarios')
     .then(({data}) => setUsuarios(data));
   }
   useEffect(cargarUsuarios, []);

   const onSubmit = (values)=>{
     if (tarea){
      axios.put(`http://localhost:8080/usuarios/${usuario.id}`, values)
      .then(()=>cargarUsuarios());
  
     }else{
      axios.post('http://localhost:8080/usuarios', values)
      .then(()=>{
        setTarea();
        cargarUsuarios();
        
      });
     }
    
   }

   const eliminarUsuario = (usuario) => {
    axios.delete(`http://localhost:8080/usuarios/${usuario.id}`)
    .then(()=>cargarUsuarios());

   }
   const editarUsuario = (usuario) => {
    axios.put(`http://localhost:8080/usuarios/${usuario.id}`)
    .then(()=>cargarUsuarios());

   }
   
   const mapDispatchToProps = {
     
   }
   
  return (
    <>
   
    <Container>
      <Banner/>
      <Row className="mt-5">
        <Col md={6}>
        <ListUsuarios usuarios={usuarios} onDelete={eliminarUsuario} onEdit= {(usuario)=> setUsuarios()} />
        </Col>
        <Col  md={6}>
        <CrearUsaurio onSubmit={onSubmit} usuario= {usuario}/>
        </Col>
      </Row>
      <Footer></Footer>
    </Container>
    </>

    
  );
}

export default App;
