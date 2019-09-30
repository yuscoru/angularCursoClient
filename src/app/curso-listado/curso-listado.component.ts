import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs";
import { CursosService } from "../cursos.service";
import { Curso } from "../curso";
import { Router } from '@angular/router';
import { faSortUp } from '@fortawesome/free-solid-svg-icons';
import { faSortDown } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-curso-listado',
  templateUrl: './curso-listado.component.html',
  styleUrls: ['./curso-listado.component.css']
})
export class CursoListadoComponent implements OnInit {

  cursos: Observable<Curso[]>;
  paginaActual: number = 1;
  faSortUp = faSortUp;
  faSortDown = faSortDown;
  asc: boolean = true;
  constructor(private cursoService: CursosService,
    private router: Router) { }

  ngOnInit() {
    this.reloadData();
    this.asc = !this.asc;
  }
  reloadData() {
    this.cursos = this.cursoService.buscarCursos(this.asc);
  }

  ordenar($event) {
    this.reloadData();
    this.asc = !this.asc;
  }
}
