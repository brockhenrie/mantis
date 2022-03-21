/* eslint-disable @typescript-eslint/no-empty-function */
import { Course, ToIntegerPipe } from '@mantis/api-interfaces';
import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { CourseService } from './course.service';

@Controller()
export class CoursesController {

    constructor(private cs: CourseService) {}

    @Get('courses/')
    async findAllCourses(): Promise<Course[]> {
      console.log('Fetching Courses!');
        return this.cs.findAll();
    }

    @Get('courses/:id')
    async findCourse(
      @Param('id') courseId: string,
    ): Promise<Course> {
      console.log('Fetching Course!');
        return this.cs.findCourse(courseId);
    }

    @Put('courses/:id')
    async updateCourse(
      @Param('id') courseId: string,
      @Body() changes: Course,
      ): Promise<Course> {
        console.log('Updating Course!');
        return this.cs.updateCourse(courseId, {...changes, _id: courseId});
    }

    @Post('courses/')
    async createCourse(
      @Body() course: Course
      ): Promise<Course> {
        console.log('Updating Course!');
        this.cs.addCourse(course);
        return;
    }

    @Delete('courses/:id')
    async deleteCourse(
      @Param('id') courseId: string
    ){
      return this.cs.deleteCourse(courseId);
    }
}

