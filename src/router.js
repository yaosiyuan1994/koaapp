const Router = require('@koa/router')

const TestController = require('./controller/testcontroller')

const router = new Router();
router.get('/router', TestController.handleMethod);

module.exports = router

