import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from 'typeorm';

export class DepartmentsEmployeesEntity1621107375844
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'DepartmentsEmployeesEntity',
        columns: [
          {
            name: 'id',
            type: 'int',
            isPrimary: true,
            isGenerated: true,
            generationStrategy: 'increment',
          },
          {
            name: 'employeesId',
            type: 'int',
          },
          {
            name: 'departmentId',
            type: 'int',
          },
          {
            name: 'created_at',
            type: 'timestamp',
            default: 'CURRENT_TIMESTAMP',
          },
        ],
      }),
    );
    await queryRunner.createForeignKey('EmployeesEntity', this.foreignKey);

    await queryRunner.createForeignKey('DepartmentsEntity', this.foreignKey01);
  }

  private foreignKey = new TableForeignKey({
    columnNames: ['employeesId'],
    referencedColumnNames: ['id'],
    onDelete: 'CASCADE',
    referencedTableName: 'EmployeesEntity',
  });

  private foreignKey01 = new TableForeignKey({
    columnNames: ['departmentId'],
    referencedColumnNames: ['id'],
    onDelete: 'CASCADE',
    referencedTableName: 'DepartmentsEntity',
  });

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('DepartmentsEmployeesEntity');
  }
}
