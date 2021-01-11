const router = require('express').Router();

const UserController = require('./controllers/UserController');

router.post('/register', UserController.create);


module.exports = router;