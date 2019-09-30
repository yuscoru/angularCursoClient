import { inject, async,ComponentFixture, TestBed } from '@angular/core/testing';
import { CursosService } from "../cursos.service";
import { CursosServiceMock } from "../cursos.serviceMock.spec";
import { CursoListadoComponent } from './curso-listado.component';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '../app-routing.module';
import { AppComponent } from '../app.component';
import { HttpClientModule } from '@angular/common/http';
import { NgxPaginationModule } from 'ngx-pagination';
import { NgSelectModule } from '@ng-select/ng-select';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CrearCursoComponent } from '../crear-curso/crear-curso.component';
import { Curso } from '../curso';
import { Observable } from 'rxjs';



describe('CursoListadoComponent', () => {
  let component: CursoListadoComponent;
  let fixture: ComponentFixture<CursoListadoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        CrearCursoComponent,
        CursoListadoComponent
      ],
      imports: [
        RouterTestingModule.withRoutes([]),
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        NgxPaginationModule,
        FormsModule,
        NgSelectModule,
        FontAwesomeModule
      ],
      providers: [
        CursosService,
        { provide: CursosService, useClass: CursosServiceMock }
      ]
    }).compileComponents();;
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CursoListadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });


  it('should create ', () => {
    expect(component).toBeTruthy();
  });

  it('should get cursos ', async(() => {

    component.buscarCursos().subscribe(
      cursos => {
        console.log("cursos : ", cursos);
        expect(cursos[0].titulo).toEqual("PARTICIONADO");
        expect(cursos[0].activo).toEqual(true);
        expect(cursos[0].profesor.nombre).toEqual("PANCRACIO");
      }
    );
  }));
});
