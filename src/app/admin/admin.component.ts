import { Component, OnInit } from '@angular/core';
import { UniversalvariablesService } from '../universalvariables.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(public uv : UniversalvariablesService) { 
    this.uv.titulo = "Torneo Robótica - Inicio de seción"
   }

  ngOnInit() {
  }

}
