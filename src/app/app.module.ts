import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CrearCursoComponent } from './crear-curso/crear-curso.component';
import { CursoDetalleComponent } from './curso-detalle/curso-detalle.component';
import { CursoListadoComponent } from './curso-listado/curso-listado.component';
import { Profesor } from './profesor';

@NgModule({
  declarations: [
    AppComponent,
    CrearCursoComponent,
    CursoDetalleComponent,
    CursoListadoComponent,
    Profesor
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
