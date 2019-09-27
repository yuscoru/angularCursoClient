import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CursoListadoComponent } from './curso-listado/curso-listado.component';
import { CrearCursoComponent } from './crear-curso/crear-curso.component';


const routes: Routes = [
  { path: 'rest/v1/cursos', component: CursoListadoComponent },
  { path: 'rest/v1/crearCurso', component: CrearCursoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
