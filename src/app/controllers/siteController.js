import Course from '../../models/course.js'
import mongooseToObject from '../../until/mongoose.js';
class siteController {
    
    // [GET] /news
    async index(req, res, next) {
        try {
            const courses = await Course.find({});
            res.render('home',{               
                courses : mongooseToObject.mutipleMongooseToObject(courses),
            })
        } catch (err) {
            next;
        }
    }
}

export default new siteController();