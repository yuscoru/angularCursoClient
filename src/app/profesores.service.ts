import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ProfesoresService {
  private baseUrl = 'http://localhost:8080/rest/api/v1/profesores';
  constructor(private http: HttpClient) { }

  buscarProfesores(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }}
