import { Component, OnInit } from "@angular/core";
import { Router } from '@angular/router';

import { PessoaService } from '../services/pessoas.service';

import { PessoaModel } from '../models/pessoa-model';
import { ValidarCpf } from '../services/valida-cpf';

@Component({
    selector: "app-pessoa-cadastro",
    templateUrl: "./pessoa-cadastro.component.html",
    styleUrls: ["./pessoa-cadastro.component.css"]
})
export class PessoaCadastroComponent implements OnInit {
    constructor(private pessoaService : PessoaService,
                private router: Router,
                ) {
    }

    public exibir: boolean = false;
    public cpfValido: boolean = false;
    public pessoa = new PessoaModel(new Date());

    ngOnInit() {}

    salvar(){

        this.cpfValido = ValidarCpf.cpf(this.pessoa.cpf);
        if (!this.cpfValido) {
            this.exibir = true;
            return;
        } else {
            this.exibir = false;
            this.pessoa.dataDeNascimento = new Date(this.pessoa.dataDeNascimento)

            let pessoaOBJ = {
                nome: this.pessoa.nome,
                cpf: this.pessoa.cpf,
                dataDeNascimento: this.pessoa.dataDeNascimento.toLocaleDateString("pt-BR"),
                sexo: this.pessoa.sexo,
                email: this.pessoa.email,
                naturalidade: this.pessoa.naturalidade,
                nacionalidade: this.pessoa.nacionalidade
            }

            this.pessoaService.adicionar(pessoaOBJ).subscribe((data) => {
                this.router.navigate(['/lista'])
                // this.pessoa = new PessoaModel(new Date());
                // this.pessoa.dataDeNascimento = new Date();
            })
        };
    };
}
