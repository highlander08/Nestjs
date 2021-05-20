import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DepartmentsEmployeesEntity } from 'src/departmentsEmployees/database/departmentsEmployees.entity';
import { EmployeesEntity } from 'src/employees/database/employees.entity';
import { DepartmentsEntity } from '../departments/database/departments.entity';
import { MovesEntity } from '../moves/database/moves.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      username: 'postgres',
      password: 'docker',
      database: 'employees',
      entities: [
        EmployeesEntity,
        DepartmentsEntity,
        MovesEntity,
        DepartmentsEmployeesEntity,
      ],
      synchronize: true,
    }),
  ],
})
export class DatabaseModule {}
