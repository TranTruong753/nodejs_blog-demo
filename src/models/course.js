import { request } from 'express';
import mongoose from 'mongoose' ;
// import slug from 'mongoose-slug-generator';
import slugUpdater from 'mongoose-slug-updater';

mongoose.plugin(slugUpdater);

const Schema = mongoose.Schema;
const authorId = Schema.ObjectId;

const Course = new Schema({
    _author: authorId,
    _name: { type: String, required: true },
    _description: { type: String },
    _img: { type: String },
    _video: { type: String },
    slug: { type: String, slug: "_name" , unique: true},
  },{
    timestamps:true
  });

const course = mongoose.model('courses', Course);

export default course;