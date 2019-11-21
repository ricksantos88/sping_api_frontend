import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class PessoaService {

    baseURL = 'http://localhost:8080/pessoas'

    constructor(private http : HttpClient){}

    listar(){
        return this.http.get<Array<any>>(this.baseURL);
    }

    adicionar(pessoa: any){
        return this.http.post(this.baseURL, pessoa);
    }

    editar(pessoa: any){
        return this.http.put(`${this.baseURL}/${pessoa.id}`, pessoa);
    }

    remover(pessoa: any){
        return this.http.delete(`${this.baseURL}/${pessoa.id}`, pessoa)
    }

}
