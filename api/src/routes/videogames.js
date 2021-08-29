const {Router} = require('express');
const {Videogame, Genre} = require('../db.js')
const axios = require('axios');
const {Op} = require('sequelize')
const router = Router();


router.get('/', async (req, res, next) => {
       
        const {name} = req.query

    try{

      if(name){
        const resultDb = await Videogame.findAll({
            where: {
                 name: {
                     [Op.iLike]: `%${name}%`
                 }
                },
            include: Genre,
         })
         
        let {id, name, rating, genres, image} = resultDb;

        const responseDb = {
          id,
          name,
          rating,
          genres: genres.map(p => p.name), 
          image,
        }

         return res.send(responseDb)
      }

    }catch(error){
        next(error)
    }
    
})

module.exports = router;