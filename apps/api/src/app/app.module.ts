import { Module } from '@nestjs/common';
import { environment } from '../environments/environment';

import {MongooseModule} from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CoursesModule } from './courses/courses.module';

@Module({
  imports: [
    MongooseModule.forRoot(environment.mongoConnection),
    CoursesModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
 