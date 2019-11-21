import { Component, OnInit } from "@angular/core";
import { Router } from '@angular/router';

import { PessoaService } from '../services/pessoas.service';

@Component({
    selector: "app-pessoa-lista",
    templateUrl: "./pessoa-lista.component.html",
    styleUrls: ["./pessoa-lista.component.css"]
})
export class PessoaListaComponent implements OnInit {

    public pessoas: Array<any> = [];

    constructor(private pessoaService : PessoaService,
                private router: Router,
                ) {

    };

    ngOnInit() {
        this.consultar();
        console.log('aqui!!!')
    };

    consultar(){
        this.pessoaService.listar().subscribe(data => {
            this.pessoas = data;
            console.log(this.pessoas);
        });
    };

    editar(pessoa){
        console.log('editar ... pessoa.Id', pessoa.id);
        sessionStorage.setItem('pessoa', JSON.stringify(pessoa));
        this.router.navigate(['/editar'])
    }

    remover(pessoa){
        console.log('remover ... pessoa.Id', pessoa.id);
        this.pessoaService.remover(pessoa).subscribe((data) => {
            this.consultar();
        })
    }

}
