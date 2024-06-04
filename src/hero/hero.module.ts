import { Module } from '@nestjs/common';
import { HeroController } from './hero.controller';

import { HeroExceptionFilter } from './hero.filter';
import { APP_FILTER } from '@nestjs/core';

@Module({
  imports: [],
  controllers: [HeroController],
  providers: [
    {
      provide: APP_FILTER,
      useClass: HeroExceptionFilter,
    },
  ],
})
export class HeroModule {}
