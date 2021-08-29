const { Router } = require('express');
const router = Router();
const genresRoute = require('./genres')
const videogameRoute = require('./videogame')
const videogamesRoute = require('./videogames')

router.use('/genres', genresRoute);
router.use('/videogame', videogameRoute);
router.use('/videogames', videogamesRoute);


module.exports = router;
