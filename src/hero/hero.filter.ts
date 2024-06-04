import { ArgumentsHost, BadRequestException, Catch } from '@nestjs/common';
import { HeroNotFoundException } from './hero.exceptions';
import { BaseExceptionFilter } from '@nestjs/core';

@Catch()
export class ExceptionFilter extends BaseExceptionFilter {
  catch(exception: unknown, host: ArgumentsHost) {
    if (exception instanceof HeroNotFoundException) {
      return super.catch(new BadRequestException(exception.message), host);
    }
    return super.catch(exception, host);
  }
}