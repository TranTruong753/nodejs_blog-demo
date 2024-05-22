class searchController {
    // [GET] /news
    index(req, res) {
        res.render('search');
    }
}

export default new searchController();