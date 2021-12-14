package com.example.demo.controles;

import java.util.ArrayList;
import java.util.List;
import java.util.Random;

import com.example.demo.models.Usuario;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
// repositorio de peticiones
public class Vistas {

    public static List<Usuario> database = new ArrayList<Usuario>();
    public static int position = -1;
    public static int contador =0;

    @GetMapping("/")

    public List<Usuario> index(){
        return Vistas.database;
    }
    @GetMapping ("/find/{id}")
        public Usuario find(@PathVariable int id){
            this.locate(id);
            if(position < 0 ){
                return null;

            }else{
                Usuario usuario = Vistas.database.get(position);
                position = -1;
                return usuario;

            }


        }
        @PostMapping("/update/{id}")
        public Usuario update(@PathVariable int id, @RequestBody Usuario usuario ){
            this.locate(id);
            if(position <0){
                return null;
            }
            else{
                Vistas.database.set(position, usuario);
                position = -1;
                return usuario;
            }
            

        }
        @GetMapping("/delete/{id}")
        public String delete(@PathVariable int id){
            this.locate(id);
            if(position < 0){
                return "Not found for removed";

            }else{
                Vistas.database.remove(position);
                position=-1;
                return "Removed id: "+ id;
            }

        }
        @PostMapping("/save")
        public Usuario save(@RequestBody Usuario usuario){
            Random rm = new Random();
            usuario.id= rm.nextInt(1000);
            Vistas.database.add(usuario);
            return usuario;
        }
    

    public void locate (int id){
        Vistas.database.forEach(data->{
            if(data.id == id){
                position = contador;

            }
            contador++;

        });
        contador =0;
    }

    
}
