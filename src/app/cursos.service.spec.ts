import { async, inject, TestBed } from '@angular/core/testing';
import { CursosService } from './cursos.service';
import { HttpClientModule } from '@angular/common/http';

xdescribe('CursosService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientModule],
    providers: [CursosService]
  }));

  xit('should be created new', inject([CursosService], (service: CursosService) => {
    expect(service).toBeTruthy();
  }));

  xit('should get Catalogos', () => {
    const service: CursosService = TestBed.get(CursosService);
    service.buscarCursos(true).subscribe(
      (response) => expect(response.json()).not.toBeNull(),
      (error) => fail(error)
    );
  });
});
