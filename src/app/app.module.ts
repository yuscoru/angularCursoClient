import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CrearCursoComponent } from './crear-curso/crear-curso.component';
import { CursoDetalleComponent } from './curso-detalle/curso-detalle.component';
import { CursoListadoComponent } from './curso-listado/curso-listado.component';
import { HttpClientModule } from '@angular/common/http';
import { NgxPaginationModule } from 'ngx-pagination';
import { FormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';

@NgModule({
  declarations: [
    AppComponent,
    CrearCursoComponent,
    CursoDetalleComponent,
    CursoListadoComponent,
    NgSelectModule
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxPaginationModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
