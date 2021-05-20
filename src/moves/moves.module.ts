import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MovesEntity } from './database/moves.entity';
import { MovesController } from './moves.controller';
import { MovesService } from './moves.service';

@Module({
  imports: [TypeOrmModule.forFeature([MovesEntity])],
  controllers: [MovesController],
  providers: [MovesService],
})
export class MovesModule {}
