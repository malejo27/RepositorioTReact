package com.example.demo.controles;

import java.util.ArrayList;
import java.util.List;
import java.util.Random;

import com.example.demo.models.Usuario;
import com.example.demo.repo.UsuarioRepo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.CrossOrigin;
@CrossOrigin
@RestController
@RequestMapping("/usuarios")
public class Vistas {

    //  public static List<Usuario> database = new ArrayList<Usuario>();
    //  public static int position = -1;
    //  public static int contador =0;

    // @GetMapping("/")

    // public List<Usuario> index(){
    //     return Vistas.database;
    // }

    @Autowired
    private UsuarioRepo usuarioRepository; 

    @GetMapping("")
    List<Usuario> index(){
        return usuarioRepository.findAll(); 

    }
    @ResponseStatus(HttpStatus.CREATED)
    @PostMapping("")
    Usuario create(@RequestBody Usuario usuario){
        return usuarioRepository.save(usuario);

    }
    @PostMapping("id")
    Usuario update(@PathVariable String id, @RequestBody Usuario usuario){
        Usuario usuarioFromDB= usuarioRepository
        .findById(id)
        .orElseThrow(RuntimeException::new);

        usuarioFromDB.setNombre(usuario.getNombre());
        usuarioFromDB.setApellido(usuario.getApellido());

        return usuarioRepository.save(usuarioFromDB);


    }
    @ResponseStatus(HttpStatus.NO_CONTENT)
    @DeleteMapping("{id}")
    void delete(@PathVariable String id){
        Usuario usuario= usuarioRepository
        .findById(id)
        .orElseThrow(RuntimeException::new);

   
    usuarioRepository.delete(usuario);

 }
    // @GetMapping ("/find/{id}")
    //     public Usuario find(@PathVariable int id){
    //         this.locate(id);
    //         if(position < 0 ){
    //             return null;

    //         }else{
    //             Usuario usuario = Vistas.database.get(position);
    //             position = -1;
    //             return usuario;

    //         }


    //     }
    //     @PostMapping("/update/{id}")
    //     public Usuario update(@PathVariable int id, @RequestBody Usuario usuario ){
    //         this.locate(id);
    //         if(position <0){
    //             return null;
    //         }
    //         else{
    //             Vistas.database.set(position, usuario);
    //             position = -1;
    //             return usuario;
    //         }
            

    //     }
    //     @GetMapping("/delete/{id}")
    //     public String delete(@PathVariable int id){
    //         this.locate(id);
    //         if(position < 0){
    //             return "Not found for removed";

    //         }else{
    //             Vistas.database.remove(position);
    //             position=-1;
    //             return "Removed id: "+ id;
    //         }

    //     }
    //     @PostMapping("/save")
    //     public Usuario save(@RequestBody Usuario usuario){
    //         Random rm = new Random();
    //         usuario.id= rm.nextInt(1000);
    //         Vistas.database.add(usuario);
    //         return usuario;
    //     }
    

    // public void locate (int id){
    //     Vistas.database.forEach(data->{
    //         if(data.id == id){
    //             position = contador;

    //         }
    //         contador++;

    //     });
    //     contador =0;
    // }

    
}
