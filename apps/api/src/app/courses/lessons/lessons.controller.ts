/* eslint-disable @typescript-eslint/no-empty-function */
import { Lesson } from '@mantis/api-interfaces';
import {
  BadRequestException,
    Body,
    Controller,
    Delete,
    Get,
    Param,
    ParseIntPipe,
    Post,
    Put,
    Query
} from '@nestjs/common';
import { LessonService } from './lesson.service';

@Controller('lessons')
export class LessonsController {
    constructor(private ls: LessonService) {}

    @Get()
    searchlesson(
        @Query('id') courseId: string,
        @Query('sortOrder') sortOrder = 'asc',
        @Query('pageNumber', ParseIntPipe) pageNumber= 0,
        @Query('pageSize', ParseIntPipe) pageSize=3
    ): Promise<Lesson> {
      if(!courseId) throw new BadRequestException("courseId must be defined");
      if(sortOrder !== "asc" && sortOrder !== 'desc')  throw new BadRequestException("sortOrder must be 'asc' or 'desc'");
      if(pageNumber < 0 ) throw new BadRequestException("pageNumber must be non negative!");

        console.log('Fetching Lessons!');
        const lessons = this.ls.search(courseId,sortOrder,pageNumber,pageSize);
        return lessons;
    }

    // @Put('/:id')
    // async updatelesson(
    //     @Param('id') lessonId: string,
    //     @Body() changes: Lesson
    // ): Promise<Lesson> {
    //     console.log('Updating Lesson!');
    //     return this.ls.updatelesson(lessonId, { ...changes, _id: lessonId });
    // }

    // @Post('lessons/')
    // async createlesson(@Body() lesson: Lesson): Promise<Lesson> {
    //     console.log('Updating Lesson!');
    //     this.ls.addlesson(lesson);
    //     return;
    // }

    // @Delete('/:id')
    // async deletelesson(@Param('id') lessonId: string) {
    //     return this.ls.deletelesson(lessonId);
    // }
}
