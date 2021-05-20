import { ApiProperty } from '@nestjs/swagger';

export class DepartmentsDto {
  @ApiProperty()
  id: number;
  @ApiProperty()
  name: string;
  @ApiProperty()
  created_at: string;
}
