import { IsInt, IsString, IsMongoId } from 'class-validator';
export class Lesson {
    @IsString() @IsMongoId() _id: string;
    @IsInt({ message: 'seqNo must be numeric' }) seqNo: number;
    @IsString({ message: 'description must be a string' }) description: string;
    @IsString({ message: 'duration must be a string' }) duration: string;
    @IsString({ message: 'category must be a string' }) category:string;
    @IsString() @IsMongoId() course:string;
}

export function compareLessons(c1: Lesson, c2: Lesson) {
    const compare = c1.seqNo - c2.seqNo;
    if (compare > 0) return 1;
    else if (compare < 0) return -1;
    else return 0;
}
