import { Routes } from '@angular/router';

import { ListarPetComponent } from './listar';
import { CadastrarPetComponent } from './cadastrar';
import { EditarPetComponent } from './editar';

export const PetRoutes: Routes = [
	{ 
		path: 'pets', 
		redirectTo: 'pets/listar' 
	},
	{ 
		path: 'pets/listar', 
		component: ListarPetComponent 
	}, 
	{ 
		path: 'pets/cadastrar', 
		component: CadastrarPetComponent 
	},
	{ 
		path: 'pets/editar/:id', 
		component: EditarPetComponent 
	}
];
