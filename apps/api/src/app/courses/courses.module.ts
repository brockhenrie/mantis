import { CoursesController } from './courses.controller';
import { Module } from '@nestjs/common';
import { CourseService } from './course.service';
import { MongooseModule } from '@nestjs/mongoose';
import { CourseSchema, LessonSchema } from '@mantis/api-interfaces';
import { LessonService } from './lessons/lesson.service';

@Module({
    imports: [
        MongooseModule.forFeature([
          { name: 'Course', schema: CourseSchema },
          {name:'Lesson', schema: LessonSchema}
        ])
    ],
    controllers: [CoursesController],
    providers: [
      CourseService,
      LessonService
    ]
})
export class CoursesModule {}
