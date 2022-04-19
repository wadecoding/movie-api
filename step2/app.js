const Koa = require('koa')
const bodyParser = require('koa-bodyparser')
const app = new Koa()
const connection = require('./db')
const router = require('./routes')


app.use(bodyParser())
  .use(router.routes())
  .listen(3000, () => console.log('server is running at 3000'))