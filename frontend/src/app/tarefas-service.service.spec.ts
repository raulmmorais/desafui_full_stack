import { TestBed } from '@angular/core/testing';

import { TarefasService } from './tarefas-service.service';

describe('TarefasServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TarefasService = TestBed.get(TarefasService);
    expect(service).toBeTruthy();
  });
});
