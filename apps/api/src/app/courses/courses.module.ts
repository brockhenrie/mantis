import { CoursesController } from './courses.controller';
import { Module } from '@nestjs/common';
import { CourseService } from './course.service';
import { MongooseModule } from '@nestjs/mongoose';
import { CourseSchema } from '@mantis/api-interfaces';

@Module({
  imports: [
    MongooseModule.forFeature([
   {   name: "Course",
      schema: CourseSchema
    }
    ])
  ],
  controllers:[CoursesController],
  providers:[
    CourseService
  ]
})
export class CoursesModule {}
