import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router'; 
import { NgForm } from '@angular/forms'; 

import { PetService, Pet } from '../shared';

@Component({
  selector: 'app-editar-pet',
  templateUrl: './editar-pet.component.html',
  styleUrls: ['./editar-pet.component.css']
})
export class EditarPetComponent implements OnInit {
  pet: Pet;

  @ViewChild('formPet') formPet: NgForm;
  constructor(
    private petService: PetService,
  	private route: ActivatedRoute,
  	private router: Router) {}

  ngOnInit() {
  	const id = +this.route.snapshot.params['id'];
	this.pet = this.petService.buscarPorId(id);
  }

  atualizar(): void {
    if (this.formPet.form.valid) {
	    this.petService.atualizar(this.pet);
	    this.router.navigate(['/pets']);
    }
  }

}
