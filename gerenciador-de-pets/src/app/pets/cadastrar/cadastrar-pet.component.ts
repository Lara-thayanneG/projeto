import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms'; 

import { PetService, Pet } from '../shared';

@Component({
  selector: 'app-cadastrar-pet',
  templateUrl: './cadastrar-pet.component.html',
  styleUrls: ['./cadastrar-pet.component.css']
})
export class CadastrarPetComponent implements OnInit {

  @ViewChild('formPet') formPet: NgForm;
  pet: Pet;

  constructor(
    private petService: PetService,
  	private router: Router) { }

  ngOnInit() {
  	this.pet = new Pet();
  }

  cadastrar(): void {
    if (this.formPet.form.valid) {
  	  this.petService.cadastrar(this.pet);
  	  this.router.navigate(["/pets"]);
    }
  }

}
