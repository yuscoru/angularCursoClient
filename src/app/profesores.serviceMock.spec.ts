import { LIST_PROFESORES_DUMMY } from './profesores.listaDummy.spec';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable,of } from 'rxjs';
import { Profesor } from "./profesor";
import { Response, ResponseOptions } from '@angular/http';

export class ProfesoresServiceMock {
  buscarProfesores(): Observable<Profesor[]> {
    const responseOptions: ResponseOptions = new ResponseOptions({
      body: LIST_PROFESORES_DUMMY
    });
    const response: Response = new Response(responseOptions);
    return of(response.json());
  }
}


