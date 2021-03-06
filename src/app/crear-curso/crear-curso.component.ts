import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable } from "rxjs";
import { ProfesoresService } from "../profesores.service";
import { CursosService } from "../cursos.service";
import { Profesor } from "../profesor";
import { Curso } from "../curso";
import { Router, NavigationEnd } from '@angular/router';


@Component({
  selector: 'app-crear-curso',
  templateUrl: './crear-curso.component.html',
  styleUrls: ['./crear-curso.component.css']
})
export class CrearCursoComponent implements OnInit{
  profesores: Observable<Profesor[]>;
  curso: Curso = new Curso();
  submitted = false;
  navigationSubscription;

  nivelesCurso = [
    { id: 'BASICO', name: 'BASICO' },
    { id: 'MEDIO', name: 'MEDIO' },
    { id: 'AVANZADO', name: 'AVANZADO' }
  ];
  selectedUserIds: number[];
  checkboxFlag: boolean;
  constructor(private profesoresService: ProfesoresService,
    private cursosService: CursosService,
    private router: Router) {
  }

  ngOnInit() {
    this.reloadData();
  }
  reloadData() {
    this.profesores = this.buscarProfesores();
  }
  newCurso(): void {
    this.submitted = false;
    this.curso = new Curso();
  }

  save() {
    this.saveCurso().subscribe(data =>
      console.log(data),
      error => console.log(error));
    this.curso = new Curso();
    this.gotoList();
  }

  saveCurso(): Observable<Object>{
    return this.cursosService.crearCurso(this.curso); 
  }
  buscarProfesores(): Observable<Profesor[]> {
    return this.profesoresService.buscarProfesores();
  }
  onSubmit() {
    this.submitted = true;
    this.save();
  }

  gotoList() {
    this.router.navigate(['/rest/v1/cursos']);
  }


}
