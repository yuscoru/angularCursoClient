import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CursosService {
  private baseUrl = 'http://localhost:8080/rest/api/v1/cursos';
  constructor(private http: HttpClient) { }

  crearCurso(curso: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, curso);
  }

  buscarCursos(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }
}

