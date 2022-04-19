const connection = require('./db')

const serverOk = async ctx => ctx.body = 'server OK'

const getAllMovie = async (ctx) => {
  const [row, field] = await connection.then(conn => conn.query('SELECT * FROM movie'))
    .catch(err => console.log(err))
  ctx.body = row
}

const getMovieById = async (ctx) => {
  const id = ctx.params.id
  const [row, field] = await connection.then(conn => conn.query('SELECT * FROM movie WHERE id=?', [id]))
    .catch(err => console.log(err))
  ctx.body = row
}

const createMovie = async (ctx) => {
  const body = ctx.request.body
  const [row, field] = await connection.then(conn => conn.query('INSERT INTO movie (name, year) VALUES (?, ?)'
    , [body.name, body.year]))
    .catch(err => console.log(err))
  ctx.body = row
}

const changeMovieInfo = async (ctx) => {
  const id = ctx.params.id
  const {name, year} = ctx.request.body
  const [row, field] = await connection.then(conn => conn.query('UPDATE movie SET name=?, year=? WHERE id=?'
    , [name, year, id]))
    .catch(err => console.log(err))
  ctx.body = row
}

const deleteMovie = async (ctx) => {
  const id = ctx.params.id
  const [row, field] = await connection.then(conn => conn.query('DELETE FROM movie WHERE id=?', [id]))
  ctx.body = row
}

module.exports = {
  serverOk,
  getAllMovie,
  getMovieById,
  createMovie,
  changeMovieInfo,
  deleteMovie
}