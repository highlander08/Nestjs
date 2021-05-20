import { ApiProperty } from '@nestjs/swagger';

export class EmployeesDto {
  @ApiProperty()
  id: number;
  @ApiProperty()
  name: string;
  @ApiProperty()
  created_at: string;
}
