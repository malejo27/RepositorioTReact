package com.microservices.repo;

import com.microservices.model.Usuario;

import org.springframework.data.mongodb.repository.MongoRepository;

public interface UsuarioRepository extends MongoRepository<Usuario, String> {

    Object findAllById(String id);

    

    
}
