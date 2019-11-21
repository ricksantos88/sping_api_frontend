package com.wendel.api.resource;

import java.util.ArrayList;
import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.wendel.api.model.Pessoa;
import com.wendel.api.repository.PessoaRepository;
import com.wendel.api.validators.Validator;

@RestController
@RequestMapping("/pessoas")
@CrossOrigin("${origem-permitida}")
public class PessoaResource {
	
	@Autowired
	private PessoaRepository pessoaRepository;
		
	@GetMapping
	public List<Pessoa> listar(){
		return pessoaRepository.findAll();
	}
	
	@PostMapping
	public ResponseEntity<Object> adicionar(@RequestBody @Valid Pessoa pessoa) {
		
		ArrayList<String> errorList = new ArrayList<String>();
		boolean hasErro = false;
		
		if (!Validator.isCPF(pessoa.getCpf())) {
//			System.out.println("AQUI CPF");
			errorList.add("CPF inválido");
			hasErro = true;
		}	
		if (!Validator.isEmail(pessoa.getEmail())) {
//			System.out.println("AQUI EMAIL");
			errorList.add("E-mail inválido");
			hasErro = true;
		}
		
		if (hasErro) {
			return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(errorList);
		}
		
		Pessoa pessoaSalva = pessoaRepository.save(pessoa);
		return ResponseEntity.status(HttpStatus.CREATED).body(pessoaSalva);
	}
	
	@PutMapping("/{id}")
	public ResponseEntity<Object> atualizar(@PathVariable Long id, @Valid @RequestBody Pessoa pessoa){
		
		ArrayList<String> errorList = new ArrayList<String>();
		boolean hasErro = false;
		
		if (!Validator.isCPF(pessoa.getCpf())) {
//			System.out.println("AQUI CPF");
			errorList.add("CPF inválido");
			hasErro = true;
		}	
		if (!Validator.isEmail(pessoa.getEmail())) {
//			System.out.println("AQUI EMAIL");
			errorList.add("E-mail inválido");
			hasErro = true;
		}
		
		if (hasErro) {
			return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(errorList);
		}
		
		Pessoa pessoaRetorno = pessoaRepository.save(pessoa);
		return ResponseEntity.ok(pessoaRetorno);
		
	}
	
	@DeleteMapping("/{codigo}")
	@ResponseStatus(HttpStatus.NO_CONTENT)
	public void remover (@PathVariable Long codigo) {
		pessoaRepository.deleteById(codigo);
	}

}
