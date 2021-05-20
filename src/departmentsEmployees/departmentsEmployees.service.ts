import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { DepartmentsEmployeesEntity } from './database/departmentsEmployees.entity';
import { DepartmentsEmployees } from '../departmentsEmployees/interface/departmentsEmployees.interface';

@Injectable()
export class DepartmentsEmployeesService {
  constructor(
    @InjectRepository(DepartmentsEmployeesEntity)
    private departmentsEmployeesRepository: Repository<DepartmentsEmployeesEntity>,
  ) {}

  async findAll(): Promise<DepartmentsEmployeesEntity[]> {
    return await this.departmentsEmployeesRepository.find();
  }
  async create(
    departmentsEmployees: DepartmentsEmployees,
  ): Promise<DepartmentsEmployeesEntity> {
    return await this.departmentsEmployeesRepository.save(departmentsEmployees);
  }
}
