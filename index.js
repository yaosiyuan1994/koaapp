const Koa = require("koa");
const app = new Koa();

app.use(async (ctx) => {
  ctx.body = "yao";
});

app.listen(3000);
console.log("[demo] start-quick is starting at port 3000");
