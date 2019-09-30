import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CursosServiceMock } from "../cursos.serviceMock.spec";
import { CursosService } from "../cursos.service";
import { ProfesoresServiceMock } from "../profesores.serviceMock.spec";
import { CursoListadoComponent } from '../curso-listado/curso-listado.component';
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
import { ProfesoresService } from "../profesores.service";

describe('CrearCursoComponent', () => {
  let component: CrearCursoComponent;
  let fixture: ComponentFixture<CrearCursoComponent>;

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
        { provide: CursosService, useClass: CursosServiceMock },
        ProfesoresService,
        { provide: ProfesoresService, useClass: ProfesoresServiceMock }
      ]})
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearCursoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create CrearCursoComponent', () => {
    expect(component).toBeTruthy();
  });

  it('should get profesores ', async(() => {
    component.buscarProfesores().subscribe(
      profesores => {
        console.log("profesores : ", profesores);
        expect(profesores[0].id).toEqual(1);
        expect(profesores[0].nombre).toEqual("PANCRACIO");
      }
    );
  }));
  it('should crear cursos ', async(() => {
    component.saveCurso().subscribe(
      curso => {
        console.log("curso : ", curso);
        expect(curso[0].id).toEqual(1);
        expect(curso[0].titulo).toEqual("PARTICIONADO");
        expect(curso[0].nivel).toEqual("MEDIO");
        expect(curso[0].profesor.nombre).toEqual("PANCRACIO");
      }
    );
  }));
  it('should put submitted to false when  save', () => {
    component.save();
    expect(component.submitted).toEqual(false);
  });
  it('should put submitted to false when  newCurso', () => {
    component.newCurso();
    expect(component.submitted).toEqual(false);
  });
  it('should put submitted to true when  save', () => {
    component.onSubmit();
    expect(component.submitted).toEqual(true);
  });

});
