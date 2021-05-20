import { Body, Controller, Get, Post } from '@nestjs/common';
import { ApiBody } from '@nestjs/swagger';
import { DepartmentsEmployeesEntity } from './database/departmentsEmployees.entity';
import { DepartmentsEmployeesDto } from '../departmentsEmployees/dto/departmentsEmployees';
import { DepartmentsEmployeesService } from './departmentsEmployees.service';

@Controller('departmentsEmployees')
export class DepartmentsEmployeesController {
  constructor(
    private readonly departmentsEmployeesService: DepartmentsEmployeesService,
  ) {}

  @Get()
  async index(): Promise<DepartmentsEmployeesEntity[]> {
    return await this.departmentsEmployeesService.findAll();
  }
  @Post()
  @ApiBody({ type: DepartmentsEmployeesDto })
  async create(
    @Body() departmentsEmployees: DepartmentsEmployeesDto,
  ): Promise<DepartmentsEmployeesEntity> {
    return await this.departmentsEmployeesService.create(departmentsEmployees);
  }
}
