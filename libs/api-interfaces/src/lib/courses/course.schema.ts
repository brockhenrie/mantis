import * as mongoose from 'mongoose';

export const CourseSchema = new mongoose.Schema({
    seqNo: { type: Number, required: true },
    url: { type: String, required: true  },
    iconUrl: { type: String , required: true },
    courseListIcon: { type: String, required: true  },
    description: { type: String, required: true  },
    longDescription: { type: String, required: true  },
    category: { type: String, required: true  },
    lessonsCount: { type: Number, required: true  },
    promo: { type: Boolean, required: true  },
    id: { type: Number },
},{autoIndex: true});
