import { Controller, Get } from '@nestjs/common';

import { HeroNotFoundException } from './hero.exceptions';

@Controller('hero')
export class HeroController {
  @Get()
  getHello(): string {
    throw new HeroNotFoundException();
  }

  @Get()
  getError(): string {
    throw new Error();
  }
}
