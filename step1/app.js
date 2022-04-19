const Koa = require('koa')
const Router = require('@koa/router')
const router = new Router()
const bodyParser = require('koa-bodyparser')
const app = new Koa()
const connection = require('./db')

router.get('/', ctx => {
  ctx.body = 'server ok'
})

router.get('/movie', async ctx => {
  const [rows, fields] = await connection.then(conn => conn.query('SELECT * FROM movie'))
  ctx.body = rows
})

router.post('/movie', async ctx => {
  const body = ctx.request.body
  const [rows, fields] = await connection.then(conn => conn.query('INSERT INTO movie (name, year) VALUES (?, ?)'
    , [body.name, body.year]))
    .catch(err => console.log(err))
  ctx.body = rows
})
 
router.put('/movie/:id', async ctx => {
  const id = ctx.params.id
  const {name, year} = ctx.request.body
  const [rows, fields] = await connection.then(conn => conn.query('UPDATE movie SET name=?, year=? WHERE id=?'
    , [name, year, id]))
    .catch(err => console.log(err))
  ctx.body = rows
})
 
router.del('/movie/:id', async ctx => {
  const id = ctx.params.id
  const [rows, fields] = await connection.then(conn => conn.query('DELETE FROM movie WHERE id=?', [id]))
  ctx.body = rows
})

app.use(bodyParser())
  .use(router.routes())
  .listen(3000, () => console.log('server is running at 3000'))