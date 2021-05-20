import { ApiProperty } from '@nestjs/swagger';

export class MovesDto {
  @ApiProperty()
  id: number;
  @ApiProperty()
  description: string;
  @ApiProperty()
  value: number;
  @ApiProperty()
  departmentId: number;
  @ApiProperty()
  employeesId: number;
  @ApiProperty()
  created_at: string;
}
