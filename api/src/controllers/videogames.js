const {Videogame, Genre} = require('../db.js');
const axios = require('axios');
const {Op} = require('sequelize');
const {API_KEY} = process.env;

async function getAllVideogamesAndQuery(req, res, next){
       
    try{
        const {name} = req.query

        if(name){

        const resultDb = await Videogame.findAll({
            where: {
                 name: {
                     [Op.iLike]: `%${name}%` 
                 }
                },
            include: Genre,
         })

        const responseDb = resultDb.map(game => 
            ({
              id: game.id,
              name: game.name,
              image: game.image,
              genres: game.genres.map(p => p.name),
              rating: game.rating,
              platforms: game.platforms,
            }))

        const resultApi = (await axios.get(`https://api.rawg.io/api/games?search=${name}&key=${API_KEY}`)).data.results
        
        const responseApi = resultApi.map(game =>
            ({
              id: game.id,
              name: game.name,
              image: game.background_image,
              genres: game.genres.map(genre => genre.name),
              rating: game.rating,
              platforms: game.platforms.map(platforms => platforms.platform.name),
            }))
        
        const responseDb_Api = [...responseDb, ...responseApi].slice(0, 15)
          
        if(responseDb_Api.length){  
         return res.send(responseDb_Api);
        }else{
         return res.send(['No videogames found'])
        }
      }
        
       const videogamesDb = await Videogame.findAll({include: Genre})

       const videogamesDbMap = videogamesDb.map(game => ({
           id: game.id,
           name: game.name,
           image: game.image,
           genres: game.genres.map(p => p.name), 
           rating: game.rating,
           platforms: [game.platforms],
           price: game.price,
       }))

       const ApiPage1 = (await axios.get(`https://api.rawg.io/api/games?key=${API_KEY}&page_size=40`)).data.results

       const ApiPage2 = (await axios.get(`https://api.rawg.io/api/games?key=${API_KEY}&page=2&page_size=40`)).data.results

       const ApiPAge3 = (await axios.get(`https://api.rawg.io/api/games?key=${API_KEY}&page=3&page_size=40`)).data.results

        let videogamesApiConcat = [...ApiPage1, ...ApiPage2, ...ApiPAge3]
         
        const videogamesApiMap = videogamesApiConcat.map(game => ({
        id: game.id,
        name: game.name,
        image: game.background_image,
        genres: game.genres.map(p => p.name),
        rating: game.rating,
        platforms: game.platforms.map(platforms => platforms.platform.name),
    }))
      

       return res.send([...videogamesDbMap, ...videogamesApiMap])

    }catch(error){
        next(error)
    }
}

module.exports = {getAllVideogamesAndQuery};