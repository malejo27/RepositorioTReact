package com.example.demo.models;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Data
// @Document(collection="usuarios")
@Document
public class Usuario {
    @Id
    public String id;
  
    public String nombre;
    public String apellido;
    public String identificacion;
    public String correp;
    public String contrasena;
    public String rol;
    public String estado;

  
   
    
    public Usuario(String id, String nombre, String apellido, String identificacion, String correp, String contrasena,
            String rol, String estado) {
        this.id = id;
        this.nombre = nombre;
        this.apellido = apellido;
        this.identificacion = identificacion;
        this.correp = correp;
        this.contrasena = contrasena;
        this.rol = rol;
        this.estado = estado;
    }

    
    public String getId() {
        return id;
    }


    public void setId(String id) {
        this.id = id;
    }


    public void setNombre(String nombre){
        this.nombre=nombre;

    }
    public String getApellido() {
        return apellido;
    }
    public void setApellido(String apellido) {
        this.apellido = apellido;
    }
    public String getIdentificacion() {
        return identificacion;
    }
    public void setIdentificacion(String identificacion) {
        this.identificacion = identificacion;
    }
    public String getCorrep() {
        return correp;
    }
    public void setCorrep(String correp) {
        this.correp = correp;
    }
    public String getContrasena() {
        return contrasena;
    }
    public void setContrasena(String contrasena) {
        this.contrasena = contrasena;
    }
    public String getRol() {
        return rol;
    }
    public void setRol(String rol) {
        this.rol = rol;
    }
    public String getEstado() {
        return estado;
    }
    public void setEstado(String estado) {
        this.estado = estado;
    }
    public String getNombre(){
        return nombre;
    }

    
}
