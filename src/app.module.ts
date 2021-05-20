import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';
import { EmployeesModule } from './employees/employees.module';
import { DepartmentsModule } from './departments/departments.module';
import { MovesModule } from './moves/moves.module';
import { DepartmentsEmployeesModule } from './departmentsEmployees/departmentsEmployees.module';

@Module({
  imports: [
    EmployeesModule,
    DepartmentsModule,
    MovesModule,
    DepartmentsEmployeesModule,
    DatabaseModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
