const Koa = require("koa");
const app = new Koa();

app.use(async ctx => {
  ctx.body = "hello koa2";
});

app.listen(3000);
console.log("[demo] start-quick starting at port 3000");