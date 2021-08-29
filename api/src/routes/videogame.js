const {Router} = require('express');
const router = Router();
const {postVideogame, getVideogameById} = require('../controllers/videogame')

router.post('/', postVideogame)
router.get('/:id', getVideogameById)

module.exports = router;