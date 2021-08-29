const {Router} = require('express');
const {Videogame, Genre} = require('../db.js')
const axios = require('axios');
const router = Router();
const { v4: uuidv4 } = require('uuid');
const validate = require('uuid-validate');

router.post('/', async (req, res, next) => {
      try{
         
        let id = uuidv4();

        const {name, description, released, rating, platforms, genres} = req.body;

        const createdVideogame = await Videogame.create({
            id,
            name,
            description,
            released,
            rating,
            platforms,
        })

        await createdVideogame.addGenres(genres);

        return res.send(createdVideogame)

      }catch(error){
          next(error)
      }

})

router.get('/:id', async (req, res, next) => {
      try{
         const idVideogame = req.params.id

         if(validate(idVideogame)){
            
            const resultDb = await Videogame.findAll({
                where: {
                    id: idVideogame
                },
                include: Genre
            })
          return res.send(resultDb)
            
         }

      }catch(error){
          next(error);
      }
})

module.exports = router;