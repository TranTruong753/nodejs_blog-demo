import Course from '../../models/course.js'
import mongooseToObject from '../../until/mongoose.js';

class courseController {
    // [GET] /course/:slug
    async index(req, res, next) {
        // res.render('course');
        try {

            const courses = await Course.findOne({ slug: req.params.slug }).exec();
             // res.send(req.params.slug);
            // res.json(courses);
        
            res.render('course',{               
                courses : mongooseToObject.mongooseToObject(courses),
            })
           
        } catch (error) {
            next;
        }
       
    }
}

export default new courseController();