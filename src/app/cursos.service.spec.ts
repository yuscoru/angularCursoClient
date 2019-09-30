import { async, inject, TestBed } from '@angular/core/testing';
import { CursosService } from './cursos.service';
import { HttpClientModule } from '@angular/common/http';

describe('CursosService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientModule],
    providers: [CursosService]
  }));

  it('should be created new', inject([CursosService], (service: CursosService) => {
    expect(service).toBeTruthy();
  }));

  it('should get Catalogos', () => {
    const service: CursosService = TestBed.get(CursosService);
    service.buscarCursos(true).subscribe(
      (response) =>
        expect(response).not.toBeNull(),
      (error) => fail(error)
    );
  });
});
