const Router = require('express');
const AuthorCotroller = require('../controllers/authorController')

const router = new Router();

//crud - create read update delete

router.post('/', AuthorCotroller.registration);
router.get('/', AuthorCotroller.get);
router.get('/one', AuthorCotroller.getOne);

module.exports = router;

//http://localhost:4000/api/v1/author/ post
//http://localhost:4000/api/v1/author/ get
//http://localhost:4000/api/v1/author/one get
//!DZ
//http://localhost:4000/api/v1/article/ post
//http://localhost:4000/api/v1/article/ get
//http://localhost:4000/api/v1/article/one get


//sql 