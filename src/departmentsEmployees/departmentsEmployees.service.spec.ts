import { Test, TestingModule } from '@nestjs/testing';
import { DepartmentsEmployeesService } from './departmentsEmployees.service';

describe('DepartmentsEmployeesService', () => {
  let service: DepartmentsEmployeesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DepartmentsEmployeesService],
    }).compile();

    service = module.get<DepartmentsEmployeesService>(
      DepartmentsEmployeesService,
    );
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
