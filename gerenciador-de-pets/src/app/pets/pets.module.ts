import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { PetService, PetConcluidaDirective } from './shared';

import { ListarPetComponent } from './listar';
import { CadastrarPetComponent } from './cadastrar';
import { EditarPetComponent } from './editar';


@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ],
  declarations: [
  	ListarPetComponent,
  	CadastrarPetComponent,
  	EditarPetComponent,
  	PetConcluidaDirective
  ],
  providers: [
  	PetService
  ]
})
export class PetsModule { }
