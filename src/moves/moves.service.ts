import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { MovesEntity } from './database/moves.entity';
import { Moves } from '../moves/interface/moves.interface';

@Injectable()
export class MovesService {
  constructor(
    @InjectRepository(MovesEntity)
    private movesRepository: Repository<MovesEntity>,
  ) {}

  async findAll(): Promise<MovesEntity[]> {
    return await this.movesRepository.find();
  }
  async find(): Promise<MovesEntity[]> {
    return await this.movesRepository.find();
  }

  async create(moves: Moves): Promise<MovesEntity> {
    return await this.movesRepository.save(moves);
  }
}
