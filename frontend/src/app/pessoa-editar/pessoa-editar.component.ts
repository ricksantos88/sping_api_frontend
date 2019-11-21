import { Component, OnInit } from "@angular/core";
import { Router } from '@angular/router';

import { PessoaModel } from '../models/pessoa-model';

import { PessoaService } from '../services/pessoas.service';
import { ValidarCpf } from '../services/valida-cpf';

@Component({
    selector: "app-pessoa-editar",
    // templateUrl: "./pessoa-editar.component.html",
    templateUrl: "../pessoa-cadastro/pessoa-cadastro.component.html",
    styleUrls: ["./pessoa-editar.component.css"]
})
export class PessoaEditarComponent implements OnInit {
    constructor(private pessoaService : PessoaService, private router: Router,) {
    }

    public pessoaEditar;
    public exibir: boolean = false;
    public cpfValido: boolean = false;
    public pessoa = new PessoaModel(new Date());

    ngOnInit() {
        this.pessoaEditar = sessionStorage.getItem('pessoa');
        this.pessoaEditar = JSON.parse(this.pessoaEditar);

        this.pessoa = this.pessoaEditar;
        console.log('pessoa onInit >>>> ', this.pessoa);
        sessionStorage.removeItem('pessoa');
        console.log(sessionStorage.getItem('pessoa'))
    }

    salvar(){

        this.cpfValido = ValidarCpf.cpf(this.pessoa.cpf);
        if (!this.cpfValido) {
            this.exibir = true;
            return;
        } else {
            this.exibir = false;
            this.pessoaService.editar(this.pessoa).subscribe((data)=> {
                this.router.navigate(['/lista'])
            });
        }
    }

}
