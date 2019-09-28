import { Profesor } from "./profesor";
export class Curso {
  id:number;
  nivel:string;
  horas:number;
  titulo:string;
  activo: number;
  profesor: Profesor;
}
