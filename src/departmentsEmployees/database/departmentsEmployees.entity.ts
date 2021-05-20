import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { EmployeesEntity } from '../../employees/database/employees.entity';
import { DepartmentsEntity } from '../../departments/database/departments.entity';

@Entity()
export class DepartmentsEmployeesEntity {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  employeesId: number;
  @Column()
  departmentId: number;
  @Column()
  created_at: string;

  @ManyToOne(() => EmployeesEntity)
  @JoinColumn({ name: 'employeesId' })
  EmployeesEntity: EmployeesEntity;

  @ManyToOne(() => DepartmentsEntity)
  @JoinColumn({ name: 'departmentId' })
  DepartmentsEntity: DepartmentsEntity;
}
