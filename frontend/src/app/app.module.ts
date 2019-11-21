import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule, RoutingComponent } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { CalendarModule } from 'primeng/calendar';

import { AppComponent } from './app.component';
import { PessoaListaComponent } from './pessoa-lista/pessoa-lista.component';
import { PessoaCadastroComponent } from './pessoa-cadastro/pessoa-cadastro.component';
import { NavbarComponent } from './navbar/navbar.component';

import { PessoaService } from './services/pessoas.service';
import { PessoaEditarComponent } from './pessoa-editar/pessoa-editar.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PessoaListaComponent,
    PessoaCadastroComponent,
    RoutingComponent,
    PessoaEditarComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    //Modulos do primeng
    CalendarModule
  ],
  providers: [
    PessoaService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
