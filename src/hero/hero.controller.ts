import { Controller, Get } from '@nestjs/common';
import { HeroService } from './hero.service';
import { HeroNotFoundException } from './hero.exceptions';

@Controller('hero')
export class HeroController {
  constructor(private readonly appService: HeroService) {}

  @Get()
  getHello(): string {
    throw new HeroNotFoundException();
  }
}
