import { Body, Controller, Get, Post } from '@nestjs/common';
import { ApiBody } from '@nestjs/swagger';
import { DepartmentsEntity } from './database/departments.entity';
import { DepartmentsDto } from '../departments/dto/departments';
import { DepartmentsService } from './departments.service';

@Controller('departments')
export class DepartmentsController {
  constructor(private readonly departmentsService: DepartmentsService) {}

  @Get()
  async index(): Promise<DepartmentsEntity[]> {
    return await this.departmentsService.findAll();
  }
  @Post()
  @ApiBody({ type: DepartmentsDto })
  async create(
    @Body() departments: DepartmentsDto,
  ): Promise<DepartmentsEntity> {
    return await this.departmentsService.create(departments);
  }
}
