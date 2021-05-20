import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { EmployeesEntity } from './database/employees.entity';
import { Employees } from './interface/employees.interface';

@Injectable()
export class EmployeesService {
  constructor(
    @InjectRepository(EmployeesEntity)
    private employeesRepository: Repository<EmployeesEntity>,
  ) {}

  async findAll(): Promise<EmployeesEntity[]> {
    return await this.employeesRepository.find();
  }
  async create(employees: Employees): Promise<EmployeesEntity> {
    return await this.employeesRepository.save(employees);
  }
}
