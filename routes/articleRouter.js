const Router = require('express');
const ArticleController = require('../controllers/articleController');

const router = new Router();


router.get('/', ArticleController.get);
router.get('/one', ArticleController.getOne);
router.post('/', ArticleController.registration);

module.exports = router;