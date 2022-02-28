const Koa = require("koa");
const router = require('./router')

const app = new Koa();

app.listen(4000);

app.use(router.routes()).use(router.allowedMethods())