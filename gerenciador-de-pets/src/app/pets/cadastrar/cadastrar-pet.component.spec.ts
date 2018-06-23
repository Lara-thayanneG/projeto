import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastrarPetComponent } from './cadastrar-pet.component';

describe('CadastrarPetComponent', () => {
  let component: CadastrarPetComponent;
  let fixture: ComponentFixture<CadastrarPetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CadastrarPetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastrarPetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

});
