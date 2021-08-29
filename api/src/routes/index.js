const { Router } = require('express');
const genresRoute = require('./genres')
const videogameRoute = require('./videogame')
const videogamesRoute = require('./videogames')
const router = Router();

router.use('/genres', genresRoute);
router.use('/videogame', videogameRoute);
router.use('/videogames', videogamesRoute);


module.exports = router;
