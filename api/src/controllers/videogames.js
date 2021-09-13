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

        const responseDb = resultDb.map(p => 
            ({
              id: p.id,
              name: p.name,
              image: p.image,
              genres: p.genres.map(p => p.name),
              rating: p.rating,
            }))

        const resultApi = (await axios.get(`https://api.rawg.io/api/games?search=${name}&key=${API_KEY}`)).data.results
        
        const responseApi = resultApi.map(p =>
            ({
              id: p.id,
              name: p.name,
              image: p.background_image,
              genres: p.genres.map(p => p.name),
              rating: p.rating
            }))
        
        const responseDb_Api = [...responseDb, ...responseApi].slice(0, 15)
          
        if(responseDb_Api.length){  
         return res.send(responseDb_Api);
        }else{
         return res.send(['No videogames found'])
        }
      }
        
       const videogamesDb = await Videogame.findAll({include: Genre})

          

       const videogamesDbMap = videogamesDb.map(p => ({
           id: p.id,
           name: p.name,
           image: p.image,
           genres: p.genres.map(p => p.name), 
           rating: p.rating,
       }))

       const ApiPage1 = (await axios.get(`https://api.rawg.io/api/games?key=${API_KEY}&page_size=40`)).data.results

       const ApiPage2 = (await axios.get(`https://api.rawg.io/api/games?key=${API_KEY}&page=2&page_size=40`)).data.results

       const ApiPAge3 = (await axios.get(`https://api.rawg.io/api/games?key=${API_KEY}&page=3&page_size=40`)).data.results

        let videogamesApiConcat = [...ApiPage1, ...ApiPage2, ...ApiPAge3]
         
        const videogamesApiMap = videogamesApiConcat.map(p => ({
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
}

module.exports = {getAllVideogamesAndQuery};