import { Test, TestingModule } from '@nestjs/testing';
import { DepartmentsEmployeesController } from './departmentsEmployees.controller';

describe('DepartmentsController', () => {
  let controller: DepartmentsEmployeesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DepartmentsEmployeesController],
    }).compile();

    controller = module.get<DepartmentsEmployeesController>(
      DepartmentsEmployeesController,
    );
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
