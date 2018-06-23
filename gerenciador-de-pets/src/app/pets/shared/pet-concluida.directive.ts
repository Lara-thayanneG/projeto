import { Directive, ElementRef, Input, OnInit } from '@angular/core';


@Directive({ 
	selector: '[petConcluida]' 
})


export class PetConcluidaDirective implements OnInit  {
   
    @Input() petConcluida: boolean;

    constructor(private el: ElementRef) {}

    ngOnInit() {
      if (this.petConcluida) {
        this.el.nativeElement.style.textDecoration = "line-through";
      }
    }
}
