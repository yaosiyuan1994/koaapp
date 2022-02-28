const Koa = require("koa");
const koaBody = require('koa-body')

const app = new Koa();
const router = require('./router')

app.listen(4000);

app
    .use(koaBody())
    .use(router.routes())
    .use(router.allowedMethods())
