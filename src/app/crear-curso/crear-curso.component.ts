import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs";
import { ProfesoresService } from "../profesores.service";
import { Profesor } from "../profesor";


@Component({
  selector: 'app-crear-curso',
  templateUrl: './crear-curso.component.html',
  styleUrls: ['./crear-curso.component.css']
})
export class CrearCursoComponent implements OnInit {
  profesores: Observable<Profesor[]>;
  constructor(private profesoresService: ProfesoresService) { }

  ngOnInit() {
    this.reloadData();
  }
  reloadData() {
    this.profesores = this.profesoresService.buscarProfesores();
  }
}
