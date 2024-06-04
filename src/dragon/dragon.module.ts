import { Module } from '@nestjs/common';
import { DragonController } from './dragon.controller';
import { ExceptionFilter } from './dragon.filter';
import { APP_FILTER } from '@nestjs/core';

@Module({
  imports: [],
  controllers: [DragonController],
  providers: [
    {
      provide: APP_FILTER,
      useClass: ExceptionFilter,
    },
  ],
})
export class DragonModule {}
