import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DepartmentsEmployeesEntity } from './database/departmentsEmployees.entity';
import { DepartmentsEmployeesController } from './departmentsEmployees.controller';
import { DepartmentsEmployeesService } from './departmentsEmployees.service';

@Module({
  imports: [TypeOrmModule.forFeature([DepartmentsEmployeesEntity])],
  controllers: [DepartmentsEmployeesController],
  providers: [DepartmentsEmployeesService],
})
export class DepartmentsEmployeesModule {}
