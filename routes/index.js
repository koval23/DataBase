
const Router = require('express');
const authorRouter = require('./authorRouter')
const articleRouter = require('./articleRouter')

//тест

const UserController = require('../controllers/User.Controller')

//тест

const router = new Router();


router.use('/author', authorRouter);
router.use('/article', articleRouter);

// тест

router.post('/author1', UserController.createUser);
router.get('/author1', UserController.getUser);
router.get('/author1/:id', UserController.getOneUser);
router.put('/author1', UserController.updateUser);
router.delete('/author1', UserController.deleteUser);

//тест

module.exports = router;

