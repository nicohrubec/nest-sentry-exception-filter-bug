import { Controller, Get } from '@nestjs/common';
import { DragonNotFoundException } from './dragon.exceptions';

@Controller('dragon')
export class DragonController {
  constructor() {}

  @Get()
  getHello(): string {
    throw new DragonNotFoundException();
  }
}
