import { Component, OnInit } from '@angular/core';

import { PetService, Pet } from '../shared';

@Component({
  selector: 'app-listar-pet',
  templateUrl: './listar-pet.component.html',
  styleUrls: ['./listar-pet.component.css']
})
export class ListarPetComponent implements OnInit {

  pets: Pet[];

  constructor(private petService: PetService) {}

  ngOnInit() {
  	this.pets = this.listarTodos();
  }

  listarTodos(): Pet[] {
  	return this.petService.listarTodos();
  }

  remover($event: any, pet: Pet): void {
    $event.preventDefault();
    if (confirm('Deseja remover o pet "' + pet.nome + '"?')) {
      this.petService.remover(pet.id);
      this.pets = this.listarTodos();
    }
  }

  alterarStatus(pet: Pet): void {
    if (confirm('Deseja alterar o status do pet "' + pet.nome + '"?')) {
      this.petService.alterarStatus(pet.id);
      this.pets = this.listarTodos();
    }
  }

}
