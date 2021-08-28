const { Router } = require('express');
const genresRoute = require('./genres')
const videogameRoute = require('./videogame')
const router = Router();

router.use('/genres', genresRoute);
router.use('/videogame', videogameRoute);


module.exports = router;
