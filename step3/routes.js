const {serverOk, getAllMovie, getMovieById, createMovie, changeMovieInfo, deleteMovie} = require('./controller')
const Router = require("@koa/router")
const router = new Router()

router.get('/', serverOk)
router.get('/movie', getAllMovie)
router.get('/movie/:id', getMovieById)
router.post('/movie', createMovie)
router.put('/movie/:id', changeMovieInfo)
router.del('/movie/:id', deleteMovie)

module.exports = router