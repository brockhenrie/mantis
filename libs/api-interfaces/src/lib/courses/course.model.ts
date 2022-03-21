import { IsInt, IsString, IsBoolean, IsMongoId } from 'class-validator';
export class Course {
    @IsString() @IsMongoId() _id: string;
    @IsInt({ message: 'seqNo must be numeric' }) seqNo: number;
    @IsString({ message: 'url must be a string', always: false }) url: string;
    @IsString({ message: 'iconUrl must be a string' }) iconUrl: string;
    @IsString({ message: 'courseListIcon must be a string' })
    courseListIcon: string;
    @IsString({ message: 'description must be a string' }) description: string;
    @IsString({ message: 'longDescription must be a string' })
    longDescription: string;
    @IsString({ message: 'category must be a string' }) category: string;
    @IsInt({ message: 'lessonsCount must be a numeric' }) lessonsCount: number;
    @IsBoolean({ message: 'promo must be a boolean' }) promo: boolean;
}

export function compareCourses(c1: Course, c2: Course) {
    const compare = c1.seqNo - c2.seqNo;
    if (compare > 0) return 1;
    else if (compare < 0) return -1;
    else return 0;
}
