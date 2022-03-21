import * as mongoose from 'mongoose';

export const LessonSchema = new mongoose.Schema({
    seqNo: { type: Number, required: true },
    description: { type: String },
    duration: { type: String  },
    category: { type: String, required: true  },
    course:{
      type: mongoose.Schema.Types.ObjectId,
      ref:'Course'
    },
});
