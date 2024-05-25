
// import news from './news.js'
import newsRouter from './news.js';// Đảm bảo đường dẫn chính xác
import searchRouter from './search.js';// Đảm bảo đường dẫn chính xác
import siteRouter from './site.js';// Đảm bảo đường dẫn chính xác
import courseRouter from './course.js';

function route(app) {
        
    app.use('/news', newsRouter);
    app.use('/search', searchRouter);
    app.use('/course',courseRouter)
    app.use('/', siteRouter);
  

 
}

// module.exports = route;
export default route;