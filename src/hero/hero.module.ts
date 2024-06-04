import { Module } from '@nestjs/common';
import { HeroController } from './hero.controller';
import { HeroService } from './hero.service';
import { ExceptionFilter } from './hero.filter';
import { APP_FILTER } from '@nestjs/core';

@Module({
  imports: [],
  controllers: [HeroController],
  providers: [
    HeroService,
    {
      provide: APP_FILTER,
      useClass: ExceptionFilter,
    },
  ],
})
export class HeroModule {}
