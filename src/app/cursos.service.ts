import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Curso } from "./curso";

@Injectable({
  providedIn: 'root'
})
export class CursosService {
  private baseUrl = 'http://localhost:8080/rest/api/v1/cursos';
  constructor(private http: HttpClient) { }

  crearCurso(curso: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}/curso`, curso);
  }

  buscarCursos(asc:boolean): Observable<any> {
    return this.http.get(`${this.baseUrl}?&ascendente=${asc}`);
  }
}

