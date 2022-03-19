import { BadRequestException, Injectable, InternalServerErrorException } from '@nestjs/common';
import { Course } from '@mantis/api-interfaces';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class CourseService {
    constructor(
        @InjectModel('Course')
        private courseModel: Model<Course>,
    ) {}

    async findAll(): Promise<Course[]> {
        const courses = await this.courseModel.find();

        if (!courses) throw new BadRequestException('Courses not found');;
        return courses;
    }

    async findCourse(id: string): Promise<Course> {
        const course = await this.courseModel.findById(id);
        if (!course) throw new BadRequestException('Course not found');
        return course;
    }

    async deleteCourse(id: string): Promise<Course> {
        const course = await this.courseModel.findByIdAndDelete(id);
        if (!course) return null;
        return course;
    }
    async updateCourse(
        courseId: string,
        changes: Course
    ): Promise<Course> {
        const course = this.courseModel.findOneAndUpdate({
            _id: courseId,
            changes,
            new: true
        });
        if (!course) {
            throw new BadRequestException('course not found');
        }
        return course;
    }
    async addCourse(newCourse: Course): Promise<Course> {
        if(!newCourse) throw new BadRequestException('Course not entered!');
        const course = await new this.courseModel({
          ...newCourse,
          createdAt: new Date(),
        }).save();
        if (!course) throw new InternalServerErrorException('Not Saved!');
        return course.toObject();
    }
}
