/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import { FallbackExceptionFilter, HttpExceptionFilter, ValidationException, ValidationFilter } from '@mantis/api-interfaces';
import { Logger, ValidationError, ValidationPipe } from '@nestjs/common';
import { NestFactory} from '@nestjs/core';
import * as mongoose from 'mongoose';

import { AppModule } from './app/app.module';
mongoose.set('autoIndex', true);
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const globalPrefix = 'api';
  app.setGlobalPrefix(globalPrefix);
  const port = process.env.PORT || 3000;


  app.useGlobalFilters(
    new HttpExceptionFilter(),
    new FallbackExceptionFilter(),
    new ValidationFilter()
  );

  app.useGlobalPipes(
    new ValidationPipe({
      skipMissingProperties:true,
      exceptionFactory:(errors: ValidationError[])=>{
        const messages = errors.map(error=>{
          return `${error.property} has wrong value ${error.value},
          ${Object.values(error.constraints).join(', ')}`
        })
        return new ValidationException(messages);
      }
    })
  );



  await app.listen(port);
  Logger.log(
    `🚀 Application is running on: http://localhost:${port}/${globalPrefix}`
  );
}

bootstrap();
