import { Module } from '@nestjs/common';
import { DragonController } from './dragon.controller';
import { DragonExceptionFilter } from './dragon.filter';
import { APP_FILTER } from '@nestjs/core';

@Module({
  imports: [],
  controllers: [DragonController],
  providers: [
    {
      provide: APP_FILTER,
      useClass: DragonExceptionFilter,
    },
  ],
})
export class DragonModule {}
