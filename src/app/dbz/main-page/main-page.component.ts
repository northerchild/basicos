import { Component, OnInit } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../service/dbz.service';


@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

  constructor(private dbzService:DbzService) {

   }

  ngOnInit(): void {
  }

  nuevo:Personaje = {
    nombre:'',
    poder:0
  }

}
