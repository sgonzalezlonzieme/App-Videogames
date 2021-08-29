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

        const responseDb = resultDb.map(p => 
            ({
              id: p.id,
              name: p.name,
              image: p.image,
              genres: p.genres.map(p => p.name),
              rating: p.rating,
            }))

        const resultApi = (await axios.get(`https://api.rawg.io/api/games?search=${name}&key=d04c382f770042639c5fecc27e0fd04f`)).data.results
        
        const responseApi = resultApi.map(p =>
            ({
              id: p.id,
              name: p.name,
              image: p.background_image,
              genres: p.genres.map(p => p.name),
              rating: p.rating
            }))
        
        const responseDb_Api = [...responseDb, ...responseApi].slice(0, 15)
          
        if(responseAll.length){  
         return res.send(responseDb_Api);
        }else{
         return res.send('No Videogames Found')
        }
      }
        
       const videogamesDb = await Videogame.findAll({include:Genre})

       const videogamesDbMap = videogamesDb.map(p => ({
           id: p.id,
           name: p.name,
           image: p.image,
           genres: p.genres.map(p => p.name),
           rating: p.rating,
       }))

       const videogamesApi = (await axios.get(`https://api.rawg.io/api/games?key=d04c382f770042639c5fecc27e0fd04f&page_size=200`)).data.results

       const videogamesApiMap = videogamesApi.map(p => ({
        id: p.id,
        name: p.name,
        image: p.background_image,
        genres: p.genres.map(p => p.name),
        rating: p.rating,
    }))
       
       return res.send([...videogamesDbMap, ...videogamesApiMap])

    }catch(error){

        next(error)
    }
    
})

module.exports = router;