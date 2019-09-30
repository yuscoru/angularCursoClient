import { inject,TestBed } from '@angular/core/testing';
import { ProfesoresService } from './profesores.service';
import { HttpClientModule } from '@angular/common/http';

xdescribe('ProfesoresService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientModule],
    providers: [ProfesoresService]
  }));

  xit('should be created', inject([ProfesoresService], (service: ProfesoresService) => {
    expect(service).toBeTruthy();
  }));
  xit('should consulta Profesores', () => {
    const service: ProfesoresService = TestBed.get(ProfesoresService);
    service.buscarProfesores().subscribe(
      (response) => expect(response.json()).not.toBeNull(),
      (error) => fail(error)
    );
  });
});

