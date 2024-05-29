import Course from '../../models/course.js'
import mongooseToObject from '../../until/mongoose.js';

class courseController {
    // [GET] /course/:slug
    async index(req, res, next) {
        // res.render('course');
        try {

            const courses = await Course.findOne({ slug: req.params.slug }).exec() .then(result => {
                // handle result
                res.render('course/course',{               
                    courses : mongooseToObject.mongooseToObject(courses),
                })
              })
              .catch(err => 
                // handle error
                next
              );
         
        
           
           
        } catch (error) {
            next;
        }
       
    }

    // [GET] /course/create
    async create(req, res, next){
        res.render('course/create');
    }

    // [POST] /course/store
    async store(req, res, next){
        try {
            const formData = req.body;
            formData._img = `https://img.youtube.com/vi/${formData._video}/sddefault.jpg`;
    
            const course = new Course(formData);
            await course.save();
            res.redirect('/');
        } catch (error) {
            next(error);
        }

  
        
    }
}

export default new courseController();