import { Body, Controller, Get, Post } from '@nestjs/common';
import { ApiBody } from '@nestjs/swagger';
import { EmployeesEntity } from './database/employees.entity';
import { EmployeesDto } from './dto/employees.dto';
import { EmployeesService } from './employees.service';
@Controller('employees')
export class EmployeesController {
  constructor(private readonly employeesService: EmployeesService) {}

  @Get()
  async index(): Promise<EmployeesEntity[]> {
    return await this.employeesService.findAll();
  }
  @Post()
  @ApiBody({ type: EmployeesDto })
  async create(@Body() employees: EmployeesDto): Promise<EmployeesEntity> {
    return await this.employeesService.create(employees);
  }
}
