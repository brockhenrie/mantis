import {
    BadRequestException,
    Injectable,
    InternalServerErrorException
} from '@nestjs/common';
import { Lesson } from '@mantis/api-interfaces';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class LessonService {
    constructor(
        @InjectModel('Lesson')
        private lessonsModel: Model<Lesson>
    ) {}

    async search(
        courseId: string,
        sortOrder: string,
        pageNumber: number,
        pageSize: number
    ) {
        return this.lessonsModel.find(
            {
                course: courseId
            },
            null,
            {
                skip: pageNumber * pageSize,
                limit: pageSize,
                sort: {
                    seqNo: sortOrder
                }
            }) as unknown as Lesson;
    }

    // async findAll(): Promise<Lesson[]> {
    //     const lessons = await this.lessonModel.find();

    //     if (!lessons) throw new BadRequestException('lessons not found');;
    //     return lessons;
    // }

    // async findlesson(id: string): Promise<Lesson> {
    //     const lesson = await this.lessonModel.findById(id);
    //     if (!lesson) throw new BadRequestException('Lesson not found');
    //     return lesson;
    // }

    // async deletelesson(id: string): Promise<Lesson> {
    //     const lesson = await this.lessonModel.findByIdAndDelete(id);
    //     if (!lesson) return null;
    //     return lesson;
    // }
    // async updatelesson(
    //     lessonId: string,
    //     changes: Lesson
    // ): Promise<Lesson> {
    //     const lesson = this.lessonModel.findOneAndUpdate({
    //         _id: lessonId,
    //         changes,
    //         new: true
    //     });
    //     if (!lesson) {
    //         throw new BadRequestException('lesson not found');
    //     }
    //     return lesson;
    // }
    // async addlesson(newlesson: Lesson): Promise<Lesson> {
    //     if(!newlesson) throw new BadRequestException('Lesson not entered!');
    //     const lesson = await new this.lessonModel({
    //       ...newlesson,
    //       createdAt: new Date(),
    //     }).save();
    //     if (!lesson) throw new InternalServerErrorException('Not Saved!');
    //     return lesson.toObject();
    // }
}
