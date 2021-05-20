import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from 'typeorm';

export class MovesEntity1621106535064 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'MovesEntity',
        columns: [
          {
            name: 'id',
            type: 'int',
            isPrimary: true,
            isGenerated: true,
            generationStrategy: 'increment',
          },
          {
            name: 'description',
            type: 'varchar',
            length: '500',
          },
          {
            name: 'value',
            type: 'decimal(7,2)',
          },
          {
            name: 'departmentId',
            type: 'int',
          },
          {
            name: 'employeesId',
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
    await queryRunner.dropTable('MovesEntity');
  }
}
