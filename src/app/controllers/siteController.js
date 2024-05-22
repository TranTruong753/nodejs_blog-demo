class siteController {
    // [GET] /news
    index(req, res) {
        res.render('home');
    }
}

export default new siteController();