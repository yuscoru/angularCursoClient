import { LIST_CURSOS_DUMMY } from './cursos.listaDummy.spec';
import { CURSO_DUMMY } from './cursos.cursoDummy.spec'; 
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable,of } from 'rxjs';
import { Curso } from "./curso";
import { Response, ResponseOptions } from '@angular/http';

export class CursosServiceMock {
  crearCurso(curso: Object): Observable<Curso> {
    const responseOptions: ResponseOptions = new ResponseOptions({
      body: CURSO_DUMMY
    });
    const response: Response = new Response(responseOptions);
    return of(response.json());
  }

  buscarCursos(asc: boolean): Observable<Curso[]> {
    const responseOptions: ResponseOptions = new ResponseOptions({
      body: LIST_CURSOS_DUMMY
    });
    const response: Response = new Response(responseOptions);
    return of(response.json());
  }
}

