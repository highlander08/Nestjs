import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { DepartmentsEmployeesEntity } from '../../departmentsEmployees/database/departmentsEmployees.entity';
import { MovesEntity } from '../../moves/database/moves.entity';
@Entity()
export class EmployeesEntity {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  name: string;
  @Column()
  created_at: string;

  @OneToMany(
    () => DepartmentsEmployeesEntity,
    (DepartmentsEmployeesEntity) => DepartmentsEmployeesEntity.departmentId,
  )
  DepartmentsEmployeesEntity: DepartmentsEmployeesEntity;

  @OneToMany(() => MovesEntity, (MovesEntity) => MovesEntity.employeesId)
  MovesEntity: MovesEntity;
}
