package com.wendel.api.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.wendel.api.model.Pessoa;

public interface PessoaRepository extends JpaRepository<Pessoa, Long>{

}
