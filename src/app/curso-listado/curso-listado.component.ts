import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs";
import { CursosService } from "../cursos.service";
import { Curso } from "../curso";
import { Router } from '@angular/router';
import { NgxPaginationModule } from 'ngx-pagination';
import { faSort } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-curso-listado',
  templateUrl: './curso-listado.component.html',
  styleUrls: ['./curso-listado.component.css']
})
export class CursoListadoComponent implements OnInit {

  cursos: Observable<Curso[]>;
  paginaActual: number = 1;
  faSort = faSort;
  asc: boolean = true;
  constructor(private cursoService: CursosService,
    private router: Router) { }

  ngOnInit() {
    this.reloadData();
  }
  reloadData() {
    this.cursos = this.cursoService.buscarCursos(this.asc);
  }

  ordenar($event) {
    this.asc = !this.asc;
    console.log("Pagina antes del reload", this.paginaActual);
    this.reloadData();
    console.log("Pagina despues del reload", this.paginaActual);
  }
}
