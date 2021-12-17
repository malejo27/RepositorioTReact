package com.microservices.controller;

import java.util.List;

import com.microservices.model.Usuario;
import com.microservices.repo.UsuarioRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin
@RestController
@RequestMapping("/usuarios")

public class UsuarioController {
   
    
    @Autowired
    private UsuarioRepository usuarioRepository;

    @GetMapping("")
    List<Usuario> index(){
        return usuarioRepository.findAll(); 

    }

    @ResponseStatus(HttpStatus.CREATED)
    @PostMapping()
    Usuario create(@RequestBody Usuario usuario){
        return usuarioRepository.save(usuario)

    }
    @PostMapping("id")
    Usuario update(@PathVariable String id, @RequestBody Usuario usuario){
        Usuario usuarioFromDB= usuarioRepository
        .findById(id)
        .orElseThrow(RuntimeException::new);

        usuarioFromDB.setNombre(usuario.getNombre());
        usuarioFromDB.setApellido(usuario.getApellido())

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

}
