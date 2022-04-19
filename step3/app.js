const Koa = require('koa')
const bodyParser = require('koa-bodyparser')
const app = new Koa()
const router = require('./routes')


app.use(bodyParser())
  .use(router.routes())


module.exports = app