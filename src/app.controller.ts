import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { AppException } from './app.exceptions';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    throw new AppException();
  }
}
