import { Profesor } from "./profesor";
export class Curso {
  id:number;
  nivel:string;
  horas:number;
  titulo:string;
  activo: boolean;
  idProfesor: number;
  profesor: Profesor;
}
