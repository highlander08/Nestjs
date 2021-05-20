import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EmployeesEntity } from './database/employees.entity';
import { EmployeesController } from './employees.controller';
import { EmployeesService } from './employees.service';

@Module({
  imports: [TypeOrmModule.forFeature([EmployeesEntity])],
  controllers: [EmployeesController],
  providers: [EmployeesService],
})
export class EmployeesModule {}
