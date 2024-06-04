import { ArgumentsHost, BadRequestException, Catch } from '@nestjs/common';
import { DragonNotFoundException } from './dragon.exceptions';
import { BaseExceptionFilter } from '@nestjs/core';

@Catch(DragonNotFoundException)
export class DragonExceptionFilter extends BaseExceptionFilter {
  catch(exception: unknown, host: ArgumentsHost) {
    if (exception instanceof DragonNotFoundException) {
      return super.catch(new BadRequestException(exception.message), host);
    }
    return super.catch(exception, host);
  }
}
