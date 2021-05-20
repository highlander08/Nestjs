import { ApiProperty } from '@nestjs/swagger';

export class DepartmentsEmployeesDto {
  @ApiProperty()
  id: number;
  @ApiProperty()
  employeesId: number;
  @ApiProperty()
  departmentId: number;
  @ApiProperty()
  created_at: string;
}
