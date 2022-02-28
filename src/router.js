const Router = require('koa-router')

const TestController = require('./controller/testcontroller')
const Requestcontroller = require('./controller/requestcontroller')

const router = new Router();
router.get('/test', TestController.handleMethod);
router.get('/method_get', Requestcontroller.handleGetMethod);
router.post('/method_post', Requestcontroller.handlePostMethod);

module.exports = router