import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs";
import { CursosService } from "../cursos.service";
import { Curso } from "../curso";
import { Router } from '@angular/router';

@Component({
  selector: 'app-curso-listado',
  templateUrl: './curso-listado.component.html',
  styleUrls: ['./curso-listado.component.css']
})
export class CursoListadoComponent implements OnInit {
  cursos: Observable<Curso[]>;
  constructor(private cursoService: CursosService,
    private router: Router) { }

  ngOnInit() {
    this.reloadData();
  }
  reloadData() {
    this.cursos = this.cursoService.buscarCursos();
  }
}
