import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { PessoaListaComponent } from './pessoa-lista/pessoa-lista.component';
import { PessoaCadastroComponent } from './pessoa-cadastro/pessoa-cadastro.component';
import { PessoaEditarComponent } from './pessoa-editar/pessoa-editar.component';

const routes: Routes = [
    {path: '', component: PessoaListaComponent},
    {path: 'cadastro', component: PessoaCadastroComponent},
    {path: 'lista', component: PessoaListaComponent},
    {path: 'editar', component: PessoaEditarComponent},
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {} export const
RoutingComponent = [PessoaListaComponent, PessoaCadastroComponent]
