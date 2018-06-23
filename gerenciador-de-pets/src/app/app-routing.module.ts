import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PetRoutes } from './pets';

export const routes: Routes = [
	{ 
		path: '', 
		redirectTo: '/pets/listar', 
		pathMatch: 'full' 
	},
	...PetRoutes
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
