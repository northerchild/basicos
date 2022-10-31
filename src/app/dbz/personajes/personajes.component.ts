import { Component, Input, OnInit } from '@angular/core';
import { DbzService } from '../service/dbz.service';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  styleUrls: ['./personajes.component.css']
})
export class PersonajesComponent {

  get personajes(){
    return this.dbzService.personajes;
  }

  constructor(private dbzService:DbzService) {
    this.dbzService
   }

}
