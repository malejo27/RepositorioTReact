package com.example.demo.models;

public class Usuario {
    public int id;
  
    public String name;
    public String apellido;
    public String identificacion;
    public String correp;
    public String contrasena;
    public String rol;
    public String estado;

    public Usuario(){

    }
    
    public Usuario(int id, String name, String apellido, String identificacion, String correp, String contrasena,
            String rol, String estado) {
        this.id = id;
        this.name = name;
        this.apellido = apellido;
        this.identificacion = identificacion;
        this.correp = correp;
        this.contrasena = contrasena;
        this.rol = rol;
        this.estado = estado;
    }

    public int getId() {
        return id;
    }
    public void setId(int id) {
        this.id = id;
    }
    public void setName(String name){
        this.name=name;

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
    public String getName(){
        return name;
    }

    
}
