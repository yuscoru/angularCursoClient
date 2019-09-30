import { inject,TestBed } from '@angular/core/testing';
import { ProfesoresService } from './profesores.service';
import { HttpClientModule } from '@angular/common/http';

describe('ProfesoresService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientModule],
    providers: [ProfesoresService]
  }));

  it('should be created', inject([ProfesoresService], (service: ProfesoresService) => {
    expect(service).toBeTruthy();
  }));
  it('should consulta Profesores', () => {
    const service: ProfesoresService = TestBed.get(ProfesoresService);
    service.buscarProfesores().subscribe(
      (response) => expect(response).not.toBeNull(),
      (error) => fail(error)
    );
  });
});

