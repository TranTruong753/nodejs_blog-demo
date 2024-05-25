import mongoose from 'mongoose' ;
const Schema = mongoose.Schema;
const authorId = Schema.ObjectId;
const Course = new Schema({
    _author: authorId,
    _name: { type: String, min:1 },
    _description: { type: String, min:1 },
    _img: { type: String, min:1 },
    _createdAt: { type: Date, default: Date.now },
    _updatedAt: { type: Date, default: Date.now },

  });

const course = mongoose.model('courses', Course);

export default course;