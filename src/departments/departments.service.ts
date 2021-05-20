import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { DepartmentsEntity } from './database/departments.entity';
import { Departments } from '../departments/interface/departments.interface';

@Injectable()
export class DepartmentsService {
  constructor(
    @InjectRepository(DepartmentsEntity)
    private departmentsRepository: Repository<DepartmentsEntity>,
  ) {}

  async findAll(): Promise<DepartmentsEntity[]> {
    return await this.departmentsRepository.find();
  }
  async create(departments: Departments): Promise<DepartmentsEntity> {
    return await this.departmentsRepository.save(departments);
  }
}
