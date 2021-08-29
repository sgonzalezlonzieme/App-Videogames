const {Router} = require('express');
const router = Router();
const {getAllVideogamesAndQuery} = require('../controllers/videogames')

router.get('/', getAllVideogamesAndQuery)

module.exports = router;