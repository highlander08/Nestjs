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
export class MovesEntity {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  description: string;
  @Column()
  value: number;
  @Column()
  departmentId: number;
  @Column()
  employeesId: number;
  @Column()
  created_at: string;

  @ManyToOne(() => EmployeesEntity)
  @JoinColumn({ name: 'employeesId' })
  EmployeesEntity: EmployeesEntity;

  @ManyToOne(() => DepartmentsEntity)
  @JoinColumn({ name: 'departmentId' })
  DepartmentsEntity: DepartmentsEntity;
}
