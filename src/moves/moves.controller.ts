import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ApiBody } from '@nestjs/swagger';
import { MovesEntity } from './database/moves.entity';
import { MovesDto } from '../moves/dto/moves';
import { MovesService } from './moves.service';
@Controller('moves')
export class MovesController {
  constructor(private readonly movesService: MovesService) {}

  @Get()
  async index(): Promise<MovesEntity[]> {
    return await this.movesService.findAll();
  }
  @Get(':id')
  findOne(@Param('id') id: number) {
    console.log(typeof id === 'number'); // true
    return 'This action returns a employees';
  }

  @Post()
  @ApiBody({ type: MovesDto })
  async create(@Body() moves: MovesDto): Promise<MovesEntity> {
    return await this.movesService.create(moves);
  }
}
