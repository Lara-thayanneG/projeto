import { Injectable } from '@angular/core';

import { Pet } from './';

@Injectable()
export class PetService {

  constructor() { }

  listarTodos(): Pet[] {
  	const pets = localStorage['pets'];
  	return pets ? JSON.parse(pets) : [];
  }

  cadastrar(pet: Pet): void {
  	const pets = this.listarTodos();
  	pet.id = new Date().getTime();
  	pets.push(pet);
  	localStorage['pets'] = JSON.stringify(pets);
  }

  buscarPorId(id: number): Pet {
    const pets: Pet[] = this.listarTodos();
    return pets.find(pet => pet.id === id);
  }

  atualizar(pet: Pet): void {
    const pets: Pet[] = this.listarTodos();
    pets.forEach((obj, index, objs) => { 
      if (pet.id === obj.id) {
        objs[index] = pet;
      }
    });
    localStorage['pets'] = JSON.stringify(pets);
  }

  remover(id: number): void {
    let pets: Pet[] = this.listarTodos();
    pets = pets.filter(pet => pet.id !== id);
    localStorage['pets'] = JSON.stringify(pets);
  }

  alterarStatus(id: number): void {
    const pets: Pet[] = this.listarTodos();
    pets.forEach((obj, index, objs) => { 
      if (id === obj.id) {
        objs[index].concluida = !obj.concluida;
      }
    });
    localStorage['pets'] = JSON.stringify(pets);
  }

}
