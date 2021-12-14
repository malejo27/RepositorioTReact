package com.example.demo.models;

import java.sql.Date;

import javax.xml.crypto.Data;

public class Proyecto {

    public String nombreProyeto;
    public String objetivos;
    public String presupuesto;
    public Date fechaInicio;
    public Date fechaFIn;
    public Proyecto(String nombreProyeto, String objetivos, String presupuesto, Date fechaInicio, Date fechaFIn) {
        this.nombreProyeto = nombreProyeto;
        this.objetivos = objetivos;
        this.presupuesto = presupuesto;
        this.fechaInicio = fechaInicio;
        this.fechaFIn = fechaFIn;
    }
    public String getNombreProyeto() {
        return nombreProyeto;
    }
    public void setNombreProyeto(String nombreProyeto) {
        this.nombreProyeto = nombreProyeto;
    }
    public String getObjetivos() {
        return objetivos;
    }
    public void setObjetivos(String objetivos) {
        this.objetivos = objetivos;
    }
    public String getPresupuesto() {
        return presupuesto;
    }
    public void setPresupuesto(String presupuesto) {
        this.presupuesto = presupuesto;
    }
    public Date getFechaInicio() {
        return fechaInicio;
    }
    public void setFechaInicio(Date fechaInicio) {
        this.fechaInicio = fechaInicio;
    }
    public Date getFechaFIn() {
        return fechaFIn;
    }
    public void setFechaFIn(Date fechaFIn) {
        this.fechaFIn = fechaFIn;
    }
    
}
