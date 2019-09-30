import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CursoListadoComponent } from './curso-listado/curso-listado.component';
import { CrearCursoComponent } from './crear-curso/crear-curso.component';


const routes: Routes = [
  { path: '', redirectTo: 'rest/v1/cursos', pathMatch: 'full' },
  { path: 'rest/v1/cursos', component: CursoListadoComponent, runGuardsAndResolvers: 'always' },
  { path: 'rest/v1/crearCurso', component: CrearCursoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { onSameUrlNavigation: 'reload' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
